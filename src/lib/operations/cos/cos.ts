import { _elementWiseUpdate } from 'src/lib/common/_element-wise-update';
import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function cos(options?: {
  where: (value) => boolean;
  dtype?: DataTypes;
}) {
  return (base: NDArray) =>
    _elementWiseUpdate(
      base,
      (value) => Math.cos(value),
      options?.where,
      options?.dtype
    );
}
