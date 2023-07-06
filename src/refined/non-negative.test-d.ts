import { describe, expectTypeOf, it } from "vitest";

import { makeAbs, NonNegative } from "./non-negative.js";

describe("makeAbs", () => {
  it("should return type have provided value", () => {
    const input = 1 as number;
    const ifNaN = 3 as 3 & NonNegative;
    expectTypeOf<(typeof input & NonNegative) | typeof ifNaN>(
      makeAbs(input, { NaN: ifNaN })
    );
  });

  it("should return type have default value", () => {
    const input = 1 as number;
    expectTypeOf<(typeof input & NonNegative) | (0 & NonNegative)>(
      makeAbs(input)
    );
    expectTypeOf<(typeof input & NonNegative) | (0 & NonNegative)>(
      makeAbs(input, {})
    );
  });
});
