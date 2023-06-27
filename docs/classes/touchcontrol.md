[camera-proxy](../README.md) / [Exports](../modules.md) / TouchControl

# Class: TouchControl

## Table of contents

### Constructors

- [constructor](TouchControl.md#constructor)

### Properties

- [panLock](TouchControl.md#panlock)
- [pinchLock](TouchControl.md#pinchlock)
- [scale](TouchControl.md#scale)

### Methods

- [dispose](TouchControl.md#dispose)

## Constructors

### constructor

• **new TouchControl**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`TouchControlProps`](../interfaces/TouchControlProps.md) |

#### Defined in

[TouchControl.ts:54](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/TouchControl.ts#L54)

## Properties

### panLock

• **panLock**: `boolean` = `false`

是否锁定pan（禁止用户控制）

#### Defined in

[TouchControl.ts:39](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/TouchControl.ts#L39)

___

### pinchLock

• **pinchLock**: `boolean` = `false`

是否锁定pinch（禁止用户控制）

#### Defined in

[TouchControl.ts:43](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/TouchControl.ts#L43)

___

### scale

• **scale**: `number` = `1.0`

画布缩放比例

#### Defined in

[TouchControl.ts:52](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/TouchControl.ts#L52)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[TouchControl.ts:168](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/TouchControl.ts#L168)
