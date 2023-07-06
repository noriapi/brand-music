import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import type { Int } from "./int.js";
import { is, modded } from "./literal.js";

const arbRange = () =>
  fc
    .tuple(
      fc.integer({
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER - 999,
      }),
      fc.nat(999)
    )
    .map(([start, size]) => [start, start + size] as const);

describe("modded", () => {
  it.prop([arbRange(), fc.maxSafeInteger()])(
    "should return value within range",
    (range, value) => {
      const result = modded(...range)(value as Int);
      return is(...range)(result);
    }
  );

  it("should returns modded value", () => {
    expect(modded(0, 5)(-3 as Int)).toBe(3);
    expect(modded(3, 8)(-3 as Int)).toBe(3);
    expect(modded(-3, 2)(-3 as Int)).toBe(-3);
  });
});
