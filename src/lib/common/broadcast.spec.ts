import { array } from '../operations/array/array';
import { reshape } from '../operations/reshape/reshape';
import { tolist } from '../operations/tolist/tolist';
import { broadcast } from './broadcast';
describe.only('broadcast', () => {
  it.only('Test', () => {
    const aShape = array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).do(
      reshape([2, 3, 2])
    );
    const bShape = array([1, 2, 3, 4, 5, 6]).do(reshape([1, 3, 2]));
    const result = broadcast(aShape, bShape, (a, b) => a + b);
    console.log(result.do(tolist()));
  });
});
