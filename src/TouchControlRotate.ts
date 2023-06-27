/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

import Hammer from 'hammerjs'

import { CameraProxy } from './CameraProxy'

export interface TouchControlRotateProps {
	/**
	 * 被控制的 CameraProxy
	 */
	camera: CameraProxy
	/**
	 * 监控事件的HTML元素
	 */
	element: HTMLElement
	/**
	 * 只在水平（地平面）方向上运动，如果设为false，则在视觉平面上运动
	 * [=true]
	 */
	horizontal?: boolean

	/**
	 * 画布缩放比例
	 */
	scale?: number

	revert?: boolean
}

const defaultProps = {
	horizontal: true,
	scale: 1.0,
}

export class TouchControlRotate {
	private camera: CameraProxy
	private elm: HTMLElement
	private hammer: HammerManager

	/**
	 * 画布缩放比例
	 */
	public scale = 1.0

	constructor(props: TouchControlRotateProps) {
		props = { ...defaultProps, ...props }
		this.camera = props.camera
		this.elm = props.element

		document.body.addEventListener(
			'touchmove',
			function (e) {
				e.preventDefault() //阻止默认的处理方式(阻止下拉滑动的效果)
			},
			{ passive: false }
		) //passive 参数不能省略，用来兼容ios和android

		this.hammer = new Hammer(this.elm, {})

		const rotate = new Hammer.Rotate()
		const pan = new Hammer.Pan()
		const pinch = new Hammer.Pinch()

		this.hammer.add([pan, pinch, rotate])

		pan.set({
			pointers: 1,
		})
		let deltaX = 0
		let deltaY = 0
		let panning = false // 尝试 fix hammer的bug
		this.hammer.on('panstart', (e) => {
			// console.log('panstart', e)
			deltaX = e.deltaX
			deltaY = e.deltaY
			panning = true
		})
		this.hammer.on('panend', (e) => {
			// console.log('panend', e)
			panning = false
		})
		this.hammer.on('pan', (e) => {
			if (panning) {
				const dx = e.deltaX - deltaX
				const dy = e.deltaY - deltaY
				deltaX = e.deltaX
				deltaY = e.deltaY
				const scale = (Math.pow(2, this.camera.zoom) / 156000) * this.scale
				// this.camera.goRight(-dx / scale, props.horizontal)
				// this.camera.goUp(dy / scale, props.horizontal)
				this.camera.pan(-dx / scale, dy / scale, props.horizontal)
			}
		})

		// create a pinch and rotate recognizer
		// these require 2 pointers

		// pan.recognizeWith([pinch, rotate])
		// pan.recognizeWith(pinch)
		// pan.requireFailure(rotate)

		// we want to detect both the same time
		pinch.recognizeWith(rotate)
		// pinch.recognizeWith(pan)

		let rotation = 0
		let pitchDeltaY = 0
		let scale = 1

		this.hammer.on('pinchstart', (e) => {
			rotation = e.rotation
			pitchDeltaY = e.deltaY
			scale = e.scale

			//

			// deltaX = e.deltaX
			// deltaY = e.deltaY
		})

		this.hammer.on('pinch', (e) => {
			// rotation

			// const dRotateDeltaX = (e.deltaX - rotateDeltaX) * -0.01
			// rotateDeltaX = e.deltaX
			// this.camera.setRotation(this.camera.rotation + dRotateDeltaX)

			// 这种控制方案交互不方便

			// const drotation = (e.rotation - rotation) * 0.01

			// // fix hammer bug
			// // 如果指头不保持贴在屏幕上，这里会出现角度变化
			// if (Math.abs(drotation) < 1) {
			// 	rotation = e.rotation
			// 	this.camera.setRotation(this.camera.rotation + drotation)
			// } else {
			// 	console.log('忽略rotate', drotation)
			// }

			// pitch
			const dPitchDeltaY = (e.deltaY - pitchDeltaY) * -0.01
			pitchDeltaY = e.deltaY
			this.camera.setPitch(this.camera.pitch + dPitchDeltaY)

			// zoom
			const dZoom = e.scale - scale
			scale = e.scale
			this.camera.setZoom(this.camera.zoom + dZoom)

			// if (panning) {
			// 	const dx = e.deltaX - deltaX
			// 	const dy = e.deltaY - deltaY
			// 	deltaX = e.deltaX
			// 	deltaY = e.deltaY
			// 	const scale = Math.pow(2, this.camera.zoom) / 156000
			// 	this.camera.goRight(-dx / scale)
			// 	this.camera.goUp(dy / scale)
			// }

			//

			// {
			// 	const dx = e.deltaX - deltaX
			// 	const dy = e.deltaY - deltaY
			// 	deltaX = e.deltaX
			// 	deltaY = e.deltaY
			// 	const scale = (Math.pow(2, this.camera.zoom) / 156000) * this.scale
			// 	// this.camera.goRight(-dx / scale, props.horizontal)
			// 	// this.camera.goUp(dy / scale, props.horizontal)
			// 	this.camera.pan(-dx / scale, dy / scale, props.horizontal)
			// }
		})
		this.hammer.on('rotate', (e) => {
			// 这种控制方案交互不方便
			const drotation = (e.rotation - rotation) * 0.02 * (props.revert ? -1 : 1)

			// fix hammer bug
			// 如果指头不保持贴在屏幕上，这里会出现角度变化
			if (Math.abs(drotation) < 1) {
				rotation = e.rotation
				this.camera.setRotation(this.camera.rotation + drotation)
			} else {
				console.log('忽略rotate', drotation)
			}
		})
	}

	dispose() {
		this.hammer.destroy()
	}
}
