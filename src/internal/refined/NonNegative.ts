export interface NonNegativeBrand {
  readonly NonNegative: unique symbol;
}

export type NonNegative = number & NonNegativeBrand;

export const isNonNegative = <T>(v: T): v is T & NonNegative =>
  typeof v === "number" && v >= 0;

export function makeAbs<T extends number, N extends NonNegative>(
  v: T,
  edgeCases: { NaN: N },
): (T & NonNegative) | N;
export function makeAbs<T extends number>(
  v: T,
  edgeCases?: { NaN?: never },
): (T & NonNegative) | (0 & NonNegative);
export function makeAbs(v: number, edgeCases?: { NaN?: NonNegative }) {
  const caseNaN = edgeCases?.NaN ?? (0 as 0 & NonNegative);

  if (Number.isNaN(v)) {
    return caseNaN;
  } else {
    return Math.abs(v);
  }
}
