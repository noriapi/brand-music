import { mod } from "../util.js";
import { Int } from "./int.js";

export type Negate<N extends number> = N extends 0
  ? 0
  : `${N}` extends `-${infer X extends number}`
    ? X
    : `-${N}` extends `${infer X extends number}`
      ? X
      : number;

export type RangedNat<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never,
> = ARR["length"] extends END
  ? ACC | START | END
  : RangedNat<
      START,
      END,
      [...ARR, 1],
      ARR[START] extends undefined ? ACC : ACC | ARR["length"]
    >;

export const is =
  <S extends number, E extends number>(start: S, end: E) =>
  <T>(v: T): v is T & RangedNat<S, E> =>
    Number.isSafeInteger(v) &&
    start <= (v as unknown as number) &&
    (v as unknown as number) <= end;

export const clamp =
  <S extends number, E extends number>(start: S, end: E) =>
  (v: Int): RangedNat<S, E> =>
    v < start ? start : v > end ? end : (v as RangedNat<S, E>);

// range:           [s,             e]
// input:  -5 -4 -3 -2 -1  0  1  2  3  4  5
// output:  1  2  3 -2 -1  0  1  2  3 -2 -1
export const modded =
  <S extends number, E extends number>(start: S, end: E) =>
  (v: Int): RangedNat<S, E> => {
    const size = end - start + 1;
    const zero = v - start;

    const m = mod(zero, size);
    return (m + start) as RangedNat<S, E>;
  };

export const all = <S extends number, E extends number>(
  start: S,
  end: E,
): readonly RangedNat<S, E>[] =>
  [...Array(end - start + 1)].map((_, i) => (start + i) as RangedNat<S, E>);

export const asInt = (v: RangedNat<number, number>) => v as Int;
