export function positionToIndexes(position: number, shape: number[]): number[] {
  const indexes = new Array(shape.length);
  for (let i = shape.length - 1; i >= 0; i--) {
    const dim = shape[i];
    indexes[i] = position % dim;
    position = Math.floor(position / dim);
  }
  return indexes;
}
