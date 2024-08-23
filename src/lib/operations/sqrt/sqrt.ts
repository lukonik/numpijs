import { _elementWiseUpdate } from 'src/lib/common/_element-wise-update';
import { DataTypes } from 'src/lib/ndarray/data-types';
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
 * @param options.where condition to filter the values
 * @returns NDArray sqrt values
 */
export function sqrt(
  nd: NDArray,
  options?: {
    where?: (value) => boolean;
  }
) {
  return _elementWiseUpdate(nd, (value) => Math.sqrt(value), options?.where);
}
