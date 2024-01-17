import { expect, it } from "vitest";

import { isInt } from "./int.js";

it.each([0, -0, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])(
  "isInt(%j) -> true",
  (input) => {
    expect(isInt(input)).toBe(true);
  },
);

it.each([
  0.1,
  -0.1,
  Number.NaN,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY,
])("isInt(%j) -> false", (input) => {
  expect(isInt(input)).toBe(false);
});
