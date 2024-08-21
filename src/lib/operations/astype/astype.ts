import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function astype(dtype: DataTypes) {
  return (base: NDArray) => {
    const copy = [...base.data];
    return new NDArray({
      data: copy,
      shape: base.shape,
      dtype: dtype,
    });
  };
}
