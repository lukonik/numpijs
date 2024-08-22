import { NDArray } from 'src/lib/ndarray/ndarray';
import { array } from '../array/array';
import { reshape } from '../reshape/reshape';
import { indexesToPosition } from 'src/lib/common/indexes-to-position';

export function matMul(a: NDArray, b: NDArray) {
  if (a.length !== b.length) {
    throw new Error('Length are not equal');
  }

  if (a.shape.length === 1) {
    if (a.shape[0] !== b.shape[0]) {
      throw new Error('Incompatible shapes');
    }

    const result = [];

    for (let i = 0; i < a.shape[0]; i++) {
      const aValue = a.get(i);
      const bValue = b.get(i);
      result.push(aValue * bValue);
    }
    return new NDArray({
      data: result,
      shape: a.shape,
    });
  }
  if (a.shape.length === 2) {
    if (a.shape[1] !== b.shape[0]) {
      throw new Error('Incompatible shapes');
    }

    const result: number[][] = Array(a.shape[0])
      .fill(0)
      .map(() => Array(b.shape[1]).fill(0));

    for (let i = 0; i < a.shape[0]; i++) {
      for (let j = 0; j < b.shape[1]; j++) {
        for (let k = 0; k < a.shape[1]; k++) {
          const aPosition = indexesToPosition([i, k], a.shape);
          const bPosition = indexesToPosition([k, j], b.shape);
          const aValue = a.get(aPosition);
          const bValue = b.get(bPosition);
          result[i][j] += aValue * bValue;
        }
      }
    }

    return reshape(array(result, a.dtype), [a.shape[0], b.shape[1]]);
  }

  throw new Error('More than 2 DIM is not supported ');
}
