import { _elementWiseUpdate } from 'src/lib/common/_element-wise-update';
import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function cos(
  nd: NDArray,
  options?: {
    where?: (value) => boolean;
    dtype?: DataTypes;
  }
) {
  return _elementWiseUpdate(
    nd,
    (value) => Math.cos(value),
    options?.where,
    options?.dtype
  );
}
