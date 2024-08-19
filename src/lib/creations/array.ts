import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';

export function array(data: any[], dtype?: DataTypes) {
  const flattened = data.flat(Infinity);
  const shape = getShape(data);

  return new NDArray({
    data: flattened,
    dtype: dtype,
    shape: shape,
  });
}

function getShape(arr) {
  const shape = [];

  let currentLevel = arr;

  while (Array.isArray(currentLevel)) {
    shape.push(currentLevel.length);
    currentLevel = currentLevel[0];
  }

  return shape;
}
