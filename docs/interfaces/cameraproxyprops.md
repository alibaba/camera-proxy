[camera-proxy](../README.md) › [Globals](../globals.md) › [CameraProxyProps](cameraproxyprops.md)

# Interface: CameraProxyProps

初始化参数

## Hierarchy

* **CameraProxyProps**

  ↳ [CameraAnimatorProps](cameraanimatorprops.md)

## Index

### Properties

* [cameraFOV](cameraproxyprops.md#camerafov)
* [canvasHeight](cameraproxyprops.md#canvasheight)
* [canvasWidth](cameraproxyprops.md#canvaswidth)
* [limit](cameraproxyprops.md#optional-limit)
* [onUpdate](cameraproxyprops.md#optional-onupdate)
* [orientation](cameraproxyprops.md#optional-orientation)
* [ratio](cameraproxyprops.md#optional-ratio)
* [states](cameraproxyprops.md#optional-states)

## Properties

###  cameraFOV

• **cameraFOV**: *number*

*Defined in [src/CameraProxy.ts:49](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L49)*

相机FOV

___

###  canvasHeight

• **canvasHeight**: *number*

*Defined in [src/CameraProxy.ts:41](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L41)*

画布尺寸

___

###  canvasWidth

• **canvasWidth**: *number*

*Defined in [src/CameraProxy.ts:45](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L45)*

画布尺寸

___

### `Optional` limit

• **limit**? : *[Limit](limit.md)*

*Defined in [src/CameraProxy.ts:65](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L65)*

边界限制

___

### `Optional` onUpdate

• **onUpdate**? : *function*

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

*Defined in [src/CameraProxy.ts:61](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L61)*

坐标系方向，默认右手系（OpenGL/WebGL）

___

### `Optional` ratio

• **ratio**? : *number*

*Defined in [src/CameraProxy.ts:57](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L57)*

分辨率缩放

___

### `Optional` states

• **states**? : *[States](../globals.md#states)*

*Defined in [src/CameraProxy.ts:53](https://github.com/alibaba/camera-proxy/blob/e1ea04e/src/CameraProxy.ts#L53)*

初始化状态
