import { NDArray } from 'src/lib/ndarray/ndarray';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function chain<T = NDArray>(
  ...funcs: ((instance: NDArray) => any)[]
): T {
  return funcs.reduce((acc, func) => func(acc), this);
}
