import { array } from './array';
import { linspace } from './linspace';

describe('linspace', () => {
  test('generates a linearly spaced array with positive step', () => {
    const result = linspace({ start: 0, stop: 10, num: 5 });
    expect(result).toEqual([0, 2.5, 5, 7.5, 10]);
  });

  test('generates a linearly spaced array with negative step', () => {
    const result = linspace({ start: 10, stop: 0, num: 5 });
    expect(result).toEqual([10, 7.5, 5, 2.5, 0]);
  });

  test('returns an array of the same value when start equals stop', () => {
    const result = linspace({ start: 5, stop: 5, num: 4 });
    expect(result).toEqual([5, 5, 5, 5]);
  });

  test.only('throws an error if num is not a positive integer', () => {
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
    console.log(result);
    console.log(array([0]));
    expect(result).toNDArrayEqual(array([0]));
  });

  test('uses the default value for num when it is not provided', () => {
    const result = linspace({ start: 0, stop: 10 });
    expect(result.length).toBe(50); // Default num is 50
  });
});
