import { expect, it } from "vitest";

import type { PitchInterval } from "./PitchInterval.js";
import * as PIC from "./PitchIntervalClass.js";
import type { Semitones } from "./Semitones.js";

it.each([0, 11])("markNum(%f) -> true", (num) => {
  expect(PIC.markNum(num)).toBe(true);
});

it.each([
  -1,
  12,
  0.5,
  Number.NaN,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY,
])("markNum(%f) -> false", (num) => {
  expect(PIC.markNum(num)).toBe(false);
});

it.each([
  [-13, 11],
  [-12, 0],
  [-11, 1],
  [-1, 11],
  [0, 0],
  [1, 1],
  [11, 11],
  [12, 0],
  [13, 1],
] as [pi: PitchInterval, pic: PIC.PitchIntervalClass][])(
  "fromPi(%i) -> %i",
  (pi, expected) => {
    expect(PIC.fromPi(pi)).toBe(expected);
  },
);

it.each([
  [0, 0],
  [1, 1],
  [11, 11],
  [12, 0],
  [13, 1],
] as [semitones: Semitones, pic: PIC.PitchIntervalClass][])(
  "fromSemitones(%i) -> %i",
  (pi, expected) => {
    expect(PIC.fromSemitones(pi)).toBe(expected);
  },
);
