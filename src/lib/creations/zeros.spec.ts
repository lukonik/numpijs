import { describe } from 'node:test';
import { NDArray } from '../ndarray/ndarray';
import { zeros } from './zeros';
describe('Zeros', () => {
  it('check on value', () => {
    const result = zeros([2, 2]);

    expect(result).toNDArrayEqual(
      new NDArray({
        data: [0, 0, 0, 0],
        shape: [2, 2],
      })
    );
  });
});
