import { PitchIntervalClass } from "./pic.js";
import * as PIC from "./pic.js";
import { isTwelveBits, TwelveBits } from "./refined/twelve-bits.js";

export interface PitchIntervalClassSetBrand {
  readonly PitchIntervalClassSet: unique symbol;
}

export type PitchIntervalClassSet = TwelveBits & PitchIntervalClassSetBrand;

export const const_ = <T>(v: T) => v as T & PitchIntervalClassSet;
export const EMPTY = const_(0);
export const ALL = const_(
  //109876543210
  0b111111111111
);

export const fromRaw = <T extends TwelveBits>(v: T) =>
  v as T & PitchIntervalClassSet;
export const fromRawMasked = (v: number) => (v & ALL) as PitchIntervalClassSet;
export const fromRawUnknown = (v: unknown) =>
  isTwelveBits(v) ? fromRaw(v) : undefined;

const one = (pc: PitchIntervalClass) => (1 << pc) as PitchIntervalClassSet;
export const from = (...values: PitchIntervalClass[]) =>
  values.map(one).reduce(union);

export const toggleAll = (pcs: PitchIntervalClassSet) =>
  (~pcs & ALL) as PitchIntervalClassSet;

export const union = (a: PitchIntervalClassSet, b: PitchIntervalClassSet) =>
  (a | b) as PitchIntervalClassSet;

export const intersection = (
  a: PitchIntervalClassSet,
  b: PitchIntervalClassSet
) => (a & b) as PitchIntervalClassSet;

export const symmetricDifference = (
  a: PitchIntervalClassSet,
  b: PitchIntervalClassSet
) => (a ^ b) as PitchIntervalClassSet;

export const difference = (
  a: PitchIntervalClassSet,
  b: PitchIntervalClassSet
) => intersection(a, toggleAll(b));

export const has = (pcs: PitchIntervalClassSet, pc: PitchIntervalClass) =>
  Boolean(intersection(pcs, from(pc)));

export const add = (pcs: PitchIntervalClassSet, pc: PitchIntervalClass) =>
  union(pcs, from(pc));

export const remove = (pcs: PitchIntervalClassSet, pc: PitchIntervalClass) =>
  intersection(pcs, toggleAll(from(pc)));

export const toggle = (pcs: PitchIntervalClassSet, pc: PitchIntervalClass) =>
  symmetricDifference(pcs, from(pc));

export const isSuperset = (
  value: PitchIntervalClassSet,
  of: PitchIntervalClassSet
) => !intersection(toggleAll(value), of);

export const isSubset = (
  value: PitchIntervalClassSet,
  of: PitchIntervalClassSet
) => isSuperset(of, value);

export const values = (pcs: PitchIntervalClassSet) =>
  PIC.ALL.filter((pc) => has(pcs, pc));
