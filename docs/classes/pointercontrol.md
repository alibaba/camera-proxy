[camera-proxy](../README.md) / [Exports](../modules.md) / PointerControl

# Class: PointerControl

## Table of contents

### Constructors

- [constructor](PointerControl.md#constructor)

### Properties

- [centerLock](PointerControl.md#centerlock)
- [pitchLock](PointerControl.md#pitchlock)
- [rotationLock](PointerControl.md#rotationlock)
- [scale](PointerControl.md#scale)
- [zoomLock](PointerControl.md#zoomlock)

### Accessors

- [inControl](PointerControl.md#incontrol)

### Methods

- [dispose](PointerControl.md#dispose)

## Constructors

### constructor

• **new PointerControl**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`PointerControlProps`](../interfaces/PointerControlProps.md) |

#### Defined in

[PointerControl.ts:104](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L104)

## Properties

### centerLock

• **centerLock**: `boolean` = `false`

是否锁定center（禁止用户控制）

#### Defined in

[PointerControl.ts:58](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L58)

___

### pitchLock

• **pitchLock**: `boolean` = `false`

是否锁定pitch（禁止用户控制）

#### Defined in

[PointerControl.ts:62](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L62)

___

### rotationLock

• **rotationLock**: `boolean` = `false`

是否锁定rotation（禁止用户控制）

#### Defined in

[PointerControl.ts:66](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L66)

___

### scale

• **scale**: `number` = `1.0`

画布缩放比例

#### Defined in

[PointerControl.ts:75](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L75)

___

### zoomLock

• **zoomLock**: `boolean` = `false`

是否锁定zoom（禁止用户控制）

#### Defined in

[PointerControl.ts:70](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L70)

## Accessors

### inControl

• `get` **inControl**(): `boolean`

#### Returns

`boolean`

#### Defined in

[PointerControl.ts:239](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L239)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[PointerControl.ts:251](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/PointerControl.ts#L251)
