import { _operateBetween } from 'src/lib/common/_operate-between';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function add(b: NDArray) {
  return (a: NDArray) =>
    _operateBetween(a, b, (aValue, bValue) => aValue + bValue);
}
