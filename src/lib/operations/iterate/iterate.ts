import { positionToIndexes } from 'src/lib/common/position-to-indexes';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function iterate(ndArray: NDArray) {
  const shape = ndArray.shape;
  const result = [];

  for (let i = 0; i < ndArray.data.length; i++) {
    const position = i;
    const value = ndArray.data[i]; // Access the value from ndArray.data
    const indexes = positionToIndexes(position, shape);
    result.push({ value, position, indexes });
  }

  return {
    currentIndex: 0,

    next(): IteratorResult<{
      value: number;
      position: number;
      indexes: number[];
    }> {
      if (this.currentIndex < result.length) {
        return {
          done: false,
          value: result[this.currentIndex++],
        };
      } else {
        return {
          done: true,
          value: undefined,
        };
      }
    },

    [Symbol.iterator](): IterableIterator<{
      value: number;
      position: number;
      indexes: number[];
    }> {
      this.currentIndex = 0;
      return this;
    },
  };
}
