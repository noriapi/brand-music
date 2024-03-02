import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import * as ST from "./Semitones.js";

describe("markNum", () => {
  it.prop([fc.maxSafeNat()])("should return true", (int) => {
    expect(ST.markNum(int)).toBe(true);
  });

  it.each([
    0.5,
    -1,
    Number.NaN,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY,
  ])("markNum(%f) -> false", (num) => {
    expect(ST.markNum(num)).toBe(false);
  });
});

describe("octaves", () => {
  it.each([
    [0, 0],
    [1, 0],
    [11, 0],
    [12, 1],
  ] as [st: ST.Semitones, expected: number][])(
    "octaves(%i) -> %i",
    (st, expected) => {
      expect(ST.octaves(st)).toBe(expected);
    },
  );
});
