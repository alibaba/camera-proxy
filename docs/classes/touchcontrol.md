[camera-proxy](../README.md) › [Globals](../globals.md) › [TouchControl](touchcontrol.md)

# Class: TouchControl

## Hierarchy

* **TouchControl**

## Index

### Constructors

* [constructor](touchcontrol.md#constructor)

### Properties

* [panLock](touchcontrol.md#panlock)
* [pinchLock](touchcontrol.md#pinchlock)
* [scale](touchcontrol.md#scale)

### Methods

* [dispose](touchcontrol.md#dispose)

## Constructors

###  constructor

\+ **new TouchControl**(`props`: [TouchControlProps](../interfaces/touchcontrolprops.md)): *[TouchControl](touchcontrol.md)*

*Defined in [src/TouchControl.ts:52](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L52)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [TouchControlProps](../interfaces/touchcontrolprops.md) |

**Returns:** *[TouchControl](touchcontrol.md)*

## Properties

###  panLock

• **panLock**: *boolean* = false

*Defined in [src/TouchControl.ts:39](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L39)*

是否锁定pan（禁止用户控制）

___

###  pinchLock

• **pinchLock**: *boolean* = false

*Defined in [src/TouchControl.ts:43](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L43)*

是否锁定pinch（禁止用户控制）

___

###  scale

• **scale**: *number* = 1

*Defined in [src/TouchControl.ts:52](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L52)*

画布缩放比例

## Methods

###  dispose

▸ **dispose**(): *void*

*Defined in [src/TouchControl.ts:168](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/TouchControl.ts#L168)*

**Returns:** *void*
