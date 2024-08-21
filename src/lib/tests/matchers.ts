import { expect } from 'vitest';
import { NDArray } from '../ndarray/ndarray';

// Define the matcher
export function toNDArrayEqual(a: NDArray, b: NDArray) {
  const pass = this.equals(a.shape, b.shape) && this.equals(a.data, b.data);
  if (!this.equals(a.shape, b.shape)) {
    return {
      message: () =>
        `shapes do not match actual shape is ${a.shape} and expected shape is ${b.shape}`,
      pass: false,
    };
  }
  if (!this.equals(a.data, b.data)) {
    return {
      message: () =>
        `data do not match actual data is ${a.data} and expected data is ${b.data}`,
      pass: false,
    };
  }
  if (pass) {
    return {
      message: () => `passed `,
      pass: true,
    };
  }
}

// Extend expect with the matcher
expect.extend({
  toNDArrayEqual,
});
