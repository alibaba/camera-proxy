[camera-proxy](../README.md) › [Globals](../globals.md) › [TouchControlProps](touchcontrolprops.md)

# Interface: TouchControlProps

## Hierarchy

* **TouchControlProps**

## Index

### Properties

* [camera](touchcontrolprops.md#camera)
* [element](touchcontrolprops.md#element)
* [horizontal](touchcontrolprops.md#optional-horizontal)
* [scale](touchcontrolprops.md#optional-scale)

## Properties

###  camera

• **camera**: *[CameraProxy](../classes/cameraproxy.md)*

*Defined in [src/TouchControl.ts:13](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L13)*

被控制的 CameraProxy

___

###  element

• **element**: *HTMLElement*

*Defined in [src/TouchControl.ts:17](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L17)*

监控事件的HTML元素

___

### `Optional` horizontal

• **horizontal**? : *boolean*

*Defined in [src/TouchControl.ts:22](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L22)*

只在水平（地平面）方向上运动，如果设为false，则在视觉平面上运动
[=true]

___

### `Optional` scale

• **scale**? : *number*

*Defined in [src/TouchControl.ts:27](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L27)*

画布缩放比例
