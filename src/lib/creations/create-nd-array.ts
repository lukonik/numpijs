import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';

export function createNDArray(
  shape: number[],
  value: () => number,
  dtype?: DataTypes
) {
  const totalLength = shape.reduce((prev, curr) => prev * curr, 1);

  const data = [];
  for (let i = 0; i < totalLength; i++) {
    data.push(value());
  }
  return new NDArray({
    data: data,
    shape: shape,
    dtype: dtype,
  });
}
