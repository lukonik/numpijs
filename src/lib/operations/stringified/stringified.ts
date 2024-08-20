import { NDArray } from 'src/lib/ndarray/ndarray';
import { _stringify } from './_stringify';

export function stringified() {
  return (nd: NDArray) => {
    return _stringify(nd);
  };
}
