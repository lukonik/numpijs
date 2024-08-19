import { NDArray } from '../ndarray/ndarray';
import { arange } from './arange';

describe('Arange', () => {
  it('check on step', () => {
    const result = arange({
      start: 0,
      stop: 10,
      step: 2,
    });

    expect(result).toNDArrayEqual(
      new NDArray({
        data: [0, 2, 4, 6, 8],
        shape: [5],
      })
    );
  });
});
