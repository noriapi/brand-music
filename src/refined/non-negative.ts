export interface NonNegativeBrand {
  readonly NonNegative: unique symbol;
}

export type NonNegative = number & NonNegativeBrand;

export const isNonNegative = <T>(v: T): v is T & NonNegative =>
  typeof v === "number" && v >= 0;

export const makeAbs = <T extends number>(v: T) =>
  Math.abs(v) as T & NonNegative;
