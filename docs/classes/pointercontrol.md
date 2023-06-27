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

[PointerControl.ts:98](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L98)

## Properties

### centerLock

• **centerLock**: `boolean` = `false`

是否锁定center（禁止用户控制）

#### Defined in

[PointerControl.ts:52](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L52)

___

### pitchLock

• **pitchLock**: `boolean` = `false`

是否锁定pitch（禁止用户控制）

#### Defined in

[PointerControl.ts:56](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L56)

___

### rotationLock

• **rotationLock**: `boolean` = `false`

是否锁定rotation（禁止用户控制）

#### Defined in

[PointerControl.ts:60](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L60)

___

### scale

• **scale**: `number` = `1.0`

画布缩放比例

#### Defined in

[PointerControl.ts:69](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L69)

___

### zoomLock

• **zoomLock**: `boolean` = `false`

是否锁定zoom（禁止用户控制）

#### Defined in

[PointerControl.ts:64](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L64)

## Accessors

### inControl

• `get` **inControl**(): `boolean`

#### Returns

`boolean`

#### Defined in

[PointerControl.ts:236](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L236)

## Methods

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Defined in

[PointerControl.ts:248](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/PointerControl.ts#L248)
