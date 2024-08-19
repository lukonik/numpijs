import { DataTypes } from '../ndarray/data-types';
import { createNDArray } from './create-nd-array';
export function zeros(shape: number[], dtype?: DataTypes) {
  return createNDArray(shape, () => 0, dtype);
}
