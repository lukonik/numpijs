import { NDArray } from 'src/lib/ndarray/ndarray';
import { tolist } from './tolist';

describe('toList', () => {
  it('Check on 3D', () => {
    const nd = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      shape: [2, 2, 4],
    });
    const result = nd.do(tolist());
    const check = [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
      ],
      [
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
    ];
    expect(result).toEqual(check);
  });

  it('Check on 2D', () => {
    const nd = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      shape: [2, 6],
    });
    const result = nd.do(tolist());
    const check = [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
    ];
    expect(result).toEqual(check);
  });

  it('Check on 1D', () => {
    const nd = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      shape: [10],
    });
    const result = nd.do(tolist());
    const check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).toEqual(check);
  });
});
