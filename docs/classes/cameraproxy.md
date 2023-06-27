[camera-proxy](../README.md) / [Exports](../modules.md) / CameraProxy

# Class: CameraProxy

## Hierarchy

- **`CameraProxy`**

  ↳ [`AnimatedCameraProxy`](AnimatedCameraProxy.md)

## Table of contents

### Constructors

- [constructor](CameraProxy.md#constructor)

### Properties

- [canvasWidth](CameraProxy.md#canvaswidth)
- [config](CameraProxy.md#config)
- [lock](CameraProxy.md#lock)
- [statesCode](CameraProxy.md#statescode)

### Accessors

- [aspect](CameraProxy.md#aspect)
- [canvasHeight](CameraProxy.md#canvasheight)
- [center](CameraProxy.md#center)
- [distance](CameraProxy.md#distance)
- [fov](CameraProxy.md#fov)
- [pitch](CameraProxy.md#pitch)
- [position](CameraProxy.md#position)
- [ratio](CameraProxy.md#ratio)
- [rotation](CameraProxy.md#rotation)
- [rotationEuler](CameraProxy.md#rotationeuler)
- [zoom](CameraProxy.md#zoom)

### Methods

- [codeToStates](CameraProxy.md#codetostates)
- [dispose](CameraProxy.md#dispose)
- [getCartesianStates](CameraProxy.md#getcartesianstates)
- [getGeoViewCoords](CameraProxy.md#getgeoviewcoords)
- [getGeographicStates](CameraProxy.md#getgeographicstates)
- [getStates](CameraProxy.md#getstates)
- [getStatesCode](CameraProxy.md#getstatescode)
- [setCartesianStates](CameraProxy.md#setcartesianstates)
- [setCenter](CameraProxy.md#setcenter)
- [setGeographicStates](CameraProxy.md#setgeographicstates)
- [setPitch](CameraProxy.md#setpitch)
- [setRotation](CameraProxy.md#setrotation)
- [setStates](CameraProxy.md#setstates)
- [setStatesCode](CameraProxy.md#setstatescode)
- [setZoom](CameraProxy.md#setzoom)

## Constructors

### constructor

• **new CameraProxy**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CameraProxyProps`](../interfaces/CameraProxyProps.md) |

#### Defined in

[CameraProxy.ts:115](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L115)

## Properties

### canvasWidth

• **canvasWidth**: `number`

画布尺寸

#### Defined in

[CameraProxy.ts:91](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L91)

___

### config

• `Readonly` **config**: [`CameraProxyProps`](../interfaces/CameraProxyProps.md)

#### Defined in

[CameraProxy.ts:82](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L82)

___

### lock

• **lock**: `boolean`

锁定后将禁用所有的相机状态变化

#### Defined in

[CameraProxy.ts:107](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L107)

___

### statesCode

• **statesCode**: `string`

相机状态码。
可以用来判断viewChange

#### Defined in

[CameraProxy.ts:102](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L102)

## Accessors

### aspect

• `get` **aspect**(): `number`

宽高比

#### Returns

`number`

#### Defined in

[CameraProxy.ts:193](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L193)

___

### canvasHeight

• `get` **canvasHeight**(): `number`

画布尺寸

#### Returns

`number`

#### Defined in

[CameraProxy.ts:161](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L161)

• `set` **canvasHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:164](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L164)

___

### center

• `get` **center**(): `number`[]

视觉焦点坐标

#### Returns

`number`[]

#### Defined in

[CameraProxy.ts:409](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L409)

___

### distance

• `get` **distance**(): `number`

相机到视觉焦点的距离（焦距）

#### Returns

`number`

#### Defined in

[CameraProxy.ts:447](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L447)

___

### fov

• `get` **fov**(): `number`

透视相机FOV

#### Returns

`number`

#### Defined in

[CameraProxy.ts:171](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L171)

• `set` **fov**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:174](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L174)

___

### pitch

• `get` **pitch**(): `number`

倾斜角

#### Returns

`number`

#### Defined in

[CameraProxy.ts:421](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L421)

___

### position

• `get` **position**(): `number`[]

相机位置

#### Returns

`number`[]

#### Defined in

[CameraProxy.ts:433](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L433)

___

### ratio

• `get` **ratio**(): `number`

分辨率缩放

#### Returns

`number`

#### Defined in

[CameraProxy.ts:182](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L182)

• `set` **ratio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:185](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L185)

___

### rotation

• `get` **rotation**(): `number`

旋转角

#### Returns

`number`

#### Defined in

[CameraProxy.ts:427](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L427)

___

### rotationEuler

• `get` **rotationEuler**(): `number`[]

相机欧拉角
TODO 左手系支持

#### Returns

`number`[]

#### Defined in

[CameraProxy.ts:440](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L440)

___

### zoom

• `get` **zoom**(): `number`

缩放级别

#### Returns

`number`

#### Defined in

[CameraProxy.ts:415](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L415)

## Methods

### codeToStates

▸ **codeToStates**(`code`): [`GeographicStates`](../interfaces/GeographicStates.md)

状态吗转换为状态（GeographicStates）

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

[`GeographicStates`](../interfaces/GeographicStates.md)

#### Defined in

[CameraProxy.ts:605](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L605)

___

### dispose

▸ **dispose**(): `void`

dispose

#### Returns

`void`

#### Defined in

[CameraProxy.ts:623](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L623)

___

### getCartesianStates

▸ **getCartesianStates**(): `Object`

读取 相机3D空间状态

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `distance` | `number` | 焦距，视觉焦点离相机的距离， - 需要这个值来计算 GeographicStates.center[2] - 如果该值为0，则 - 视觉焦点 定为 视线和地平面的交点 - 视觉焦点 定为 视线和地平面的交点 - GeographicStates.center[2] = 0 |
| `position` | `number`[] | 相机机位的世界坐标 |
| `rotationEuler` | `number`[] | 相机自身的旋转角 （欧拉角） |

#### Defined in

[CameraProxy.ts:542](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L542)

___

### getGeoViewCoords

▸ **getGeoViewCoords**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Defined in

[CameraProxy.ts:260](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L260)

___

### getGeographicStates

▸ **getGeographicStates**(): [`GeographicStates`](../interfaces/GeographicStates.md)

读取 地图状态

#### Returns

[`GeographicStates`](../interfaces/GeographicStates.md)

#### Defined in

[CameraProxy.ts:526](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L526)

___

### getStates

▸ **getStates**(): `Object`

两种状态一起导出

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | `number`[] | 视觉焦点 坐标 {east, north, up} 相对于世界中心地表 |
| `distance` | `number` | 焦距，视觉焦点离相机的距离， - 需要这个值来计算 GeographicStates.center[2] - 如果该值为0，则 - 视觉焦点 定为 视线和地平面的交点 - 视觉焦点 定为 视线和地平面的交点 - GeographicStates.center[2] = 0 |
| `pitch` | `number` | 倾斜角 相对于垂直向下方向的倾斜角度 |
| `position` | `number`[] | 相机机位的世界坐标 |
| `rotation` | `number` | 旋转角 相对于正南方向的顺时针倾斜角度 |
| `rotationEuler` | `number`[] | 相机自身的旋转角 （欧拉角） |
| `zoom` | `number` | 缩放级别 |

#### Defined in

[CameraProxy.ts:560](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L560)

___

### getStatesCode

▸ **getStatesCode**(): `string`

获取状态码

#### Returns

`string`

#### Defined in

[CameraProxy.ts:579](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L579)

___

### setCartesianStates

▸ **setCartesianStates**(`states`): `void`

设置 相机3D空间状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`CartesianStates`](../interfaces/CartesianStates.md) |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:551](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L551)

___

### setCenter

▸ **setCenter**(`v`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number`[] |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

#### Defined in

[CameraProxy.ts:465](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L465)

___

### setGeographicStates

▸ **setGeographicStates**(`states`): `void`

设置 地图状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`GeographicStates`](../interfaces/GeographicStates.md) |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:534](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L534)

___

### setPitch

▸ **setPitch**(`v`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

#### Defined in

[CameraProxy.ts:472](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L472)

___

### setRotation

▸ **setRotation**(`v`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

#### Defined in

[CameraProxy.ts:475](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L475)

___

### setStates

▸ **setStates**(`states`): `void`

设置状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`States`](../modules.md#states) |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:569](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L569)

___

### setStatesCode

▸ **setStatesCode**(`code`): `void`

从状态码更新状态

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`void`

#### Defined in

[CameraProxy.ts:597](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L597)

___

### setZoom

▸ **setZoom**(`v`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

#### Defined in

[CameraProxy.ts:469](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L469)
