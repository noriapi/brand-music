import * as PC from "./pc.js";
import * as PI from "./pi.js";
import { Int } from "./refined/int.js";
import { all, clamp, is, modded, RangedNat } from "./refined/literal.js";

const min = 0;
const max = 127;
type Shape = RangedNat<typeof min, typeof max>;
export const hasShape = is(min, max);

export interface MidiNoteNumberBrand {
  readonly MidiNoteNumber: unique symbol;
}
export type MidiNoteNumber = Shape & MidiNoteNumberBrand;

export const mark = (_v: Shape): _v is MidiNoteNumber => true;
export const markNum = (v: number): v is MidiNoteNumber => hasShape(v);
export const markUnknown = (v: unknown): v is MidiNoteNumber => hasShape(v);

export const from = (v: Shape) => v as MidiNoteNumber;
export const fromNum = (v: number) => (markNum(v) ? v : undefined);
export const fromIntClamp = (v: Int) => from(clamp(min, max)(v));
export const fromIntMod = (v: Int) => from(modded(min, max)(v));
export const fromUnknown = (v: unknown) => (markUnknown(v) ? v : undefined);

const const_ = <T extends Shape>(v: T) => v as T & MidiNoteNumber;
export const MIN = const_(min);
export const MAX = const_(max);
export const ALL: readonly MidiNoteNumber[] = all(min, max).map(const_);

const add = (value: MidiNoteNumber, interval: PI.PitchInterval) =>
  (value + interval) as Int;
export const transposeChecked = (
  value: MidiNoteNumber,
  interval: PI.PitchInterval
) => fromNum(add(value, interval));
export const transposeClamped = (
  value: MidiNoteNumber,
  interval: PI.PitchInterval
) => fromIntClamp(add(value, interval));
export const transposeModded = (
  value: MidiNoteNumber,
  interval: PI.PitchInterval
) => fromIntMod(add(value, interval));

// pitch interval
export const pi = PI.between;

// pitch class
export const pc = PC.fromMnn;

// TODO: other constants
export const C_1 = const_(0);
export const C4 = const_(60);
export const G9 = const_(127);
