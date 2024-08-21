import { describe } from 'node:test';
import { array } from 'src/lib/creations/array';
import { reshape } from './reshape';

describe('Reshape', () => {
  it('reshape test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    const result = nd.do(reshape([2, 2, 4]));

    expect(result.shape).toEqual([2, 2, 4]);
  });
});
