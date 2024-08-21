import { NDArray } from '../ndarray/ndarray';
import { _shapesAreEqual } from './_shapes-are-equal';

export function _operateBetween(
  a: NDArray,
  b: NDArray,
  operand: (a: number, b: number) => number
) {
  if (!_shapesAreEqual(a.shape, b.shape)) {
    throw new Error(`Shapes are not compatible, a:${a.shape}, b:${b.shape}`);
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
