import { NDArray } from 'src/lib/ndarray/ndarray';
import { stringified } from './stringified';
describe('stringified', () => {
  it('CHECKING', () => {
    const ndArray = new NDArray({
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      shape: [3, 4],
    });
    console.log(ndArray.do(stringified()));
  });
});
