import { NDArray } from 'src/lib/ndarray/ndarray';
import { add } from './add';

describe('Add', () => {
  it('add', () => {
    const nd1 = new NDArray({
      data: [1, 2, 3, 4, 5, 6],
      shape: [2, 3],
    });
    const nd2 = new NDArray({
      data: [7, 8, 9, 10, 11, 12],
      shape: [2, 3],
    });

    const result = nd1.do(add(nd2));
    const check = new NDArray({
      shape: [2, 3],
      data: [8, 10, 12, 14, 16, 18],
    });
    expect(result).toNDArrayEqual(check);
  });
});
