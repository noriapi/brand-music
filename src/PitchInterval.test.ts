import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import * as PI from "./PitchInterval.js";

describe("markNum", () => {
  it.prop([fc.maxSafeInteger()])("should return true", (int) => {
    expect(PI.markNum(int)).toBe(true);
  });

  it.each([
    0.5,
    Number.NaN,
    Number.NEGATIVE_INFINITY,
    Number.POSITIVE_INFINITY,
  ])("markNum(%f) -> false", (num) => {
    expect(PI.markNum(num)).toBe(false);
  });
});
