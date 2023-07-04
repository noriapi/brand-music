---
id: "PIC"
title: "Namespace: PIC"
sidebar_label: "PIC"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PitchIntervalClassBrand](../interfaces/PIC.PitchIntervalClassBrand.md)

## References

### from

Renames and re-exports [pic](../modules.md#pic)

___

### fromNum

Renames and re-exports [mayPic](../modules.md#maypic)

## Type Aliases

### PitchIntervalClass

Ƭ **PitchIntervalClass**: `Shape` & [`PitchIntervalClassBrand`](../interfaces/PIC.PitchIntervalClassBrand.md)

Ordered pitch-class interval

Number of ascending semitones from one pitch-class to the next, ordered from lowest to highest

**`See`**

[https://en.wikipedia.org/wiki/Pitch_interval#Ordered_pitch-class_intervals_('pitch_interval_class;_PIC')](https://en.wikipedia.org/wiki/Pitch_interval#Ordered_pitch-class_intervals_('pitch_interval_class;_PIC'))

#### Defined in

[pic.ts:21](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L21)

## Variables

### ALL

• `Const` **ALL**: readonly [`PitchIntervalClass`](PIC.md#pitchintervalclass)[]

#### Defined in

[pic.ts:36](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L36)

___

### MAX

• `Const` **MAX**: ``11`` & [`PitchIntervalClassBrand`](../interfaces/PIC.PitchIntervalClassBrand.md)

#### Defined in

[pic.ts:35](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L35)

___

### MIN

• `Const` **MIN**: ``0`` & [`PitchIntervalClassBrand`](../interfaces/PIC.PitchIntervalClassBrand.md)

#### Defined in

[pic.ts:34](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L34)

## Functions

### between

▸ **between**(`from`, `to`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PitchClass`](PC.md#pitchclass) |
| `to` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:38](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L38)

___

### fromIntClamp

▸ **fromIntClamp**(`v`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:29](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L29)

___

### fromIntMod

▸ **fromIntMod**(`v`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:30](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L30)

___

### fromPi

▸ **fromPi**(`pi`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pi` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:40](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L40)

___

### fromUnknown

▸ **fromUnknown**(`v`): `undefined` \| [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:31](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L31)

___

### hasShape

▸ **hasShape**<`T`\>(`v`): v is Object

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

v is Object

#### Defined in

[refined/literal.ts:20](https://github.com/noriapi/brand-music/blob/56d0169/src/refined/literal.ts#L20)

___

### invert

▸ **invert**(`v`, `index?`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) | `undefined` |
| `index` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` | `0` |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:42](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L42)

___

### mark

▸ **mark**(`_v`): \_v is PitchIntervalClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` |

#### Returns

\_v is PitchIntervalClass

#### Defined in

[pic.ts:23](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L23)

___

### markNum

▸ **markNum**(`v`): v is PitchIntervalClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

v is PitchIntervalClass

#### Defined in

[pic.ts:24](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L24)

___

### markUnknown

▸ **markUnknown**(`v`): v is PitchIntervalClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is PitchIntervalClass

#### Defined in

[pic.ts:25](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L25)
