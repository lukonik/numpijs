import { createNDArray } from 'src/lib/common/create-nd-array';
import { DataTypes } from 'src/lib/ndarray/data-types';

export function rand(size: number, dtype?: DataTypes) {
  return createNDArray([size], () => Math.random(), dtype);
}
