/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

/**
 * CameraProxy
 * 内部状态和计算都是以 {east, north, up} 为坐标系，m 为单位
 * 输入输出时转换为所选的坐标系和单位
 */

import {
	GeographicStates,
	CartesianStates,
	States,
	defaultGeographicStates,
	defaultCartesianStates,
	isGeographicStates,
	// OrthographicCameraParams,
	// PerspectiveCameraParams,
	Limit,
	defaultLimit,
	// EasingFunc,
} from './interface'
import { clamp } from './util'

import { Euler } from './math/Euler'
import { Vector3 } from './math/Vector3'
import { Matrix4 } from './math/Matrix4'
import { Ray } from './math/Ray'
import { Plane } from './math/Plane'

const DEG2RAD = Math.PI / 180

/**
 * 初始化参数
 */
export interface CameraProxyProps {
	/**
	 * 画布尺寸
	 */
	canvasHeight: number
	/**
	 * 画布尺寸
	 */
	canvasWidth: number
	/**
	 * 相机FOV
	 */
	cameraFOV: number
	/**
	 * 初始化状态
	 */
	states?: States
	/**
	 * 分辨率缩放
	 */
	ratio?: number
	/**
	 * 坐标系方向，默认右手系（OpenGL/WebGL）
	 */
	orientation?: string
	/**
	 * 边界限制
	 */
	limit?: Limit
	/**
	 * 相机状态需要更新的回调
	 */
	onUpdate?: (camProxy: CameraProxy) => void
}

const defaultProps = {
	orientation: 'right',
	ratio: 1,
	states: defaultGeographicStates,
	onUpdate: (camProxy) => {},
}

/**
 * @class CameraProxy
 * 核心类，负责管理相机状态，在 3D 机位和地图机位之间做转换，
 * 可以从这个类上读取 3D 机位，同步给你场景中的相机，
 * 内部状态和计算都是以 {east, north, up} 为坐标系，m 为单位。
 */
export class CameraProxy {
	readonly config: CameraProxyProps
	// 地图相机标准状态
	protected geoStates: GeographicStates
	// 笛卡尔系相机标准状态
	protected decStates: CartesianStates

	/**
	 * 画布尺寸
	 */
	public canvasWidth: number
	private _canvasHeight: number // getter setter 影响透视相机zoom
	// 透视相机FOV
	private _fov: number // getter setter 影响透视相机zoom
	// 缩放分辨率
	private _ratio: number // getter setter 影响相机zoom

	/**
	 * 相机状态码。
	 * 可以用来判断viewChange
	 */
	public statesCode: string

	/**
	 * 锁定后将禁用所有的相机状态变化
	 */
	public lock: boolean

	private useRighthand: boolean // 右手系
	// private usePespective: boolean // 透视投影
	protected limit: Limit // 状态边界限制
	// private distance: number // 相机到视觉中心的距离，使用透视相机时该值体现zoom
	// private scale: number // 正交相机的宽高范围缩放比，使用正交相机时该值体现zoom
	// 计算中间变量
	private _rotationEuler: Euler
	private _positionVec3: Vector3
	private _centerVec3: Vector3

	constructor(props: CameraProxyProps) {
		this.config = { ...defaultProps, ...props }
		this.useRighthand = this.config.orientation === 'right'
		// this.usePespective = this.config.cameraType === 'perspective'

		this._fov = this.config.cameraFOV
		this._canvasHeight = this.config.canvasHeight
		this.canvasWidth = this.config.canvasWidth
		this._ratio = this.config.ratio

		this.geoStates = defaultGeographicStates
		this.decStates = defaultCartesianStates

		this.lock = false
		this.limit = defaultLimit
		if (this.config.limit) {
			this.limit = { ...this.limit, ...this.config.limit }
		}
		// this.distance = 0
		// this.scale = 0
		this._rotationEuler = new Euler()
		this._rotationEuler.order = 'YZX'
		this._positionVec3 = new Vector3()
		this._centerVec3 = new Vector3()

		// 初始化状态
		if (isGeographicStates(this.config.states)) {
			this.geoStates = { ...this.geoStates, ...this.config.states }
			this.geoStates.center = this.transInputVec(this.geoStates.center)
			this.update()
		} else {
			this.decStates = { ...this.decStates, ...this.config.states }
			this.decStates.position = this.transInputVec(this.decStates.position)
			// TODO 欧拉角不确定如何在左右手系之间转换，暂时按照和position一样的处理方案（swap z,y）
			this.decStates.rotationEuler = this.transInputVec(this.decStates.rotationEuler)
			this.update(true)
		}
	}

