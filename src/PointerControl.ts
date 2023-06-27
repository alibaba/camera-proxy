/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

import { CameraProxy } from './CameraProxy'
import { AnimatedCameraProxy } from './AnimatedCameraProxy'

export interface PointerControlProps {
	/**
	 * 被控制的 CameraProxy
	 */
	camera: CameraProxy
	/**
	 * 监控事件的HTML元素
	 */
	element: HTMLElement
	/**
	 * 捕获鼠标滚动作为缩放控制，如果设为false则需要按住控制键才能滚动缩放，
	 * [=true]
	 */
	scrollCapture?: boolean
	/**
	 * 只在水平（地平面）方向上运动，如果设为false，则在视觉平面上运动
	 * [=true]
	 */
	horizontal?: boolean
	/**
	 * 控制范围限制
	 * [={Infinity}]
	 */
	// limit?: Limit

	/**
	 * 画布缩放比例
	 */
	scale?: number
}

const defaultProps = {
	scrollCapture: true,
	horizontal: true,
	scale: 1.0,
}

export class PointerControl {
	private camera: CameraProxy
	private elm: HTMLElement

	/**
	 * 是否锁定center（禁止用户控制）
	 */
	public centerLock = false
	/**
	 * 是否锁定pitch（禁止用户控制）
	 */
	public pitchLock = false
	/**
	 * 是否锁定rotation（禁止用户控制）
	 */
	public rotationLock = false
	/**
	 * 是否锁定zoom（禁止用户控制）
	 */
	public zoomLock = false

	/**
	 * 画布缩放比例
	 */
	public scale = 1.0

	private mouse: {
		x: number
		y: number
		down: boolean
		prevX: number
		prevY: number
	}
	private key: {
		16: boolean
		17: boolean
		18: boolean
		91: boolean
		224: boolean
		rightButton: boolean
		middleButton: boolean
	}

	private _onmousemove: (event) => void
	private _onmousedown: (event) => void
	private _onmouseup: (event) => void
	private _onmouseleave: (event) => void
	private _onwheel: (event) => void
	private _onblur: (event) => void
	private _onkeydown: (event) => void
	private _onkeyup: (event) => void
	private _oncontextmenu: (event) => void

	constructor(props: PointerControlProps) {
		props = { ...defaultProps, ...props }
		this.camera = props.camera
		this.elm = props.element
		// this.canvas = props.canvas
		const camera = this.camera
		const elm = this.elm

		this.mouse = {
			x: 0,
			y: 0,
			down: false,
			prevX: 0,
			prevY: 0,
		}

		this.key = {
			16: false,
			17: false,
			18: false,
			91: false,
			224: false,
			rightButton: false,
			middleButton: false,
		}

		this._onkeydown = (e) => {
			if (isCtrlKey(e.keyCode)) {
				this.key[e.keyCode] = true
			}
		}
		document.addEventListener('keydown', this._onkeydown, false)

		this._onkeyup = (e) => {
			if (isCtrlKey(e.keyCode)) {
				this.key[e.keyCode] = false
			}
		}
		document.addEventListener('keyup', this._onkeyup, false)

		// 避免切除后计数混乱
		this._onblur = (e) => {
			this.key = {
				16: false,
				17: false,
				18: false,
				91: false,
				224: false,
				rightButton: false,
				middleButton: false,
			}
		}
		window.addEventListener('blur', this._onblur, false)

		this._onmousemove = (event) => {
			if ((this.camera as AnimatedCameraProxy).easingLock) return

			this.mouse.prevX = this.mouse.x
			this.mouse.prevY = this.mouse.y
			this.mouse.x = event.clientX
			this.mouse.y = event.clientY

			if (this.mouse.down) {
				const dx = this.mouse.x - this.mouse.prevX
				const dy = this.mouse.y - this.mouse.prevY
				if (this.inControl) {
					if (!this.pitchLock) this.camera.setPitch(this.camera.pitch - dy * 0.01)
					if (!this.rotationLock) this.camera.setRotation(this.camera.rotation - dx * 0.01)
				} else {
					const scale = (Math.pow(2, this.camera.zoom) / 156000) * this.scale
					if (this.key.middleButton) {
						if (!this.centerLock) this.camera.pan(-dx / scale, dy / scale, false)
					} else {
						if (!this.centerLock) this.camera.pan(-dx / scale, dy / scale, props.horizontal)
					}
				}
			}
		}
		elm.addEventListener('mousemove', this._onmousemove, false)

		this._onmousedown = (event: MouseEvent) => {
			this.mouse.down = true
			if (event.button === 2) {
				this.key.rightButton = true
			}
			if (event.button === 1) {
				this.key.middleButton = true
			}
		}
		elm.addEventListener('mousedown', this._onmousedown, false)

		this._onmouseup = (event: MouseEvent) => {
			this.mouse.down = false
			this.key.rightButton = false
			this.key.middleButton = false
		}
		elm.addEventListener('mouseup', this._onmouseup, false)

		// 避免被上层marker影响触发 mouseout
		this._onmouseleave = (event) => {
			this.mouse.down = false
			this.key = {
				16: false,
				17: false,
				18: false,
				91: false,
				224: false,
				rightButton: false,
				middleButton: false,
			}
		}
		elm.addEventListener('mouseleave', this._onmouseleave, false)

		this._onwheel = (e) => {
			if (!props.scrollCapture && !this.inControl) return

			if (!this.zoomLock) camera.setZoom(this.camera.zoom + -e.deltaY / 500)

			e.preventDefault()
			e.stopPropagation()
		}

		elm.addEventListener('wheel', this._onwheel, false)

		// 避免与右键动作冲突
		// @note 不同平台的触发时机不同，windows 在拖动后触发
		this._oncontextmenu = (e) => {
			e.preventDefault()
			e.stopPropagation()
			return false
		}
		elm.addEventListener('contextmenu', this._oncontextmenu, false)
	}

	// 是否按住控制键
	get inControl() {
		return (
			this.key[16] ||
			this.key[17] ||
			this.key[18] ||
			this.key[91] ||
			this.key[224] ||
			this.key.rightButton
		)
	}

	// 这里监听的事件会导致该实例无法GC，导致Polaris无法GC
	dispose() {
		document.removeEventListener('keydown', this._onkeydown)
		document.removeEventListener('keyup', this._onkeyup)
		window.removeEventListener('blur', this._onblur)

		this.elm.removeEventListener('wheel', this._onwheel)
		this.elm.removeEventListener('contextmenu', this._oncontextmenu)

		this.elm.removeEventListener('mousemove', this._onmousemove)
		this.elm.removeEventListener('mousedown', this._onmousedown)
		this.elm.removeEventListener('mouseup', this._onmouseup)
		this.elm.removeEventListener('mouseleave', this._onmouseleave)
	}
}

// function dataURItoBlob(dataURI) {
// 	var mime = dataURI
// 		.split(',')[0]
// 		.split(':')[1]
// 		.split(';')[0]
// 	var binary = atob(dataURI.split(',')[1])
// 	var array = []
// 	for (var i = 0; i < binary.length; i++) {
// 		array.push(binary.charCodeAt(i))
// 	}
// 	return new Blob([new Uint8Array(array)], { type: mime })
// }

// TODO deprecated https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
function isCtrlKey(keyCode) {
	return keyCode === 16 || keyCode === 17 || keyCode === 18 || keyCode === 91 || keyCode === 224
}
