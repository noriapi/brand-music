import { describe, expect, it } from "vitest";

import type { PitchInterval } from "./pi.js";
import * as PIC from "./pic.js";

describe("markNum", () => {
  it("should return true", () => {
    expect(PIC.markNum(0)).toBe(true);
    expect(PIC.markNum(11)).toBe(true);
  });

  it("should return false", () => {
    expect(PIC.markNum(-1)).toBe(false);
    expect(PIC.markNum(12)).toBe(false);
    expect(PIC.markNum(0.5)).toBe(false);
    expect(PIC.markNum(Number.NaN)).toBe(false);
    expect(PIC.markNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(PIC.markNum(Number.POSITIVE_INFINITY)).toBe(false);
  });
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
  }
);
