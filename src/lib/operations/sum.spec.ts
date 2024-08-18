import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';
import { sum } from './sum';

describe('Sum', () => {
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
      sum({
        axis: 0,
      })
    );
    const check = new NDArray({
      data: [6, 8, 13, 10, 12, 18, 20, 22, 21],
      shape: [3, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });
  it('Axis 2', () => {
    const aggr = nd.do(
      sum({
        axis: 1,
      })
    );
    const check = new NDArray({
      data: [13, 16, 15, 23, 26, 37],
      shape: [2, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });
  it('Axis 3', () => {
    const aggr = nd.do(
      sum({
        axis: 2,
      })
    );
    const check = new NDArray({
      data: [6, 12, 26, 21, 28, 37],
      shape: [2, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });

  it('Axis null', () => {
    const aggr = nd.do(sum());
    expect(aggr).toBe(130);
  });
});
