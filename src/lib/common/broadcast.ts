import { NDArray } from '../ndarray/ndarray';
import { iterate } from '../operations/iterate/iterate';
import { _shapesAreEqual } from './_shapes-are-equal';
import { indexesToPosition } from './indexes-to-position';

export function broadcast(
  a: NDArray,
  b: NDArray | number,
  action: (a, b) => number
) {
  if (typeof b === 'number') {
    b = new NDArray({
      data: [b],
      shape: [1],
    });
  }

  const broadcastShape = broadcastShapes(a, b);
  const aValues = [];
  const bValues = [];
  function recursive(
    currShape: number[],
    indexes: number[],
    result: number[],
    checking: NDArray
  ) {
    if (currShape.length === 1) {
      for (let i = 0; i < currShape[0]; i++) {
        const fullIndex = [...indexes, i];

        const mappedIndex = mapIndex(broadcastShape, checking.shape, fullIndex);
        const position = indexesToPosition(mappedIndex, checking.shape);
        const value = checking.get(position);
        result.push(value);
      }
    } else {
      for (let i = 0; i < currShape[0]; i++) {
        recursive(currShape.slice(1), [...indexes, i], result, checking);
      }
    }
  }

  recursive(broadcastShape, [], aValues, a);
  recursive(broadcastShape, [], bValues, b);
  const result = [];
  for (let i = 0; i < aValues.length; i++) {
    result[i] = action(aValues[i], bValues[i]);
  }

  return new NDArray({
    data: result,
    shape: broadcastShape,
    dtype: a.dtype,
  });
}

function mapIndex(
  broadcastedShape: number[],
  originalShape: number[],
  index: number[]
): number[] {
  const originalIndex: number[] = new Array(originalShape.length).fill(0);
  const shapeDiff = broadcastedShape.length - originalShape.length;

  for (let i = 0; i < originalShape.length; i++) {
    const originalDim = originalShape[i];

    if (originalDim === 1 || originalDim === undefined) {
      originalIndex[i] = 0;
    } else {
      originalIndex[i] = index[i + shapeDiff];
    }
  }

  return originalIndex;
}

function broadcastShapes(a: NDArray, b: NDArray) {
  //If shapes are equal, no need to broadcast
  if (_shapesAreEqual(a.shape, b.shape)) {
    return a.shape;
  }
  const shape1 = a.shape;
  const shape2 = b.shape;

  const resultShape: number[] = [];
  const len1 = shape1.length;
  const len2 = shape2.length;
  const maxLen = Math.max(len1, len2);

  for (let i = 0; i < maxLen; i++) {
    const dim1 = i < len1 ? shape1[len1 - 1 - i] : 1;
    const dim2 = i < len2 ? shape2[len2 - 1 - i] : 1;

    if (dim1 === dim2 || dim1 === 1) {
      resultShape.unshift(dim2);
    } else if (dim2 === 1) {
      resultShape.unshift(dim1);
    } else {
      throw new Error(
        `Shapes ${shape1} and ${shape2} are not compatible for broadcasting.`
      );
    }
  }

  return resultShape;
}
