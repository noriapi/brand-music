import { Int, isInt } from "./Int.js";
import { isNonNegative, NonNegative } from "./NonNegative.js";

export type NonNegativeInt = Int & NonNegative;

export const isNonNegativeInt = (v: unknown): v is NonNegativeInt =>
  isInt(v) && isNonNegative(v);
