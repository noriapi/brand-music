import { describe, expect, it } from "vitest";

import * as MNN from "./mnn.js";

describe("markNum", () => {
  it("should return true", () => {
    expect(MNN.markNum(0)).toBe(true);
    expect(MNN.markNum(127)).toBe(true);
  });

  it("should return false", () => {
    expect(MNN.markNum(-1)).toBe(false);
    expect(MNN.markNum(128)).toBe(false);
    expect(MNN.markNum(0.5)).toBe(false);
    expect(MNN.markNum(Number.NaN)).toBe(false);
    expect(MNN.markNum(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(MNN.markNum(Number.POSITIVE_INFINITY)).toBe(false);
  });
});
