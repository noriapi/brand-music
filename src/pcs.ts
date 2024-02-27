import { PitchClass } from "./pc.js";
import * as PC from "./pc.js";
import * as TB from "./refined/twelve-bits.js";

export type Shape = TB.TwelveBits;
export const hasShape = TB.isTwelveBits;

export interface PitchClassSetBrand {
  readonly PitchClassSet: unique symbol;
}

export type PitchClassSet = Shape & PitchClassSetBrand;

export const mark = (_v: Shape): _v is PitchClassSet => true;
export const markRaw = (v: number): v is PitchClassSet => hasShape(v);
export const markRawUnknown = (v: unknown): v is PitchClassSet => hasShape(v);

export const fromRaw = (v: TB.TwelveBits | TB.PartialTwelveBits) =>
  v as PitchClassSet;
export const fromRawMasked = (v: number) => fromRaw(TB.masked(v));
export const fromRawUnknown = (v: unknown) =>
  TB.isTwelveBits(v) ? fromRaw(v) : undefined;

export const EMPTY = fromRaw(TB.EMPTY);
export const ALL = fromRaw(TB.ALL);

export const from = (...values: PitchClass[]) =>
  fromRaw(TB.fromValues(...values));

export const toggleAll = (pcs: PitchClassSet) => fromRaw(TB.complement(pcs));

export const union = (a: PitchClassSet, b: PitchClassSet) =>
  fromRaw(TB.union(a, b));

export const intersection = (a: PitchClassSet, b: PitchClassSet) =>
  fromRaw(TB.intersection(a, b));

export const symmetricDifference = (a: PitchClassSet, b: PitchClassSet) =>
  fromRaw(TB.symmetricDifference(a, b));

export const difference = (a: PitchClassSet, b: PitchClassSet) =>
  fromRaw(TB.difference(a, b));

export const has = (pcs: PitchClassSet, pc: PitchClass) => TB.has(pcs, pc);

export const add = (pcs: PitchClassSet, pc: PitchClass) =>
  fromRaw(TB.add(pcs, pc));

export const remove = (pcs: PitchClassSet, pc: PitchClass) =>
  fromRaw(TB.remove(pcs, pc));

export const toggle = (pcs: PitchClassSet, pc: PitchClass) =>
  fromRaw(TB.toggle(pcs, pc));

export const isSuperset = (value: PitchClassSet, of: PitchClassSet) =>
  TB.isSuperset(value, of);

export const isSubset = (value: PitchClassSet, of: PitchClassSet) =>
  TB.isSubset(value, of);

export const values = (pcs: PitchClassSet) => TB.values(pcs).map(PC.from);
