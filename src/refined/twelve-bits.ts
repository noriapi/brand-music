import { isNonNegativeInt, NonNegativeInt } from "./non-negative-int.js";

export interface TwelveBitsBrand {
  readonly TwelveBits: unique symbol;
}

export type TwelveBits = NonNegativeInt & TwelveBitsBrand;

export const isTwelveBits = (v: unknown): v is TwelveBits =>
  isNonNegativeInt(v) && v < (2 ^ 12);
