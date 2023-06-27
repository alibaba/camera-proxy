[camera-proxy](../README.md) / [Exports](../modules.md) / AnimatedCameraProxy

# Class: AnimatedCameraProxy

## Hierarchy

- [`CameraProxy`](CameraProxy.md)

  ↳ **`AnimatedCameraProxy`**

## Table of contents

### Constructors

- [constructor](AnimatedCameraProxy.md#constructor)

### Properties

- [canvasWidth](AnimatedCameraProxy.md#canvaswidth)
- [config](AnimatedCameraProxy.md#config)
- [easingLock](AnimatedCameraProxy.md#easinglock)
- [lock](AnimatedCameraProxy.md#lock)
- [statesCode](AnimatedCameraProxy.md#statescode)
- [timeline](AnimatedCameraProxy.md#timeline)

### Accessors

- [aspect](AnimatedCameraProxy.md#aspect)
- [canvasHeight](AnimatedCameraProxy.md#canvasheight)
- [center](AnimatedCameraProxy.md#center)
- [distance](AnimatedCameraProxy.md#distance)
- [fov](AnimatedCameraProxy.md#fov)
- [pitch](AnimatedCameraProxy.md#pitch)
- [position](AnimatedCameraProxy.md#position)
- [ratio](AnimatedCameraProxy.md#ratio)
- [rotation](AnimatedCameraProxy.md#rotation)
- [rotationEuler](AnimatedCameraProxy.md#rotationeuler)
- [zoom](AnimatedCameraProxy.md#zoom)

### Methods

- [codeToStates](AnimatedCameraProxy.md#codetostates)
- [dispose](AnimatedCameraProxy.md#dispose)
- [getCartesianStates](AnimatedCameraProxy.md#getcartesianstates)
- [getGeoViewCoords](AnimatedCameraProxy.md#getgeoviewcoords)
- [getGeographicStates](AnimatedCameraProxy.md#getgeographicstates)
- [getStates](AnimatedCameraProxy.md#getstates)
- [getStatesCode](AnimatedCameraProxy.md#getstatescode)
- [setCartesianStates](AnimatedCameraProxy.md#setcartesianstates)
- [setCenter](AnimatedCameraProxy.md#setcenter)
- [setCenterEase](AnimatedCameraProxy.md#setcenterease)
- [setGeographicStates](AnimatedCameraProxy.md#setgeographicstates)
- [setGeographicStatesEase](AnimatedCameraProxy.md#setgeographicstatesease)
- [setPitch](AnimatedCameraProxy.md#setpitch)
- [setPitchEase](AnimatedCameraProxy.md#setpitchease)
- [setRotation](AnimatedCameraProxy.md#setrotation)
- [setRotationEase](AnimatedCameraProxy.md#setrotationease)
- [setStates](AnimatedCameraProxy.md#setstates)
- [setStatesCode](AnimatedCameraProxy.md#setstatescode)
- [setStatesCodeEase](AnimatedCameraProxy.md#setstatescodeease)
- [setZoom](AnimatedCameraProxy.md#setzoom)
- [setZoomEase](AnimatedCameraProxy.md#setzoomease)

## Constructors

### constructor

• **new AnimatedCameraProxy**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CameraAnimatorProps`](../interfaces/CameraAnimatorProps.md) |

#### Overrides

[CameraProxy](CameraProxy.md).[constructor](CameraProxy.md#constructor)

#### Defined in

[AnimatedCameraProxy.ts:25](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L25)

## Properties

### canvasWidth

• **canvasWidth**: `number`

画布尺寸

#### Inherited from

[CameraProxy](CameraProxy.md).[canvasWidth](CameraProxy.md#canvaswidth)

#### Defined in

[CameraProxy.ts:91](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L91)

___

### config

• `Readonly` **config**: [`CameraAnimatorProps`](../interfaces/CameraAnimatorProps.md)

#### Overrides

[CameraProxy](CameraProxy.md).[config](CameraProxy.md#config)

#### Defined in

[AnimatedCameraProxy.ts:17](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L17)

___

### easingLock

• **easingLock**: `boolean`

缓动锁定，避免同时出发多个缓动动画造成冲突

#### Defined in

[AnimatedCameraProxy.ts:24](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L24)

___

### lock

• **lock**: `boolean`

锁定后将禁用所有的相机状态变化

#### Inherited from

[CameraProxy](CameraProxy.md).[lock](CameraProxy.md#lock)

#### Defined in

[CameraProxy.ts:107](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L107)

___

### statesCode

• **statesCode**: `string`

相机状态码。
可以用来判断viewChange

#### Inherited from

[CameraProxy](CameraProxy.md).[statesCode](CameraProxy.md#statescode)

#### Defined in

[CameraProxy.ts:102](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L102)

___

### timeline

• **timeline**: `Timeline`

#### Defined in

[AnimatedCameraProxy.ts:19](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L19)

## Accessors

### aspect

• `get` **aspect**(): `number`

宽高比

#### Returns

`number`

#### Inherited from

CameraProxy.aspect

#### Defined in

[CameraProxy.ts:193](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L193)

___

### canvasHeight

• `get` **canvasHeight**(): `number`

画布尺寸

#### Returns

`number`

#### Inherited from

CameraProxy.canvasHeight

#### Defined in

[CameraProxy.ts:161](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L161)

• `set` **canvasHeight**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

CameraProxy.canvasHeight

#### Defined in

[CameraProxy.ts:164](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L164)

___

### center

• `get` **center**(): `number`[]

视觉焦点坐标

#### Returns

`number`[]

#### Inherited from

CameraProxy.center

#### Defined in

[CameraProxy.ts:409](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L409)

___

### distance

• `get` **distance**(): `number`

相机到视觉焦点的距离（焦距）

#### Returns

`number`

#### Inherited from

CameraProxy.distance

#### Defined in

[CameraProxy.ts:447](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L447)

___

### fov

• `get` **fov**(): `number`

透视相机FOV

#### Returns

`number`

#### Inherited from

CameraProxy.fov

#### Defined in

[CameraProxy.ts:171](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L171)

• `set` **fov**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

CameraProxy.fov

#### Defined in

[CameraProxy.ts:174](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L174)

___

### pitch

• `get` **pitch**(): `number`

倾斜角

#### Returns

`number`

#### Inherited from

CameraProxy.pitch

#### Defined in

[CameraProxy.ts:421](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L421)

___

### position

• `get` **position**(): `number`[]

相机位置

#### Returns

`number`[]

#### Inherited from

CameraProxy.position

#### Defined in

[CameraProxy.ts:433](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L433)

___

### ratio

• `get` **ratio**(): `number`

分辨率缩放

#### Returns

`number`

#### Inherited from

CameraProxy.ratio

#### Defined in

[CameraProxy.ts:182](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L182)

• `set` **ratio**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`void`

#### Inherited from

CameraProxy.ratio

#### Defined in

[CameraProxy.ts:185](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L185)

___

### rotation

• `get` **rotation**(): `number`

旋转角

#### Returns

`number`

#### Inherited from

CameraProxy.rotation

#### Defined in

[CameraProxy.ts:427](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L427)

___

### rotationEuler

• `get` **rotationEuler**(): `number`[]

相机欧拉角
TODO 左手系支持

#### Returns

`number`[]

#### Inherited from

CameraProxy.rotationEuler

#### Defined in

[CameraProxy.ts:440](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L440)

___

### zoom

• `get` **zoom**(): `number`

缩放级别

#### Returns

`number`

#### Inherited from

CameraProxy.zoom

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

#### Inherited from

[CameraProxy](CameraProxy.md).[codeToStates](CameraProxy.md#codetostates)

#### Defined in

[CameraProxy.ts:605](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L605)

___

### dispose

▸ **dispose**(): `void`

清理

#### Returns

`void`

#### Overrides

[CameraProxy](CameraProxy.md).[dispose](CameraProxy.md#dispose)

#### Defined in

[AnimatedCameraProxy.ts:223](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L223)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[getCartesianStates](CameraProxy.md#getcartesianstates)

#### Defined in

[CameraProxy.ts:542](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L542)

___

### getGeoViewCoords

▸ **getGeoViewCoords**(): `Vector3`[]

#### Returns

`Vector3`[]

#### Inherited from

[CameraProxy](CameraProxy.md).[getGeoViewCoords](CameraProxy.md#getgeoviewcoords)

#### Defined in

[CameraProxy.ts:260](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L260)

___

### getGeographicStates

▸ **getGeographicStates**(): [`GeographicStates`](../interfaces/GeographicStates.md)

读取 地图状态

#### Returns

[`GeographicStates`](../interfaces/GeographicStates.md)

#### Inherited from

[CameraProxy](CameraProxy.md).[getGeographicStates](CameraProxy.md#getgeographicstates)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[getStates](CameraProxy.md#getstates)

#### Defined in

[CameraProxy.ts:560](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L560)

___

### getStatesCode

▸ **getStatesCode**(): `string`

获取状态码

#### Returns

`string`

#### Inherited from

[CameraProxy](CameraProxy.md).[getStatesCode](CameraProxy.md#getstatescode)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setCartesianStates](CameraProxy.md#setcartesianstates)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setCenter](CameraProxy.md#setcenter)

#### Defined in

[CameraProxy.ts:465](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L465)

___

### setCenterEase

▸ **setCenterEase**(`v`, `duration?`, `easeF?`, `onStart?`, `onEnd?`): () => `void`

状态控制元语

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `v` | `number`[] | `undefined` | 目标状态 |
| `duration?` | `number` | `1000` | 缓动时间 |
| `easeF?` | [`EasingFunc`](../interfaces/EasingFunc.md) | `easeSin01` | 缓动函数 0～1 |
| `onStart` | () => `void` | `null` | - |
| `onEnd` | () => `void` | `null` | - |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

stop {function} 立刻停止缓动动画

#### Defined in

[AnimatedCameraProxy.ts:92](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L92)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setGeographicStates](CameraProxy.md#setgeographicstates)

#### Defined in

[CameraProxy.ts:534](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L534)

___

### setGeographicStatesEase

▸ **setGeographicStatesEase**(`states`, `duration?`, `easeF?`, `onStart?`, `onEnd?`): () => `void`

地图飞行效果的机位动画

**`Todo`**

移动到 cameraman 类中

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `states` | [`GeographicStates`](../interfaces/GeographicStates.md) | `undefined` |
| `duration` | `number` | `1000` |
| `easeF` | (`p`: `any`) => `number` | `easeSin01` |
| `onStart` | () => `void` | `null` |
| `onEnd` | () => `void` | `null` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[AnimatedCameraProxy.ts:134](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L134)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setPitch](CameraProxy.md#setpitch)

#### Defined in

[CameraProxy.ts:472](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L472)

___

### setPitchEase

▸ **setPitchEase**(`v`, `duration?`, `easeF?`, `onStart?`, `onEnd?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `duration` | `number` | `1000` |
| `easeF` | [`EasingFunc`](../interfaces/EasingFunc.md) | `easeSin01` |
| `onStart` | () => `void` | `null` |
| `onEnd` | () => `void` | `null` |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

stop {function} 立刻停止缓动动画

#### Defined in

[AnimatedCameraProxy.ts:111](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L111)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setRotation](CameraProxy.md#setrotation)

#### Defined in

[CameraProxy.ts:475](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L475)

___

### setRotationEase

▸ **setRotationEase**(`v`, `duration?`, `easeF?`, `onStart?`, `onEnd?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `duration` | `number` | `1000` |
| `easeF` | [`EasingFunc`](../interfaces/EasingFunc.md) | `easeSin01` |
| `onStart` | () => `void` | `null` |
| `onEnd` | () => `void` | `null` |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

stop {function} 立刻停止缓动动画

#### Defined in

[AnimatedCameraProxy.ts:120](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L120)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setStates](CameraProxy.md#setstates)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setStatesCode](CameraProxy.md#setstatescode)

#### Defined in

[CameraProxy.ts:597](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L597)

___

### setStatesCodeEase

▸ **setStatesCodeEase**(`statesCode`, `duration?`, `easeF?`, `onStart?`, `onEnd?`): () => `void`

缓动切换相机机位

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `statesCode` | `string` | `undefined` | 机位状态 |
| `duration` | `number` | `1000` | 缓动时长 |
| `easeF` | (`p`: `any`) => `number` | `easeSin01` | 缓动函数 |
| `onStart` | () => `void` | `null` |  |
| `onEnd` | () => `void` | `null` |  |

#### Returns

`fn`

stop {function} 立刻停止缓动动画

▸ (): `void`

缓动切换相机机位

##### Returns

`void`

stop {function} 立刻停止缓动动画

#### Defined in

[AnimatedCameraProxy.ts:204](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L204)

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

#### Inherited from

[CameraProxy](CameraProxy.md).[setZoom](CameraProxy.md#setzoom)

#### Defined in

[CameraProxy.ts:469](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/CameraProxy.ts#L469)

___

### setZoomEase

▸ **setZoomEase**(`v`, `duration?`, `easeF?`, `onStart?`, `onEnd?`): () => `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | `number` | `undefined` |
| `duration` | `number` | `1000` |
| `easeF` | [`EasingFunc`](../interfaces/EasingFunc.md) | `easeSin01` |
| `onStart` | () => `void` | `null` |
| `onEnd` | () => `void` | `null` |

#### Returns

`fn`

▸ (): `void`

状态变化

##### Returns

`void`

stop {function} 立刻停止缓动动画

#### Defined in

[AnimatedCameraProxy.ts:102](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/AnimatedCameraProxy.ts#L102)
