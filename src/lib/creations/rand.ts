import { DataTypes } from '../ndarray/data-types';
import { createNDArray } from './create-nd-array';

export function rand(size: number, dtype?: DataTypes) {
  return createNDArray([size], () => Math.random(), dtype);
}
