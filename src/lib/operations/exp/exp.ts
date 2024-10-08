import { _elementWiseUpdate } from 'src/lib/common/_element-wise-update';
import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function exp(options: {
  nd: NDArray;
  where?: (value) => boolean;
  dtype?: DataTypes;
}) {
  return _elementWiseUpdate(
    options.nd,
    (value) => Math.exp(value),
    options?.where,
    options?.dtype
  );
}
