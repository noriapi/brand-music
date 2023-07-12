import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

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
