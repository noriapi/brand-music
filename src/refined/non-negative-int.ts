import { Int, isInt } from "./int.js";
import { isNonNegative, NonNegative } from "./non-negative.js";

export type NonNegativeInt = Int & NonNegative;

export const isNonNegativeInt = (v: unknown): v is NonNegativeInt =>
  isInt(v) && isNonNegative(v);
