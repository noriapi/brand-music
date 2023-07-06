import { describe, expect, it } from "vitest";

import { isTwelveBits } from "./twelve-bits.js";

describe("isTwelveBits", () => {
  it("should return true", () => {
    expect(isTwelveBits(0)).toBe(true);
    expect(isTwelveBits(4095)).toBe(true);
  });

  it("should return false", () => {
    expect(isTwelveBits(-1)).toBe(false);
    expect(isTwelveBits(4096)).toBe(false);
    expect(isTwelveBits(-0.1)).toBe(false);
    expect(isTwelveBits(0.1)).toBe(false);
    expect(isTwelveBits(Number.NaN)).toBe(false);
    expect(isTwelveBits(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isTwelveBits(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});
