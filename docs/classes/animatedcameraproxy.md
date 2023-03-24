[camera-proxy](../README.md) › [Globals](../globals.md) › [AnimatedCameraProxy](animatedcameraproxy.md)

# Class: AnimatedCameraProxy

## Hierarchy

* [CameraProxy](cameraproxy.md)

  ↳ **AnimatedCameraProxy**

## Index

### Constructors

* [constructor](animatedcameraproxy.md#constructor)

### Properties

* [canvasWidth](animatedcameraproxy.md#canvaswidth)
* [config](animatedcameraproxy.md#readonly-config)
* [easingLock](animatedcameraproxy.md#easinglock)
* [lock](animatedcameraproxy.md#lock)
* [statesCode](animatedcameraproxy.md#statescode)
* [timeline](animatedcameraproxy.md#timeline)

### Accessors

* [aspect](animatedcameraproxy.md#aspect)
* [canvasHeight](animatedcameraproxy.md#canvasheight)
* [center](animatedcameraproxy.md#center)
* [distance](animatedcameraproxy.md#distance)
* [fov](animatedcameraproxy.md#fov)
* [pitch](animatedcameraproxy.md#pitch)
* [position](animatedcameraproxy.md#position)
* [ratio](animatedcameraproxy.md#ratio)
* [rotation](animatedcameraproxy.md#rotation)
* [rotationEuler](animatedcameraproxy.md#rotationeuler)
* [zoom](animatedcameraproxy.md#zoom)

### Methods

* [codeToStates](animatedcameraproxy.md#codetostates)
* [dispose](animatedcameraproxy.md#dispose)
* [getCartesianStates](animatedcameraproxy.md#getcartesianstates)
* [getGeoViewCoords](animatedcameraproxy.md#getgeoviewcoords)
* [getGeographicStates](animatedcameraproxy.md#getgeographicstates)
* [getStates](animatedcameraproxy.md#getstates)
* [getStatesCode](animatedcameraproxy.md#getstatescode)
* [setCartesianStates](animatedcameraproxy.md#setcartesianstates)
* [setCenter](animatedcameraproxy.md#setcenter)
* [setCenterEase](animatedcameraproxy.md#setcenterease)
* [setGeographicStates](animatedcameraproxy.md#setgeographicstates)
* [setGeographicStatesEase](animatedcameraproxy.md#setgeographicstatesease)
* [setPitch](animatedcameraproxy.md#setpitch)
* [setPitchEase](animatedcameraproxy.md#setpitchease)
* [setRotation](animatedcameraproxy.md#setrotation)
* [setRotationEase](animatedcameraproxy.md#setrotationease)
* [setStates](animatedcameraproxy.md#setstates)
* [setStatesCode](animatedcameraproxy.md#setstatescode)
* [setStatesCodeEase](animatedcameraproxy.md#setstatescodeease)
* [setZoom](animatedcameraproxy.md#setzoom)
* [setZoomEase](animatedcameraproxy.md#setzoomease)

## Constructors

###  constructor

\+ **new AnimatedCameraProxy**(`props`: [CameraAnimatorProps](../interfaces/cameraanimatorprops.md)): *[AnimatedCameraProxy](animatedcameraproxy.md)*

*Overrides [CameraProxy](cameraproxy.md).[constructor](cameraproxy.md#constructor)*

*Defined in [src/AnimatedCameraProxy.ts:34](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L34)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CameraAnimatorProps](../interfaces/cameraanimatorprops.md) |

**Returns:** *[AnimatedCameraProxy](animatedcameraproxy.md)*

## Properties

###  canvasWidth

• **canvasWidth**: *number*

*Inherited from [CameraProxy](cameraproxy.md).[canvasWidth](cameraproxy.md#canvaswidth)*

*Defined in [src/CameraProxy.ts:85](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L85)*

画布尺寸

___

### `Readonly` config

• **config**: *[CameraAnimatorProps](../interfaces/cameraanimatorprops.md)*

*Overrides [CameraProxy](cameraproxy.md).[config](cameraproxy.md#readonly-config)*

*Defined in [src/AnimatedCameraProxy.ts:22](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L22)*

___

###  easingLock

• **easingLock**: *boolean*

*Defined in [src/AnimatedCameraProxy.ts:34](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L34)*

缓动锁定，避免同时出发多个缓动动画造成冲突

___

###  lock

• **lock**: *boolean*

*Inherited from [CameraProxy](cameraproxy.md).[lock](cameraproxy.md#lock)*

*Defined in [src/CameraProxy.ts:101](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L101)*

锁定后将禁用所有的相机状态变化

___

###  statesCode

• **statesCode**: *string*

*Inherited from [CameraProxy](cameraproxy.md).[statesCode](cameraproxy.md#statescode)*

*Defined in [src/CameraProxy.ts:96](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L96)*

相机状态码。
可以用来判断viewChange

___

###  timeline

• **timeline**: *Timeline*

*Defined in [src/AnimatedCameraProxy.ts:27](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L27)*

## Accessors

###  aspect

• **get aspect**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[aspect](cameraproxy.md#aspect)*

*Defined in [src/CameraProxy.ts:188](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L188)*

宽高比

**Returns:** *number*

___

###  canvasHeight

• **get canvasHeight**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[canvasHeight](cameraproxy.md#canvasheight)*

*Defined in [src/CameraProxy.ts:156](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L156)*

画布尺寸

**Returns:** *number*

• **set canvasHeight**(`value`: number): *void*

*Inherited from [CameraProxy](cameraproxy.md).[canvasHeight](cameraproxy.md#canvasheight)*

*Defined in [src/CameraProxy.ts:159](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L159)*

画布尺寸

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  center

• **get center**(): *number[]*

*Inherited from [CameraProxy](cameraproxy.md).[center](cameraproxy.md#center)*

*Defined in [src/CameraProxy.ts:418](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L418)*

视觉焦点坐标

**Returns:** *number[]*

___

###  distance

• **get distance**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[distance](cameraproxy.md#distance)*

*Defined in [src/CameraProxy.ts:456](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L456)*

相机到视觉焦点的距离（焦距）

**Returns:** *number*

___

###  fov

• **get fov**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[fov](cameraproxy.md#fov)*

*Defined in [src/CameraProxy.ts:166](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L166)*

透视相机FOV

**Returns:** *number*

• **set fov**(`value`: number): *void*

*Inherited from [CameraProxy](cameraproxy.md).[fov](cameraproxy.md#fov)*

*Defined in [src/CameraProxy.ts:169](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L169)*

透视相机FOV

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  pitch

• **get pitch**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[pitch](cameraproxy.md#pitch)*

*Defined in [src/CameraProxy.ts:430](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L430)*

倾斜角

**Returns:** *number*

___

###  position

• **get position**(): *number[]*

*Inherited from [CameraProxy](cameraproxy.md).[position](cameraproxy.md#position)*

*Defined in [src/CameraProxy.ts:442](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L442)*

相机位置

**Returns:** *number[]*

___

###  ratio

• **get ratio**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[ratio](cameraproxy.md#ratio)*

*Defined in [src/CameraProxy.ts:177](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L177)*

分辨率缩放

**Returns:** *number*

• **set ratio**(`value`: number): *void*

*Inherited from [CameraProxy](cameraproxy.md).[ratio](cameraproxy.md#ratio)*

*Defined in [src/CameraProxy.ts:180](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L180)*

分辨率缩放

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  rotation

• **get rotation**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[rotation](cameraproxy.md#rotation)*

*Defined in [src/CameraProxy.ts:436](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L436)*

旋转角

**Returns:** *number*

___

###  rotationEuler

• **get rotationEuler**(): *number[]*

*Inherited from [CameraProxy](cameraproxy.md).[rotationEuler](cameraproxy.md#rotationeuler)*

*Defined in [src/CameraProxy.ts:449](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L449)*

相机欧拉角
TODO 左手系支持

**Returns:** *number[]*

___

###  zoom

• **get zoom**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[zoom](cameraproxy.md#zoom)*

*Defined in [src/CameraProxy.ts:424](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L424)*

缩放级别

**Returns:** *number*

## Methods

###  codeToStates

▸ **codeToStates**(`code`: string): *[GeographicStates](../interfaces/geographicstates.md)*

*Inherited from [CameraProxy](cameraproxy.md).[codeToStates](cameraproxy.md#codetostates)*

*Defined in [src/CameraProxy.ts:613](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L613)*

状态吗转换为状态（GeographicStates）

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  dispose

▸ **dispose**(): *void*

*Overrides [CameraProxy](cameraproxy.md).[dispose](cameraproxy.md#dispose)*

*Defined in [src/AnimatedCameraProxy.ts:315](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L315)*

清理

**Returns:** *void*

___

###  getCartesianStates

▸ **getCartesianStates**(): *object*

*Inherited from [CameraProxy](cameraproxy.md).[getCartesianStates](cameraproxy.md#getcartesianstates)*

*Defined in [src/CameraProxy.ts:551](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L551)*

读取 相机3D空间状态

**Returns:** *object*

___

###  getGeoViewCoords

▸ **getGeoViewCoords**(): *Vector3[]*

*Inherited from [CameraProxy](cameraproxy.md).[getGeoViewCoords](cameraproxy.md#getgeoviewcoords)*

*Defined in [src/CameraProxy.ts:255](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L255)*

**Returns:** *Vector3[]*

___

###  getGeographicStates

▸ **getGeographicStates**(): *[GeographicStates](../interfaces/geographicstates.md)*

*Inherited from [CameraProxy](cameraproxy.md).[getGeographicStates](cameraproxy.md#getgeographicstates)*

*Defined in [src/CameraProxy.ts:535](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L535)*

读取 地图状态

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  getStates

▸ **getStates**(): *object*

*Inherited from [CameraProxy](cameraproxy.md).[getStates](cameraproxy.md#getstates)*

*Defined in [src/CameraProxy.ts:569](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L569)*

两种状态一起导出

**Returns:** *object*

___

###  getStatesCode

▸ **getStatesCode**(): *string*

*Inherited from [CameraProxy](cameraproxy.md).[getStatesCode](cameraproxy.md#getstatescode)*

*Defined in [src/CameraProxy.ts:588](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L588)*

获取状态码

**Returns:** *string*

___

###  setCartesianStates

▸ **setCartesianStates**(`states`: [CartesianStates](../interfaces/cartesianstates.md)): *void*

*Inherited from [CameraProxy](cameraproxy.md).[setCartesianStates](cameraproxy.md#setcartesianstates)*

*Defined in [src/CameraProxy.ts:560](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L560)*

设置 相机3D空间状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [CartesianStates](../interfaces/cartesianstates.md) |

**Returns:** *void*

___

###  setCenter

▸ **setCenter**(`v`: number[]): *function*

*Inherited from [CameraProxy](cameraproxy.md).[setCenter](cameraproxy.md#setcenter)*

*Defined in [src/CameraProxy.ts:474](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L474)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** *function*

▸ (): *void*

___

###  setCenterEase

▸ **setCenterEase**(`v`: number[], `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [src/AnimatedCameraProxy.ts:188](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L188)*

状态控制元语

**Parameters:**

▪ **v**: *number[]*

目标状态

▪`Default value`  **duration**: *number*= 1000

▪`Default value`  **easeF**: *[EasingFunc](../interfaces/easingfunc.md)*= easeSin01

▪`Default value`  **onStart**: *function*= null

▸ (): *void*

▪`Default value`  **onEnd**: *function*= null

▸ (): *void*

**Returns:** *function*

▸ (): *void*

___

###  setGeographicStates

▸ **setGeographicStates**(`states`: [GeographicStates](../interfaces/geographicstates.md)): *void*

*Inherited from [CameraProxy](cameraproxy.md).[setGeographicStates](cameraproxy.md#setgeographicstates)*

*Defined in [src/CameraProxy.ts:543](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L543)*

设置 地图状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [GeographicStates](../interfaces/geographicstates.md) |

**Returns:** *void*

___

###  setGeographicStatesEase

▸ **setGeographicStatesEase**(`states`: [GeographicStates](../interfaces/geographicstates.md), `duration`: number, `easeF`: easeSin01, `onStart`: function, `onEnd`: function): *(Anonymous function)*

*Defined in [src/AnimatedCameraProxy.ts:226](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L226)*

**Parameters:**

▪ **states**: *[GeographicStates](../interfaces/geographicstates.md)*

▪`Default value`  **duration**: *number*= 1000

▪`Default value`  **easeF**: *easeSin01*= easeSin01

▪`Default value`  **onStart**: *function*= null

▸ (): *void*

▪`Default value`  **onEnd**: *function*= null

▸ (): *void*

**Returns:** *(Anonymous function)*

___

###  setPitch

▸ **setPitch**(`v`: number): *function*

*Inherited from [CameraProxy](cameraproxy.md).[setPitch](cameraproxy.md#setpitch)*

*Defined in [src/CameraProxy.ts:481](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L481)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setPitchEase

▸ **setPitchEase**(`v`: number, `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [src/AnimatedCameraProxy.ts:207](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L207)*

**Parameters:**

▪ **v**: *number*

▪`Default value`  **duration**: *number*= 1000

▪`Default value`  **easeF**: *[EasingFunc](../interfaces/easingfunc.md)*= easeSin01

▪`Default value`  **onStart**: *function*= null

▸ (): *void*

▪`Default value`  **onEnd**: *function*= null

▸ (): *void*

**Returns:** *function*

▸ (): *void*

___

###  setRotation

▸ **setRotation**(`v`: number): *function*

*Inherited from [CameraProxy](cameraproxy.md).[setRotation](cameraproxy.md#setrotation)*

*Defined in [src/CameraProxy.ts:484](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L484)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setRotationEase

▸ **setRotationEase**(`v`: number, `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [src/AnimatedCameraProxy.ts:216](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L216)*

**Parameters:**

▪ **v**: *number*

▪`Default value`  **duration**: *number*= 1000

▪`Default value`  **easeF**: *[EasingFunc](../interfaces/easingfunc.md)*= easeSin01

▪`Default value`  **onStart**: *function*= null

▸ (): *void*

▪`Default value`  **onEnd**: *function*= null

▸ (): *void*

**Returns:** *function*

▸ (): *void*

___

###  setStates

▸ **setStates**(`states`: [States](../globals.md#states)): *void*

*Inherited from [CameraProxy](cameraproxy.md).[setStates](cameraproxy.md#setstates)*

*Defined in [src/CameraProxy.ts:578](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L578)*

设置状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [States](../globals.md#states) |

**Returns:** *void*

___

###  setStatesCode

▸ **setStatesCode**(`code`: string): *void*

*Inherited from [CameraProxy](cameraproxy.md).[setStatesCode](cameraproxy.md#setstatescode)*

*Defined in [src/CameraProxy.ts:605](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L605)*

从状态码更新状态

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *void*

___

###  setStatesCodeEase

▸ **setStatesCodeEase**(`statesCode`: string, `duration`: number, `easeF`: easeSin01, `onStart`: function, `onEnd`: function): *function*

*Defined in [src/AnimatedCameraProxy.ts:296](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L296)*

缓动切换相机机位

**Parameters:**

▪ **statesCode**: *string*

机位状态

▪`Default value`  **duration**: *number*= 1000

缓动时长

▪`Default value`  **easeF**: *easeSin01*= easeSin01

缓动函数

▪`Default value`  **onStart**: *function*= null

▸ (): *void*

▪`Default value`  **onEnd**: *function*= null

▸ (): *void*

**Returns:** *function*

stop {function} 立刻停止缓动动画

▸ (): *void*

___

###  setZoom

▸ **setZoom**(`v`: number): *function*

*Inherited from [CameraProxy](cameraproxy.md).[setZoom](cameraproxy.md#setzoom)*

*Defined in [src/CameraProxy.ts:478](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L478)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setZoomEase

▸ **setZoomEase**(`v`: number, `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [src/AnimatedCameraProxy.ts:198](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L198)*

**Parameters:**

▪ **v**: *number*

▪`Default value`  **duration**: *number*= 1000

▪`Default value`  **easeF**: *[EasingFunc](../interfaces/easingfunc.md)*= easeSin01

▪`Default value`  **onStart**: *function*= null

▸ (): *void*

▪`Default value`  **onEnd**: *function*= null

▸ (): *void*

**Returns:** *function*

▸ (): *void*
