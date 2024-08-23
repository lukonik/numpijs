import { aggregate } from 'src/lib/common/aggregate';
import { NDArray } from 'src/lib/ndarray/ndarray';

/**
 * Returns the maximum value of the NDArray
 * @example
 * ```
 * import min from "numpijs"
 * const nd = new NDArray({
 * data: [1, 2, 3, 4],
 * shape: [2, 2],
 * })
 * const max = max(nd) // 1
 * ```
 * @param nd NDArray
 * @param options options
 * @param options.axis axis along which the maximum value is to be found, if not provided it scans through all the values
 * @param options.initial minimum value to start with
 * @param options.where condition to filter the values
 * @returns NDArray maximum value
 */
export function min(
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
    action: (prev, curr) => {
      if (prev === undefined) {
        return curr;
      }
      return prev < curr ? prev : curr;
    },
    where: options?.where,
  });
}
