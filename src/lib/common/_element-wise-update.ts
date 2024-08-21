import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';

export function _elementWiseUpdate(
  nd: NDArray,
  updater: (value) => number,
  where?: (value) => boolean,
  dType?: DataTypes
) {
  const copy = [
    ...nd.data.filter((value) => {
      if (where) {
        return where(value);
      }
      return true;
    }),
  ];
  for (let i = 0; i < copy.length; i++) {
    const value = copy[i];
    copy[i] = updater(value);
  }

  return new NDArray({
    data: copy,
    shape: nd.shape,
    dtype: dType ?? nd.dtype,
  });
}
