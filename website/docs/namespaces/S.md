---
id: "S"
title: "Namespace: S"
sidebar_label: "S"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [SemitonesBrand](../interfaces/S.SemitonesBrand.md)

## References

### from

Renames and re-exports [semitones](../modules.md#semitones)

## Type Aliases

### Semitones

Ƭ **Semitones**: `NonNegativeInt` & [`SemitonesBrand`](../interfaces/S.SemitonesBrand.md)

Unordered pitch interval

Number of semitones that separates one pitch from another.

**`See`**

[https://en.wikipedia.org/wiki/Pitch_interval#Unordered_Pitch_Interval](https://en.wikipedia.org/wiki/Pitch_interval#Unordered_Pitch_Interval)

#### Defined in

[semitones.ts:22](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L22)

## Variables

### MIN

• `Const` **MIN**: ``0`` & `IntBrand` & `NonNegativeBrand` & [`SemitonesBrand`](../interfaces/S.SemitonesBrand.md)

#### Defined in

[semitones.ts:34](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L34)

## Functions

### fromIntAbs

▸ **fromIntAbs**(`v`): [`Semitones`](S.md#semitones)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`Semitones`](S.md#semitones)

#### Defined in

[semitones.ts:30](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L30)

___

### fromNum

▸ **fromNum**(`v`): `undefined` \| [`Semitones`](S.md#semitones)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`undefined` \| [`Semitones`](S.md#semitones)

#### Defined in

[semitones.ts:29](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L29)

___

### fromPi

▸ **fromPi**(`pi`): [`Semitones`](S.md#semitones)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pi` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`Semitones`](S.md#semitones)

#### Defined in

[semitones.ts:36](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L36)

___

### fromUnknown

▸ **fromUnknown**(`v`): `undefined` \| [`Semitones`](S.md#semitones)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| [`Semitones`](S.md#semitones)

#### Defined in

[semitones.ts:31](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L31)

___

### hasShape

▸ **hasShape**(`v`): v is NonNegativeInt

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is NonNegativeInt

#### Defined in

[refined/non-negative-int.ts:6](https://github.com/noriapi/brand-music/blob/56d0169/src/refined/non-negative-int.ts#L6)

___

### mark

▸ **mark**(`_v`): \_v is Semitones

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | `NonNegativeInt` |

#### Returns

\_v is Semitones

#### Defined in

[semitones.ts:24](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L24)

___

### markNum

▸ **markNum**(`v`): v is Semitones

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

v is Semitones

#### Defined in

[semitones.ts:25](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L25)

___

### markUnknown

▸ **markUnknown**(`v`): v is Semitones

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is Semitones

#### Defined in

[semitones.ts:26](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L26)
