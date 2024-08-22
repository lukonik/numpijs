import { NDArray } from 'src/lib/ndarray/ndarray';

export function reshape(nd: NDArray, shape: number[]) {
  const copy = [...nd.data];

  const baseShapeTotal = totalSize(nd.shape);
  const newShapeTotal = totalSize(shape);

  if (baseShapeTotal !== newShapeTotal) {
    throw new Error('Shapes are incompatible');
  }

  return new NDArray({
    data: copy,
    shape: shape,
    dtype: nd.dtype,
  });
}

function totalSize(shape: number[]) {
  return shape.reduce((pr, curr) => pr * curr, 1);
}
