import { NDArray } from 'src/lib/ndarray/ndarray';
import { astype } from './astype';
import { DataTypes } from 'src/lib/ndarray/data-types';

describe('astype', () => {
  it('astype test', () => {
    const nd = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      shape: [3, 4],
    });
    const result = nd.do(astype(DataTypes.UInt32));

    expect(result.dtype).toBe(DataTypes.UInt32);
  });
});
