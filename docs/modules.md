[camera-proxy](README.md) / Exports

# camera-proxy

## Table of contents

### Classes

- [AnimatedCameraProxy](classes/AnimatedCameraProxy.md)
- [CameraProxy](classes/CameraProxy.md)
- [Cameraman](classes/Cameraman.md)
- [PointerControl](classes/PointerControl.md)
- [RemoteSyncer](classes/RemoteSyncer.md)
- [TouchControl](classes/TouchControl.md)
- [TouchControlRotate](classes/TouchControlRotate.md)

### Interfaces

- [CameraAnimatorProps](interfaces/CameraAnimatorProps.md)
- [CameraProxyProps](interfaces/CameraProxyProps.md)
- [CameramanProps](interfaces/CameramanProps.md)
- [CartesianStates](interfaces/CartesianStates.md)
- [EasingFunc](interfaces/EasingFunc.md)
- [GeographicStates](interfaces/GeographicStates.md)
- [Limit](interfaces/Limit.md)
- [PointerControlProps](interfaces/PointerControlProps.md)
- [TouchControlProps](interfaces/TouchControlProps.md)
- [TouchControlRotateProps](interfaces/TouchControlRotateProps.md)

### Type Aliases

- [States](modules.md#states)

### Variables

- [defaultLimit](modules.md#defaultlimit)

### Functions

- [defaultCartesianStates](modules.md#defaultcartesianstates)
- [defaultGeographicStates](modules.md#defaultgeographicstates)
- [isGeographicStates](modules.md#isgeographicstates)

## Type Aliases

### States

Ƭ **States**: [`GeographicStates`](interfaces/GeographicStates.md) \| [`CartesianStates`](interfaces/CartesianStates.md)

#### Defined in

[interface.ts:55](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L55)

## Variables

### defaultLimit

• `Const` **defaultLimit**: [`Limit`](interfaces/Limit.md)

#### Defined in

[interface.ts:110](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L110)

## Functions

### defaultCartesianStates

▸ **defaultCartesianStates**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `distance` | `number` |
| `position` | `number`[] |
| `rotationEuler` | `number`[] |

#### Defined in

[interface.ts:76](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L76)

___

### defaultGeographicStates

▸ **defaultGeographicStates**(): `Object`

默认状态

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `center` | `number`[] |
| `pitch` | `number` |
| `rotation` | `number` |
| `zoom` | `number` |

#### Defined in

[interface.ts:67](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L67)

___

### isGeographicStates

▸ **isGeographicStates**(`sth`): sth is GeographicStates

TS 类型保护

#### Parameters

| Name | Type |
| :------ | :------ |
| `sth` | [`States`](modules.md#states) |

#### Returns

sth is GeographicStates

#### Defined in

[interface.ts:60](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L60)
