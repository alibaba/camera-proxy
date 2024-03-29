[camera-proxy](../README.md) / [Exports](../modules.md) / Limit

# Interface: Limit

地图相机状态变化范围

## Table of contents

### Properties

- [center](Limit.md#center)
- [pitch](Limit.md#pitch)
- [rotation](Limit.md#rotation)
- [zoom](Limit.md#zoom)

## Properties

### center

• `Optional` **center**: `number`[][]

中心坐标限制
{下限{east, north, up}, 上限{east, north, up}}

#### Defined in

[interface.ts:107](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L107)

___

### pitch

• `Optional` **pitch**: `number`[]

倾斜角度限制
{下限, 上限}

#### Defined in

[interface.ts:97](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L97)

___

### rotation

• `Optional` **rotation**: `number`[]

旋转角度限制
{下限, 上限}

#### Defined in

[interface.ts:102](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L102)

___

### zoom

• `Optional` **zoom**: `number`[]

缩放级别
{下限, 上限}

#### Defined in

[interface.ts:92](https://github.com/alibaba/camera-proxy/blob/a1bd6c9/src/interface.ts#L92)
