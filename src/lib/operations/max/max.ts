import { aggregate } from 'src/lib/common/aggregate';
import { NDArray } from 'src/lib/ndarray/ndarray';

export function max(options: {
  nd: NDArray;
  axis?: number | null;
  initial?: number | null;
  where?: (value) => boolean;
}) {
  return aggregate({
    nd: options.nd,
    axis: options?.axis,
    initial: options?.initial,
    action: (prev, curr) => (prev < curr ? curr : prev),
    where: options?.where,
  });
}
