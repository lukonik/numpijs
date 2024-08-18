export function indexesToPosition(indexes: number[], shape: number[]): number {
  let position = 0;
  let stride = 1;

  for (let i = shape.length - 1; i >= 0; i--) {
    position += indexes[i] * stride;
    stride *= shape[i];
  }

  return position;
}
