import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import { arbMnn } from "./mnn.test.js";
import * as S from "./semitones.js";

describe("markNum", () => {
  it.prop([fc.maxSafeNat()])("should return true", (int) => {
    expect(S.markNum(int)).toBe(true);
  });

  it.each([
    0.5,
    -1,
    Number.NaN,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY,
  ])("markNum(%f) -> false", (num) => {
    expect(S.markNum(num)).toBe(false);
  });
});

describe("between", () => {
  it.prop([arbMnn(), arbMnn()])(
    "should always return the same value when args are swapped",
    (a, b) => {
      expect(S.between(a, b)).toBe(S.between(b, a));
    }
  );
});

describe("octaves", () => {
  it.each([
    [0, 0],
    [1, 0],
    [11, 0],
    [12, 1],
  ] as [st: S.Semitones, expected: number][])(
    "octaves(%i) -> %i",
    (st, expected) => {
      expect(S.octaves(st)).toBe(expected);
    }
  );
});
