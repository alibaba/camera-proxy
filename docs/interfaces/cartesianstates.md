[camera-proxy](../README.md) › [Globals](../globals.md) › [CartesianStates](cartesianstates.md)

# Interface: CartesianStates

## Hierarchy

* **CartesianStates**

## Index

### Properties

* [distance](cartesianstates.md#distance)
* [position](cartesianstates.md#position)
* [rotationEuler](cartesianstates.md#rotationeuler)

## Properties

###  distance

• **distance**: *number*

*Defined in [src/interface.ts:50](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L50)*

焦距，视觉焦点离相机的距离，
- 需要这个值来计算 GeographicStates.center[2]
- 如果该值为0，则
		- 视觉焦点 定为 视线和地平面的交点
		- 视觉焦点 定为 视线和地平面的交点
		- GeographicStates.center[2] = 0

___

###  position

• **position**: *number[]*

*Defined in [src/interface.ts:35](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L35)*

相机机位的世界坐标

___

###  rotationEuler

• **rotationEuler**: *number[]*

*Defined in [src/interface.ts:40](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/interface.ts#L40)*

相机自身的旋转角 （欧拉角）
