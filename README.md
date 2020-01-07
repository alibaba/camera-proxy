# 通用相机模块

## 安装

#### js/ts

`npm i -S camera-proxy`

## 结构

> 本相机模块的设计目标是统一不同平台的机位控制逻辑。

`CameraProxy`，核心类，负责管理相机状态，在 3D 机位和地图机位之间做转换，
可以从这个类上读取 3D 机位，同步给你场景中的相机

`AnimatedCameraProxy` 继承自 `CameraProxy`，
为每种状态控制接口增加了带缓动的版本，并提供可选的“惰性动画”特性，为所有的状态变化增加阻力

`PointerControl` 类提供鼠标控制功能

`TouchControl` 类提供多点触控功能

`RemoteSyncer` 类提供远程同步控制功能

## Useage

#### 基本流程

```javascript
import { PerspectiveCamera } from 'three'
import { CameraProxy } from 'camera-proxy'

const FOV = 40
const WIDTH = 1920
const HEIGHT = 1080

const camera = new PerspectiveCamera(FOV, WIDTH / HEIGHT, 100, 200000)
// 等下我们会主动更新，关掉自动更新可以节约一些运算，
// 如果相机还有有父级元素，则不能关掉自动更新
camera.matrixAutoUpdate = false

// 如果需要缓动动画，则使用 AnimatedCameraProxy 类并传入Timeline
const cam = new CameraProxy({
	cameraFOV: FOV,

	canvasHeight: WIDTH,
	canvasWidth: HEIGHT,

	onUpdate: cam => {
		// 每次机位发生变化后需要同步导向相机
		camera.position.fromArray(cam.position)
		camera.rotation.fromArray(cam.rotationEuler)
		camera.updateMatrix()
		camera.updateMatrixWorld()
	},
})

// 然后可以通过指令控制机位

// - 获取当先中心
const currentCenter = cam.center

// - 移动到新的中心
cam.setCenter([1000, 2000, 50])

// - 如果使用 AnimatedCameraProxy，还可以选择带缓动的接口
// cam.setCenterEase([1000, 2000, 50], 2000) // center, duration, easeF
```

#### 鼠标/触摸控制

```javascript
import { PerspectiveCamera } from 'three'
import { CameraProxy, PointerControl } from 'camera-proxy'

// 同上

// 开启鼠标控制
const pointerControl = new PointerControl({
	camera: cam,
	element: renderer.domElement,
	// 默认情况下平移总是平行于地面的，可以加入该项来让平移相对于视觉平面
	// horizontal: false,
})

// 如果使用触摸板则用 TouchControl 类替换掉 PointerControl
// NOTE PointerControl 和 TouchControl 不能同时作用于一个 HTMLElement
```

#### 远程控制

```javascript
// 控制端

import { RemoteSyncer } from 'camera-proxy'

// 同上

// 开启鼠标控制
const pointerControl = new PointerControl({
	camera: cam,
	element: renderer.domElement,
})

// 开启同步器

const syncer = new RemoteSyncer({
	camera: cam,
	channel: 'demo/001',
	role: 'master',
})
```

```javascript
// 受控端

import { RemoteSyncer } from 'camera-proxy'

// 同上

// 开启同步器

const syncer = new RemoteSyncer({
	camera: cam,
	channel: 'demo/001',
	role: 'slave',
	tsl: true,
})
```

## demo

- demo/basic_pointer.ts: 鼠标控制
- demo/basic_touch.ts: 触摸屏控制
- demo/animated_pointer.ts: 缓动
- demo/remote_master.ts: 远程控制（主控端）
- demo/remote_slave.ts: 远程控制（被控端）

## API

详见 [docs](./docs/globals.md) 和 [源码](./src)
