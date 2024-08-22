import { NDArray } from 'src/lib/ndarray/ndarray';
import { subtract } from './subtract';

describe('Subtract', () => {
  it('subtract', () => {
    const nd1 = new NDArray({
      data: [10, 9, 8, 6, 2, 1],
      shape: [2, 3],
    });
    const nd2 = new NDArray({
      data: [7, 8, 9, 10, 11, 12],
      shape: [2, 3],
    });

    const result = subtract(nd1, nd2);
    const check = new NDArray({
      shape: [2, 3],
      data: [3, 1, -1, -4, -9, -11],
    });
    expect(result).toNDArrayEqual(check);
  });
});
