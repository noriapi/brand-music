import { describe, expect,it } from "vitest";

import { mod } from "./util.js";

describe("mod", () => {
  it("should return valid value", () => {
    expect(mod(-3, 5)).toBe(2);
  });
});
