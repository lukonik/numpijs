import { _elementWiseUpdate } from 'src/lib/common/_element-wise-update';
import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function sin(options?: {
  where: (value) => boolean;
  dtype?: DataTypes;
}) {
  return (base: NDArray) =>
    _elementWiseUpdate(
      base,
      (value) => Math.sin(value),
      options?.where,
      options?.dtype
    );
}
