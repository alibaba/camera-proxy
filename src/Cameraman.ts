/**
 * Camera Operator.
 * Advanced Cinematic Camera Movements.
 */

import { CameraProxy } from './CameraProxy'
import { AnimatedCameraProxy } from './AnimatedCameraProxy'

// import { Euler } from 'three/src/math/Euler'
// import { Vector3 } from 'three/src/math/Vector3'

export interface CameramanProps {
	/**
	 * 被控制的 CameraProxy
	 */
	camera: AnimatedCameraProxy
}

const defaultProps = {}

export class Cameraman {
	private camera: AnimatedCameraProxy
	public locked: boolean
	private trackSwing

	constructor(props: CameramanProps) {
		props = { ...defaultProps, ...props }
		this.camera = props.camera

		this.locked = false
	}

	startSwing(theta: number, duration: number, anchor?: number[]) {
		if (isNaN(theta) || theta === null) throw new Error('theta must be a valid number')
		if (isNaN(duration) || duration === null) throw new Error('duration must be a valid number')

		if (this.trackSwing) this.stopSwing()
		if (this.camera.easingLock) console.warn('另一个动画正在控制相机，请主动关闭，以免控制权争夺')

		const currStates = this.camera.getGeographicStates()

		let deriction = 1
		const timeline = this.camera.timeline
		this.trackSwing = timeline.addTrack({
			startTime: timeline.currentTime,
			duration,
			loop: true,
			onStart: () => {
				deriction = -deriction
			},
			onUpdate: (t, p) => {
				const alpha = theta * easeCruise2(p)
				const nextCenter = [...currStates.center]
				if (anchor) {
					nextCenter[0] =
						(currStates.center[0] - anchor[0]) * Math.cos(alpha) -
						(currStates.center[1] - anchor[1]) * Math.sin(alpha) +
						anchor[0]
					nextCenter[1] =
						(currStates.center[0] - anchor[0]) * Math.sin(alpha) +
						(currStates.center[1] - anchor[1]) * Math.cos(alpha) +
						anchor[1]
				}
				const nextRotation = currStates.rotation + alpha

				console.log(duration, t, p)

				this.camera.setCenter(nextCenter)
				this.camera.setRotation(nextRotation)
			},
		})
	}
	stopSwing(reset = true) {
		if (this.trackSwing) {
			this.trackSwing.alive = false // 立刻停掉动画
			this.trackSwing.onEnd && this.trackSwing.onEnd() // 手动收尾
			delete this.trackSwing
		}
	}

	startCircling() {}
	stopCircling() {}

	startSliding() {}
	stopSliding() {}
}

function easeCruise2(p) {
	return Math.sin(2 * Math.PI * p)
}
