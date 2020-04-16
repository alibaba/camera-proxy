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
* [lock](cameraproxy.md#lock)
* [statesCode](cameraproxy.md#statescode)

### Accessors

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

*Defined in [CameraProxy.ts:117](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L117)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CameraProxyProps](../interfaces/cameraproxyprops.md) |

**Returns:** *[CameraProxy](cameraproxy.md)*

## Properties

###  canvasWidth

• **canvasWidth**: *number*

*Defined in [CameraProxy.ts:91](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L91)*

画布尺寸

___

###  lock

• **lock**: *boolean*

*Defined in [CameraProxy.ts:107](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L107)*

锁定后将禁用所有的相机状态变化

___

###  statesCode

• **statesCode**: *string*

*Defined in [CameraProxy.ts:102](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L102)*

相机状态码。
可以用来判断viewChange

## Accessors

###  canvasHeight

• **get canvasHeight**(): *number*

*Defined in [CameraProxy.ts:161](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L161)*

画布尺寸

**Returns:** *number*

• **set canvasHeight**(`value`: number): *void*

*Defined in [CameraProxy.ts:164](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L164)*

画布尺寸

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  center

• **get center**(): *number[]*

*Defined in [CameraProxy.ts:349](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L349)*

视觉焦点坐标

**Returns:** *number[]*

___

###  distance

• **get distance**(): *number*

*Defined in [CameraProxy.ts:387](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L387)*

相机到视觉焦点的距离（焦距）

**Returns:** *number*

___

###  fov

• **get fov**(): *number*

*Defined in [CameraProxy.ts:171](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L171)*

透视相机FOV

**Returns:** *number*

• **set fov**(`value`: number): *void*

*Defined in [CameraProxy.ts:174](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L174)*

透视相机FOV

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  pitch

• **get pitch**(): *number*

*Defined in [CameraProxy.ts:361](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L361)*

倾斜角

**Returns:** *number*

___

###  position

• **get position**(): *number[]*

*Defined in [CameraProxy.ts:373](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L373)*

相机位置

**Returns:** *number[]*

___

###  ratio

• **get ratio**(): *number*

*Defined in [CameraProxy.ts:182](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L182)*

分辨率缩放

**Returns:** *number*

• **set ratio**(`value`: number): *void*

*Defined in [CameraProxy.ts:185](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L185)*

分辨率缩放

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  rotation

• **get rotation**(): *number*

*Defined in [CameraProxy.ts:367](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L367)*

旋转角

**Returns:** *number*

___

###  rotationEuler

• **get rotationEuler**(): *number[]*

*Defined in [CameraProxy.ts:380](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L380)*

相机欧拉角
TODO 左手系支持

**Returns:** *number[]*

___

###  zoom

• **get zoom**(): *number*

*Defined in [CameraProxy.ts:355](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L355)*

缩放级别

**Returns:** *number*

## Methods

###  codeToStates

▸ **codeToStates**(`code`: string): *[GeographicStates](../interfaces/geographicstates.md)*

*Defined in [CameraProxy.ts:542](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L542)*

状态吗转换为状态（GeographicStates）

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  dispose

▸ **dispose**(): *void*

*Defined in [CameraProxy.ts:560](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L560)*

dispose

**Returns:** *void*

___

###  getCartesianStates

▸ **getCartesianStates**(): *object*

*Defined in [CameraProxy.ts:480](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L480)*

读取 相机3D空间状态

**Returns:** *object*

___

###  getGeographicStates

▸ **getGeographicStates**(): *[GeographicStates](../interfaces/geographicstates.md)*

*Defined in [CameraProxy.ts:464](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L464)*

读取 地图状态

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  getStates

▸ **getStates**(): *object*

*Defined in [CameraProxy.ts:498](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L498)*

两种状态一起导出

**Returns:** *object*

___

###  getStatesCode

▸ **getStatesCode**(): *string*

*Defined in [CameraProxy.ts:517](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L517)*

获取状态码

**Returns:** *string*

___

###  setCartesianStates

▸ **setCartesianStates**(`states`: [CartesianStates](../interfaces/cartesianstates.md)): *void*

*Defined in [CameraProxy.ts:489](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L489)*

设置 相机3D空间状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [CartesianStates](../interfaces/cartesianstates.md) |

**Returns:** *void*

___

###  setCenter

▸ **setCenter**(`v`: number[]): *function*

*Defined in [CameraProxy.ts:405](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L405)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** *function*

▸ (): *void*

___

###  setGeographicStates

▸ **setGeographicStates**(`states`: [GeographicStates](../interfaces/geographicstates.md)): *void*

*Defined in [CameraProxy.ts:472](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L472)*

设置 地图状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [GeographicStates](../interfaces/geographicstates.md) |

**Returns:** *void*

___

###  setPitch

▸ **setPitch**(`v`: number): *function*

*Defined in [CameraProxy.ts:412](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L412)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setRotation

▸ **setRotation**(`v`: number): *function*

*Defined in [CameraProxy.ts:415](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L415)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setStates

▸ **setStates**(`states`: [States](../globals.md#states)): *void*

*Defined in [CameraProxy.ts:507](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L507)*

设置状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [States](../globals.md#states) |

**Returns:** *void*

___

###  setStatesCode

▸ **setStatesCode**(`code`: string): *void*

*Defined in [CameraProxy.ts:534](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L534)*

从状态码更新状态

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *void*

___

###  setZoom

▸ **setZoom**(`v`: number): *function*

*Defined in [CameraProxy.ts:409](https://github.com/alibaba/camera-proxy/blob/69cc03f/src/CameraProxy.ts#L409)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*
