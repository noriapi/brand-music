import { describe, expectTypeOf, it } from "vitest";

import { makeAbs, NonNegative } from "./non-negative.js";

describe("makeAbs", () => {
  it("should return type have provided value", () => {
    const input = 1 as number;
    const ifNaN = 3 as 3 & NonNegative;
    expectTypeOf(makeAbs(input, { NaN: ifNaN })).toEqualTypeOf<
      (typeof input & NonNegative) | typeof ifNaN
    >;
  });

  it("should return type have default value", () => {
    const input = 1 as number;
    expectTypeOf(makeAbs(input)).toEqualTypeOf<
      (typeof input & NonNegative) | (0 & NonNegative)
    >();
    expectTypeOf(makeAbs(input, {})).toEqualTypeOf<
      (typeof input & NonNegative) | (0 & NonNegative)
    >();
  });
});
