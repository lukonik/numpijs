import { _operateBetween } from 'src/lib/common/_operate-between';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function multiply(a: NDArray, b: NDArray) {
  return _operateBetween(a, b, (aValue, bValue) => aValue * bValue);
}
