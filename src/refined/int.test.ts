import { describe, expect, it } from "vitest";

import { isInt } from "./int.js";

describe("isInt", () => {
  it("should return true", () => {
    expect(isInt(0)).toBe(true);
    expect(isInt(-0)).toBe(true);
    expect(isInt(Number.MAX_SAFE_INTEGER)).toBe(true);
    expect(isInt(Number.MIN_SAFE_INTEGER)).toBe(true);
  });

  it("should return false", () => {
    expect(isInt(0.1)).toBe(false);
    expect(isInt(-0.1)).toBe(false);
    expect(isInt(Number.NaN)).toBe(false);
    expect(isInt(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(isInt(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
