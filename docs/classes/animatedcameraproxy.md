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
* [easingLock](animatedcameraproxy.md#easinglock)
* [lock](animatedcameraproxy.md#lock)
* [statesCode](animatedcameraproxy.md#statescode)

### Accessors

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

* [dispose](animatedcameraproxy.md#dispose)
* [getCartesianStates](animatedcameraproxy.md#getcartesianstates)
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
* [setZoom](animatedcameraproxy.md#setzoom)
* [setZoomEase](animatedcameraproxy.md#setzoomease)

## Constructors

###  constructor

\+ **new AnimatedCameraProxy**(`props`: [CameraAnimatorProps](../interfaces/cameraanimatorprops.md)): *[AnimatedCameraProxy](animatedcameraproxy.md)*

*Overrides [CameraProxy](cameraproxy.md).[constructor](cameraproxy.md#constructor)*

*Defined in [AnimatedCameraProxy.ts:32](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CameraAnimatorProps](../interfaces/cameraanimatorprops.md) |

**Returns:** *[AnimatedCameraProxy](animatedcameraproxy.md)*

## Properties

###  canvasWidth

• **canvasWidth**: *number*

*Inherited from [CameraProxy](cameraproxy.md).[canvasWidth](cameraproxy.md#canvaswidth)*

*Defined in [CameraProxy.ts:91](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L91)*

画布尺寸

___

###  easingLock

• **easingLock**: *boolean*

*Defined in [AnimatedCameraProxy.ts:32](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L32)*

缓动锁定，避免同时出发多个缓动动画造成冲突

___

###  lock

• **lock**: *boolean*

*Inherited from [CameraProxy](cameraproxy.md).[lock](cameraproxy.md#lock)*

*Defined in [CameraProxy.ts:107](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L107)*

锁定后将禁用所有的相机状态变化

___

###  statesCode

• **statesCode**: *string*

*Inherited from [CameraProxy](cameraproxy.md).[statesCode](cameraproxy.md#statescode)*

*Defined in [CameraProxy.ts:102](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L102)*

相机状态码。
可以用来判断viewChange

## Accessors

###  canvasHeight

• **get canvasHeight**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[canvasHeight](cameraproxy.md#canvasheight)*

*Defined in [CameraProxy.ts:161](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L161)*

画布尺寸

**Returns:** *number*

• **set canvasHeight**(`value`: number): *void*

*Inherited from [CameraProxy](cameraproxy.md).[canvasHeight](cameraproxy.md#canvasheight)*

*Defined in [CameraProxy.ts:164](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L164)*

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

*Defined in [CameraProxy.ts:352](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L352)*

视觉焦点坐标

**Returns:** *number[]*

___

###  distance

• **get distance**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[distance](cameraproxy.md#distance)*

*Defined in [CameraProxy.ts:390](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L390)*

相机到视觉焦点的距离（焦距）

**Returns:** *number*

___

###  fov

• **get fov**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[fov](cameraproxy.md#fov)*

*Defined in [CameraProxy.ts:171](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L171)*

透视相机FOV

**Returns:** *number*

• **set fov**(`value`: number): *void*

*Inherited from [CameraProxy](cameraproxy.md).[fov](cameraproxy.md#fov)*

*Defined in [CameraProxy.ts:174](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L174)*

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

*Defined in [CameraProxy.ts:364](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L364)*

倾斜角

**Returns:** *number*

___

###  position

• **get position**(): *number[]*

*Inherited from [CameraProxy](cameraproxy.md).[position](cameraproxy.md#position)*

*Defined in [CameraProxy.ts:376](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L376)*

相机位置

**Returns:** *number[]*

___

###  ratio

• **get ratio**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[ratio](cameraproxy.md#ratio)*

*Defined in [CameraProxy.ts:182](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L182)*

分辨率缩放

**Returns:** *number*

• **set ratio**(`value`: number): *void*

*Inherited from [CameraProxy](cameraproxy.md).[ratio](cameraproxy.md#ratio)*

*Defined in [CameraProxy.ts:185](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L185)*

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

*Defined in [CameraProxy.ts:370](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L370)*

旋转角

**Returns:** *number*

___

###  rotationEuler

• **get rotationEuler**(): *number[]*

*Inherited from [CameraProxy](cameraproxy.md).[rotationEuler](cameraproxy.md#rotationeuler)*

*Defined in [CameraProxy.ts:383](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L383)*

相机欧拉角
TODO 左手系支持

**Returns:** *number[]*

___

###  zoom

• **get zoom**(): *number*

*Inherited from [CameraProxy](cameraproxy.md).[zoom](cameraproxy.md#zoom)*

*Defined in [CameraProxy.ts:358](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L358)*

缩放级别

**Returns:** *number*

## Methods

###  dispose

▸ **dispose**(): *void*

*Overrides [CameraProxy](cameraproxy.md).[dispose](cameraproxy.md#dispose)*

*Defined in [AnimatedCameraProxy.ts:269](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L269)*

清理

**Returns:** *void*

___

###  getCartesianStates

▸ **getCartesianStates**(): *object*

*Inherited from [CameraProxy](cameraproxy.md).[getCartesianStates](cameraproxy.md#getcartesianstates)*

*Defined in [CameraProxy.ts:483](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L483)*

读取 相机3D空间状态

**Returns:** *object*

___

###  getGeographicStates

▸ **getGeographicStates**(): *[GeographicStates](../interfaces/geographicstates.md)*

*Inherited from [CameraProxy](cameraproxy.md).[getGeographicStates](cameraproxy.md#getgeographicstates)*

*Defined in [CameraProxy.ts:467](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L467)*

读取 地图状态

**Returns:** *[GeographicStates](../interfaces/geographicstates.md)*

___

###  getStates

▸ **getStates**(): *object*

*Inherited from [CameraProxy](cameraproxy.md).[getStates](cameraproxy.md#getstates)*

*Defined in [CameraProxy.ts:501](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L501)*

两种状态一起导出

**Returns:** *object*

___

###  getStatesCode

▸ **getStatesCode**(): *string*

*Inherited from [CameraProxy](cameraproxy.md).[getStatesCode](cameraproxy.md#getstatescode)*

*Defined in [CameraProxy.ts:520](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L520)*

获取状态码

**Returns:** *string*

___

###  setCartesianStates

▸ **setCartesianStates**(`states`: [CartesianStates](../interfaces/cartesianstates.md)): *void*

*Inherited from [CameraProxy](cameraproxy.md).[setCartesianStates](cameraproxy.md#setcartesianstates)*

*Defined in [CameraProxy.ts:492](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L492)*

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

*Defined in [CameraProxy.ts:408](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L408)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number[] |

**Returns:** *function*

▸ (): *void*

___

###  setCenterEase

▸ **setCenterEase**(`v`: number[], `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [AnimatedCameraProxy.ts:183](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L183)*

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

*Defined in [CameraProxy.ts:475](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L475)*

设置 地图状态

**Parameters:**

Name | Type |
------ | ------ |
`states` | [GeographicStates](../interfaces/geographicstates.md) |

**Returns:** *void*

___

###  setGeographicStatesEase

▸ **setGeographicStatesEase**(`states`: [GeographicStates](../interfaces/geographicstates.md), `duration`: number, `easeF`: easeSin01, `onStart`: function, `onEnd`: function): *(Anonymous function)*

*Defined in [AnimatedCameraProxy.ts:221](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L221)*

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

*Defined in [CameraProxy.ts:415](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L415)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setPitchEase

▸ **setPitchEase**(`v`: number, `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [AnimatedCameraProxy.ts:202](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L202)*

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

*Defined in [CameraProxy.ts:418](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L418)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setRotationEase

▸ **setRotationEase**(`v`: number, `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [AnimatedCameraProxy.ts:211](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L211)*

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

*Defined in [CameraProxy.ts:510](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L510)*

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

*Defined in [CameraProxy.ts:537](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L537)*

从状态码更新状态

**Parameters:**

Name | Type |
------ | ------ |
`code` | string |

**Returns:** *void*

___

###  setZoom

▸ **setZoom**(`v`: number): *function*

*Inherited from [CameraProxy](cameraproxy.md).[setZoom](cameraproxy.md#setzoom)*

*Defined in [CameraProxy.ts:412](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/CameraProxy.ts#L412)*

**Parameters:**

Name | Type |
------ | ------ |
`v` | number |

**Returns:** *function*

▸ (): *void*

___

###  setZoomEase

▸ **setZoomEase**(`v`: number, `duration`: number, `easeF`: [EasingFunc](../interfaces/easingfunc.md), `onStart`: function, `onEnd`: function): *function*

*Defined in [AnimatedCameraProxy.ts:193](https://github.com/alibaba/camera-proxy/blob/c7a10a1/src/AnimatedCameraProxy.ts#L193)*

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
