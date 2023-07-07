import { describe, expectTypeOf, it } from "vitest";

import * as S from "./semitones.js";

describe("from", () => {
  it("should callable with valid literal", () => {
    expectTypeOf<typeof S.from>().toBeCallableWith(0);
    expectTypeOf<typeof S.from>().toBeCallableWith(999);
  });

  it("should not callable with invalid literal", () => {
    // @ts-expect-error invalid argument
    expectTypeOf<typeof S.from>().toBeCallableWith(0.1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof S.from>().toBeCallableWith(-1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof S.from>().toBeCallableWith("0");
  });
});
