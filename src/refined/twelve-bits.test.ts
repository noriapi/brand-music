import { fc, it } from "@fast-check/vitest";
import { describe, expect } from "vitest";

import {
  ALL,
  complement,
  EMPTY,
  fromValues,
  isSubset,
  isSuperset,
  isTwelveBits,
  masked,
  TwelveBits,
  union,
  Value,
  values,
} from "./twelve-bits.js";

const arbValue = () => fc.integer({ min: 0, max: 11 }).map((v) => v as Value);
const arbTwelveBits = () =>
  fc.integer({ min: EMPTY, max: ALL }).map((v) => v as TwelveBits);

describe("isTwelveBits", () => {
  it("should return true", () => {
    expect(isTwelveBits(0)).toBe(true);
    expect(isTwelveBits(4095)).toBe(true);
  });

  it("should return false", () => {
    expect(isTwelveBits(-1)).toBe(false);
    expect(isTwelveBits(4096)).toBe(false);
    expect(isTwelveBits(-0.1)).toBe(false);
    expect(isTwelveBits(0.1)).toBe(false);
    expect(isTwelveBits(Number.NaN)).toBe(false);
    expect(isTwelveBits(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isTwelveBits(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});

describe("masked", () => {
  it.prop([fc.double()])("should always return TwelveBits", (input) => {
    expect(isTwelveBits(masked(input))).toBe(true);
  });

  it("should handle NaN", () => {
    expect(isTwelveBits(masked(Number.NaN))).toBe(true);
  });

  it("should handle infinity", () => {
    expect(isTwelveBits(masked(Number.POSITIVE_INFINITY))).toBe(true);
    expect(isTwelveBits(masked(Number.NEGATIVE_INFINITY))).toBe(true);
  });
});

describe("fromValues and values", () => {
  it.prop([arbValue()])("should have same value", (input) => {
    expect(values(fromValues(input))).toStrictEqual([input]);
  });
});

describe("complement", () => {
  it.prop([arbTwelveBits()])(
    "should always return original value if called twice",
    (input) => {
      expect(complement(complement(input))).toBe(input);
    }
  );

  it.prop([arbTwelveBits()])(
    "should always return value different from original",
    (input) => {
      expect(complement(input)).not.toBe(input);
    }
  );
});

describe("isSuperset", () => {
  it.prop([arbTwelveBits()])(
    "should always return true if args are same",
    (input) => {
      expect(isSuperset(input, input)).toBe(true);
    }
  );

  it.prop([arbTwelveBits(), arbTwelveBits()])(
    "should always return true if union",
    (a, b) => {
      expect(isSuperset(union(a, b), a)).toBe(true);
      expect(isSuperset(union(a, b), b)).toBe(true);
    }
  );
});

describe("isSubset", () => {
  it.prop([arbTwelveBits()])(
    "should always return true if args are same",
    (input) => {
      expect(isSubset(input, input)).toBe(true);
    }
  );
});
