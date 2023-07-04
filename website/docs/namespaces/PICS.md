---
id: "PICS"
title: "Namespace: PICS"
sidebar_label: "PICS"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [PitchIntervalClassSetBrand](../interfaces/PICS.PitchIntervalClassSetBrand.md)

## References

### from

Renames and re-exports [pics](../modules.md#pics)

## Type Aliases

### PitchIntervalClassSet

Ƭ **PitchIntervalClassSet**: `TwelveBits` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Defined in

[pics.ts:9](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L9)

## Variables

### ALL

• `Const` **ALL**: ``4095`` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Defined in

[pics.ts:13](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L13)

___

### EMPTY

• `Const` **EMPTY**: ``0`` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Defined in

[pics.ts:12](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L12)

## Functions

### add

▸ **add**(`pcs`, `pc`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `pc` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:52](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L52)

___

### const\_

▸ **const_**<`T`\>(`v`): `T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Defined in

[pics.ts:11](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L11)

___

### difference

▸ **difference**(`a`, `b`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `b` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:44](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L44)

___

### fromRaw

▸ **fromRaw**<`T`\>(`v`): `T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TwelveBits` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`T` & `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Defined in

[pics.ts:18](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L18)

___

### fromRawMasked

▸ **fromRawMasked**(`v`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:20](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L20)

___

### fromRawUnknown

▸ **fromRawUnknown**(`v`): `undefined` \| `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `unknown` |

#### Returns

`undefined` \| `number` & `IntBrand` & `NonNegativeBrand` & `TwelveBitsBrand` & [`PitchIntervalClassSetBrand`](../interfaces/PICS.PitchIntervalClassSetBrand.md)

#### Defined in

[pics.ts:21](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L21)

___

### has

▸ **has**(`pcs`, `pc`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `pc` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) |

#### Returns

`boolean`

#### Defined in

[pics.ts:49](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L49)

___

### intersection

▸ **intersection**(`a`, `b`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `b` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:34](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L34)

___

### isSubset

▸ **isSubset**(`value`, `of`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `of` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

`boolean`

#### Defined in

[pics.ts:66](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L66)

___

### isSuperset

▸ **isSuperset**(`value`, `of`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `of` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

`boolean`

#### Defined in

[pics.ts:61](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L61)

___

### remove

▸ **remove**(`pcs`, `pc`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `pc` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:55](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L55)

___

### symmetricDifference

▸ **symmetricDifference**(`a`, `b`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `b` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:39](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L39)

___

### toggle

▸ **toggle**(`pcs`, `pc`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `pc` | [`PitchIntervalClass`](PIC.md#pitchintervalclass) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:58](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L58)

___

### toggleAll

▸ **toggleAll**(`pcs`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:28](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L28)

___

### union

▸ **union**(`a`, `b`): [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |
| `b` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

[`PitchIntervalClassSet`](PICS.md#pitchintervalclassset)

#### Defined in

[pics.ts:31](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L31)

___

### values

▸ **values**(`pcs`): [`PitchIntervalClass`](PIC.md#pitchintervalclass)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `pcs` | [`PitchIntervalClassSet`](PICS.md#pitchintervalclassset) |

#### Returns

[`PitchIntervalClass`](PIC.md#pitchintervalclass)[]

#### Defined in

[pics.ts:71](https://github.com/noriapi/brand-music/blob/56d0169/src/pics.ts#L71)
