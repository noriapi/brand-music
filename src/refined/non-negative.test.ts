import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import { isNonNegative, makeAbs } from "./non-negative.js";

describe("isNonNegative", () => {
  it.each([0, -0, 0.1, Number.POSITIVE_INFINITY])(
    "isNonNegative(%j) -> true",
    (input) => {
      expect(isNonNegative(input)).toBe(true);
    }
  );

  it.each([-1, -0.1, Number.NEGATIVE_INFINITY, Number.NaN])(
    "isNonNegative(%j) -> false",
    (input) => {
      expect(isNonNegative(input)).toBe(false);
    }
  );
});

describe("makeAbs", () => {
  it.each([Number.NEGATIVE_INFINITY, Number.NaN])(
    "isNonNegative(makeAbs(%j)) -> true",
    (input) => {
      expect(isNonNegative(makeAbs(input))).toBe(true);
    }
  );

  it.prop([fc.double()])("should always return NonNegative", (value) => {
    return isNonNegative(makeAbs(value));
  });
});
