import { expect, it } from "vitest";

import * as IC from "./IntervalClass.js";

it.each([0, 6])("markNum(%f) -> true", (num) => {
  expect(IC.markNum(num)).toBe(true);
});

it.each([
  -1,
  7,
  0.5,
  Number.NaN,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY,
])("markNum(%f) -> false", (num) => {
  expect(IC.markNum(num)).toBe(false);
});
