import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import { isNonNegative, makeAbs } from "./non-negative.js";

describe("isNonNegative", () => {
  it("should return true", () => {
    expect(isNonNegative(0)).toBe(true);
    expect(isNonNegative(-0)).toBe(true);
    expect(isNonNegative(0.1)).toBe(true);
    expect(isNonNegative(Number.POSITIVE_INFINITY)).toBe(true);
  });

  it("should return false", () => {
    expect(isNonNegative(-1)).toBe(false);
    expect(isNonNegative(-0.1)).toBe(false);
    expect(isNonNegative(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(isNonNegative(Number.NaN)).toBe(false);
  });
});

describe("makeAbs", () => {
  it("should return NonNegative", () => {
    expect(isNonNegative(makeAbs(Number.NEGATIVE_INFINITY))).toBe(true);
    expect(isNonNegative(makeAbs(Number.NaN))).toBe(true);
  });

  it.prop([fc.double()])("should always return NonNegative", (value) => {
    return isNonNegative(makeAbs(value));
  });
});
