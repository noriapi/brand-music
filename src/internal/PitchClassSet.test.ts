import { expect, it } from "vitest";

import * as PCS from "./PitchClassSet.js";

it.each([0, 4095])("fromRawUnknown(%f) -> not undefined", (num) => {
  expect(PCS.fromRawUnknown(num)).not.toBeUndefined();
});

it.each([-1, "0", 4096])("fromRawUnknown(%j) -> undefined", (input) => {
  expect(PCS.fromRawUnknown(input)).toBeUndefined();
});
