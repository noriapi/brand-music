import * as IC from "./ic.js";
import * as MNN from "./mnn.js";
import * as PIC from "./pic.js";
import * as I from "./refined/int.js";
import { all, asInt, clamp, is, modded, RangedInt } from "./refined/literal.js";

const min = 0;
const max = 11;
type Shape = RangedInt<typeof min, typeof max>;
export const hasShape = is(min, max);

export interface PitchClassBrand {
  readonly PitchClass: unique symbol;
}

/**
 * Integer notation of pitch class
 *
 * @see {@link https://en.wikipedia.org/wiki/Pitch_class}
 */
export type PitchClass = Shape & PitchClassBrand;

export const mark = (_v: Shape): _v is PitchClass => true;
export const markNum = (v: number): v is PitchClass => hasShape(v);
export const markUnknown = (v: unknown): v is PitchClass => hasShape(v);

export const from = (v: Shape) => v as PitchClass;
export const fromNum = (v: number) => (markNum(v) ? v : undefined);
export const fromIntClamp = (v: I.Int) => from(clamp(min, max)(v));
export const fromIntMod = (v: I.Int) => from(modded(min, max)(v));
export const fromUnknown = (v: unknown) =>
  is(min, max)(v) ? from(v) : undefined;

const const_ = <T extends Shape>(value: T) => value as T & PitchClass;
export const MIN = const_(min);
export const MAX = const_(max);
export const ALL: readonly PitchClass[] = all(min, max).map(const_);

export const transpose = (
  value: PitchClass,
  interval: PIC.PitchIntervalClass
) => fromIntMod(I.add(asInt(value), asInt(interval)));

export const invert = (v: PitchClass, index: Shape = 0) =>
  fromIntMod(I.sub(asInt(index), asInt(v)));

export const fromMnn = (mnn: MNN.MidiNoteNumber) => fromIntMod(asInt(mnn));

export const pic = PIC.between;
export const ic = IC.between;
