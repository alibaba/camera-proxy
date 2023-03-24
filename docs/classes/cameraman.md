[camera-proxy](../README.md) › [Globals](../globals.md) › [Cameraman](cameraman.md)

# Class: Cameraman

## Hierarchy

* **Cameraman**

## Index

### Constructors

* [constructor](cameraman.md#constructor)

### Properties

* [locked](cameraman.md#locked)

### Methods

* [startCircling](cameraman.md#startcircling)
* [startSliding](cameraman.md#startsliding)
* [startSwing](cameraman.md#startswing)
* [stopCircling](cameraman.md#stopcircling)
* [stopSliding](cameraman.md#stopsliding)
* [stopSwing](cameraman.md#stopswing)

## Constructors

###  constructor

\+ **new Cameraman**(`props`: [CameramanProps](../interfaces/cameramanprops.md)): *[Cameraman](cameraman.md)*

*Defined in [src/Cameraman.ts:24](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [CameramanProps](../interfaces/cameramanprops.md) |

**Returns:** *[Cameraman](cameraman.md)*

## Properties

###  locked

• **locked**: *boolean*

*Defined in [src/Cameraman.ts:23](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L23)*

## Methods

###  startCircling

▸ **startCircling**(): *void*

*Defined in [src/Cameraman.ts:81](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L81)*

**Returns:** *void*

___

###  startSliding

▸ **startSliding**(): *void*

*Defined in [src/Cameraman.ts:84](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L84)*

**Returns:** *void*

___

###  startSwing

▸ **startSwing**(`theta`: number, `duration`: number, `anchor?`: number[]): *void*

*Defined in [src/Cameraman.ts:33](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`theta` | number |
`duration` | number |
`anchor?` | number[] |

**Returns:** *void*

___

###  stopCircling

▸ **stopCircling**(): *void*

*Defined in [src/Cameraman.ts:82](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L82)*

**Returns:** *void*

___

###  stopSliding

▸ **stopSliding**(): *void*

*Defined in [src/Cameraman.ts:85](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L85)*

**Returns:** *void*

___

###  stopSwing

▸ **stopSwing**(`reset`: boolean): *void*

*Defined in [src/Cameraman.ts:73](https://github.com/alibaba/camera-proxy/blob/2fa184b/src/Cameraman.ts#L73)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reset` | boolean | true |

**Returns:** *void*
