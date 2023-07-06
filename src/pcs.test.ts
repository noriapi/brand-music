import { describe, expect, it } from "vitest";

import * as PCS from "./pcs.js";

describe("fromRawUnknown", () => {
  it("should not return undefined", () => {
    expect(PCS.fromRawUnknown(0)).not.toBeUndefined();
    expect(PCS.fromRawUnknown(4095)).not.toBeUndefined();
  });

  it("should return undefined", () => {
    expect(PCS.fromRawUnknown(-1)).toBeUndefined();
    expect(PCS.fromRawUnknown("0")).toBeUndefined();
    expect(PCS.fromRawUnknown(4096)).toBeUndefined();
  });
});
