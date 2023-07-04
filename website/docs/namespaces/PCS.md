---
id: "PCS"
title: "Namespace: PCS"
sidebar_label: "PCS"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PitchClassSetBrand](../interfaces/PCS.PitchClassSetBrand.md)

## Type Aliases

### PitchClassSet

Ƭ **PitchClassSet**: `TwelveBits` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Defined in

[pcs.ts:9](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L9)

## Variables

### ALL

• `Const` **ALL**: ``4095`` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Defined in

[pcs.ts:13](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L13)

___

### EMPTY

• `Const` **EMPTY**: ``0`` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Defined in

[pcs.ts:12](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L12)

## Functions

### add

▸ **add**(`pcs`, `pc`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `pc` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:43](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L43)

___

### const\_

▸ **const_**<`T`\>(`v`): `T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Defined in

[pcs.ts:11](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L11)

___

### difference

▸ **difference**(`a`, `b`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `b` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:37](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L37)

___

### from

▸ **from**(`...values`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...values` | [`PitchClass`](PC.md#pitchclass)[] |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:24](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L24)

___

### fromRaw

▸ **fromRaw**<`T`\>(`v`): `T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TwelveBits` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Defined in

[pcs.ts:18](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L18)

___

### fromRawMasked

▸ **fromRawMasked**(`v`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:19](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L19)

___

### fromRawUnknown

▸ **fromRawUnknown**(`v`): `undefined` \| `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchClassSetBrand`](../interfaces/PCS.PitchClassSetBrand.md)

#### Defined in

[pcs.ts:20](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L20)

___

### has

▸ **has**(`pcs`, `pc`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `pc` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

`boolean`

#### Defined in

[pcs.ts:40](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L40)

___

### intersection

▸ **intersection**(`a`, `b`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `b` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:31](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L31)

___

### isSubset

▸ **isSubset**(`value`, `of`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `of` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

`boolean`

#### Defined in

[pcs.ts:54](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L54)

___

### isSuperset

▸ **isSuperset**(`value`, `of`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `of` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

`boolean`

#### Defined in

[pcs.ts:51](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L51)

___

### remove

▸ **remove**(`pcs`, `pc`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `pc` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:45](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L45)

___

### symmetricDifference

▸ **symmetricDifference**(`a`, `b`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `b` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:34](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L34)

___

### toggle

▸ **toggle**(`pcs`, `pc`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `pc` | [`PitchClass`](PC.md#pitchclass) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:48](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L48)

___

### toggleAll

▸ **toggleAll**(`pcs`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:26](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L26)

___

### union

▸ **union**(`a`, `b`): [`PitchClassSet`](PCS.md#pitchclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchClassSet`](PCS.md#pitchclassset) |
| `b` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

[`PitchClassSet`](PCS.md#pitchclassset)

#### Defined in

[pcs.ts:28](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L28)

___

### values

▸ **values**(`pcs`): [`PitchClass`](PC.md#pitchclass)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchClassSet`](PCS.md#pitchclassset) |

#### Returns

[`PitchClass`](PC.md#pitchclass)[]

#### Defined in

[pcs.ts:57](https://github.com/noriapi/brand-music/blob/d3723cb/src/pcs.ts#L57)
