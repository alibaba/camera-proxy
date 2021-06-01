/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

import { CameraProxy, CameraProxyProps } from './CameraProxy'
import { States, EasingFunc, GeographicStates, CartesianStates } from './interface'

import { lerp, easeSin01, clamp } from './util'

export interface CameraAnimatorProps extends CameraProxyProps {
	timeline: Timeline
	inert?: boolean | number
}

const defaultProps = {
	inert: false,
}

export class AnimatedCameraProxy extends CameraProxy {
	readonly config: CameraAnimatorProps
	private inertOutput: GeographicStates

	private onUpdate: Function

	public timeline: Timeline // 缓动需要

	private inertTrack: Track // 惰性收敛动画

	/**
	 * 缓动锁定，避免同时出发多个缓动动画造成冲突
	 */
	public easingLock: boolean
	constructor(props: CameraAnimatorProps) {
		props = { ...defaultProps, ...props }
		if (!props.inert) {
			super(props)
			this.timeline = props.timeline
		} else {
			// 避免super.update里面直接调用onUpdate
			const onUpdate = props.onUpdate
			delete props.onUpdate

			super(props)
			this.timeline = props.timeline
			this.onUpdate = onUpdate

			this.inertOutput = {
				center: super.center,
				zoom: super.zoom,
				pitch: super.pitch,
				rotation: super.rotation,
				// position: super.position,
				// rotationEuler: super.rotationEuler,
				// distance: super.distance,
			}

			this.onUpdate(this)

			// TODO: Its kind of messy here.
			// this.inertGeoStates = JSON.parse(JSON.stringify(this.geoStates))
			// JS中可以直接这样做反射
			this.update = (selfBase) => {
				if (selfBase) {
					super.update(true)
				} else {
					// 边界限制
					// 这里需要重做一边，因为 super.update() 中处理的是 inertOutput
					this.geoStates.zoom = clamp(this.geoStates.zoom, this.limit.zoom[0], this.limit.zoom[1])
					this.geoStates.pitch = clamp(
						this.geoStates.pitch,
						this.limit.pitch[0],
						this.limit.pitch[1]
					)

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

					const pro = this.geoStates
					this.geoStates = this.inertOutput
					super.update()
					this.geoStates = pro
				}
			}

			const speed = props.inert === true ? 0.1 : (this.config.inert as number)

			this.inertTrack = this.timeline.addTrack({
				id: 'inert convergence', // 惰性状态收敛
				duration: Infinity,
				onUpdate: (t, p) => {
					this.inertOutput.center = lerp(this.inertOutput.center, this.geoStates.center, speed)
					this.inertOutput.pitch = lerp(this.inertOutput.pitch, this.geoStates.pitch, speed)
					this.inertOutput.rotation = lerp(
						this.inertOutput.rotation,
						this.geoStates.rotation,
						speed
					)
					this.inertOutput.zoom = lerp(this.inertOutput.zoom, this.geoStates.zoom, speed)

					const oldCode = this.statesCode

					this.update()

					if (oldCode !== this.statesCode) {
						this.onUpdate(this)
					}
				},
			})
		}
	}

	/**
	 * 状态变化
	 * @param selfBase 是否以笛卡尔状态为准，取同步地图状态
	 * @param states 要修改的状态
	 * @param key
	 * @param value
	 * @param [duration=1000] 过程时长，如果为0则立刻执行立刻返回，>0 则插值
	 * @param [easeF=easeSin01] 缓动函数
	 * @return stop {function} 立刻停止缓动动画
	 */
	protected _setStateEase(
		selfBase: boolean,
		states: States,
		key: string,
		value: any,
		duration = 1000,
		easeF = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	): () => void {
		if (this.easingLock) {
			console.warn('另一个动画正在控制相机，请主动关闭，以免控制权争夺')
		}

		// 差值缓动
		const oldValue = states[key]

		const track = this.timeline.addTrack({
			id: '相机缓动',
			startTime: this.timeline.currentTime,
			duration,
			onStart: () => {
				this.easingLock = true
			},
			onUpdate: (t, p) => {
				states[key] = lerp(oldValue, value, p)
				this.update(selfBase)
			},
			onEnd: () => {
				this.easingLock = false
				if (onEnd) {
					onEnd()
				}
			},
			easing: easeF || easeSin01,
		})

		// 让用户可以在外部控制立刻停掉这个动画
		return () => {
			track.alive = false // 立刻停掉动画
			track.onEnd() // 手动收尾
		}
	}

