import { all, RangedNat } from "./Literal.js";
import { isNonNegativeInt, NonNegativeInt } from "./NonNegativeInt.js";

export interface TwelveBitsBrand {
  readonly TwelveBits: unique symbol;
}

export type TwelveBits = NonNegativeInt & TwelveBitsBrand;

export const isTwelveBits = (v: unknown): v is TwelveBits =>
  isNonNegativeInt(v) && v < 1 << 12;

export type PartialTwelveBits =
  | 0b000000000000
  | 0b000000000001
  | 0b000000000010
  | 0b000000000100
  | 0b000000001000
  | 0b000000010000
  | 0b000000100000
  | 0b000001000000
  | 0b000010000000
  | 0b000100000000
  | 0b001000000000
  | 0b010000000000
  | 0b100000000000
  | 0b111111111101
  | 0b111111111011
  | 0b111111110111
  | 0b111111101111
  | 0b111111011111
  | 0b111110111111
  | 0b111101111111
  | 0b111011111111
  | 0b110111111111
  | 0b101111111111
  | 0b011111111111
  | 0b111111111111;

export type Value = RangedNat<0, 11>;

export const EMPTY = 0 as TwelveBits;
export const ALL = 0b111111111111 as TwelveBits;

export const masked = (v: number) => (v & ALL) as TwelveBits;

const one = (value: Value) => (1 << value) as TwelveBits;
export const fromValues = (...values: Value[]) => values.map(one).reduce(union);

export const values = (a: TwelveBits) =>
  all(0, 11).filter((value) => has(a, value));

export const complement = (a: TwelveBits) => masked(~a);

export const union = (a: TwelveBits, b: TwelveBits) => (a | b) as TwelveBits;

export const intersection = (a: TwelveBits, b: TwelveBits) =>
  (a & b) as TwelveBits;

export const symmetricDifference = (a: TwelveBits, b: TwelveBits) =>
  (a ^ b) as TwelveBits;

export const difference = (a: TwelveBits, b: TwelveBits) =>
  intersection(a, complement(b));

export const has = (a: TwelveBits, value: Value) =>
  Boolean(intersection(a, fromValues(value)));

export const add = (a: TwelveBits, value: Value) => union(a, fromValues(value));

export const remove = (a: TwelveBits, value: Value) =>
  intersection(a, complement(fromValues(value)));

export const toggle = (a: TwelveBits, value: Value) =>
  symmetricDifference(a, fromValues(value));

export const isSuperset = (a: TwelveBits, of: TwelveBits) =>
  !intersection(complement(a), of);

export const isSubset = (a: TwelveBits, of: TwelveBits) => isSuperset(of, a);
