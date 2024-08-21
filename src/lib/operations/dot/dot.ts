import { _assertShapesAreEqual } from 'src/lib/common/_shapes-are-equal';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function dot(b: NDArray) {
  return (a: NDArray) => {
    _assertShapesAreEqual(a.shape, b.shape);

    //Vector Dot
    if (a.shape.length === 1) {
      let result = 0;
      for (let i = 0; i < a.length; i++) {
        const aValue = a.get(i);
        const bValue = b.get(i);
        result += aValue * bValue;
      }
      return result;
    }

    throw new Error('Use matmul for higher dimensions than 1');
  };
}
