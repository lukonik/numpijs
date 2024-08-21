import { array } from '../array/array';import { log } from './log';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('Log', () => {
  it('log test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = nd.do(log());
    const check = new NDArray({
      data: [
        0, 0.6931471824645996, 1.0986123085021973, 1.3862943649291992,
        1.6094379425048828, 1.7917594909667969, 1.945910096168518,
        2.079441547393799, 2.1972246170043945, 2.3025851249694824,
      ],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});
