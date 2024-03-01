import { describe, expectTypeOf, it } from "vitest";

import * as ST from "./Semitones.js";

describe("from", () => {
  it("should callable with valid literal", () => {
    expectTypeOf<typeof ST.from>().toBeCallableWith(0);
    expectTypeOf<typeof ST.from>().toBeCallableWith(999);
  });

  it("should not callable with invalid literal", () => {
    // @ts-expect-error invalid argument
    expectTypeOf<typeof ST.from>().toBeCallableWith(0.1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof ST.from>().toBeCallableWith(-1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof ST.from>().toBeCallableWith("0");
  });
});
