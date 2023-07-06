import { describe, expect, it } from "vitest";

import * as PICS from "./pics.js";

describe("fromRawUnknown", () => {
  it("should not return undefined", () => {
    expect(PICS.fromRawUnknown(0)).not.toBeUndefined();
    expect(PICS.fromRawUnknown(4095)).not.toBeUndefined();
  });

  it("should return undefined", () => {
    expect(PICS.fromRawUnknown(-1)).toBeUndefined();
    expect(PICS.fromRawUnknown("0")).toBeUndefined();
    expect(PICS.fromRawUnknown(4096)).toBeUndefined();
  });
});
