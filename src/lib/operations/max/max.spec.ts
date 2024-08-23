import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';
import { max } from './max';

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
    expect(max(nd)).toBe(14);
  });
  it('Axis 1D', () => {
    expect(max(nd, { axis: 1 })).toNDArrayEqual(
      new NDArray({ data: [9, 10, 7, 11, 12, 14], shape: [2, 3] })
    );
  });
  it('Axis 2D', () => {
    expect(max(nd, { axis: 2 })).toNDArrayEqual(
      new NDArray({ data: [3, 5, 10, 10, 13, 14], shape: [2, 3] })
    );
  });
});
