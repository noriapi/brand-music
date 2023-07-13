import { PitchClass } from "./pc.js";
import { PitchInterval } from "./pi.js";
import * as I from "./refined/int.js";
import { all, asInt, clamp, is, modded, RangedNat } from "./refined/literal.js";
import { Semitones } from "./semitones.js";

export { fromPic as ic } from "./ic.js";

const min = 0;
const max = 11;
export type Shape = RangedNat<typeof min, typeof max>;
export const hasShape = is(min, max);

export interface PitchIntervalClassBrand {
  readonly PitchIntervalClass: unique symbol;
}

/**
 * Ordered pitch-class interval
 *
 * Number of ascending semitones from one pitch-class to the next, ordered from lowest to highest
 * @see {@link https://en.wikipedia.org/wiki/Pitch_interval#Ordered_pitch-class_intervals_('pitch_interval_class;_PIC')}
 */
export type PitchIntervalClass = Shape & PitchIntervalClassBrand;

export const mark = (_v: Shape): _v is PitchIntervalClass => true;
export const markNum = (v: number): v is PitchIntervalClass => hasShape(v);
export const markUnknown = (v: unknown): v is PitchIntervalClass => hasShape(v);

export const from = (v: Shape) => v as PitchIntervalClass;
export const fromNum = (v: number) => (markNum(v) ? v : undefined);
export const fromIntClamp = (v: I.Int) => from(clamp(min, max)(v));
export const fromIntMod = (v: I.Int) => from(modded(min, max)(v));
export const fromUnknown = (v: unknown) => (markUnknown(v) ? v : undefined);

const const_ = <T extends Shape>(value: T) => value as T & PitchIntervalClass;
export const MIN = const_(min);
export const MAX = const_(max);
export const ALL: readonly PitchIntervalClass[] = all(min, max).map(const_);

export const between = (from: PitchClass, to: PitchClass) =>
  fromIntMod(I.sub(asInt(to), asInt(from)));

/**
 * Gets the pitch interval class of the pitch interval.
 *
 * @example
 * ```ts
 * import { PI, PIC } from "brand-music";
 *
 * const picOfPi = PIC.fromPi(PI.from(-2)); // 10
 * const picOfSemitones = PIC.fromSemitones(PI.semitones(PI.from(-2))); // 2
 * ```
 */
export const fromPi = (pi: PitchInterval) => fromIntMod(pi);
export const fromSemitones = (semitones: Semitones) => fromIntMod(semitones);

export const invert = (v: PitchIntervalClass, index: Shape = 0) =>
  fromIntMod(I.sub(asInt(index), asInt(v)));
