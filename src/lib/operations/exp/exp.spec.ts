import { array } from '../array/array';
import { exp } from './exp';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('Exp', () => {
  it('exp test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = nd.do(exp());
    const check = new NDArray({
      data: [
        2.71828183, 7.3890561, 2.00855369e1, 5.459815e1, 1.48413159e2,
        4.03428793e2, 1.09663316e3, 2.98095799e3, 8.10308393e3, 2.20264658e4,
      ],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});