import { expect, it } from "vitest";

import * as PC from "./pc.js";

it.each([0, 11])("markNum(%f) -> true", (num) => {
  expect(PC.markNum(num)).toBe(true);
});

it.each([
  -1,
  12,
  0.5,
  Number.NaN,
  Number.NEGATIVE_INFINITY,
  Number.POSITIVE_INFINITY,
])("markNum(%f) -> false", (num) => {
  expect(PC.markNum(num)).toBe(false);
});
