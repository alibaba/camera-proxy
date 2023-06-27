[camera-proxy](../README.md) / [Exports](../modules.md) / CartesianStates

# Interface: CartesianStates

## Table of contents

### Properties

- [distance](CartesianStates.md#distance)
- [position](CartesianStates.md#position)
- [rotationEuler](CartesianStates.md#rotationeuler)

## Properties

### distance

• **distance**: `number`

焦距，视觉焦点离相机的距离，
- 需要这个值来计算 GeographicStates.center[2]
- 如果该值为0，则
		- 视觉焦点 定为 视线和地平面的交点
		- 视觉焦点 定为 视线和地平面的交点
		- GeographicStates.center[2] = 0

#### Defined in

[interface.ts:50](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/interface.ts#L50)

___

### position

• **position**: `number`[]

相机机位的世界坐标

#### Defined in

[interface.ts:35](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/interface.ts#L35)

___

### rotationEuler

• **rotationEuler**: `number`[]

相机自身的旋转角 （欧拉角）

#### Defined in

[interface.ts:40](https://github.com/alibaba/camera-proxy/blob/b757eb3/src/interface.ts#L40)
