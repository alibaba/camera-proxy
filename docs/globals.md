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
* [Timeline](interfaces/timeline.md)
* [TouchControlProps](interfaces/touchcontrolprops.md)
* [Track](interfaces/track.md)

### Type aliases

* [States](globals.md#states)

### Variables

* [DEG2RAD](globals.md#const-deg2rad)
* [K](globals.md#const-k)
* [_ANGLE2RAD](globals.md#const-_angle2rad)
* [_RAD2ANGEL](globals.md#const-_rad2angel)

### Functions

* [EMPTY_FUN](globals.md#const-empty_fun)
* [easeCruise2](globals.md#easecruise2)
* [isCtrlKey](globals.md#isctrlkey)
* [isGeographicStates](globals.md#isgeographicstates)

### Object literals

* [defaultCartesianStates](globals.md#const-defaultcartesianstates)
* [defaultGeographicStates](globals.md#const-defaultgeographicstates)
* [defaultLimit](globals.md#const-defaultlimit)
* [defaultProps](globals.md#const-defaultprops)

## Type aliases

###  States

Ƭ **States**: *[GeographicStates](interfaces/geographicstates.md) | [CartesianStates](interfaces/cartesianstates.md)*

*Defined in [src/interface.ts:56](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L56)*

## Variables

### `Const` DEG2RAD

• **DEG2RAD**: *number* = Math.PI / 180

*Defined in [src/CameraProxy.ts:32](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L32)*

___

### `Const` K

• **K**: *number* = 100000 * 0.78125

*Defined in [src/CameraProxy.ts:708](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L708)*

___

### `Const` _ANGLE2RAD

• **_ANGLE2RAD**: *number* = Math.PI / 180

*Defined in [src/interface.ts:140](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L140)*

___

### `Const` _RAD2ANGEL

• **_RAD2ANGEL**: *number* = 180 / Math.PI

*Defined in [src/interface.ts:139](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L139)*

*Defined in [src/CameraProxy.ts:705](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L705)*

## Functions

### `Const` EMPTY_FUN

▸ **EMPTY_FUN**(): *void*

*Defined in [src/CameraProxy.ts:704](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L704)*

**Returns:** *void*

___

###  easeCruise2

▸ **easeCruise2**(`p`: any): *number*

*Defined in [src/Cameraman.ts:83](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/Cameraman.ts#L83)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | any |

**Returns:** *number*

___

###  isCtrlKey

▸ **isCtrlKey**(`keyCode`: any): *boolean*

*Defined in [src/PointerControl.ts:292](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`keyCode` | any |

**Returns:** *boolean*

___

###  isGeographicStates

▸ **isGeographicStates**(`sth`: [States](globals.md#states)): *sth is GeographicStates*

*Defined in [src/interface.ts:61](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L61)*

TS 类型保护

**Parameters:**

Name | Type |
------ | ------ |
`sth` | [States](globals.md#states) |

**Returns:** *sth is GeographicStates*

## Object literals

### `Const` defaultCartesianStates

### ▪ **defaultCartesianStates**: *object*

*Defined in [src/interface.ts:75](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L75)*

###  distance

• **distance**: *number* = 1000

*Defined in [src/interface.ts:80](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L80)*

###  position

• **position**: *number[]* = [10, 10, 10]

*Defined in [src/interface.ts:76](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L76)*

###  rotationEuler

• **rotationEuler**: *number[]* = [0, 0, 0]

*Defined in [src/interface.ts:77](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L77)*

___

### `Const` defaultGeographicStates

### ▪ **defaultGeographicStates**: *object*

*Defined in [src/interface.ts:68](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L68)*

默认状态

###  center

• **center**: *number[]* = [0, 0, 0]

*Defined in [src/interface.ts:69](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L69)*

###  pitch

• **pitch**: *number* = 0.7

*Defined in [src/interface.ts:70](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L70)*

###  rotation

• **rotation**: *number* = 0.4

*Defined in [src/interface.ts:71](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L71)*

###  zoom

• **zoom**: *number* = 13.5

*Defined in [src/interface.ts:72](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L72)*

___

### `Const` defaultLimit

### ▪ **defaultLimit**: *object*

*Defined in [src/interface.ts:123](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L123)*

###  center

• **center**: *number[][]* = [
		[-Infinity, -Infinity, -Infinity],
		[Infinity, Infinity, Infinity],
	]

*Defined in [src/interface.ts:127](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L127)*

###  pitch

• **pitch**: *number[]* = [0, Math.PI / 2]

*Defined in [src/interface.ts:125](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L125)*

###  rotation

• **rotation**: *number[]* = [-Infinity, Infinity]

*Defined in [src/interface.ts:126](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L126)*

###  zoom

• **zoom**: *number[]* = [0.5, 25]

*Defined in [src/interface.ts:124](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L124)*

___

### `Const` defaultProps

### ▪ **defaultProps**: *object*

*Defined in [src/CameraProxy.ts:72](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L72)*

*Defined in [src/AnimatedCameraProxy.ts:15](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/AnimatedCameraProxy.ts#L15)*

*Defined in [src/Cameraman.ts:19](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/Cameraman.ts#L19)*

*Defined in [src/PointerControl.ts:40](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L40)*

*Defined in [src/RemoteSyncer.ts:18](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/RemoteSyncer.ts#L18)*

*Defined in [src/TouchControl.ts:30](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L30)*

###  horizontal

• **horizontal**: *boolean* = true

*Defined in [src/PointerControl.ts:42](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L42)*

*Defined in [src/TouchControl.ts:31](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L31)*

###  inert

• **inert**: *boolean* = false

*Defined in [src/AnimatedCameraProxy.ts:16](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/AnimatedCameraProxy.ts#L16)*

###  interval

• **interval**: *number* = 50

*Defined in [src/RemoteSyncer.ts:19](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/RemoteSyncer.ts#L19)*

###  orientation

• **orientation**: *string* = "right"

*Defined in [src/CameraProxy.ts:73](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L73)*

###  ratio

• **ratio**: *number* = 1

*Defined in [src/CameraProxy.ts:74](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L74)*

###  scale

• **scale**: *number* = 1

*Defined in [src/PointerControl.ts:43](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L43)*

*Defined in [src/TouchControl.ts:32](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/TouchControl.ts#L32)*

###  scrollCapture

• **scrollCapture**: *boolean* = true

*Defined in [src/PointerControl.ts:41](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L41)*

###  states

• **states**: *[GeographicStates](interfaces/geographicstates.md)* = defaultGeographicStates

*Defined in [src/CameraProxy.ts:75](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L75)*

###  onUpdate

▸ **onUpdate**(`camProxy`: any): *void*

*Defined in [src/CameraProxy.ts:76](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L76)*

**Parameters:**

Name | Type |
------ | ------ |
`camProxy` | any |

**Returns:** *void*
