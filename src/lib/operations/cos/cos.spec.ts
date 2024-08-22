import { array } from '../array/array';
import { cos } from './cos';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('Cos', () => {
  it('cos test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = cos(nd);
    const check = new NDArray({
      data: [
        0.5403022766113281, -0.416146844625473, -0.9899924993515015,
        -0.6536436080932617, 0.28366219997406006, 0.9601702690124512,
        0.7539022564888, -0.1455000340938568, -0.9111302495002747,
        -0.83907151222229,
      ],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});
