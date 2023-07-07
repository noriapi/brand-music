import { isNonNegativeInt, NonNegativeInt } from "./non-negative-int.js";

export interface TwelveBitsBrand {
  readonly TwelveBits: unique symbol;
}

export type TwelveBits = NonNegativeInt & TwelveBitsBrand;

export const isTwelveBits = (v: unknown): v is TwelveBits =>
  isNonNegativeInt(v) && v < 1 << 12;

export type PartialTwelveBits =
  | 0b000000000000
  | 0b000000000001
  | 0b000000000010
  | 0b000000000100
  | 0b000000001000
  | 0b000000010000
  | 0b000000100000
  | 0b000001000000
  | 0b000010000000
  | 0b000100000000
  | 0b001000000000
  | 0b010000000000
  | 0b100000000000
  | 0b111111111101
  | 0b111111111011
  | 0b111111110111
  | 0b111111101111
  | 0b111111011111
  | 0b111110111111
  | 0b111101111111
  | 0b111011111111
  | 0b110111111111
  | 0b101111111111
  | 0b011111111111
  | 0b111111111111;
