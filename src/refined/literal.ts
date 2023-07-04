import { mod } from "../util.js";
import { Int } from "./int.js";

export type RangedInt<
  START extends number,
  END extends number,
  ARR extends unknown[] = [],
  ACC extends number = never
> = ARR["length"] extends END
  ? ACC | START | END
  : RangedInt<
      START,
      END,
      [...ARR, 1],
      ARR[START] extends undefined ? ACC : ACC | ARR["length"]
    >;

export const is =
  <S extends number, E extends number>(start: S, end: E) =>
  <T>(v: T): v is T & RangedInt<S, E> =>
    Number.isSafeInteger(v) &&
    start <= (v as unknown as number) &&
    (v as unknown as number) <= end;

export const clamp =
  <S extends number, E extends number>(start: S, end: E) =>
  (v: Int): RangedInt<S, E> =>
    v < start ? start : v > end ? end : (v as RangedInt<S, E>);

// range:           [s,             e]
// input:  -5 -4 -3 -2 -1  0  1  2  3  4  5
// output:  1  2  3 -2 -1  0  1  2  3 -2 -1
export const modded =
  <S extends number, E extends number>(start: S, end: E) =>
  (v: Int): RangedInt<S, E> => {
    const size = end - start + 1;
    const zero = v - start;

    const m = mod(zero, size);
    return (m + start) as RangedInt<S, E>;
  };

export const all = <S extends number, E extends number>(
  start: S,
  end: E
): readonly RangedInt<S, E>[] =>
  [...Array(end - start + 1)].map((_, i) => (start + i) as RangedInt<S, E>);

export const asInt = (v: RangedInt<number, number>) => v as Int;
