import { aggregate } from 'src/lib/common/aggregate';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function sum(options?: {
  axis?: number | null;
  initial?: number | null;
  where?: (value) => boolean;
}) {
  return (nd: NDArray) => {
    return aggregate({
      axis: options?.axis,
      initial: options?.initial,
      action: (prev, curr) => prev + curr,
      where: options?.where,
    })(nd);
  };
}
