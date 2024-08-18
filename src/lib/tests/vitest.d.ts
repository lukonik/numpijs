import 'vitest';
import { NDArray } from '../..';

declare module 'vitest' {
  interface Assertion<T = any> {
    toNDArrayEqual(nd: NDArray): T;
  }
}
