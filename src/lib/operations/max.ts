import { NDArray } from '../ndarray/ndarray';
import { aggregate } from './aggregate';

export function max(options?: {
  axis?: number | null;
  initial?: number | null;
  where?: (value) => boolean;
}) {
  return (nd: NDArray) => {
    return aggregate({
      axis: options?.axis,
      initial: options?.initial,
      action: (prev, curr) => (prev < curr ? curr : prev),
      where: options?.where,
    })(nd);
  };
}
