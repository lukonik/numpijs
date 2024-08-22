import { NDArray } from '../ndarray/ndarray';
import { _shapesAreEqual } from './_shapes-are-equal';
import { broadcast } from './broadcast';

export function _operateBetween(
  a: NDArray,
  b: NDArray | number,
  operand: (a: number, b: number) => number
) {
  if (typeof b === 'number') {
    b = new NDArray({
      data: [b],
      shape: [1],
    });
  }

  if (!_shapesAreEqual(a.shape, b.shape)) {
    return broadcast(a, b, operand);
  }
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const aValue = a.get(i);
    const bValue = b.get(i);
    result.push(operand(aValue, bValue));
  }

  return new NDArray({
    data: result,
    shape: a.shape,
    dtype: a.dtype,
  });
}
