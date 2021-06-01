[camera-proxy](../README.md) › [Globals](../globals.md) › [Limit](limit.md)

# Interface: Limit

地图相机状态变化范围

## Hierarchy

* **Limit**

## Index

### Properties

* [center](limit.md#optional-center)
* [pitch](limit.md#optional-pitch)
* [rotation](limit.md#optional-rotation)
* [zoom](limit.md#optional-zoom)

## Properties

### `Optional` center

• **center**? : *number[][]*

*Defined in [src/interface.ts:120](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L120)*

中心坐标限制
{下限{east, north, up}, 上限{east, north, up}}

___

### `Optional` pitch

• **pitch**? : *number[]*

*Defined in [src/interface.ts:110](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L110)*

倾斜角度限制
{下限, 上限}

___

### `Optional` rotation

• **rotation**? : *number[]*

*Defined in [src/interface.ts:115](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L115)*

旋转角度限制
{下限, 上限}

___

### `Optional` zoom

• **zoom**? : *number[]*

*Defined in [src/interface.ts:105](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L105)*

缩放级别
{下限, 上限}
