import type { Int } from "./refined/Int.js";
import * as I from "./refined/Int.js";
import { Negate, RangedNat } from "./refined/Literal.js";
import { makeAbs } from "./refined/NonNegative.js";
import { NonNegativeInt } from "./refined/NonNegativeInt.js";

type Shape = Int;
export const hasShape = I.isInt;

export interface PitchIntervalBrand {
  readonly PitchInterval: unique symbol;
}

/**
 * Ordered pitch interval
 *
 * Number of semitones that separates one pitch from another, upward or downward.
 * @see {@link https://en.wikipedia.org/wiki/Pitch_interval#Ordered_Pitch_Interval}
 */
export type PitchInterval = Shape & PitchIntervalBrand;

export const mark = (_v: Int): _v is PitchInterval => true;
export const markNum = (v: number): v is PitchInterval => hasShape(v);
export const markUnknown = (v: unknown): v is PitchInterval => hasShape(v);

type PartialPositivePitchInterval = RangedNat<1, 999>;
type PartialPitchInterval =
  | PartialPositivePitchInterval
  | 0
  | Negate<PartialPositivePitchInterval>;

export const from = (v: Shape | PartialPitchInterval) => v as PitchInterval;
export const fromNum = (v: number) => (markNum(v) ? v : undefined);
export const fromNumRound = (v: number) => from(I.makeRound(v));
export const fromNumTrunc = (v: number) => from(I.makeTrunc(v));
export const fromUnknown = (v: unknown) => (markUnknown(v) ? v : undefined);

const fromUndefinedable = (v?: Int | undefined) => (v != null ? from(v) : v);

// operators
export const add = (a: PitchInterval, b: PitchInterval) => from(I.add(a, b));
export const addChecked = (a: PitchInterval, b: PitchInterval) =>
  fromUndefinedable(I.addChecked(a, b));

export const sub = (a: PitchInterval, b: PitchInterval) => from(I.sub(a, b));
export const subChecked = (a: PitchInterval, b: PitchInterval) =>
  fromUndefinedable(I.subChecked(a, b));

export const mul = (a: PitchInterval, b: Int) => from(I.mul(a, b));
export const mulChecked = (a: PitchInterval, b: PitchInterval) =>
  fromUndefinedable(I.mulChecked(a, b));
export const mulRound = (a: PitchInterval, b: number) => from(I.mulRound(a, b));
export const mulTrunc = (a: PitchInterval, b: number) => from(I.mulTrunc(a, b));

export const divChecked = (a: PitchInterval, b: PitchInterval) =>
  fromUndefinedable(I.divChecked(a, b));
export const divRound = (a: PitchInterval, b: number) => from(I.divRound(a, b));
export const divTrunc = (a: PitchInterval, b: number) => from(I.divTrunc(a, b));

export const octaves = (pi: PitchInterval): NonNegativeInt =>
  pi === 0
    ? (0 as NonNegativeInt)
    : (makeAbs(I.makeTrunc(pi / 12)) as NonNegativeInt);
export const direction = (pi: PitchInterval) => (pi < 0 ? -1 : pi > 0 ? 1 : 0);
