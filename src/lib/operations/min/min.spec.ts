import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';
import { min } from './min';

describe('min', () => {
  let nd: NDArray;
  beforeEach(() => {
    nd = new NDArray({
      data: [1, 2, 3, 3, 4, 5, 9, 10, 7, 5, 6, 10, 7, 8, 13, 11, 12, 14],
      dtype: DataTypes.Float32,
      shape: [2, 3, 3],
    });
  });
  it('Axis null', () => {
    expect(min(nd)).toBe(1);
  });
  it('Axis 0D', () => {
    expect(min(nd, { axis: 0 })).toNDArrayEqual(
      new NDArray({ data: [1, 2, 3, 3, 4, 5, 9, 10, 7], shape: [3, 3] })
    );
  });
  it('Axis 1D', () => {
    expect(min(nd, { axis: 1 })).toNDArrayEqual(
      new NDArray({ data: [1, 2, 3, 5, 6, 10], shape: [2, 3] })
    );
  });
  it('Axis 2D', () => {
    expect(min(nd, { axis: 2 })).toNDArrayEqual(
      new NDArray({ data: [1, 3, 7, 5, 7, 11], shape: [2, 3] })
    );
  });
});
