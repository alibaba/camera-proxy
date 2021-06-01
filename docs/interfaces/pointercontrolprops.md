[camera-proxy](../README.md) › [Globals](../globals.md) › [PointerControlProps](pointercontrolprops.md)

# Interface: PointerControlProps

## Hierarchy

* **PointerControlProps**

## Index

### Properties

* [camera](pointercontrolprops.md#camera)
* [element](pointercontrolprops.md#element)
* [horizontal](pointercontrolprops.md#optional-horizontal)
* [scale](pointercontrolprops.md#optional-scale)
* [scrollCapture](pointercontrolprops.md#optional-scrollcapture)

## Properties

###  camera

• **camera**: *[CameraProxy](../classes/cameraproxy.md)*

*Defined in [src/PointerControl.ts:13](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L13)*

被控制的 CameraProxy

___

###  element

• **element**: *HTMLElement*

*Defined in [src/PointerControl.ts:17](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L17)*

监控事件的HTML元素

___

### `Optional` horizontal

• **horizontal**? : *boolean*

*Defined in [src/PointerControl.ts:27](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L27)*

只在水平（地平面）方向上运动，如果设为false，则在视觉平面上运动
[=true]

___

### `Optional` scale

• **scale**? : *number*

*Defined in [src/PointerControl.ts:37](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L37)*

画布缩放比例

___

### `Optional` scrollCapture

• **scrollCapture**? : *boolean*

*Defined in [src/PointerControl.ts:22](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L22)*

捕获鼠标滚动作为缩放控制，如果设为false则需要按住控制键才能滚动缩放，
[=true]
