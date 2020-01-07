[camera-proxy](../README.md) › [Globals](../globals.md) › [PointerControl](pointercontrol.md)

# Class: PointerControl

## Hierarchy

* **PointerControl**

## Index

### Constructors

* [constructor](pointercontrol.md#constructor)

### Properties

* [centerLock](pointercontrol.md#centerlock)
* [pitchLock](pointercontrol.md#pitchlock)
* [rotationLock](pointercontrol.md#rotationlock)
* [zoomLock](pointercontrol.md#zoomlock)

### Accessors

* [inControl](pointercontrol.md#incontrol)

### Methods

* [dispose](pointercontrol.md#dispose)

## Constructors

###  constructor

\+ **new PointerControl**(`props`: [PointerControlProps](../interfaces/pointercontrolprops.md)): *[PointerControl](pointercontrol.md)*

*Defined in [PointerControl.ts:85](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L85)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [PointerControlProps](../interfaces/pointercontrolprops.md) |

**Returns:** *[PointerControl](pointercontrol.md)*

## Properties

###  centerLock

• **centerLock**: *boolean* = false

*Defined in [PointerControl.ts:47](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L47)*

是否锁定center（禁止用户控制）

___

###  pitchLock

• **pitchLock**: *boolean* = false

*Defined in [PointerControl.ts:51](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L51)*

是否锁定pitch（禁止用户控制）

___

###  rotationLock

• **rotationLock**: *boolean* = false

*Defined in [PointerControl.ts:55](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L55)*

是否锁定rotation（禁止用户控制）

___

###  zoomLock

• **zoomLock**: *boolean* = false

*Defined in [PointerControl.ts:59](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L59)*

是否锁定zoom（禁止用户控制）

## Accessors

###  inControl

• **get inControl**(): *boolean*

*Defined in [PointerControl.ts:240](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L240)*

**Returns:** *boolean*

## Methods

###  dispose

▸ **dispose**(): *void*

*Defined in [PointerControl.ts:252](https://github.com/alibaba/camera-proxy/blob/c129bee/src/PointerControl.ts#L252)*

**Returns:** *void*
