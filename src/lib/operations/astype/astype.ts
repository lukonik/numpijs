import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function astype(nd: NDArray, dtype: DataTypes) {
  const copy = [...nd.data];
  return new NDArray({
    data: copy,
    shape: nd.shape,
    dtype: dtype,
  });
}
