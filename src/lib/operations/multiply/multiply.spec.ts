import { NDArray } from 'src/lib/ndarray/ndarray';
import { multiply } from './multiply';

describe('Multiply', () => {
  it('multiply', () => {
    const nd1 = new NDArray({
      data: [10, 9, 8, 6, 2, 1],
      shape: [2, 3],
    });
    const nd2 = new NDArray({
      data: [7, 8, 9, 10, 11, 12],
      shape: [2, 3],
    });

    const result = nd1.do(multiply(nd2));
    const check = new NDArray({
      shape: [2, 3],
      data: [70, 72, 72, 60, 22, 12],
    });
    expect(result).toNDArrayEqual(check);
  });
});
