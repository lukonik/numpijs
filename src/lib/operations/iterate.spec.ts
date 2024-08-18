import { iterate } from './iterate';
import { NDArray } from '../ndarray/ndarray';
import { DataTypes } from '../ndarray/data-types';

describe('iterate', () => {
  it('failed test', () => {
    expect(2).toBe(3);
  });
  it('should iterate over all elements in the NDArray and return value, position, and indexes', () => {
    const nd = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      shape: [3, 4],
      dtype: DataTypes.Float32,
    });

    const expectedResults = [
      { value: 1, position: 0, indexes: [0, 0] },
      { value: 2, position: 1, indexes: [0, 1] },
      { value: 3, position: 2, indexes: [0, 2] },
      { value: 4, position: 3, indexes: [0, 3] },
      { value: 5, position: 4, indexes: [1, 0] },
      { value: 6, position: 5, indexes: [1, 1] },
      { value: 7, position: 6, indexes: [1, 2] },
      { value: 8, position: 7, indexes: [1, 3] },
      { value: 9, position: 8, indexes: [2, 0] },
      { value: 10, position: 9, indexes: [2, 1] },
      { value: 11, position: 10, indexes: [2, 2] },
      { value: 12, position: 11, indexes: [2, 3] },
    ];

    const result = [];
    for (const data of iterate(nd)) {
      result.push(data);
    }

    expect(result).toEqual(expectedResults);
  });

  it('should return an empty iterable when the NDArray has no data', () => {
    const nd = new NDArray({
      data: [],
      shape: [0, 4],
      dtype: DataTypes.Float32,
    });

    const result = [];
    for (const data of iterate(nd)) {
      result.push(data);
    }

    expect(result).toEqual([]);
  });

  it('should correctly handle a 1D NDArray', () => {
    const nd = new NDArray({
      data: [1, 2, 3, 4],
      shape: [4],
      dtype: DataTypes.Float32,
    });

    const expectedResults = [
      { value: 1, position: 0, indexes: [0] },
      { value: 2, position: 1, indexes: [1] },
      { value: 3, position: 2, indexes: [2] },
      { value: 4, position: 3, indexes: [3] },
    ];

    const result = [];
    for (const data of iterate(nd)) {
      result.push(data);
    }

    expect(result).toEqual(expectedResults);
  });
});