	/**
	 * 状态控制元语
	 * @param v 目标状态
	 * @param [duration=1000] 缓动时间
	 * @param [easeF=easeSin01] 缓动函数 0～1
	 */
	public setCenterEase(
		v: number[],
		duration = 1000,
		easeF: EasingFunc = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	) {
		v = this.transInputVec(v)
		return this._setStateEase(false, this.geoStates, 'center', v, duration, easeF, onStart, onEnd)
	}
	public setZoomEase(
		v: number,
		duration = 1000,
		easeF: EasingFunc = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	) {
		return this._setStateEase(false, this.geoStates, 'zoom', v, duration, easeF, onStart, onEnd)
	}
	public setPitchEase(
		v: number,
		duration = 1000,
		easeF: EasingFunc = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	) {
		return this._setStateEase(false, this.geoStates, 'pitch', v, duration, easeF, onStart, onEnd)
	}
	public setRotationEase(
		v: number,
		duration = 1000,
		easeF: EasingFunc = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	) {
		return this._setStateEase(false, this.geoStates, 'rotation', v, duration, easeF, onStart, onEnd)
	}

	public setGeographicStatesEase(
		states: GeographicStates,
		duration = 1000,
		easeF = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	) {
		const prevStates = this.getGeographicStates()
		const prevDistance = this.decStates.distance
		const targetDistance = this._getDistance(states.zoom, this.canvasHeight, this.fov, this.ratio)

		const track = this.timeline.addTrack({
			id: '相机缓动',
			startTime: this.timeline.currentTime,
			duration,
			onStart: () => {
				this.easingLock = true
				if (onStart) {
					onStart()
				}
			},
			onUpdate: (t, p) => {
				// zoom 按照屏幕像素尺寸运动
				const middleZoom = lerp(prevStates.zoom, states.zoom, p)
				// 换算回距离
				const middleDistance = this._getDistance(
					middleZoom,
					this.canvasHeight,
					this.fov,
					this.ratio
				)
				// 换算成percent
				const distancePercent = (middleDistance - prevDistance) / (targetDistance - prevDistance)
				const p2 =
					prevStates.zoom === states.zoom || targetDistance === prevDistance ? p : distancePercent

				const middleStates: GeographicStates = {
					center: lerp(prevStates.center, states.center, p2),
					pitch: lerp(prevStates.pitch, states.pitch, p),
					rotation: lerp(prevStates.rotation, states.rotation, p),
					zoom: lerp(prevStates.zoom, states.zoom, p),
				}

				this.setGeographicStates(middleStates)
			},
			onEnd: () => {
				this.easingLock = false
				if (onEnd) {
					onEnd()
				}
			},
			easing: easeF || easeSin01,
		})

		// 让用户可以在外部控制立刻停掉这个动画
		return () => {
			track.alive = false // 立刻停掉动画
			track.onEnd() // 手动收尾
		}
	}

	/**
	 * 缓动切换相机机位
	 * @param statesCode 机位状态
	 * @param duration 缓动时长
	 * @param easeF 缓动函数
	 * @param onStart
	 * @param onEnd
	 * @return stop {function} 立刻停止缓动动画
	 */
	public setStatesCodeEase(
		statesCode: string,
		duration = 1000,
		easeF = easeSin01,
		onStart: () => void = null,
		onEnd: () => void = null
	): () => void {
		return this.setGeographicStatesEase(
			this.codeToStates(statesCode),
			duration,
			easeF,
			onStart,
			onEnd
		)
	}

	/**
	 * 清理
	 */
	public dispose() {
		this.update = (selfBase) => {}
		this.inertTrack && (this.inertTrack.alive = false)
		super.dispose()
	}
}

// polyfill

interface Track {
	alive: boolean
	onStart: (t?) => void
	onEnd: (t?) => void
	onUpdate: (t?, p?) => void
}
interface Timeline {
	currentTime: number
	addTrack: (track: any) => Track
	destroy: () => void
}
