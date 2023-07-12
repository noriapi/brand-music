import { expect, it } from "vitest";

import * as PICS from "./pics.js";

it.each([0, 4095])("fromRawUnknown(%f) -> not undefined", (num) => {
  expect(PICS.fromRawUnknown(num)).not.toBeUndefined();
});

it.each([-1, "0", 4096])("fromRawUnknown(%j) -> undefined", (input) => {
  expect(PICS.fromRawUnknown(input)).toBeUndefined();
});
