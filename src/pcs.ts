import { PitchClass } from "./pc.js";
import * as PC from "./pc.js";
import { isTwelveBits, TwelveBits } from "./refined/twelve-bits.js";

export interface PitchClassSetBrand {
  readonly PitchClassSet: unique symbol;
}

export type PitchClassSet = TwelveBits & PitchClassSetBrand;

export const const_ = <T>(v: T) => v as T & PitchClassSet;
export const EMPTY = const_(0);
export const ALL = const_(
  //B A G FE D C
  0b111111111111
);

export const fromRaw = <T extends TwelveBits>(v: T) => v as T & PitchClassSet;
export const fromRawMasked = (v: number) => (v & ALL) as PitchClassSet;
export const fromRawUnknown = (v: unknown) =>
  isTwelveBits(v) ? fromRaw(v) : undefined;

const one = (pc: PitchClass) => (1 << pc) as PitchClassSet;
export const from = (...values: PitchClass[]) => values.map(one).reduce(union);

export const toggleAll = (pcs: PitchClassSet) => (~pcs & ALL) as PitchClassSet;

export const union = (a: PitchClassSet, b: PitchClassSet) =>
  (a | b) as PitchClassSet;

export const intersection = (a: PitchClassSet, b: PitchClassSet) =>
  (a & b) as PitchClassSet;

export const symmetricDifference = (a: PitchClassSet, b: PitchClassSet) =>
  (a ^ b) as PitchClassSet;

export const difference = (a: PitchClassSet, b: PitchClassSet) =>
  intersection(a, toggleAll(b));

export const has = (pcs: PitchClassSet, pc: PitchClass) =>
  Boolean(intersection(pcs, from(pc)));

export const add = (pcs: PitchClassSet, pc: PitchClass) => union(pcs, from(pc));

export const remove = (pcs: PitchClassSet, pc: PitchClass) =>
  intersection(pcs, toggleAll(from(pc)));

export const toggle = (pcs: PitchClassSet, pc: PitchClass) =>
  symmetricDifference(pcs, from(pc));

export const isSuperset = (value: PitchClassSet, of: PitchClassSet) =>
  !intersection(toggleAll(value), of);

export const isSubset = (value: PitchClassSet, of: PitchClassSet) =>
  isSuperset(of, value);

export const values = (pcs: PitchClassSet) =>
  PC.ALL.filter((pc) => has(pcs, pc));
