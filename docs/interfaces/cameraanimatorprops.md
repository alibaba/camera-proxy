[camera-proxy](../README.md) › [Globals](../globals.md) › [CameraAnimatorProps](cameraanimatorprops.md)

# Interface: CameraAnimatorProps

## Hierarchy

* [CameraProxyProps](cameraproxyprops.md)

  ↳ **CameraAnimatorProps**

## Index

### Properties

* [cameraFOV](cameraanimatorprops.md#camerafov)
* [canvasHeight](cameraanimatorprops.md#canvasheight)
* [canvasWidth](cameraanimatorprops.md#canvaswidth)
* [inert](cameraanimatorprops.md#optional-inert)
* [limit](cameraanimatorprops.md#optional-limit)
* [onUpdate](cameraanimatorprops.md#optional-onupdate)
* [orientation](cameraanimatorprops.md#optional-orientation)
* [ratio](cameraanimatorprops.md#optional-ratio)
* [states](cameraanimatorprops.md#optional-states)
* [timeline](cameraanimatorprops.md#timeline)

## Properties

###  cameraFOV

• **cameraFOV**: *number*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[cameraFOV](cameraproxyprops.md#camerafov)*

*Defined in [src/CameraProxy.ts:49](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L49)*

相机FOV

___

###  canvasHeight

• **canvasHeight**: *number*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[canvasHeight](cameraproxyprops.md#canvasheight)*

*Defined in [src/CameraProxy.ts:41](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L41)*

画布尺寸

___

###  canvasWidth

• **canvasWidth**: *number*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[canvasWidth](cameraproxyprops.md#canvaswidth)*

*Defined in [src/CameraProxy.ts:45](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L45)*

画布尺寸

___

### `Optional` inert

• **inert**? : *boolean | number*

*Defined in [src/AnimatedCameraProxy.ts:12](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/AnimatedCameraProxy.ts#L12)*

___

### `Optional` limit

• **limit**? : *[Limit](limit.md)*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[limit](cameraproxyprops.md#optional-limit)*

*Defined in [src/CameraProxy.ts:65](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L65)*

边界限制

___

### `Optional` onUpdate

• **onUpdate**? : *function*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[onUpdate](cameraproxyprops.md#optional-onupdate)*

*Defined in [src/CameraProxy.ts:69](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L69)*

相机状态需要更新的回调

#### Type declaration:

▸ (`camProxy`: [CameraProxy](../classes/cameraproxy.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`camProxy` | [CameraProxy](../classes/cameraproxy.md) |

___

### `Optional` orientation

• **orientation**? : *string*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[orientation](cameraproxyprops.md#optional-orientation)*

*Defined in [src/CameraProxy.ts:61](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L61)*

坐标系方向，默认右手系（OpenGL/WebGL）

___

### `Optional` ratio

• **ratio**? : *number*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[ratio](cameraproxyprops.md#optional-ratio)*

*Defined in [src/CameraProxy.ts:57](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L57)*

分辨率缩放

___

### `Optional` states

• **states**? : *[States](../globals.md#states)*

*Inherited from [CameraProxyProps](cameraproxyprops.md).[states](cameraproxyprops.md#optional-states)*

*Defined in [src/CameraProxy.ts:53](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L53)*

初始化状态

___

###  timeline

• **timeline**: *[Timeline](timeline.md)*

*Defined in [src/AnimatedCameraProxy.ts:11](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/AnimatedCameraProxy.ts#L11)*
