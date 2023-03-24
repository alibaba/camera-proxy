[camera-proxy](../README.md) › [Globals](../globals.md) › [CameraProxy](cameraproxy.md)

# Class: CameraProxy

## Hierarchy

* **CameraProxy**

  ↳ [AnimatedCameraProxy](animatedcameraproxy.md)

## Index

### Constructors

* [constructor](cameraproxy.md#constructor)

### Properties

* [canvasWidth](cameraproxy.md#canvaswidth)
* [config](cameraproxy.md#readonly-config)
* [lock](cameraproxy.md#lock)
* [statesCode](cameraproxy.md#statescode)

### Accessors

* [aspect](cameraproxy.md#aspect)
* [canvasHeight](cameraproxy.md#canvasheight)
* [center](cameraproxy.md#center)
* [distance](cameraproxy.md#distance)
* [fov](cameraproxy.md#fov)
* [pitch](cameraproxy.md#pitch)
* [position](cameraproxy.md#position)
* [ratio](cameraproxy.md#ratio)
* [rotation](cameraproxy.md#rotation)
* [rotationEuler](cameraproxy.md#rotationeuler)
* [zoom](cameraproxy.md#zoom)

### Methods

* [codeToStates](cameraproxy.md#codetostates)
* [dispose](cameraproxy.md#dispose)
* [getCartesianStates](cameraproxy.md#getcartesianstates)
* [getGeoViewCoords](cameraproxy.md#getgeoviewcoords)
* [getGeographicStates](cameraproxy.md#getgeographicstates)
* [getStates](cameraproxy.md#getstates)
* [getStatesCode](cameraproxy.md#getstatescode)
* [setCartesianStates](cameraproxy.md#setcartesianstates)
* [setCenter](cameraproxy.md#setcenter)
* [setGeographicStates](cameraproxy.md#setgeographicstates)
* [setPitch](cameraproxy.md#setpitch)
* [setRotation](cameraproxy.md#setrotation)
* [setStates](cameraproxy.md#setstates)
* [setStatesCode](cameraproxy.md#setstatescode)
* [setZoom](cameraproxy.md#setzoom)

## Constructors

###  constructor

\+ **new CameraProxy**(`props`: [CameraProxyProps](../interfaces/cameraproxyprops.md)): *[CameraProxy](cameraproxy.md)*

*Defined in [src/CameraProxy.ts:107](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CameraProxyProps](../interfaces/cameraproxyprops.md) |

**Returns:** *[CameraProxy](cameraproxy.md)*

## Properties

###  canvasWidth

• **canvasWidth**: *number*

*Defined in [src/CameraProxy.ts:85](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L85)*

画布尺寸

___

### `Readonly` config

• **config**: *[CameraProxyProps](../interfaces/cameraproxyprops.md)*

*Defined in [src/CameraProxy.ts:76](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L76)*

___

###  lock

• **lock**: *boolean*

*Defined in [src/CameraProxy.ts:101](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L101)*

锁定后将禁用所有的相机状态变化

___

###  statesCode

• **statesCode**: *string*

*Defined in [src/CameraProxy.ts:96](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L96)*

相机状态码。
可以用来判断viewChange

## Accessors

###  aspect

• **get aspect**(): *number*

*Defined in [src/CameraProxy.ts:186](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L186)*

宽高比

**Returns:** *number*

___

###  canvasHeight

• **get canvasHeight**(): *number*

*Defined in [src/CameraProxy.ts:154](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L154)*

画布尺寸

**Returns:** *number*

• **set canvasHeight**(`value`: number): *void*

*Defined in [src/CameraProxy.ts:157](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L157)*

画布尺寸

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  center

• **get center**(): *number[]*

*Defined in [src/CameraProxy.ts:410](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L410)*

视觉焦点坐标

**Returns:** *number[]*

___

###  distance

• **get distance**(): *number*

*Defined in [src/CameraProxy.ts:448](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L448)*

相机到视觉焦点的距离（焦距）

**Returns:** *number*

___

###  fov

• **get fov**(): *number*

*Defined in [src/CameraProxy.ts:164](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L164)*

透视相机FOV

**Returns:** *number*

• **set fov**(`value`: number): *void*

*Defined in [src/CameraProxy.ts:167](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L167)*

透视相机FOV

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  pitch

• **get pitch**(): *number*

*Defined in [src/CameraProxy.ts:422](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L422)*

倾斜角

**Returns:** *number*

___

###  position

• **get position**(): *number[]*

*Defined in [src/CameraProxy.ts:434](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L434)*

相机位置

**Returns:** *number[]*

___

###  ratio

• **get ratio**(): *number*

*Defined in [src/CameraProxy.ts:175](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L175)*

分辨率缩放

**Returns:** *number*

• **set ratio**(`value`: number): *void*

*Defined in [src/CameraProxy.ts:178](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L178)*

分辨率缩放

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  rotation

• **get rotation**(): *number*

*Defined in [src/CameraProxy.ts:428](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L428)*

旋转角

**Returns:** *number*

___

###  rotationEuler

• **get rotationEuler**(): *number[]*

*Defined in [src/CameraProxy.ts:441](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L441)*

相机欧拉角
TODO 左手系支持

**Returns:** *number[]*

___

###  zoom

• **get zoom**(): *number*

*Defined in [src/CameraProxy.ts:416](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L416)*

缩放级别

**Returns:** *number*

## Methods

###  codeToStates

▸ **codeToStates**(`code`: string): *[GeographicStates](../interfaces/geographicstates.md)*

*Defined in [src/CameraProxy.ts:605](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L605)*

状态吗转换为状态（GeographicStates）

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [src/CameraProxy.ts:623](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L623)*

dispose

**Returns:** *void*

___

###  getCartesianStates

▸ **getCartesianStates**(): *object*

*Defined in [src/CameraProxy.ts:543](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L543)*

读取 相机3D空间状态

**Returns:** *object*

___

###  getGeoViewCoords

▸ **getGeoViewCoords**(): *Vector3[]*

*Defined in [src/CameraProxy.ts:253](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L253)*

**Returns:** *Vector3[]*

___

###  getGeographicStates

▸ **getGeographicStates**(): *[GeographicStates](../interfaces/geographicstates.md)*

*Defined in [src/CameraProxy.ts:527](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L527)*

读取 地图状态

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  getStates

▸ **getStates**(): *object*

*Defined in [src/CameraProxy.ts:561](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L561)*

两种状态一起导出

**Returns:** *object*

___

###  getStatesCode

▸ **getStatesCode**(): *string*

*Defined in [src/CameraProxy.ts:580](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L580)*

获取状态码

**Returns:** *string*

___

###  setCartesianStates

▸ **setCartesianStates**(`states`: [CartesianStates](../interfaces/cartesianstates.md)): *void*

*Defined in [src/CameraProxy.ts:552](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L552)*

设置 相机3D空间状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [CartesianStates](../interfaces/cartesianstates.md) |

**Returns:** *void*

___

###  setCenter

▸ **setCenter**(`v`: number[]): *function*

*Defined in [src/CameraProxy.ts:466](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L466)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** *function*

▸ (): *void*

___

###  setGeographicStates

▸ **setGeographicStates**(`states`: [GeographicStates](../interfaces/geographicstates.md)): *void*

*Defined in [src/CameraProxy.ts:535](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L535)*

设置 地图状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [GeographicStates](../interfaces/geographicstates.md) |

**Returns:** *void*

___

###  setPitch

▸ **setPitch**(`v`: number): *function*

*Defined in [src/CameraProxy.ts:473](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L473)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setRotation

▸ **setRotation**(`v`: number): *function*

*Defined in [src/CameraProxy.ts:476](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L476)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setStates

▸ **setStates**(`states`: [States](../globals.md#states)): *void*

*Defined in [src/CameraProxy.ts:570](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L570)*

设置状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [States](../globals.md#states) |

**Returns:** *void*

___

###  setStatesCode

▸ **setStatesCode**(`code`: string): *void*

*Defined in [src/CameraProxy.ts:597](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L597)*

从状态码更新状态

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *void*

___

###  setZoom

▸ **setZoom**(`v`: number): *function*

*Defined in [src/CameraProxy.ts:470](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/CameraProxy.ts#L470)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*
