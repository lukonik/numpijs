import { createNDArray } from 'src/lib/common/create-nd-array';
import { DataTypes } from 'src/lib/ndarray/data-types';

export function ones(shape: number[], dtype?: DataTypes) {
  return createNDArray(shape, () => 1, dtype);
}
