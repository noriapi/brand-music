import { describe, expectTypeOf, it } from "vitest";

import * as PICS from "./pics.js";

describe("fromRaw", () => {
  it("should callable with valid literal", () => {
    expectTypeOf<typeof PICS.fromRaw>().toBeCallableWith(0);
    expectTypeOf<typeof PICS.fromRaw>().toBeCallableWith(1);
    expectTypeOf<typeof PICS.fromRaw>().toBeCallableWith(0b111111111111);
  });

  it("should not callable with invalid literal", () => {
    // @ts-expect-error invalid argument
    expectTypeOf<typeof PICS.fromRaw>().toBeCallableWith(-1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof PICS.fromRaw>().toBeCallableWith(0.1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof PICS.fromRaw>().toBeCallableWith("0");
  });
});
