import { fc } from "@fast-check/vitest";

import * as MNN from "./MidiNoteNumber.js";

export const arbMnn = () =>
  fc.integer({
    min: MNN.MIN,
    max: MNN.MAX,
  }) as fc.Arbitrary<MNN.MidiNoteNumber>;
