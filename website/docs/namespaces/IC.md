---
id: "IC"
title: "Namespace: IC"
sidebar_label: "IC"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [IntervalClassBrand](../interfaces/IC.IntervalClassBrand.md)

## Type Aliases

### IntervalClass

Ƭ **IntervalClass**: `Shape` & [`IntervalClassBrand`](../interfaces/IC.IntervalClassBrand.md)

Unordered pitch-class interval

Number of ascending semitones from one pitch-class to the next, ordered from lowest to highest

**`See`**

[https://en.wikipedia.org/wiki/Pitch_interval#Unordered_pitch-class_intervals_('interval_class;_IC')](https://en.wikipedia.org/wiki/Pitch_interval#Unordered_pitch-class_intervals_('interval_class;_IC'))

#### Defined in

[ic.ts:21](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L21)

## Variables

### ALL

• `Const` **ALL**: readonly [`IntervalClass`](IC.md#intervalclass)[]

#### Defined in

[ic.ts:36](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L36)

___

### MAX

• `Const` **MAX**: ``6`` & [`IntervalClassBrand`](../interfaces/IC.IntervalClassBrand.md)

#### Defined in

[ic.ts:35](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L35)

___

### MIN

• `Const` **MIN**: ``0`` & [`IntervalClassBrand`](../interfaces/IC.IntervalClassBrand.md)

#### Defined in

[ic.ts:34](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L34)

## Functions

### between

▸ **between**(`a`, `b`): [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchClass`](PC.md#pitchclass) |
| `b` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:40](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L40)

___

### from

▸ **from**(`v`): [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` |

#### Returns

[`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:27](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L27)

___

### fromIntClamp

▸ **fromIntClamp**(`v`): [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:29](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L29)

___

### fromIntMod

▸ **fromIntMod**(`v`): [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:30](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L30)

___

### fromNum

▸ **fromNum**(`v`): `undefined` \| [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`undefined` \| [`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:28](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L28)

___

### fromPic

▸ **fromPic**(`pic`): [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pic` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) |

#### Returns

[`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:38](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L38)

___

### fromUnknown

▸ **fromUnknown**(`v`): `undefined` \| [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| [`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:31](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L31)

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

[refined/literal.ts:20](https://github.com/noriapi/brand-music/blob/d3723cb/src/refined/literal.ts#L20)

___

### mark

▸ **mark**(`_v`): \_v is IntervalClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` |

#### Returns

\_v is IntervalClass

#### Defined in

[ic.ts:23](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L23)

___

### markNum

▸ **markNum**(`v`): v is IntervalClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

v is IntervalClass

#### Defined in

[ic.ts:24](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L24)

___

### markUnknown

▸ **markUnknown**(`v`): v is IntervalClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is IntervalClass

#### Defined in

[ic.ts:25](https://github.com/noriapi/brand-music/blob/d3723cb/src/ic.ts#L25)
