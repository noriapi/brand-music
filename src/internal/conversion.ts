import * as IC from "./IntervalClass.js";
import * as MNN from "./MidiNoteNumber.js";
import * as PC from "./PitchClass.js";
import * as PI from "./PitchInterval.js";
import * as PIC from "./PitchIntervalClass.js";
import * as I from "./refined/Int.js";
import { asInt } from "./refined/Literal.js";
import * as ST from "./Semitones.js";

export const icFromPic = (pic: PIC.PitchIntervalClass) =>
  Math.min(pic, PIC.invert(pic)) as IC.IntervalClass;
export const icBetweenPc = (a: PC.PitchClass, b: PC.PitchClass) =>
  icFromPic(picBetweenPc(a, b));

const mnnAdd = (value: MNN.MidiNoteNumber, interval: PI.PitchInterval) =>
  I.add(asInt(value), asInt(interval));
export const mnnTransposeChecked = (
  value: MNN.MidiNoteNumber,
  interval: PI.PitchInterval,
) => MNN.fromNum(mnnAdd(value, interval));
export const mnnTransposeClamped = (
  value: MNN.MidiNoteNumber,
  interval: PI.PitchInterval,
) => MNN.fromIntClamp(mnnAdd(value, interval));
export const mnnTransposeModded = (
  value: MNN.MidiNoteNumber,
  interval: PI.PitchInterval,
) => MNN.fromIntMod(mnnAdd(value, interval));

export const pcTranspose = (
  value: PC.PitchClass,
  interval: PIC.PitchIntervalClass,
) => PC.fromIntMod(I.add(asInt(value), asInt(interval)));
export const pcFromMnn = (mnn: MNN.MidiNoteNumber) => PC.fromIntMod(asInt(mnn));

export const piBetweenMnn = (
  from: MNN.MidiNoteNumber,
  to: MNN.MidiNoteNumber,
) => PI.from(I.sub(asInt(to), asInt(from)));

export const picBetweenPc = (from: PC.PitchClass, to: PC.PitchClass) =>
  PIC.fromIntMod(I.sub(asInt(to), asInt(from)));

/**
 * Gets the pitch interval class of the pitch interval.
 *
 * @example
 * ```ts
 * import * as PI from "brand-music/PitchInterval";
 * import * as PIC from "brand-music/PitchIntervalClass";
 *
 * const picOfPi = PIC.fromPi(PI.from(-2)); // 10
 * const picOfSemitones = PIC.fromSemitones(PI.semitones(PI.from(-2))); // 2
 * ```
 */
export const picFromPi = (pi: PI.PitchInterval) => PIC.fromIntMod(pi);
export const picFromSemitones = (semitones: ST.Semitones) =>
  PIC.fromIntMod(semitones);

export const stFromPi = (pi: PI.PitchInterval) => ST.fromIntAbs(pi);
export const stBetweenMnn = (a: MNN.MidiNoteNumber, b: MNN.MidiNoteNumber) =>
  ST.fromIntAbs(I.sub(asInt(a), asInt(b)));
