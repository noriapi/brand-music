import { fc } from "@fast-check/vitest";
import { expect, it } from "vitest";

import * as MNN from "./mnn.js";

export const arbMnn = () =>
  fc.integer({
    min: MNN.MIN,
    max: MNN.MAX,
  }) as fc.Arbitrary<MNN.MidiNoteNumber>;

it.each([0, 127])("markNum(%f) -> true", (num) => {
  expect(MNN.markNum(num)).toBe(true);
});

it.each([
  -1,
  128,
  0.5,
  Number.NaN,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY,
])("markNum(%f) -> false", (num) => {
  expect(MNN.markNum(num)).toBe(false);
});
