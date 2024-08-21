import { DataTypes } from '../../ndarray/data-types';
import { NDArray } from '../../ndarray/ndarray';
import { array } from '../array/array';

export function randint(options: {
  low: number;
  high?: number;
  size?: number;
  dtype?: DataTypes;
}): NDArray {
  let high = options.high;
  let low = options.low;
  const size = options.size;

  if (high === undefined) {
    high = low;
    low = 0;
  }

  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    throw new Error('low and high must be integers.');
  }
  if (low >= high) {
    throw new Error('low must be less than high.');
  }
  if (size !== undefined && (!Number.isInteger(size) || size <= 0)) {
    throw new Error('size must be a positive integer.');
  }

  if (size !== undefined) {
    const result: number[] = [];
    for (let i = 0; i < size; i++) {
      result.push(generateRandomInt(high, low));
    }
    return array(result, options.dtype);
  }

  return array([generateRandomInt(high, low)], options.dtype);
}

function generateRandomInt(high: number, low: number): number {
  return Math.floor(Math.random() * (high - low)) + low;
}
