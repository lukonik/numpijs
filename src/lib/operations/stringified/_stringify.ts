//This function is used for ndArray toString and stringified public method
import { NDArray } from 'src/lib/ndarray/ndarray';
import { tolist } from '../tolist/tolist';
import { DataTypes } from 'src/lib/ndarray/data-types';

export function _stringify(nd: NDArray) {
  let stringified = `{\n shape=(${nd.shape}), dtype=${
    DataTypes[nd.dtype]
  }} \n data=(`;

  const list = tolist()(nd);

  function rec(array: any[]) {
    if (!Array.isArray(array)) {
      const value = array;
      stringified += `${value},`;
    } else {
      stringified += '[';
      for (let i = 0; i < array.length; i++) {
        rec(array[i]);
      }

      stringified += ']';
    }
  }

  rec(list);
  stringified += ') \n}';

  return stringified;
}
