[camera-proxy](../README.md) / [Exports](../modules.md) / PointerControlProps

# Interface: PointerControlProps

## Table of contents

### Properties

- [camera](PointerControlProps.md#camera)
- [element](PointerControlProps.md#element)
- [horizontal](PointerControlProps.md#horizontal)
- [scale](PointerControlProps.md#scale)
- [scrollCapture](PointerControlProps.md#scrollcapture)

## Properties

### camera

• **camera**: [`CameraProxy`](../classes/CameraProxy.md)

被控制的 CameraProxy

#### Defined in

[PointerControl.ts:12](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L12)

___

### element

• **element**: `HTMLElement`

监控事件的HTML元素

#### Defined in

[PointerControl.ts:16](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L16)

___

### horizontal

• `Optional` **horizontal**: `boolean`

只在水平（地平面）方向上运动，如果设为false，则在视觉平面上运动
[=true]

#### Defined in

[PointerControl.ts:26](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L26)

___

### scale

• `Optional` **scale**: `number`

画布缩放比例

#### Defined in

[PointerControl.ts:36](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L36)

___

### scrollCapture

• `Optional` **scrollCapture**: `boolean`

捕获鼠标滚动作为缩放控制，如果设为false则需要按住控制键才能滚动缩放，
[=true]

#### Defined in

[PointerControl.ts:21](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L21)
