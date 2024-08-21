import { array } from '../array/array';
import { sin } from './sin';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('Sin', () => {
  it('sin test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = nd.do(sin());
    const check = new NDArray({
      data: [
        0.8414709568023682, 0.9092974066734314, 0.14112000167369843,
        -0.756802499294281, -0.9589242935180664, -0.279415488243103,
        0.6569865942001343, 0.9893582463264465, 0.41211849451065063,
        -0.5440211296081543,
      ],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});
