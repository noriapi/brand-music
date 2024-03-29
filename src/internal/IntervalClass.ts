import * as I from "./refined/Int.js";
import { all, clamp, is, modded, RangedNat } from "./refined/Literal.js";

const min = 0;
const max = 6;
export type Shape = RangedNat<typeof min, typeof max>;
export const hasShape = is(min, max);

export interface IntervalClassBrand {
  readonly IntervalClass: unique symbol;
}

/**
 * Unordered pitch-class interval
 *
 * Number of ascending semitones from one pitch-class to the next, ordered from lowest to highest
 * @see {@link https://en.wikipedia.org/wiki/Pitch_interval#Unordered_pitch-class_intervals_('interval_class;_IC')}
 */
export type IntervalClass = Shape & IntervalClassBrand;

export const mark = (_v: Shape): _v is IntervalClass => true;
export const markNum = (v: number): v is IntervalClass => hasShape(v);
export const markUnknown = (v: unknown): v is IntervalClass => hasShape(v);

export const from = (v: Shape) => v as IntervalClass;
export const fromNum = (v: number) => (markNum(v) ? v : undefined);
export const fromIntClamp = (v: I.Int) => from(clamp(min, max)(v));
export const fromIntMod = (v: I.Int) => from(modded(min, max)(v));
export const fromUnknown = (v: unknown) => (markUnknown(v) ? v : undefined);

const const_ = <T extends Shape>(value: T) => value as T & IntervalClass;
export const MIN = const_(min);
export const MAX = const_(max);
export const ALL: readonly IntervalClass[] = all(min, max).map(const_);
