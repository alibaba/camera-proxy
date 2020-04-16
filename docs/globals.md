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

*Defined in [interface.ts:56](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L56)*

## Variables

### `Const` K

• **K**: *number* = 100000 * 0.78125

*Defined in [CameraProxy.ts:611](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L611)*

___

### `Const` _ANGLE2RAD

• **_ANGLE2RAD**: *number* = Math.PI / 180

*Defined in [interface.ts:140](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L140)*

___

### `Const` _RAD2ANGEL

• **_RAD2ANGEL**: *number* = 180 / Math.PI

*Defined in [interface.ts:139](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L139)*

*Defined in [CameraProxy.ts:608](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L608)*

## Functions

### `Const` EMPTY_FUN

▸ **EMPTY_FUN**(): *void*

*Defined in [CameraProxy.ts:607](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L607)*

**Returns:** *void*

___

###  easeCruise2

▸ **easeCruise2**(`p`: any): *number*

*Defined in [Cameraman.ts:81](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/Cameraman.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`p` | any |

**Returns:** *number*

___

###  isCtrlKey

▸ **isCtrlKey**(`keyCode`: any): *boolean*

*Defined in [PointerControl.ts:281](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/PointerControl.ts#L281)*

**Parameters:**

Name | Type |
------ | ------ |
`keyCode` | any |

**Returns:** *boolean*

___

###  isGeographicStates

▸ **isGeographicStates**(`sth`: [States](globals.md#states)): *sth is GeographicStates*

*Defined in [interface.ts:61](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L61)*

TS 类型保护

**Parameters:**

Name | Type |
------ | ------ |
`sth` | [States](globals.md#states) |

**Returns:** *sth is GeographicStates*

## Object literals

### `Const` defaultCartesianStates

### ▪ **defaultCartesianStates**: *object*

*Defined in [interface.ts:75](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L75)*

###  distance

• **distance**: *number* = 1000

*Defined in [interface.ts:80](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L80)*

###  position

• **position**: *number[]* = [10, 10, 10]

*Defined in [interface.ts:76](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L76)*

###  rotationEuler

• **rotationEuler**: *number[]* = [0, 0, 0]

*Defined in [interface.ts:77](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L77)*

___

### `Const` defaultGeographicStates

### ▪ **defaultGeographicStates**: *object*

*Defined in [interface.ts:68](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L68)*

默认状态

###  center

• **center**: *number[]* = [0, 0, 0]

*Defined in [interface.ts:69](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L69)*

###  pitch

• **pitch**: *number* = 0.7

*Defined in [interface.ts:70](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L70)*

###  rotation

• **rotation**: *number* = 0.4

*Defined in [interface.ts:71](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L71)*

###  zoom

• **zoom**: *number* = 13.5

*Defined in [interface.ts:72](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L72)*

___

### `Const` defaultLimit

### ▪ **defaultLimit**: *object*

*Defined in [interface.ts:123](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L123)*

###  center

• **center**: *number[][]* = [
		[-Infinity, -Infinity, -Infinity],
		[Infinity, Infinity, Infinity],
	]

*Defined in [interface.ts:127](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L127)*

###  pitch

• **pitch**: *number[]* = [0, Math.PI / 2]

*Defined in [interface.ts:125](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L125)*

###  rotation

• **rotation**: *number[]* = [-Infinity, Infinity]

*Defined in [interface.ts:126](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L126)*

###  zoom

• **zoom**: *number[]* = [0.5, 25]

*Defined in [interface.ts:124](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/interface.ts#L124)*

___

### `Const` defaultProps

### ▪ **defaultProps**: *object*

*Defined in [CameraProxy.ts:68](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L68)*

*Defined in [AnimatedCameraProxy.ts:15](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/AnimatedCameraProxy.ts#L15)*

*Defined in [Cameraman.ts:19](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/Cameraman.ts#L19)*

*Defined in [PointerControl.ts:35](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/PointerControl.ts#L35)*

*Defined in [RemoteSyncer.ts:18](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/RemoteSyncer.ts#L18)*

*Defined in [TouchControl.ts:25](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/TouchControl.ts#L25)*

###  horizontal

• **horizontal**: *boolean* = true

*Defined in [PointerControl.ts:37](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/PointerControl.ts#L37)*

*Defined in [TouchControl.ts:26](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/TouchControl.ts#L26)*

###  inert

• **inert**: *boolean* = false

*Defined in [AnimatedCameraProxy.ts:16](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/AnimatedCameraProxy.ts#L16)*

###  interval

• **interval**: *number* = 50

*Defined in [RemoteSyncer.ts:19](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/RemoteSyncer.ts#L19)*

###  orientation

• **orientation**: *string* = "right"

*Defined in [CameraProxy.ts:69](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L69)*

###  ratio

• **ratio**: *number* = 1

*Defined in [CameraProxy.ts:70](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L70)*

###  scrollCapture

• **scrollCapture**: *boolean* = true

*Defined in [PointerControl.ts:36](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/PointerControl.ts#L36)*

###  states

• **states**: *[GeographicStates](interfaces/geographicstates.md)* = defaultGeographicStates

*Defined in [CameraProxy.ts:71](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L71)*

###  onUpdate

▸ **onUpdate**(`camProxy`: any): *void*

*Defined in [CameraProxy.ts:72](https://github.com/alibaba/camera-proxy/blob/64e5dd0/src/CameraProxy.ts#L72)*

**Parameters:**

Name | Type |
------ | ------ |
`camProxy` | any |

**Returns:** *void*
