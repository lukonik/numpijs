import { array } from '../array/array';import { absolute } from './absolute';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('Absolute', () => {
  it('abs test', () => {
    const nd = array([1, 2, 3, -4, 5, -6, 7, 8, -9, 10]);
    const result = nd.do(absolute());
    const check = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});
