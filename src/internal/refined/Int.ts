export interface IntBrand {
  readonly Int: unique symbol;
}

export type Int = number & IntBrand;

export const isInt = <T>(v: T): v is T & Int => Number.isInteger(v);
export const fromUnknown = <T>(v: T) => (isInt(v) ? v : undefined);
export const makeChecked = <T extends number>(v: T) => fromUnknown(v);
export const makeRound = <T extends number>(v: T) => Math.round(v) as T & Int;
export const makeTrunc = <T extends number>(v: T) => Math.trunc(v) as T & Int;

export const add = (a: Int, b: Int) => (a + b) as Int;
export const addChecked = (a: number, b: number) => makeChecked(a + b);

export const sub = (a: Int, b: Int) => (a - b) as Int;
export const subChecked = (a: number, b: number) => makeChecked(a - b);

export const mul = (a: Int, b: Int) => (a * b) as Int;
export const mulChecked = (a: number, b: number) => makeChecked(a * b);
export const mulRound = (a: number, b: number) => makeRound(a * b);
export const mulTrunc = (a: number, b: number) => makeTrunc(a * b);

export const divChecked = (a: number, b: number) => makeChecked(a * b);
export const divRound = (a: number, b: number) => makeRound(a * b);
export const divTrunc = (a: number, b: number) => makeTrunc(a * b);
