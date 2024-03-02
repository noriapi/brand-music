import * as I from "./refined/Int.js";
import { RangedNat } from "./refined/Literal.js";
import { makeAbs } from "./refined/NonNegative.js";
import { isNonNegativeInt, NonNegativeInt } from "./refined/NonNegativeInt.js";

type Shape = NonNegativeInt;
export const hasShape = isNonNegativeInt;

export interface SemitonesBrand {
  readonly Semitones: unique symbol;
}

/**
 * Unordered pitch interval
 *
 * Number of semitones that separates one pitch from another.
 * @see {@link https://en.wikipedia.org/wiki/Pitch_interval#Unordered_Pitch_Interval}
 */
export type Semitones = NonNegativeInt & SemitonesBrand;

export const mark = (_v: Shape): _v is Semitones => true;
export const markNum = (v: number): v is Semitones => hasShape(v);
export const markUnknown = (v: unknown): v is Semitones => hasShape(v);

export const from = (v: Shape | RangedNat<0, 999>) => v as Semitones;
export const fromNum = (v: number) => (markNum(v) ? v : undefined);
export const fromIntAbs = (v: I.Int) => from(makeAbs(v) as NonNegativeInt);
export const fromUnknown = (v: unknown) => (markUnknown(v) ? v : undefined);

const const_ = <T>(v: T) => v as T & Semitones;
export const MIN = const_(0);

export const octaves = (st: Semitones) =>
  st === 0 ? (0 as NonNegativeInt) : (I.makeTrunc(st / 12) as NonNegativeInt);
