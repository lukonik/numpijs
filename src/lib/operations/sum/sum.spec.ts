import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';
import { sum } from './sum';

describe('max', () => {
  let nd: NDArray;
  beforeEach(() => {
    nd = new NDArray({
      data: [1, 2, 3, 3, 4, 5, 9, 10, 7, 5, 6, 10, 7, 8, 13, 11, 12, 14],
      dtype: DataTypes.Float32,
      shape: [2, 3, 3],
    });
  });
  it('Axis null', () => {
    expect(sum(nd)).toBe(130);
  });
  it('Axis 0D', () => {
    expect(sum(nd, { axis: 0 })).toNDArrayEqual(
      new NDArray({ data: [6, 8, 13, 10, 12, 18, 20, 22, 21], shape: [3, 3] })
    );
  });
  it('Axis 1D', () => {
    expect(sum(nd, { axis: 1 })).toNDArrayEqual(
      new NDArray({ data: [13, 16, 15, 23, 26, 37], shape: [2, 3] })
    );
  });
  it('Axis 2D', () => {
    expect(sum(nd, { axis: 2 })).toNDArrayEqual(
      new NDArray({ data: [6, 12, 26, 21, 28, 37], shape: [2, 3] })
    );
  });
});
