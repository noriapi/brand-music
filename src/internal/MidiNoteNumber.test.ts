import { expect, it } from "vitest";

import * as MNN from "./MidiNoteNumber.js";

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
