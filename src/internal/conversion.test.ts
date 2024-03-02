import { it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import * as C from "./conversion.js";
import type { PitchInterval } from "./PitchInterval.js";
import type { PitchIntervalClass } from "./PitchIntervalClass.js";
import type { Semitones } from "./Semitones.js";
import { arbMnn } from "./test-utils.js";

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
] as [pi: PitchInterval, pic: PitchIntervalClass][])(
  "picFromPi(%i) -> %i",
  (pi, expected) => {
    expect(C.picFromPi(pi)).toBe(expected);
  },
);

it.each([
  [0, 0],
  [1, 1],
  [11, 11],
  [12, 0],
  [13, 1],
] as [semitones: Semitones, pic: PitchIntervalClass][])(
  "picFromSemitones(%i) -> %i",
  (pi, expected) => {
    expect(C.picFromSemitones(pi)).toBe(expected);
  },
);

describe("stBetweenMnn", () => {
  it.prop([arbMnn(), arbMnn()])(
    "should always return the same value when args are swapped",
    (a, b) => {
      expect(C.stBetweenMnn(a, b)).toBe(C.stBetweenMnn(b, a));
    },
  );
});
