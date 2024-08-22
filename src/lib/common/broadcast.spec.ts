import { describe, it, expect } from 'vitest';
import { broadcast } from './broadcast';
import { array } from '../operations/array/array';

describe('addWithBroadcasting', () => {
  it('should add two 1D arrays with the same length', () => {
    const arr1 = array([1, 2, 3]);
    const arr2 = array([4, 5, 6]);
    const result = broadcast(arr1, arr2, (a, b) => a + b);
    const check = array([5, 7, 9]);
    expect(result).toNDArrayEqual(check);
  });

  it('should add a 1D array to a 2D array by broadcasting the 1D array', () => {
    const arr1 = array([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    const arr2 = array([10, 20, 30]);
    const result = broadcast(arr1, arr2, (a, b) => a + b);
    const check = array([
      [11, 22, 33],
      [14, 25, 36],
    ]);
    expect(result).toNDArrayEqual(check);
  });

  it('should add a 1D array to a 3D array by broadcasting the 1D array', () => {
    const arr1 = array([
      [[1], [2], [3]],
      [[4], [5], [6]],
    ]);
    const arr2 = array([10, 20, 30]);
    const result = broadcast(arr1, arr2, (a, b) => a + b);
    const check = array([
      [
        [11, 21, 31],
        [12, 22, 32],
        [13, 23, 33],
      ],
      [
        [14, 24, 34],
        [15, 25, 35],
        [16, 26, 36],
      ],
    ]);
    expect(result).toNDArrayEqual(check);
  });

  it('should handle broadcasting with scalar values', () => {
    const arr1 = array([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    const scalar = 10;
    const result = broadcast(arr1, scalar, (a, b) => a + b);
    const check = array([
      [11, 12, 13],
      [14, 15, 16],
    ]);
    expect(result).toNDArrayEqual(check);
  });

  it('should add arrays with one dimension being undefined', () => {
    const arr1 = array([[[1, 2]], [[3, 4]]]);
    const arr2 = array([[10, 20]]);
    const result = broadcast(arr1, arr2, (a, b) => a + b);
    const check = array([[[11, 22]], [[13, 24]]]);
    expect(result).toNDArrayEqual(check);
  });

  it('should throw an error when broadcasting is not possible', () => {
    const arr1 = array([
      [1, 2],
      [3, 4],
    ]);
    const arr2 = array([[10, 20, 30]]);
    expect(() => broadcast(arr1, arr2, (a, b) => a + b)).toThrowError();
  });
});
