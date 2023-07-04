---
id: "PI"
title: "Namespace: PI"
sidebar_label: "PI"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PitchIntervalBrand](../interfaces/PI.PitchIntervalBrand.md)

## References

### from

Renames and re-exports [pi](../modules.md#pi)

___

### fromNum

Renames and re-exports [mayPi](../modules.md#maypi)

## Type Aliases

### PitchInterval

Ƭ **PitchInterval**: `Shape` & [`PitchIntervalBrand`](../interfaces/PI.PitchIntervalBrand.md)

Ordered pitch interval

Number of semitones that separates one pitch from another, upward or downward.

**`See`**

[https://en.wikipedia.org/wiki/Pitch_interval#Ordered_Pitch_Interval](https://en.wikipedia.org/wiki/Pitch_interval#Ordered_Pitch_Interval)

#### Defined in

[pi.ts:22](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L22)

## Functions

### add

▸ **add**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:35](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L35)

___

### addChecked

▸ **addChecked**(`a`, `b`): `undefined` \| `number` & `IntBrand`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

`undefined` \| `number` & `IntBrand`

#### Defined in

[pi.ts:36](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L36)

___

### between

▸ **between**(`from`, `to`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`MidiNoteNumber`](MNN.md#midinotenumber) |
| `to` | [`MidiNoteNumber`](MNN.md#midinotenumber) |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:62](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L62)

___

### direction

▸ **direction**(`pi`): ``1`` \| ``0`` \| ``-1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `pi` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

``1`` \| ``0`` \| ``-1``

#### Defined in

[pi.ts:67](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L67)

___

### divChecked

▸ **divChecked**(`a`, `b`): `undefined` \| `number` & `IntBrand`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

`undefined` \| `number` & `IntBrand`

#### Defined in

[pi.ts:55](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L55)

___

### divRound

▸ **divRound**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | `number` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:59](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L59)

___

### divTrunc

▸ **divTrunc**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | `number` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:60](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L60)

___

### fromNumRound

▸ **fromNumRound**(`v`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:30](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L30)

___

### fromNumTrunc

▸ **fromNumTrunc**(`v`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:31](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L31)

___

### fromUnknown

▸ **fromUnknown**(`v`): `undefined` \| [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| [`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:32](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L32)

___

### hasShape

▸ **hasShape**<`T`\>(`v`): v is T & number & IntBrand

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

v is T & number & IntBrand

#### Defined in

[refined/int.ts:7](https://github.com/noriapi/brand-music/blob/56d0169/src/refined/int.ts#L7)

___

### mark

▸ **mark**(`_v`): \_v is PitchInterval

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | `Int` |

#### Returns

\_v is PitchInterval

#### Defined in

[pi.ts:24](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L24)

___

### markNum

▸ **markNum**(`v`): v is PitchInterval

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

v is PitchInterval

#### Defined in

[pi.ts:25](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L25)

___

### markUnknown

▸ **markUnknown**(`v`): v is PitchInterval

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is PitchInterval

#### Defined in

[pi.ts:26](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L26)

___

### mul

▸ **mul**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | `Int` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:47](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L47)

___

### mulChecked

▸ **mulChecked**(`a`, `b`): `undefined` \| `number` & `IntBrand`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

`undefined` \| `number` & `IntBrand`

#### Defined in

[pi.ts:48](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L48)

___

### mulRound

▸ **mulRound**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | `number` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:52](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L52)

___

### mulTrunc

▸ **mulTrunc**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | `number` |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:53](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L53)

___

### octaves

▸ **octaves**(`pi`): `NonNegativeInt`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pi` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

`NonNegativeInt`

#### Defined in

[pi.ts:65](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L65)

___

### pic

▸ **pic**(`pi`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pi` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)

#### Defined in

[pic.ts:40](https://github.com/noriapi/brand-music/blob/56d0169/src/pic.ts#L40)

___

### semitones

▸ **semitones**(`pi`): [`Semitones`](S.md#semitones)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pi` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`Semitones`](S.md#semitones)

#### Defined in

[semitones.ts:36](https://github.com/noriapi/brand-music/blob/56d0169/src/semitones.ts#L36)

___

### sub

▸ **sub**(`a`, `b`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:41](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L41)

___

### subChecked

▸ **subChecked**(`a`, `b`): `undefined` \| `number` & `IntBrand`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchInterval`](PI.md#pitchinterval) |
| `b` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

`undefined` \| `number` & `IntBrand`

#### Defined in

[pi.ts:42](https://github.com/noriapi/brand-music/blob/56d0169/src/pi.ts#L42)
