---
id: "MNN"
title: "Namespace: MNN"
sidebar_label: "MNN"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [MidiNoteNumberBrand](../interfaces/MNN.MidiNoteNumberBrand.md)

## Type Aliases

### MidiNoteNumber

Ƭ **MidiNoteNumber**: `Shape` & [`MidiNoteNumberBrand`](../interfaces/MNN.MidiNoteNumberBrand.md)

#### Defined in

[mnn.ts:14](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L14)

## Variables

### ALL

• `Const` **ALL**: readonly [`MidiNoteNumber`](MNN.md#midinotenumber)[]

#### Defined in

[mnn.ts:29](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L29)

___

### C4

• `Const` **C4**: ``60`` & [`MidiNoteNumberBrand`](../interfaces/MNN.MidiNoteNumberBrand.md)

#### Defined in

[mnn.ts:54](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L54)

___

### C\_1

• `Const` **C\_1**: ``0`` & [`MidiNoteNumberBrand`](../interfaces/MNN.MidiNoteNumberBrand.md)

#### Defined in

[mnn.ts:53](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L53)

___

### G9

• `Const` **G9**: ``127`` & [`MidiNoteNumberBrand`](../interfaces/MNN.MidiNoteNumberBrand.md)

#### Defined in

[mnn.ts:55](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L55)

___

### MAX

• `Const` **MAX**: ``127`` & [`MidiNoteNumberBrand`](../interfaces/MNN.MidiNoteNumberBrand.md)

#### Defined in

[mnn.ts:28](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L28)

___

### MIN

• `Const` **MIN**: ``0`` & [`MidiNoteNumberBrand`](../interfaces/MNN.MidiNoteNumberBrand.md)

#### Defined in

[mnn.ts:27](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L27)

## Functions

### from

▸ **from**(`v`): [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``127`` \| ``12`` \| ``13`` \| ``14`` \| ``15`` \| ``16`` \| ``17`` \| ``18`` \| ``19`` \| ``20`` \| ``21`` \| ``22`` \| ``23`` \| ``24`` \| ``25`` \| ``26`` \| ``27`` \| ``28`` \| ``29`` \| ``30`` \| ``31`` \| ``32`` \| ``33`` \| ``34`` \| ``35`` \| ``36`` \| ``37`` \| ``38`` \| ``39`` \| ``40`` \| ``41`` \| ``42`` \| ``43`` \| ``44`` \| ``45`` \| ``46`` \| ``47`` \| ``48`` \| ``49`` \| ``50`` \| ``51`` \| ``52`` \| ``53`` \| ``54`` \| ``55`` \| ``56`` \| ``57`` \| ``58`` \| ``59`` \| ``60`` \| ``61`` \| ``62`` \| ``63`` \| ``64`` \| ``65`` \| ``66`` \| ``67`` \| ``68`` \| ``69`` \| ``70`` \| ``71`` \| ``72`` \| ``73`` \| ``74`` \| ``75`` \| ``76`` \| ``77`` \| ``78`` \| ``79`` \| ``80`` \| ``81`` \| ``82`` \| ``83`` \| ``84`` \| ``85`` \| ``86`` \| ``87`` \| ``88`` \| ``89`` \| ``90`` \| ``91`` \| ``92`` \| ``93`` \| ``94`` \| ``95`` \| ``96`` \| ``97`` \| ``98`` \| ``99`` \| ``100`` \| ``101`` \| ``102`` \| ``103`` \| ``104`` \| ``105`` \| ``106`` \| ``107`` \| ``108`` \| ``109`` \| ``110`` \| ``111`` \| ``112`` \| ``113`` \| ``114`` \| ``115`` \| ``116`` \| ``117`` \| ``118`` \| ``119`` \| ``120`` \| ``121`` \| ``122`` \| ``123`` \| ``124`` \| ``125`` \| ``126`` |

#### Returns

[`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:20](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L20)

___

### fromIntClamp

▸ **fromIntClamp**(`v`): [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:22](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L22)

___

### fromIntMod

▸ **fromIntMod**(`v`): [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `Int` |

#### Returns

[`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:23](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L23)

___

### fromNum

▸ **fromNum**(`v`): `undefined` \| [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`undefined` \| [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:21](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L21)

___

### fromUnknown

▸ **fromUnknown**(`v`): `undefined` \| [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:24](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L24)

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

▸ **mark**(`_v`): \_v is MidiNoteNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `_v` | ``0`` \| ``1`` \| ``2`` \| ``3`` \| ``4`` \| ``5`` \| ``6`` \| ``7`` \| ``8`` \| ``9`` \| ``10`` \| ``11`` \| ``127`` \| ``12`` \| ``13`` \| ``14`` \| ``15`` \| ``16`` \| ``17`` \| ``18`` \| ``19`` \| ``20`` \| ``21`` \| ``22`` \| ``23`` \| ``24`` \| ``25`` \| ``26`` \| ``27`` \| ``28`` \| ``29`` \| ``30`` \| ``31`` \| ``32`` \| ``33`` \| ``34`` \| ``35`` \| ``36`` \| ``37`` \| ``38`` \| ``39`` \| ``40`` \| ``41`` \| ``42`` \| ``43`` \| ``44`` \| ``45`` \| ``46`` \| ``47`` \| ``48`` \| ``49`` \| ``50`` \| ``51`` \| ``52`` \| ``53`` \| ``54`` \| ``55`` \| ``56`` \| ``57`` \| ``58`` \| ``59`` \| ``60`` \| ``61`` \| ``62`` \| ``63`` \| ``64`` \| ``65`` \| ``66`` \| ``67`` \| ``68`` \| ``69`` \| ``70`` \| ``71`` \| ``72`` \| ``73`` \| ``74`` \| ``75`` \| ``76`` \| ``77`` \| ``78`` \| ``79`` \| ``80`` \| ``81`` \| ``82`` \| ``83`` \| ``84`` \| ``85`` \| ``86`` \| ``87`` \| ``88`` \| ``89`` \| ``90`` \| ``91`` \| ``92`` \| ``93`` \| ``94`` \| ``95`` \| ``96`` \| ``97`` \| ``98`` \| ``99`` \| ``100`` \| ``101`` \| ``102`` \| ``103`` \| ``104`` \| ``105`` \| ``106`` \| ``107`` \| ``108`` \| ``109`` \| ``110`` \| ``111`` \| ``112`` \| ``113`` \| ``114`` \| ``115`` \| ``116`` \| ``117`` \| ``118`` \| ``119`` \| ``120`` \| ``121`` \| ``122`` \| ``123`` \| ``124`` \| ``125`` \| ``126`` |

#### Returns

\_v is MidiNoteNumber

#### Defined in

[mnn.ts:16](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L16)

___

### markNum

▸ **markNum**(`v`): v is MidiNoteNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

v is MidiNoteNumber

#### Defined in

[mnn.ts:17](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L17)

___

### markUnknown

▸ **markUnknown**(`v`): v is MidiNoteNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

v is MidiNoteNumber

#### Defined in

[mnn.ts:18](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L18)

___

### pc

▸ **pc**(`mnn`): [`PitchClass`](PC.md#pitchclass)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnn` | [`MidiNoteNumber`](MNN.md#midinotenumber) |

#### Returns

[`PitchClass`](PC.md#pitchclass)

#### Defined in

[pc.ts:47](https://github.com/noriapi/brand-music/blob/d3723cb/src/pc.ts#L47)

___

### pi

▸ **pi**(`from`, `to`): [`PitchInterval`](PI.md#pitchinterval)

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`MidiNoteNumber`](MNN.md#midinotenumber) |
| `to` | [`MidiNoteNumber`](MNN.md#midinotenumber) |

#### Returns

[`PitchInterval`](PI.md#pitchinterval)

#### Defined in

[pi.ts:62](https://github.com/noriapi/brand-music/blob/d3723cb/src/pi.ts#L62)

___

### transposeChecked

▸ **transposeChecked**(`value`, `interval`): `undefined` \| [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MidiNoteNumber`](MNN.md#midinotenumber) |
| `interval` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

`undefined` \| [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:33](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L33)

___

### transposeClamped

▸ **transposeClamped**(`value`, `interval`): [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MidiNoteNumber`](MNN.md#midinotenumber) |
| `interval` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:37](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L37)

___

### transposeModded

▸ **transposeModded**(`value`, `interval`): [`MidiNoteNumber`](MNN.md#midinotenumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`MidiNoteNumber`](MNN.md#midinotenumber) |
| `interval` | [`PitchInterval`](PI.md#pitchinterval) |

#### Returns

[`MidiNoteNumber`](MNN.md#midinotenumber)

#### Defined in

[mnn.ts:41](https://github.com/noriapi/brand-music/blob/d3723cb/src/mnn.ts#L41)
