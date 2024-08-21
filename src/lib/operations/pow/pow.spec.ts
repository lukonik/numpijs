import { array } from '../array/array';import { pow } from './pow';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('pow', () => {
  it('pow test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = nd.do(
      pow({
        exponent: 2,
      })
    );
    const check = new NDArray({
      data: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});
