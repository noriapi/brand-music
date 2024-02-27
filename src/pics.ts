import { PitchIntervalClass } from "./pic.js";
import * as PIC from "./pic.js";
import * as TB from "./refined/twelve-bits.js";

export type Shape = TB.TwelveBits;
export const hasShape = TB.isTwelveBits;

export interface PitchIntervalClassSetBrand {
  readonly PitchIntervalClassSet: unique symbol;
}

export type PitchIntervalClassSet = Shape & PitchIntervalClassSetBrand;

export const mark = (_v: Shape): _v is PitchIntervalClassSet => true;
export const markRaw = (v: number): v is PitchIntervalClassSet => hasShape(v);
export const markRawUnknown = (v: unknown): v is PitchIntervalClassSet =>
  hasShape(v);

export const fromRaw = (v: TB.TwelveBits | TB.PartialTwelveBits) =>
  v as PitchIntervalClassSet;
export const fromRawMasked = (v: number) => fromRaw(TB.masked(v));
export const fromRawUnknown = (v: unknown) =>
  TB.isTwelveBits(v) ? fromRaw(v) : undefined;

export const EMPTY = fromRaw(TB.EMPTY);
export const ALL = fromRaw(TB.ALL);

const one = (pc: PitchIntervalClass) => (1 << pc) as PitchIntervalClassSet;
export const from = (...values: PitchIntervalClass[]) =>
  values.map(one).reduce(union);

export const toggleAll = (pcs: PitchIntervalClassSet) =>
  (~pcs & ALL) as PitchIntervalClassSet;

export const union = (a: PitchIntervalClassSet, b: PitchIntervalClassSet) =>
  (a | b) as PitchIntervalClassSet;

export const intersection = (
  a: PitchIntervalClassSet,
  b: PitchIntervalClassSet,
) => (a & b) as PitchIntervalClassSet;

export const symmetricDifference = (
  a: PitchIntervalClassSet,
  b: PitchIntervalClassSet,
) => (a ^ b) as PitchIntervalClassSet;

export const difference = (
  a: PitchIntervalClassSet,
  b: PitchIntervalClassSet,
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
  of: PitchIntervalClassSet,
) => !intersection(toggleAll(value), of);

export const isSubset = (
  value: PitchIntervalClassSet,
  of: PitchIntervalClassSet,
) => isSuperset(of, value);

export const values = (pics: PitchIntervalClassSet) =>
  TB.values(pics).map(PIC.from);
