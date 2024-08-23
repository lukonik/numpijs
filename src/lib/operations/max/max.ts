import { aggregate } from 'src/lib/common/aggregate';
import { NDArray } from 'src/lib/ndarray/ndarray';

/**
 * Returns the maximum value of the NDArray
 * @example
 * ```
 * import from "numpijs"
 * const nd = new NDArray({
 * data: [1, 2, 3, 4],
 * shape: [2, 2],
 * })
 * const max = max(nd) // 4
 * ```
 * @param nd NDArray
 * @param options options
 * @param options.axis axis along which the maximum value is to be found, if not provided it scans through all the values
 * @param options.initial minimum value to start with
 * @param options.where condition to filter the values
 * @returns ndArray
 */
export function max(
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
    action: (prev, curr) => (prev < curr ? curr : prev),
    where: options?.where,
  });
}
