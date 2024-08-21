import { NDArray } from 'src/lib/ndarray/ndarray';

export function reshape(shape: number[]) {
  return (base: NDArray) => {
    const copy = [...base.data];

    const baseShapeTotal = totalSize(base.shape);
    const newShapeTotal = totalSize(shape);

    if (baseShapeTotal !== newShapeTotal) {
      throw new Error('Shapes are incompatible');
    }

    return new NDArray({
      data: copy,
      shape: shape,
      dtype: base.dtype,
    });
  };
}

function totalSize(shape: number[]) {
  return shape.reduce((pr, curr) => pr * curr, 1);
}