	/**
	 * 画布尺寸
	 */
	public get canvasHeight(): number {
		return this._canvasHeight
	}
	public set canvasHeight(value: number) {
		this._canvasHeight = value
		this.update()
	}
	/**
	 * 透视相机FOV
	 */
	public get fov(): number {
		return this._fov
	}
	public set fov(value: number) {
		this._fov = value
		this.update()
	}

	/**
	 * 分辨率缩放
	 */
	public get ratio(): number {
		return this._ratio
	}
	public set ratio(value: number) {
		this._ratio = value
		this.update()
	}

	/**
	 * 宽高比
	 */
	public get aspect(): number {
		return this.canvasWidth / this.canvasHeight
	}

	private getFrustumCorners(
		near = true,
		far = true
	): { near: Vector3[] | undefined; far: Vector3[] | undefined } {
		const n = 0.001
		const top = n * Math.tan(DEG2RAD * 0.5 * this.fov)
		const height = 2 * top
		const width = this.aspect * height
		const left = -0.5 * width

		const _v = new Vector3()
		const _e = new Euler()

		const projectionMatrix = new Matrix4().makePerspective(
			left,
			left + width,
			top,
			top - height,
			n,
			99999999
		)
		const projectionMatrixInverse = projectionMatrix.clone().invert()

		const res = {
			near: undefined,
			far: undefined,
		}

		// Corners in view space (-1~1, -1~1), needs to apply inverse(mvp) transformation to get world space coords
		const states = this.getCartesianStates()
		if (near) {
			const nearCorners = (res.near = [
				new Vector3(-1, -1, -1),
				new Vector3(-1, 1, -1),
				new Vector3(1, -1, -1),
				new Vector3(1, 1, -1),
			])
			nearCorners.forEach((v) =>
				v
					.applyMatrix4(projectionMatrixInverse)
					.applyEuler(_e.fromArray(states.rotationEuler))
					.add(_v.fromArray(states.position))
			)
		}

		if (far) {
			const farCorners = (res.far = [
				new Vector3(-1, -1, 1),
				new Vector3(-1, 1, 1),
				new Vector3(1, -1, 1),
				new Vector3(1, 1, 1),
			])
			farCorners.forEach((v) =>
				v
					.applyMatrix4(projectionMatrixInverse)
					.applyEuler(_e.fromArray(states.rotationEuler))
					.add(_v.fromArray(states.position))
			)
		}

		return res
	}

	public getGeoViewCoords(): Vector3[] {
		const frustumCorners = this.getFrustumCorners(true, false)
		const states = this.getCartesianStates()
		const _v = new Vector3()
		const camPos = _v.clone().fromArray(states.position)
		const rays = frustumCorners.near.map(
			(corner) => new Ray(camPos, _v.clone().subVectors(corner, camPos).normalize())
		)
		const xyPlane = new Plane(new Vector3(0, 0, 1), Number.EPSILON)
		return rays.map((ray) => {
			const target = new Vector3()
			const denominator = xyPlane.normal.dot(ray.direction)
			if (denominator > 0) {
				return target.set(Infinity, Infinity, 0).multiply(ray.direction)
			}
			if (ray.intersectPlane(xyPlane, target)) {
				return target
			} else {
				return undefined
			}
		})
	}

