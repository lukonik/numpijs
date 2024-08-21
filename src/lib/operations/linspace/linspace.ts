import { DataTypes } from '../../ndarray/data-types';
import { NDArray } from '../../ndarray/ndarray';
import { isNill } from '../../utils/is-nill';

export function linspace(options: {
  start: number;
  stop: number;
  num?: number;
  dtype?: DataTypes;
}) {
  if (
    !isNill(options.num) &&
    (!Number.isInteger(options.num) || options.num <= 0)
  ) {
    throw new Error('num must be a positive integer.');
  }

  const start = options.start;
  const stop = options.stop;
  const num = isNill(options.num) ? 50 : options.num;
  const data = [];

  if (num === 1) {
    data.push(start);
  } else {
    const step = (stop - start) / (num - 1);

    for (let i = start; i < stop; i += step) {
      data.push(i);
    }
  }

  return new NDArray({
    data: data,
    dtype: options.dtype,
    shape: [data.length],
  });
}
