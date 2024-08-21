import { DataTypes } from 'src/lib/ndarray/data-types';
import { NDArray } from 'src/lib/ndarray/ndarray';
import {max} from "./max";

describe('Max', () => {
  let nd: NDArray;
  beforeEach(() => {
    nd = new NDArray({
      data: [1, 2, 3, 3, 4, 5, 9, 10, 7, 5, 6, 10, 7, 8, 13, 11, 12, 14],
      dtype: DataTypes.Float32,
      shape: [2, 3, 3],
    });
  });
  it('Axis 1', () => {
    const aggr = nd.do(
      max({
        axis: 0,
      })
    );
    const check = new NDArray({
      data: [5, 6, 10, 7, 8, 13, 11, 12, 14],
      shape: [3, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });
});
