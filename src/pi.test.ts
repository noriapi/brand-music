import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import * as PI from "./pi.js";

describe("markNum", () => {
  it.prop([fc.maxSafeInteger()])("should return true", (int) => {
    expect(PI.markNum(int)).toBe(true);
  });

  it("should return false", () => {
    expect(PI.markNum(0.5)).toBe(false);
    expect(PI.markNum(Number.NaN)).toBe(false);
    expect(PI.markNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(PI.markNum(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
