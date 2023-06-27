[camera-proxy](../README.md) / [Exports](../modules.md) / CameraAnimatorProps

# Interface: CameraAnimatorProps

初始化参数

## Hierarchy

- [`CameraProxyProps`](CameraProxyProps.md)

  ↳ **`CameraAnimatorProps`**

## Table of contents

### Properties

- [cameraFOV](CameraAnimatorProps.md#camerafov)
- [canvasHeight](CameraAnimatorProps.md#canvasheight)
- [canvasWidth](CameraAnimatorProps.md#canvaswidth)
- [limit](CameraAnimatorProps.md#limit)
- [onUpdate](CameraAnimatorProps.md#onupdate)
- [orientation](CameraAnimatorProps.md#orientation)
- [ratio](CameraAnimatorProps.md#ratio)
- [stateCodePrecision](CameraAnimatorProps.md#statecodeprecision)
- [states](CameraAnimatorProps.md#states)
- [timeline](CameraAnimatorProps.md#timeline)

## Properties

### cameraFOV

• **cameraFOV**: `number`

相机FOV

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[cameraFOV](CameraProxyProps.md#camerafov)

#### Defined in

[CameraProxy.ts:46](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L46)

___

### canvasHeight

• **canvasHeight**: `number`

画布尺寸

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[canvasHeight](CameraProxyProps.md#canvasheight)

#### Defined in

[CameraProxy.ts:38](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L38)

___

### canvasWidth

• **canvasWidth**: `number`

画布尺寸

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[canvasWidth](CameraProxyProps.md#canvaswidth)

#### Defined in

[CameraProxy.ts:42](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L42)

___

### limit

• `Optional` **limit**: [`Limit`](Limit.md)

边界限制

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[limit](CameraProxyProps.md#limit)

#### Defined in

[CameraProxy.ts:62](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L62)

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

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[onUpdate](CameraProxyProps.md#onupdate)

#### Defined in

[CameraProxy.ts:66](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L66)

___

### orientation

• `Optional` **orientation**: `string`

坐标系方向，默认右手系（OpenGL/WebGL）

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[orientation](CameraProxyProps.md#orientation)

#### Defined in

[CameraProxy.ts:58](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L58)

___

### ratio

• `Optional` **ratio**: `number`

分辨率缩放

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[ratio](CameraProxyProps.md#ratio)

#### Defined in

[CameraProxy.ts:54](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L54)

___

### stateCodePrecision

• `Optional` **stateCodePrecision**: `number`

StateCode 小数点后保留位数
- 相机状态变化监测依赖于 StateCode 字符串，如果精度不足，会表现为小幅度抖动无效果，或慢速动画卡顿

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[stateCodePrecision](CameraProxyProps.md#statecodeprecision)

#### Defined in

[CameraProxy.ts:72](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L72)

___

### states

• `Optional` **states**: [`States`](../modules.md#states)

初始化状态

#### Inherited from

[CameraProxyProps](CameraProxyProps.md).[states](CameraProxyProps.md#states)

#### Defined in

[CameraProxy.ts:50](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L50)

___

### timeline

• **timeline**: `Timeline`

#### Defined in

[AnimatedCameraProxy.ts:13](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L13)
