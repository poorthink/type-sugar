export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Mutable<T> = T extends readonly any[] | object
  ? { -readonly [K in keyof T]: Mutable<T[K]> }
  : T;

export type DeepRequired<T> = T extends object
  ? { [K in keyof T]-?: DeepRequired<T[K]> }
  : T;

export type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;

export type DeepReadonly<T> = T extends object
  ? { readonly [K in keyof T]: DeepReadonly<T[K]> }
  : T;

export type MarkRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

export type MarkPartial<T, K extends keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

type _NumberRange<
  N extends number,
  Acc extends any[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : _NumberRange<N, [...Acc, Acc["length"]]>;

export type NumberRange<S extends number, E extends number> = Exclude<
  _NumberRange<E>,
  _NumberRange<S>
>;

export type FunctionKeys<T extends object> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];
