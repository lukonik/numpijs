import { DataTypes } from '../ndarray/data-types';
import { createNDArray } from './create-nd-array';
export function ones(shape: number[], dtype?: DataTypes) {
  return createNDArray(shape, () => 1, dtype);
}
