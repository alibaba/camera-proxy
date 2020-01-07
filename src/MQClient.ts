/**
 * Copyright (c) 2017 Alibaba Group Holding Limited
 */

import 'paho-mqtt'

const Paho = window['Paho']

export interface MQClientProps {
	/**
	 * 收到消息的回调
	 */
	onmessage: (string) => void
	/**
	 * channel 编号，需要超过6位，unicode
	 */
	channel: string
	/**
	 * 可选自定义配置项
	 */
	mqConfig?: MQ_CONFIG
	/**
	 * 是否只发送数据不接受数据
	 * 如果不需要接受数据则应该打开此项来节约带宽
	 */
	sendOnly?: boolean

	/**
	 * 是否使用wss
	 */
	tls?: boolean
}

export class MQClient {
	config: MQClientProps
	channel: number
	mqclient: any
	connected: boolean
	mqConfig: MQ_CONFIG

	constructor(props: MQClientProps) {
		this.config = props

		this.connected = false

		if (this.config.mqConfig) {
			this.mqConfig = this.config.mqConfig
		} else {
			this.mqConfig = { ...DEFAULT_MQ_CONFIG }

			if (!this.config.channel) throw new Error('缺少必要参数： channel')
			if (this.config.channel.length < 6) throw new Error('参数错误： channel至少6位')

			this.mqConfig.topic += '/' + this.config.channel
			// TODO NOTE IMPORTANCE 这里如果出现多个相同 clientID 同时链接，将会出现链接错误，并可能导致发送端程序崩溃！
			this.mqConfig.clientId += this.config.channel + Math.random()
			console.log(this.mqConfig.clientId)
		}

		if (this.config.tls) {
			this.mqConfig.useTLS = true
			this.mqConfig.port = 443
		}

		this.mqclient = new Paho.MQTT.Client(
			this.mqConfig.host,
			this.mqConfig.port,
			this.mqConfig.clientId
		)

		this.mqclient.onConnectionLost = e => {
			this.connected = false
			setTimeout(() => this.connect(), 1000)
		}
		this.mqclient.onMessageArrived = m => {
			const message = m.payloadString
			setTimeout(() => {
				this.config.onmessage(message)
			})
		}
		this.connect()
	}

	connect() {
		const params = {
			timeout: 3,
			onSuccess: m => {
				if (!this.config.sendOnly) {
					this.mqclient.subscribe(this.mqConfig.topic, {
						qos: 0,
					})
				}

				this.connected = true
			},
			onFailure: m => {
				this.connected = false
				setTimeout(() => this.connect(), 1000)
			},
			useSSL: !!this.config.tls,
		}

		// 并不是所有服务都需要密码，对于公开服务而言，带上一个空密码反而会报错
		if (this.mqConfig.accessKey) params['userName'] = this.mqConfig.accessKey
		if (this.mqConfig.password) params['password'] = this.mqConfig.password

		this.mqclient.connect(params)
	}

	send(msg) {
		if (!this.connected) {
			return
		}
		const message = new Paho.MQTT.Message(msg)
		message.destinationName = this.mqConfig.topic
		this.mqclient.send(message)
	}

	dispose() {
		try {
			if (!this.config.sendOnly) {
				this.mqclient.unsubscribe(this.mqConfig.topic)
			}
			this.mqclient.disconnect()
		} catch (error) {
			console.error('dispose 失败', error)
		}
	}
}

export interface MQ_CONFIG {
	host: string
	port: number // WebSocket协议服务端口，如果是走HTTPS，设置443端口
	topic: string
	useTLS: boolean // 是否走加密HTTPS，如果走HTTPS，设置为true
	accessKey: string
	cleansession: boolean
	groupId: string
	password: string // CryptoJS.HmacSHA1(groupId,secretKey).toString(CryptoJS.enc.Base64)
	clientId: string
}

const DEFAULT_MQ_CONFIG: MQ_CONFIG = {
	host: 'test.mosquitto.org', // eclipse 公开服务
	port: 8080,
	topic: 'test_mq_public/camera_proxy',
	useTLS: false,
	accessKey: null,
	cleansession: true,
	groupId: '',
	password: null,
	clientId: '' + Math.random(),
}
