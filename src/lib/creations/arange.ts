import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';

export function arange(options: {
  start?: number;
  stop: number;
  step?: number;
  dtype?: DataTypes;
}) {
  const start = options.start || 0;
  const stop = options.stop;
  const step = options.step || 1;
  const data = [];
  for (let i = start; i < stop; i += step) {
    data.push(i);
  }

  return new NDArray({
    data: data,
    dtype: options.dtype,
    shape: [data.length],
  });
}
