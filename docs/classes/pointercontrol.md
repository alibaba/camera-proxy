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
* [scale](pointercontrol.md#scale)
* [zoomLock](pointercontrol.md#zoomlock)

### Accessors

* [inControl](pointercontrol.md#incontrol)

### Methods

* [dispose](pointercontrol.md#dispose)

## Constructors

###  constructor

\+ **new PointerControl**(`props`: [PointerControlProps](../interfaces/pointercontrolprops.md)): *[PointerControl](pointercontrol.md)*

*Defined in [src/PointerControl.ts:96](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L96)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [PointerControlProps](../interfaces/pointercontrolprops.md) |

**Returns:** *[PointerControl](pointercontrol.md)*

## Properties

###  centerLock

• **centerLock**: *boolean* = false

*Defined in [src/PointerControl.ts:53](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L53)*

是否锁定center（禁止用户控制）

___

###  pitchLock

• **pitchLock**: *boolean* = false

*Defined in [src/PointerControl.ts:57](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L57)*

是否锁定pitch（禁止用户控制）

___

###  rotationLock

• **rotationLock**: *boolean* = false

*Defined in [src/PointerControl.ts:61](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L61)*

是否锁定rotation（禁止用户控制）

___

###  scale

• **scale**: *number* = 1

*Defined in [src/PointerControl.ts:70](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L70)*

画布缩放比例

___

###  zoomLock

• **zoomLock**: *boolean* = false

*Defined in [src/PointerControl.ts:65](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L65)*

是否锁定zoom（禁止用户控制）

## Accessors

###  inControl

• **get inControl**(): *boolean*

*Defined in [src/PointerControl.ts:251](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L251)*

**Returns:** *boolean*

## Methods

###  dispose

▸ **dispose**(): *void*

*Defined in [src/PointerControl.ts:263](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/PointerControl.ts#L263)*

**Returns:** *void*
