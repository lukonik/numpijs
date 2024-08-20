import { NDArray } from 'src/lib/ndarray/ndarray';
import { indexesToPosition } from '../indexes-to-position';

export function tolist(nd: NDArray) {
  const rootShape = nd.shape;

  function rec(shape: number[], parent: any[], indexes: number[]) {
    if (shape.length === 1) {
      for (let i = 0; i < shape[0]; i++) {
        const position = indexesToPosition([...indexes, i], rootShape);
        parent.push(nd.get(position));
      }
    } else {
      for (let i = 0; i < shape[0]; i++) {
        const child = [];
        parent.push(child);
        rec(shape.slice(1), child, [...indexes, i]);
      }
    }
  }

  const result = [];
  rec(rootShape, result, []);
  return result;
}
