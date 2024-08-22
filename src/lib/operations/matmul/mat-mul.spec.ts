import { array } from '../array/array';
import { reshape } from '../reshape/reshape';
import { matMul } from './mat-mul';

describe('matMul', () => {
  it('1D', () => {
    const a = array([1, 2, 3, 4, 5, 6]);
    const b = array([7, 8, 9, 10, 11, 12]);
    const result = matMul(a, b);
    const check = array([7, 16, 27, 40, 55, 72]);
    expect(result).toNDArrayEqual(check);
  });
  it('2D', () => {
    const a = reshape(array([10, 9, 8, 6, 2, 1]), [3, 2]);
    const b = reshape(array([7, 8, 9, 10, 11, 12]), [2, 3]);
    const result = matMul(a, b);
    const check = reshape(
      array([160, 179, 198, 116, 130, 144, 24, 27, 30]),
      [3, 3]
    );
    expect(result).toNDArrayEqual(check);
  });

  it('throw error for more than 2D', () => {
    const a = reshape(array([10, 9, 8, 6, 2, 1]), [1, 3, 2]);
    const b = reshape(array([7, 8, 9, 10, 11, 12]), [1, 2, 3]);
    expect(() => matMul(a, b)).toThrowError();
  });
});
