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

*Defined in [src/PointerControl.ts:12](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L12)*

被控制的 CameraProxy

___

###  element

• **element**: *HTMLElement*

*Defined in [src/PointerControl.ts:16](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L16)*

监控事件的HTML元素

___

### `Optional` horizontal

• **horizontal**? : *boolean*

*Defined in [src/PointerControl.ts:26](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L26)*

只在水平（地平面）方向上运动，如果设为false，则在视觉平面上运动
[=true]

___

### `Optional` scale

• **scale**? : *number*

*Defined in [src/PointerControl.ts:36](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L36)*

画布缩放比例

___

### `Optional` scrollCapture

• **scrollCapture**? : *boolean*

*Defined in [src/PointerControl.ts:21](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L21)*

捕获鼠标滚动作为缩放控制，如果设为false则需要按住控制键才能滚动缩放，
[=true]
