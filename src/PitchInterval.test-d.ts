import { describe, expectTypeOf, it } from "vitest";

import * as PI from "./PitchInterval.js";

describe("from", () => {
  it("should callable with valid literal", () => {
    expectTypeOf<typeof PI.from>().toBeCallableWith(-999);
    expectTypeOf<typeof PI.from>().toBeCallableWith(0);
    expectTypeOf<typeof PI.from>().toBeCallableWith(999);
  });

  it("should not callable with invalid literal", () => {
    // @ts-expect-error invalid argument
    expectTypeOf<typeof PI.from>().toBeCallableWith(0.1);
    // @ts-expect-error invalid argument
    expectTypeOf<typeof PI.from>().toBeCallableWith("0");
  });
});
