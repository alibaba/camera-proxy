/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

import { MQClient, MQ_CONFIG } from './MQClient'
import { CameraProxy } from './CameraProxy'

interface RemoteSyncerProps {
	camera: CameraProxy
	role: 'master' | 'slave'
	interval?: number
	// mq
	channel: string
	mqConfig?: MQ_CONFIG
	tls?: boolean
}

const defaultProps = {
	interval: 50,
}

export class RemoteSyncer {
	config: RemoteSyncerProps
	camera: CameraProxy
	mqclient: MQClient

	// 是否同步，设为false将停止同步
	active: boolean

	private intervalID
	private timeoutID

	constructor(props: RemoteSyncerProps) {
		this.config = { ...defaultProps, ...props }

		this.camera = this.config.camera

		this.active = true

		// 如果code没有变化，就不再发送状态
		let currentCode = ''
		// 但是如果 MAX_SKIP_CNT 次检查都没有变化，还是要发一次状态（以免前几次都丢失）
		let skipCnt = 0
		const MAX_SKIP_CNT = 20

		if (this.config.role === 'master') {
			// 主

			this.mqclient = new MQClient({
				channel: this.config.channel,
				mqConfig: this.config.mqConfig,
				onmessage: msg => {},
				sendOnly: true,
				tls: this.config.tls,
			})

			const sync = () => {
				if (this.active) {
					const code = this.camera.getStatesCode()
					if (code === currentCode && skipCnt < MAX_SKIP_CNT) {
						skipCnt++
					} else {
						skipCnt = 0
						this.mqclient.send(code)
						currentCode = code
					}
				}

				this.timeoutID = setTimeout(sync, this.config.interval)
			}

			sync()
		} else {
			// 从
			this.mqclient = new MQClient({
				channel: this.config.channel,
				mqConfig: this.config.mqConfig,
				onmessage: msg => {
					if (this.active) {
						this.camera.setStatesCode(msg)
					}
				},
				tls: this.config.tls,
			})
		}

		this.intervalID = setInterval(() => {
			if (!this.mqclient.connected) {
				console.warn('MQ服务疑似链接失败')
			}
		}, 5000)
	}

	dispose() {
		this.active = false
		this.mqclient.dispose()
		clearTimeout(this.timeoutID)
		clearInterval(this.intervalID)
	}
}
