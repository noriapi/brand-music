import { describe, expectTypeOf, it } from "vitest";

import { Negate } from "./literal.js";

describe("Negate", () => {
  it("should negate", () => {
    expectTypeOf<Negate<0>>().toEqualTypeOf<0>();
    expectTypeOf<Negate<1>>().toEqualTypeOf<-1>();
    expectTypeOf<Negate<-1>>().toEqualTypeOf<1>();
    expectTypeOf<Negate<0.1>>().toEqualTypeOf<-0.1>();
    expectTypeOf<Negate<-0.1>>().toEqualTypeOf<0.1>();
  });

  it("should work with infinity", () => {
    type PosInf = typeof Number.POSITIVE_INFINITY;
    type NegInf = typeof Number.NEGATIVE_INFINITY;

    expectTypeOf<Negate<PosInf>>().toEqualTypeOf<NegInf>();
    expectTypeOf<Negate<NegInf>>().toEqualTypeOf<PosInf>();
  });

  it("should work with NaN", () => {
    type NaNType = typeof Number.NaN;
    expectTypeOf<Negate<NaNType>>().toEqualTypeOf<NaNType>();
  });

  it("should work with number", () => {
    expectTypeOf<Negate<number>>().toEqualTypeOf<number>();
  });

  it("should work with union", () => {
    expectTypeOf<Negate<1 | 3>>().toEqualTypeOf<-1 | -3>();
    expectTypeOf<Negate<-1 | 3>>().toEqualTypeOf<1 | -3>();
    expectTypeOf<Negate<1 | -3>>().toEqualTypeOf<-1 | 3>();
    expectTypeOf<Negate<-1 | -3>>().toEqualTypeOf<1 | 3>();
  });
});
