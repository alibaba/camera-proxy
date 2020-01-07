[camera-proxy](README.md) › [Globals](globals.md)

# camera-proxy

## Index

### Classes

* [AnimatedCameraProxy](classes/animatedcameraproxy.md)
* [CameraProxy](classes/cameraproxy.md)
* [PointerControl](classes/pointercontrol.md)
* [RemoteSyncer](classes/remotesyncer.md)
* [TouchControl](classes/touchcontrol.md)

### Interfaces

* [CameraAnimatorProps](interfaces/cameraanimatorprops.md)
* [CameraProxyProps](interfaces/cameraproxyprops.md)
* [CartesianStates](interfaces/cartesianstates.md)
* [EasingFunc](interfaces/easingfunc.md)
* [GeographicStates](interfaces/geographicstates.md)
* [Limit](interfaces/limit.md)
* [PointerControlProps](interfaces/pointercontrolprops.md)
* [TouchControlProps](interfaces/touchcontrolprops.md)

### Type aliases

* [States](globals.md#states)

### Functions

* [isGeographicStates](globals.md#isgeographicstates)

### Object literals

* [defaultCartesianStates](globals.md#const-defaultcartesianstates)
* [defaultGeographicStates](globals.md#const-defaultgeographicstates)
* [defaultLimit](globals.md#const-defaultlimit)

## Type aliases

###  States

Ƭ **States**: *[GeographicStates](interfaces/geographicstates.md) | [CartesianStates](interfaces/cartesianstates.md)*

*Defined in [interface.ts:56](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L56)*

## Functions

###  isGeographicStates

▸ **isGeographicStates**(`sth`: [States](globals.md#states)): *boolean*

*Defined in [interface.ts:61](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L61)*

TS 类型保护

**Parameters:**

Name | Type |
------ | ------ |
`sth` | [States](globals.md#states) |

**Returns:** *boolean*

## Object literals

### `Const` defaultCartesianStates

### ▪ **defaultCartesianStates**: *object*

*Defined in [interface.ts:75](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L75)*

###  distance

• **distance**: *number* = 1000

*Defined in [interface.ts:80](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L80)*

###  position

• **position**: *number[]* =  [10, 10, 10]

*Defined in [interface.ts:76](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L76)*

###  rotationEuler

• **rotationEuler**: *number[]* =  [0, 0, 0]

*Defined in [interface.ts:77](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L77)*

___

### `Const` defaultGeographicStates

### ▪ **defaultGeographicStates**: *object*

*Defined in [interface.ts:68](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L68)*

默认状态

###  center

• **center**: *number[]* =  [0, 0, 0]

*Defined in [interface.ts:69](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L69)*

###  pitch

• **pitch**: *number* = 0.7

*Defined in [interface.ts:70](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L70)*

###  rotation

• **rotation**: *number* = 0.4

*Defined in [interface.ts:71](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L71)*

###  zoom

• **zoom**: *number* = 13.5

*Defined in [interface.ts:72](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L72)*

___

### `Const` defaultLimit

### ▪ **defaultLimit**: *object*

*Defined in [interface.ts:123](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L123)*

###  center

• **center**: *number[][]* =  [
		[-Infinity, -Infinity, -Infinity],
		[Infinity, Infinity, Infinity],
	]

*Defined in [interface.ts:127](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L127)*

###  pitch

• **pitch**: *number[]* =  [0, Math.PI / 2]

*Defined in [interface.ts:125](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L125)*

###  rotation

• **rotation**: *number[]* =  [-Infinity, Infinity]

*Defined in [interface.ts:126](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L126)*

###  zoom

• **zoom**: *number[]* =  [0.5, 25]

*Defined in [interface.ts:124](https://github.com/alibaba/camera-proxy/blob/c129bee/src/interface.ts#L124)*
