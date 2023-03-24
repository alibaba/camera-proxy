[camera-proxy](README.md) › [Globals](globals.md)

# camera-proxy

## Index

### Classes

* [AnimatedCameraProxy](classes/animatedcameraproxy.md)
* [CameraProxy](classes/cameraproxy.md)
* [Cameraman](classes/cameraman.md)
* [PointerControl](classes/pointercontrol.md)
* [RemoteSyncer](classes/remotesyncer.md)
* [TouchControl](classes/touchcontrol.md)

### Interfaces

* [CameraAnimatorProps](interfaces/cameraanimatorprops.md)
* [CameraProxyProps](interfaces/cameraproxyprops.md)
* [CameramanProps](interfaces/cameramanprops.md)
* [CartesianStates](interfaces/cartesianstates.md)
* [EasingFunc](interfaces/easingfunc.md)
* [GeographicStates](interfaces/geographicstates.md)
* [Limit](interfaces/limit.md)
* [PointerControlProps](interfaces/pointercontrolprops.md)
* [RemoteSyncerProps](interfaces/remotesyncerprops.md)
* [TouchControlProps](interfaces/touchcontrolprops.md)

### Type aliases

* [States](globals.md#states)

### Variables

* [DEG2RAD](globals.md#const-deg2rad)
* [K](globals.md#const-k)
* [_ANGLE2RAD](globals.md#const-_angle2rad)
* [_RAD2ANGEL](globals.md#const-_rad2angel)
* [_helperArrow](globals.md#const-_helperarrow)

### Functions

* [EMPTY_FUN](globals.md#const-empty_fun)
* [defaultCartesianStates](globals.md#defaultcartesianstates)
* [defaultGeographicStates](globals.md#defaultgeographicstates)
* [easeCruise2](globals.md#easecruise2)
* [eulerToRotationPitch](globals.md#eulertorotationpitch)
* [getLength](globals.md#getlength)
* [isCtrlKey](globals.md#isctrlkey)
* [isGeographicStates](globals.md#isgeographicstates)
* [rotationPitchToEuler](globals.md#rotationpitchtoeuler)

### Object literals

* [defaultLimit](globals.md#const-defaultlimit)
* [defaultProps](globals.md#const-defaultprops)

## Type aliases

###  States

Ƭ **States**: *[GeographicStates](interfaces/geographicstates.md) | [CartesianStates](interfaces/cartesianstates.md)*

*Defined in [src/interface.ts:56](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L56)*

## Variables

### `Const` DEG2RAD

• **DEG2RAD**: *number* = Math.PI / 180

*Defined in [src/CameraProxy.ts:29](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L29)*

___

### `Const` K

• **K**: *number* = 100000 * 0.78125

*Defined in [src/CameraProxy.ts:682](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L682)*

___

### `Const` _ANGLE2RAD

• **_ANGLE2RAD**: *number* = Math.PI / 180

*Defined in [src/interface.ts:130](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L130)*

___

### `Const` _RAD2ANGEL

• **_RAD2ANGEL**: *number* = 180 / Math.PI

*Defined in [src/interface.ts:129](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L129)*

*Defined in [src/CameraProxy.ts:679](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L679)*

___

### `Const` _helperArrow

• **_helperArrow**: *Vector3‹›* = new Vector3(0, 0, 0)

*Defined in [src/CameraProxy.ts:700](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L700)*

## Functions

### `Const` EMPTY_FUN

▸ **EMPTY_FUN**(): *void*

*Defined in [src/CameraProxy.ts:678](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L678)*

**Returns:** *void*

___

###  defaultCartesianStates

▸ **defaultCartesianStates**(): *object*

*Defined in [src/interface.ts:77](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L77)*

**Returns:** *object*

* **distance**: *number* = 1000

* **position**: *number[]* = [10, 10, 10]

* **rotationEuler**: *number[]* = [0, 0, 0]

___

###  defaultGeographicStates

▸ **defaultGeographicStates**(): *object*

*Defined in [src/interface.ts:68](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L68)*

默认状态

**Returns:** *object*

* **center**: *number[]* = [0, 0, 0]

* **pitch**: *number* = 0.7

* **rotation**: *number* = 0.4

* **zoom**: *number* = 13.5

___

###  easeCruise2

▸ **easeCruise2**(`p`: any): *number*

*Defined in [src/Cameraman.ts:88](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/Cameraman.ts#L88)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | any |

**Returns:** *number*

___

###  eulerToRotationPitch

▸ **eulerToRotationPitch**(`euler`: Euler): *object*

*Defined in [src/CameraProxy.ts:691](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L691)*

欧拉角转换成 rotation + pitch

**`todo`** there must be a smarter way to do this

**Parameters:**

Name | Type |
------ | ------ |
`euler` | Euler |

**Returns:** *object*

* **pitch**: *number*

* **rotation**: *number*

___

###  getLength

▸ **getLength**(`x`: number, `y`: number): *number*

*Defined in [src/CameraProxy.ts:701](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L701)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *number*

___

###  isCtrlKey

▸ **isCtrlKey**(`keyCode`: any): *boolean*

*Defined in [src/PointerControl.ts:279](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`keyCode` | any |

**Returns:** *boolean*

___

###  isGeographicStates

▸ **isGeographicStates**(`sth`: [States](globals.md#states)): *sth is GeographicStates*

*Defined in [src/interface.ts:61](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L61)*

TS 类型保护

**Parameters:**

Name | Type |
------ | ------ |
`sth` | [States](globals.md#states) |

**Returns:** *sth is GeographicStates*

___

###  rotationPitchToEuler

▸ **rotationPitchToEuler**(`rotation`: number, `pitch`: number): *Euler‹›*

*Defined in [src/CameraProxy.ts:708](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L708)*

rotation + pitch 转换成欧拉角

**Parameters:**

Name | Type |
------ | ------ |
`rotation` | number |
`pitch` | number |

**Returns:** *Euler‹›*

## Object literals

### `Const` defaultLimit

### ▪ **defaultLimit**: *object*

*Defined in [src/interface.ts:113](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L113)*

###  center

• **center**: *number[][]* = [
		[-Infinity, -Infinity, -Infinity],
		[Infinity, Infinity, Infinity],
	]

*Defined in [src/interface.ts:117](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L117)*

###  pitch

• **pitch**: *number[]* = [0, Math.PI / 2]

*Defined in [src/interface.ts:115](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L115)*

###  rotation

• **rotation**: *number[]* = [-Infinity, Infinity]

*Defined in [src/interface.ts:116](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L116)*

###  zoom

• **zoom**: *number[]* = [0.5, 25]

*Defined in [src/interface.ts:114](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/interface.ts#L114)*

___

### `Const` defaultProps

### ▪ **defaultProps**: *object*

*Defined in [src/AnimatedCameraProxy.ts:17](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L17)*

*Defined in [src/Cameraman.ts:19](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/Cameraman.ts#L19)*

*Defined in [src/PointerControl.ts:39](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L39)*

*Defined in [src/RemoteSyncer.ts:18](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/RemoteSyncer.ts#L18)*

*Defined in [src/TouchControl.ts:30](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L30)*

###  horizontal

• **horizontal**: *boolean* = true

*Defined in [src/PointerControl.ts:41](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L41)*

*Defined in [src/TouchControl.ts:31](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L31)*

###  inert

• **inert**: *boolean* = false

*Defined in [src/AnimatedCameraProxy.ts:18](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/AnimatedCameraProxy.ts#L18)*

###  interval

• **interval**: *number* = 50

*Defined in [src/RemoteSyncer.ts:19](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/RemoteSyncer.ts#L19)*

###  scale

• **scale**: *number* = 1

*Defined in [src/PointerControl.ts:42](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L42)*

*Defined in [src/TouchControl.ts:32](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L32)*

###  scrollCapture

• **scrollCapture**: *boolean* = true

*Defined in [src/PointerControl.ts:40](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/PointerControl.ts#L40)*
