import { describe } from 'node:test';
import { NDArray } from '../ndarray/ndarray';
import { ones } from './ones';
describe('Ones', () => {
  it('check on value', () => {
    const result = ones([2, 2]);

    expect(result).toNDArrayEqual(
      new NDArray({
        data: [1, 1, 1, 1],
        shape: [2, 2],
      })
    );
  });
});