	// 状态整理与多种语义之间的转换
	// set this.geoStates/decStates before call this method
	// this method will unify both those states
	protected update(selfBase = false): void {
		// debugger
		if (this.lock) return // 缓动锁定

		// 边界限制
		// if (!force) {
		this.geoStates.zoom = clamp(this.geoStates.zoom, this.limit.zoom[0], this.limit.zoom[1])
		this.geoStates.pitch = clamp(this.geoStates.pitch, this.limit.pitch[0], this.limit.pitch[1])

		// @TODO 自转将无法限制center范围
		this.geoStates.center[0] = clamp(
			this.geoStates.center[0],
			this.limit.center[0][0],
			this.limit.center[1][0]
		)
		this.geoStates.center[1] = clamp(
			this.geoStates.center[1],
			this.limit.center[0][1],
			this.limit.center[1][1]
		)
		this.geoStates.center[2] = clamp(
			this.geoStates.center[2],
			this.limit.center[0][2],
			this.limit.center[1][2]
		)

		// }
		// 这个不限制的话会导致计算过程抛错
		// this.geoStates.zoom = clamp(this.geoStates.zoom, ZOOM_LIMIT[0], ZOOM_LIMIT[1])

		// unify between 2 states systems
		if (selfBase) {
			// 根据 decStates[position/rotationEuler/distance]
			// 更新 geoStates[center/zoom/pitch/rotation]

			// => pitch/rotation

			// xyz : this.decStates.rotationEuler

			// yzx : rotation/pitch / this._rotationEuler

			this._rotationEuler.order = 'XYZ'
			// xyz
			this._rotationEuler.fromArray(this.decStates.rotationEuler)
			// this._rotationEuler.x = this.decStates.rotationEuler[0]
			// this._rotationEuler.y = this.decStates.rotationEuler[1]
			// this._rotationEuler.z = this.decStates.rotationEuler[2]
			this._rotationEuler.reorder('YZX')

			// yzx
			this.geoStates.rotation = this._rotationEuler.z
			this.geoStates.pitch = this._rotationEuler.x

			// => center

			this._positionVec3.fromArray(this.decStates.position)

			const cameraDirection = new Vector3(0, 0, -1).applyEuler(this._rotationEuler)

			// 如果指定了焦距，则按照视线和焦距去寻找焦点（center）
			if (this.decStates.distance) {
				// this.distance = this.decStates.distance
				this._centerVec3.addVectors(
					this._positionVec3,
					cameraDirection.clone().multiplyScalar(this.decStates.distance)
				)
			} else {
				// 如果没有指定焦点，则计算视线与地面的交点，作为焦点（center）

				// 相似三角形比例
				//  - pitch是否>90度都不影响
				//  - pitch==90度时分母为0
				const k = -this._positionVec3.z / cameraDirection.z || 0

				// 视线到地平面的交点
				this._centerVec3.x = this._positionVec3.x + k * cameraDirection.x
				this._centerVec3.y = this._positionVec3.y + k * cameraDirection.y
				this._centerVec3.z = 0

				// 如果以该交点为焦点，则焦距为
				this.decStates.distance = this._positionVec3.distanceTo(this._centerVec3) || 0
			}

			this._centerVec3.toArray(this.geoStates.center)
			// this.geoStates.center[0] = this._centerVec3.x
			// this.geoStates.center[1] = this._centerVec3.y
			// this.geoStates.center[2] = this._centerVec3.z

			// => zoom

			// 透视相机的zoom
			this.geoStates.zoom = this._getZoom(
				this.decStates.distance,
				this.canvasHeight,
				this.fov,
				this.ratio
			)
			// 如果是正交相机，则不能从 decStates 控制 zoom，正交相机的zoom应该直接使用 geoStates.zoom
		} else {
			// 根据 geoStates[center/zoom/pitch/rotation]
			// 更新 decStates[position/rotationEuler/distance]

			// xyz : this.decStates.rotationEuler

			// yzx : rotation / pitch / this._rotationEuler

			// => rotationEuler

			this._rotationEuler.y = 0
			this._rotationEuler.z = this.geoStates.rotation
			this._rotationEuler.x = this.geoStates.pitch

			this._rotationEuler.clone().reorder('XYZ').toArray(this.decStates.rotationEuler)
			this.decStates.rotationEuler.pop()

			// => distance
			this.decStates.distance = this._getDistance(
				this.geoStates.zoom,
				this.canvasHeight,
				this.fov,
				this.ratio
			)

			// if (this.usePespective) {
			// } else {
			// 	// 如果是正交相机，distance是无关紧要的，
			// 	this.decStates.distance = 1000
			// }

			// => position
			this._centerVec3.fromArray(this.geoStates.center)

			const cameraDirection = new Vector3(0, 0, -1).applyEuler(this._rotationEuler)

			this._positionVec3.subVectors(
				this._centerVec3,
				cameraDirection.multiplyScalar(this.decStates.distance)
			)
			this.decStates.position = this._positionVec3.toArray()
		}

		//

		const oldCode = this.statesCode
		this.statesCode = this.getStatesCode()

		if (oldCode !== this.statesCode) {
			this.config.onUpdate(this)
		}
	}

