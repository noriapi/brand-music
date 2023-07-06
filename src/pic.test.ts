import { describe, expect, it } from "vitest";

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
