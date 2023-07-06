import { describe, expect, it } from "vitest";

import * as IC from "./ic.js";

describe("markNum", () => {
  it("should return true", () => {
    expect(IC.markNum(0)).toBe(true);
    expect(IC.markNum(6)).toBe(true);
  });

  it("should return false", () => {
    expect(IC.markNum(-1)).toBe(false);
    expect(IC.markNum(7)).toBe(false);
    expect(IC.markNum(0.5)).toBe(false);
    expect(IC.markNum(Number.NaN)).toBe(false);
    expect(IC.markNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(IC.markNum(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
