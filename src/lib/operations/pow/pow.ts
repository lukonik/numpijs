import { _elementWiseUpdate } from 'src/lib/common/_element-wise-update';
import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function pow(options: {
  where?: (value) => boolean;
  dtype?: DataTypes;
  exponent: number;
}) {
  return (base: NDArray) =>
    _elementWiseUpdate(
      base,
      (value) => Math.pow(value, options.exponent),
      options?.where,
      options?.dtype
    );
}
