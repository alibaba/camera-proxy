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

*Defined in [src/CameraProxy.ts:46](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L46)*

相机FOV

___

###  canvasHeight

• **canvasHeight**: *number*

*Defined in [src/CameraProxy.ts:38](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L38)*

画布尺寸

___

###  canvasWidth

• **canvasWidth**: *number*

*Defined in [src/CameraProxy.ts:42](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L42)*

画布尺寸

___

### `Optional` limit

• **limit**? : *[Limit](limit.md)*

*Defined in [src/CameraProxy.ts:62](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L62)*

边界限制

___

### `Optional` onUpdate

• **onUpdate**? : *function*

*Defined in [src/CameraProxy.ts:66](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L66)*

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

*Defined in [src/CameraProxy.ts:58](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L58)*

坐标系方向，默认右手系（OpenGL/WebGL）

___

### `Optional` ratio

• **ratio**? : *number*

*Defined in [src/CameraProxy.ts:54](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L54)*

分辨率缩放

___

### `Optional` states

• **states**? : *[States](../globals.md#states)*

*Defined in [src/CameraProxy.ts:50](https://github.com/alibaba/camera-proxy/blob/a412c7e/src/CameraProxy.ts#L50)*

初始化状态
