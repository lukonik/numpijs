import { array } from '../array/array';
import { sqrt } from './sqrt';
import { NDArray } from 'src/lib/ndarray/ndarray';
describe('sqrt', () => {
  it('sqrt test', () => {
    const nd = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = nd.do(sqrt());
    const check = new NDArray({
      data: [
        1, 1.4142135381698608, 1.7320507764816284, 2, 2.2360680103302,
        2.4494898319244385, 2.6457512378692627, 2.8284270763397217, 3,
        3.1622776985168457,
      ],
      shape: nd.shape,
      dtype: nd.dtype,
    });
    expect(result).toNDArrayEqual(check);
  });
});
