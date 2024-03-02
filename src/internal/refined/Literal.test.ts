import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import type { Int } from "./Int.js";
import { is, modded } from "./Literal.js";

const arbRange = () =>
  fc
    .tuple(
      fc.integer({
        min: Number.MIN_SAFE_INTEGER,
        max: Number.MAX_SAFE_INTEGER - 999,
      }),
      fc.nat(999),
    )
    .map(([start, size]) => [start, start + size] as const);

describe("modded", () => {
  it.prop([arbRange(), fc.maxSafeInteger()])(
    "should return value within range",
    (range, value) => {
      const result = modded(...range)(value as Int);
      return is(...range)(result);
    },
  );

  it.each([
    [0, 5, -3, 3],
    [3, 8, -3, 3],
    [-3, 2, -3, -3],
  ] as [start: number, end: number, input: Int, expected: number][])(
    "modded(%i, %i)(%i) -> %i",
    (start, end, input, expected) => {
      expect(modded(start, end)(input)).toBe(expected);
    },
  );
});
