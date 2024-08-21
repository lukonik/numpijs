import { describe } from 'node:test';
import { createNDArray } from './create-nd-array';
import { NDArray } from '../ndarray/ndarray';

describe('CreateNDArray', () => {
  it('check on value', () => {
    const result = createNDArray([2, 2], () => 2);

    expect(result).toNDArrayEqual(
      new NDArray({
        data: [2, 2, 2, 2],
        shape: [2, 2],
      })
    );
  });
});
