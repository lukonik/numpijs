import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';
import { aggregate } from './aggregate';

describe('Aggregate', () => {
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
      aggregate({
        action: (prev, curr) => prev + curr,
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
      aggregate({
        action: (prev, curr) => prev + curr,
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
      aggregate({
        action: (prev, curr) => prev + curr,
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
    const aggr = nd.do(
      aggregate({
        action: (prev, curr) => prev + curr,
      })
    );
    expect(aggr).toBe(130);
  });

  it('Axis null with where condition', () => {
    const aggr = nd.do(
      aggregate({
        action: (prev, curr) => prev + curr,
        where: (value) => value < 10,
      })
    );
    expect(aggr).toBe(60);
  });
  it('Axis 1 with where condition', () => {
    const aggr = nd.do(
      aggregate({
        action: (prev, curr) => prev + curr,
        where: (value) => value < 10,
        axis: 1,
      })
    );
    const check = new NDArray({
      data: [13, 6, 15, 12, 14, 0],
      shape: [2, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });
  it('Axis 2 with where condition', () => {
    const aggr = nd.do(
      aggregate({
        action: (prev, curr) => prev + curr,
        where: (value) => value < 10,
        axis: 2,
      })
    );
    const check = new NDArray({
      data: [6, 12, 16, 11, 15, 0],
      shape: [2, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });
  it('Axis 3 with where condition', () => {
    const aggr = nd.do(
      aggregate({
        action: (prev, curr) => prev + curr,
        where: (value) => value % 2 == 0,
        axis: 2,
      })
    );
    const check = new NDArray({
      data: [2, 4, 10, 16, 8, 26],
      shape: [2, 3],
    });
    expect(aggr).toNDArrayEqual(check);
  });
});