	// 状态输出

	/**
	 * 视觉焦点坐标
	 */
	public get center(): number[] {
		return this.transOutputVec(this.geoStates.center)
	}
	/**
	 * 缩放级别
	 */
	public get zoom() {
		return this.geoStates.zoom
	}
	/**
	 * 倾斜角
	 */
	public get pitch() {
		return this.geoStates.pitch
	}
	/**
	 * 旋转角
	 */
	public get rotation() {
		return this.geoStates.rotation
	}
	/**
	 * 相机位置
	 */
	public get position(): number[] {
		return this.transOutputVec(this.decStates.position)
	}
	/**
	 * 相机欧拉角
	 * TODO 左手系支持
	 */
	public get rotationEuler(): number[] {
		// TODO 这个是有问题的
		return this.transOutputEuler(this.decStates.rotationEuler)
	}
	/**
	 * 相机到视觉焦点的距离（焦距）
	 */
	public get distance() {
		return this.decStates.distance
	}

	/**
	 * 状态变化
	 * @param selfBase 是否以笛卡尔状态为准，取同步地图状态
	 * @param states 要修改的状态
	 * @param key
	 * @param value
	 */
	protected _setState(selfBase: boolean, states: States, key: string, value: any): () => void {
		states[key] = value
		this.update(selfBase)
		return EMPTY_FUN
	}

	// 状态控制元语
	public setCenter(v: number[]) {
		v = this.transInputVec(v)
		return this._setState(false, this.geoStates, 'center', v)
	}
	public setZoom(v: number) {
		return this._setState(false, this.geoStates, 'zoom', v)
	}
	public setPitch(v: number) {
		return this._setState(false, this.geoStates, 'pitch', v)
	}
	public setRotation(v: number) {
		return this._setState(false, this.geoStates, 'rotation', v)
	}

	/**
	 * 屏幕空间控制信号
	 * @hidden
	 * @param stepRight 向右
	 * @param stepUp 向上
	 * @param horizontal 是否只在水平面方向运动
	 */
	public pan(stepRight, stepUp, horizontal = true) {
		if (horizontal) {
			// 屏幕移动坐标在三维空间中的向量（假设起点为 000，终点为设为<x1, y1, z1>）
			const panDir = new Vector3(stepRight, stepUp, 0)
			panDir.applyEuler(this._rotationEuler)

			// 视线到终点<x1, y1, z1>的方向（不考虑透视，设为<x2, y2, z2>）
			const camToTargetDir = new Vector3(0, 0, -1).applyEuler(this._rotationEuler)
			// const upDirection = new Vector3(0, 1, 0).applyEuler(this._rotationEuler)

			// let horDir = new Vector2(upDirection.x, upDirection.y)
			// let horDir = upDirection.projectOnPlane(new Vector3(0, 0, 1))

			// 求 线和平面 交点 <x3, y3, z3>

			// <x1, y1, z1> + k * <x2, y2, z2> = <x3, y3, 0>

			const k = -panDir.z / camToTargetDir.z
			const x3 = panDir.x + k * camToTargetDir.x
			const y3 = panDir.y + k * camToTargetDir.y

			this.geoStates.center[0] += x3
			this.geoStates.center[1] += y3

			this.update()
		} else {
			const dir = new Vector3(stepRight, stepUp, 0).applyEuler(this._rotationEuler)
			this.decStates.position[0] += dir.x
			this.decStates.position[1] += dir.y
			this.decStates.position[2] += dir.z
			this.update(true)
		}
	}

