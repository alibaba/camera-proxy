[camera-proxy](../README.md) / [Exports](../modules.md) / CameraProxyProps

# Interface: CameraProxyProps

初始化参数

## Hierarchy

- **`CameraProxyProps`**

  ↳ [`CameraAnimatorProps`](CameraAnimatorProps.md)

## Table of contents

### Properties

- [cameraFOV](CameraProxyProps.md#camerafov)
- [canvasHeight](CameraProxyProps.md#canvasheight)
- [canvasWidth](CameraProxyProps.md#canvaswidth)
- [limit](CameraProxyProps.md#limit)
- [onUpdate](CameraProxyProps.md#onupdate)
- [orientation](CameraProxyProps.md#orientation)
- [ratio](CameraProxyProps.md#ratio)
- [states](CameraProxyProps.md#states)

## Properties

### cameraFOV

• **cameraFOV**: `number`

相机FOV

#### Defined in

[CameraProxy.ts:46](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L46)

___

### canvasHeight

• **canvasHeight**: `number`

画布尺寸

#### Defined in

[CameraProxy.ts:38](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L38)

___

### canvasWidth

• **canvasWidth**: `number`

画布尺寸

#### Defined in

[CameraProxy.ts:42](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L42)

___

### limit

• `Optional` **limit**: [`Limit`](Limit.md)

边界限制

#### Defined in

[CameraProxy.ts:62](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L62)

___

### onUpdate

• `Optional` **onUpdate**: (`camProxy`: [`CameraProxy`](../classes/CameraProxy.md)) => `void`

#### Type declaration

▸ (`camProxy`): `void`

相机状态需要更新的回调

##### Parameters

| Name | Type |
| :------ | :------ |
| `camProxy` | [`CameraProxy`](../classes/CameraProxy.md) |

##### Returns

`void`

#### Defined in

[CameraProxy.ts:66](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L66)

___

### orientation

• `Optional` **orientation**: `string`

坐标系方向，默认右手系（OpenGL/WebGL）

#### Defined in

[CameraProxy.ts:58](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L58)

___

### ratio

• `Optional` **ratio**: `number`

分辨率缩放

#### Defined in

[CameraProxy.ts:54](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L54)

___

### states

• `Optional` **states**: [`States`](../modules.md#states)

初始化状态

#### Defined in

[CameraProxy.ts:50](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/CameraProxy.ts#L50)
