import { array } from '../array/array';
import { linspace } from './linspace';

describe('linspace', () => {
  test('throws an error if num is not a positive integer', () => {
    expect(() => linspace({ start: 0, stop: 10, num: 0 })).toThrow(
      'num must be a positive integer.'
    );
    expect(() => linspace({ start: 0, stop: 10, num: -3 })).toThrow(
      'num must be a positive integer.'
    );
    expect(() => linspace({ start: 0, stop: 10, num: 1.5 })).toThrow(
      'num must be a positive integer.'
    );
  });

  test('generates a single value if num is 1', () => {
    const result = linspace({ start: 0, stop: 10, num: 1 });
    expect(result).toNDArrayEqual(array([0]));
  });

  test('uses the default value for num when it is not provided', () => {
    const result = linspace({ start: 0, stop: 10 });
    expect(result.length).toBe(50); // Default num is 50
  });
});