	// 直接状态操作
	/**
	 * 读取 地图状态
	 */
	public getGeographicStates(): GeographicStates {
		const out = { ...this.geoStates }
		out.center = this.transOutputVec(out.center)
		return out
	}
	/**
	 * 设置 地图状态
	 */
	public setGeographicStates(states: GeographicStates) {
		this.geoStates = states
		this.geoStates.center = this.transInputVec(this.geoStates.center)
		this.update()
	}
	/**
	 * 读取 相机3D空间状态
	 */
	public getCartesianStates() {
		const out = { ...this.decStates }
		out.position = this.transOutputVec(out.position)
		out.rotationEuler = this.transOutputVec(out.rotationEuler)
		return out
	}
	/**
	 * 设置 相机3D空间状态
	 */
	public setCartesianStates(states: CartesianStates) {
		this.decStates = states
		this.decStates.position = this.transInputVec(this.decStates.position)
		this.decStates.rotationEuler = this.transInputVec(this.decStates.rotationEuler)
		this.update(true)
	}
	/**
	 * 两种状态一起导出
	 */
	public getStates() {
		return {
			...this.getGeographicStates(),
			...this.getCartesianStates(),
		}
	}
	/**
	 * 设置状态
	 */
	public setStates(states: States) {
		if (isGeographicStates(states)) {
			this.setGeographicStates(states)
		} else {
			this.setCartesianStates(states)
		}
	}
	/**
	 * 获取状态码
	 */
	public getStatesCode(): string {
		const CODE_VERSION = 0
		const statesTuple = [
			CODE_VERSION, // 0
			(this.center[0] || 0).toFixed(3), // 1
			(this.center[1] || 0).toFixed(3), // 2
			(this.center[2] || 0).toFixed(3), // 3
			(this.pitch || 0).toFixed(3), // 4
			(this.rotation || 0).toFixed(3), // 5
			(this.zoom || 0).toFixed(3), // 6
		]

		return statesTuple.join('|')
	}
	/**
	 * 从状态码更新状态
	 */
	public setStatesCode(code: string) {
		const states = this.codeToStates(code)
		this.setGeographicStates(states)
	}

	/**
	 * 状态吗转换为状态（GeographicStates）
	 */
	public codeToStates(code: string): GeographicStates {
		const statesTuple = code.split('|') as any[]
		if (statesTuple[0] === '0') {
			const states: GeographicStates = {
				center: [statesTuple[1] - 0, statesTuple[2] - 0, statesTuple[3] - 0],
				pitch: statesTuple[4] - 0,
				rotation: statesTuple[5] - 0,
				zoom: statesTuple[6] - 0,
			}
			return states
		} else {
			throw new Error('statesCode 版本不支持')
		}
	}

	/**
	 * dispose
	 */
	public dispose() {}

	// 坐标系转换
	protected transInputVec(_coord: number[]) {
		// clone
		const coord = [..._coord]
		// tansform
		if (this.useRighthand) {
			// 2dim => 3dim
			coord[2] = coord[2] || 0
		} else {
			// swap 2nd and 3rd
			const z = coord[2] || 0
			coord[2] = coord[1]
			coord[1] = z
		}
		return coord
	}
	protected transOutputVec(coord: number[]) {
		return this.transInputVec(coord)
	}

	protected transInputEuler(_euler: number[]) {
		return _euler
	}
	protected transOutputEuler(_euler: number[]) {
		return this.transInputEuler(_euler)
	}

	// 根据distance更新zoom
	protected _getZoom(distance, canvasHeight, fov, ratio) {
		const scale = (K * canvasHeight) / Math.tan(fov / _RAD2ANGEL / 2) / distance
		return Math.log2(scale / ratio)
	}

	// 根据zoom更新distance
	protected _getDistance(zoom, canvasHeight, fov, ratio) {
		const scale = Math.pow(2, zoom) * ratio
		let h = (K * canvasHeight) / scale / Math.tan(fov / _RAD2ANGEL / 2)
		// scale == 1时，全幅地图是256*256
		return h
	}
}

//

// 空函数
const EMPTY_FUN = () => {}
const _RAD2ANGEL = 180 / Math.PI

// 用于和Google以及高德同步zoom级别的系数
const K = 100000 * 0.78125

// polyfill
Math.log2 = Math.log2 || ((x) => Math.log(x) * Math.LOG2E)
