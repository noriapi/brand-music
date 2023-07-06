import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import * as S from "./semitones.js";

describe("markNum", () => {
  it.prop([fc.maxSafeNat()])("should return true", (int) => {
    expect(S.markNum(int)).toBe(true);
  });

  it("should return false", () => {
    expect(S.markNum(0.5)).toBe(false);
    expect(S.markNum(-1)).toBe(false);
    expect(S.markNum(Number.NaN)).toBe(false);
    expect(S.markNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(S.markNum(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
