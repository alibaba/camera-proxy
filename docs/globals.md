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

### Functions

* [EMPTY_FUN](globals.md#const-empty_fun)
* [defaultCartesianStates](globals.md#defaultcartesianstates)
* [defaultGeographicStates](globals.md#defaultgeographicstates)
* [easeCruise2](globals.md#easecruise2)
* [isCtrlKey](globals.md#isctrlkey)
* [isGeographicStates](globals.md#isgeographicstates)

### Object literals

* [defaultLimit](globals.md#const-defaultlimit)
* [defaultProps](globals.md#const-defaultprops)

## Type aliases

###  States

Ƭ **States**: *[GeographicStates](interfaces/geographicstates.md) | [CartesianStates](interfaces/cartesianstates.md)*

*Defined in [src/interface.ts:56](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L56)*

## Variables

### `Const` DEG2RAD

• **DEG2RAD**: *number* = Math.PI / 180

*Defined in [src/CameraProxy.ts:32](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/CameraProxy.ts#L32)*

___

### `Const` K

• **K**: *number* = 100000 * 0.78125

*Defined in [src/CameraProxy.ts:708](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/CameraProxy.ts#L708)*

___

### `Const` _ANGLE2RAD

• **_ANGLE2RAD**: *number* = Math.PI / 180

*Defined in [src/interface.ts:144](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L144)*

___

### `Const` _RAD2ANGEL

• **_RAD2ANGEL**: *number* = 180 / Math.PI

*Defined in [src/interface.ts:143](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L143)*

*Defined in [src/CameraProxy.ts:705](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/CameraProxy.ts#L705)*

## Functions

### `Const` EMPTY_FUN

▸ **EMPTY_FUN**(): *void*

*Defined in [src/CameraProxy.ts:704](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/CameraProxy.ts#L704)*

**Returns:** *void*

___

###  defaultCartesianStates

▸ **defaultCartesianStates**(): *object*

*Defined in [src/interface.ts:77](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L77)*

**Returns:** *object*

* **distance**: *number* = 1000

* **position**: *number[]* = [10, 10, 10]

* **rotationEuler**: *number[]* = [0, 0, 0]

___

###  defaultGeographicStates

▸ **defaultGeographicStates**(): *object*

*Defined in [src/interface.ts:68](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L68)*

默认状态

**Returns:** *object*

* **center**: *number[]* = [0, 0, 0]

* **pitch**: *number* = 0.7

* **rotation**: *number* = 0.4

* **zoom**: *number* = 13.5

___

###  easeCruise2

▸ **easeCruise2**(`p`: any): *number*

*Defined in [src/Cameraman.ts:83](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/Cameraman.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | any |

**Returns:** *number*

___

###  isCtrlKey

▸ **isCtrlKey**(`keyCode`: any): *boolean*

*Defined in [src/PointerControl.ts:292](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/PointerControl.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`keyCode` | any |

**Returns:** *boolean*

___

###  isGeographicStates

▸ **isGeographicStates**(`sth`: [States](globals.md#states)): *sth is GeographicStates*

*Defined in [src/interface.ts:61](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L61)*

TS 类型保护

**Parameters:**

Name | Type |
------ | ------ |
`sth` | [States](globals.md#states) |

**Returns:** *sth is GeographicStates*

## Object literals

### `Const` defaultLimit

### ▪ **defaultLimit**: *object*

*Defined in [src/interface.ts:127](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L127)*

###  center

• **center**: *number[][]* = [
		[-Infinity, -Infinity, -Infinity],
		[Infinity, Infinity, Infinity],
	]

*Defined in [src/interface.ts:131](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L131)*

###  pitch

• **pitch**: *number[]* = [0, Math.PI / 2]

*Defined in [src/interface.ts:129](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L129)*

###  rotation

• **rotation**: *number[]* = [-Infinity, Infinity]

*Defined in [src/interface.ts:130](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L130)*

###  zoom

• **zoom**: *number[]* = [0.5, 25]

*Defined in [src/interface.ts:128](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/interface.ts#L128)*

___

### `Const` defaultProps

### ▪ **defaultProps**: *object*

*Defined in [src/AnimatedCameraProxy.ts:17](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/AnimatedCameraProxy.ts#L17)*

*Defined in [src/Cameraman.ts:19](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/Cameraman.ts#L19)*

*Defined in [src/PointerControl.ts:40](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/PointerControl.ts#L40)*

*Defined in [src/RemoteSyncer.ts:18](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/RemoteSyncer.ts#L18)*

*Defined in [src/TouchControl.ts:30](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/TouchControl.ts#L30)*

###  horizontal

• **horizontal**: *boolean* = true

*Defined in [src/PointerControl.ts:42](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/PointerControl.ts#L42)*

*Defined in [src/TouchControl.ts:31](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/TouchControl.ts#L31)*

###  inert

• **inert**: *boolean* = false

*Defined in [src/AnimatedCameraProxy.ts:18](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/AnimatedCameraProxy.ts#L18)*

###  interval

• **interval**: *number* = 50

*Defined in [src/RemoteSyncer.ts:19](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/RemoteSyncer.ts#L19)*

###  scale

• **scale**: *number* = 1

*Defined in [src/PointerControl.ts:43](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/PointerControl.ts#L43)*

*Defined in [src/TouchControl.ts:32](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/TouchControl.ts#L32)*

###  scrollCapture

• **scrollCapture**: *boolean* = true

*Defined in [src/PointerControl.ts:41](https://github.com/alibaba/camera-proxy/blob/b158ca3/src/PointerControl.ts#L41)*
