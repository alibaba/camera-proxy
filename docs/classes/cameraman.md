[camera-proxy](../README.md) / [Exports](../modules.md) / Cameraman

# Class: Cameraman

## Table of contents

### Constructors

- [constructor](Cameraman.md#constructor)

### Properties

- [locked](Cameraman.md#locked)

### Methods

- [startCircling](Cameraman.md#startcircling)
- [startSliding](Cameraman.md#startsliding)
- [startSwing](Cameraman.md#startswing)
- [stopCircling](Cameraman.md#stopcircling)
- [stopSliding](Cameraman.md#stopsliding)
- [stopSwing](Cameraman.md#stopswing)

## Constructors

### constructor

• **new Cameraman**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CameramanProps`](../interfaces/CameramanProps.md) |

#### Defined in

[Cameraman.ts:26](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L26)

## Properties

### locked

• **locked**: `boolean`

#### Defined in

[Cameraman.ts:23](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L23)

## Methods

### startCircling

▸ **startCircling**(): `void`

#### Returns

`void`

#### Defined in

[Cameraman.ts:81](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L81)

___

### startSliding

▸ **startSliding**(): `void`

#### Returns

`void`

#### Defined in

[Cameraman.ts:84](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L84)

___

### startSwing

▸ **startSwing**(`theta`, `duration`, `anchor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `theta` | `number` |
| `duration` | `number` |
| `anchor?` | `number`[] |

#### Returns

`void`

#### Defined in

[Cameraman.ts:33](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L33)

___

### stopCircling

▸ **stopCircling**(): `void`

#### Returns

`void`

#### Defined in

[Cameraman.ts:82](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L82)

___

### stopSliding

▸ **stopSliding**(): `void`

#### Returns

`void`

#### Defined in

[Cameraman.ts:85](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L85)

___

### stopSwing

▸ **stopSwing**(`reset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `reset` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[Cameraman.ts:73](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/Cameraman.ts#L73)
