---
id: "PC"
title: "Namespace: PC"
sidebar_label: "PC"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PitchClassBrand](../interfaces/PC.PitchClassBrand.md)

## References

### from

Renames and re-exports [pc](../modules.md#pc)

___

### fromNum

Renames and re-exports [mayPc](../modules.md#maypc)

## Type Aliases

### PitchClass

Ƭ **PitchClass**: `Shape` & [`PitchClassBrand`](../interfaces/PC.PitchClassBrand.md)

Integer notation of pitch class

**`See`**

[https://en.wikipedia.org/wiki/Pitch_class](https://en.wikipedia.org/wiki/Pitch_class)

#### Defined in

[pc.ts:21](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L21)

## Variables

### ALL

• `Const` **ALL**: readonly [`PitchClass`](PC.md#pitchclass)[]

#### Defined in

[pc.ts:37](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L37)

___

### MAX

• `Const` **MAX**: ``11`` & [`PitchClassBrand`](../interfaces/PC.PitchClassBrand.md)

#### Defined in

[pc.ts:36](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L36)

___

### MIN

• `Const` **MIN**: ``0`` & [`PitchClassBrand`](../interfaces/PC.PitchClassBrand.md)

#### Defined in

[pc.ts:35](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L35)

## Functions

### fromIntClamp

▸ **fromIntClamp**(`v`): [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:29](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L29)

___

### fromIntMod

▸ **fromIntMod**(`v`): [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:30](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L30)

___

### fromMnn

▸ **fromMnn**(`mnn`): [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnn` | [`MidiNoteNumber`](MNN.md#midinotenumber) |

#### Returns

[`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:47](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L47)

___

### fromUnknown

▸ **fromUnknown**(`v`): `undefined` \| [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| [`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:31](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L31)

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

[refined/literal.ts:20](https://github.com/noriapi/brand-music/blob/8bafdc9/src/refined/literal.ts#L20)

___

### ic

▸ **ic**(`a`, `b`): [`IntervalClass`](IC.md#intervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchClass`](PC.md#pitchclass) |
| `b` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`IntervalClass`](IC.md#intervalclass)

#### Defined in

[ic.ts:40](https://github.com/noriapi/brand-music/blob/8bafdc9/src/ic.ts#L40)

___

### invert

▸ **invert**(`v`, `index?`): [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `v` | [`PitchClass`](PC.md#pitchclass) | `undefined` |
| `index` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` | `0` |

#### Returns

[`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:44](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L44)

___

### mark

▸ **mark**(`_v`): \_v is PitchClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` |

#### Returns

\_v is PitchClass

#### Defined in

[pc.ts:23](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L23)

___

### markNum

▸ **markNum**(`v`): v is PitchClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

v is PitchClass

#### Defined in

[pc.ts:24](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L24)

___

### markUnknown

▸ **markUnknown**(`v`): v is PitchClass

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is PitchClass

#### Defined in

[pc.ts:25](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L25)

___

### pic

▸ **pic**(`from`, `to`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`PitchClass`](PC.md#pitchclass) |
| `to` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:38](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pic.ts#L38)

___

### transpose

▸ **transpose**(`value`, `interval`): [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PitchClass`](PC.md#pitchclass) |
| `interval` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) |

#### Returns

[`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:39](https://github.com/noriapi/brand-music/blob/8bafdc9/src/pc.ts#L39)
