import { NDArray } from '../ndarray/ndarray';
import { array } from './array';

describe('Array', () => {
  it('1 Dimension', () => {
    const check = new NDArray({
      data: [1, 2, 3, 4, 5],
      shape: [5],
    });

    const result = array([1, 2, 3, 4, 5]);
    expect(result).toNDArrayEqual(check);
  });

  it('2 Dimension', () => {
    const check = new NDArray({
      data: [1, 2, 3, 4, 5, 6],
      shape: [2, 3],
    });

    const result = array([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(result).toNDArrayEqual(check);
  });

  it('3 Dimension', () => {
    const check = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      shape: [2, 3, 2],
    });

    const result = array([
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      [
        [7, 8],
        [9, 10],
        [11, 12],
      ],
    ]);
    expect(result).toNDArrayEqual(check);
  });
});
