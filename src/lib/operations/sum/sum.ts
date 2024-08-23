import { aggregate } from 'src/lib/common/aggregate';
import { NDArray } from 'src/lib/ndarray/ndarray';

/**
 * Returns the sum value of the NDArray
 * @example
 * ```
 * import sum from "numpijs"
 * const nd = new NDArray({
 * data: [1, 2, 3, 4],
 * shape: [2, 2],
 * })
 * const max = sum(nd) // 10
 * ```
 * @param nd NDArray
 * @param options options
 * @param options.axis axis along which the maximum value is to be found, if not provided it scans through all the values
 * @param options.initial minimum value to start with
 * @param options.where condition to filter the values
 * @returns NDArray sum value
 */
export function sum(
  nd: NDArray,
  options?: {
    axis?: number | null;
    initial?: number | null;
    where?: (value) => boolean;
  }
) {
  return aggregate(nd, {
    axis: options?.axis,
    initial: options?.initial,
    action: (prev, curr) => prev + curr,
    where: options?.where,
  });
}
