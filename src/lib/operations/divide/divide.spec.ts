import { NDArray } from 'src/lib/ndarray/ndarray';
import { divide } from './divide';

describe('Divide', () => {
  it('divide', () => {
    const nd1 = new NDArray({
      data: [10, 9, 8, 6, 2, 1],
      shape: [2, 3],
    });
    const nd2 = new NDArray({
      data: [7, 8, 9, 10, 11, 12],
      shape: [2, 3],
    });

    const result = divide(nd1, nd2);
    const check = new NDArray({
      shape: [2, 3],
      data: [
        1.4285714626312256, 1.125, 0.8888888955116272, 0.6000000238418579,
        0.1818181872367859, 0.0833333358168602,
      ],
    });
    expect(result).toNDArrayEqual(check);
  });
});
