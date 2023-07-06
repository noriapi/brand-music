import { describe, expect, it } from "vitest";

import * as PC from "./pc.js";

describe("markNum", () => {
  it("should return true", () => {
    expect(PC.markNum(0)).toBe(true);
    expect(PC.markNum(11)).toBe(true);
  });

  it("should return false", () => {
    expect(PC.markNum(-1)).toBe(false);
    expect(PC.markNum(12)).toBe(false);
    expect(PC.markNum(0.5)).toBe(false);
    expect(PC.markNum(Number.NaN)).toBe(false);
    expect(PC.markNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(PC.markNum(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
