import { positionToIndexes } from './position-to-indexes';

describe('positionToIndexes', () => {
  it('should return [0, 0, 0] for position 0 and shape [4, 3, 2]', () => {
    const position = 0;
    const shape = [4, 3, 2];
    const result = positionToIndexes(position, shape);
    expect(result).toEqual([0, 0, 0]);
  });

  it('should return [0, 2, 1] for position 5 and shape [4, 3, 2]', () => {
    const position = 5;
    const shape = [4, 3, 2];
    const result = positionToIndexes(position, shape);
    expect(result).toEqual([0, 2, 1]);
  });

  it('should return [1, 0, 0] for position 6 and shape [4, 3, 2]', () => {
    const position = 6;
    const shape = [4, 3, 2];
    const result = positionToIndexes(position, shape);
    expect(result).toEqual([1, 0, 0]);
  });

  it('should return [1, 2, 1] for position 11 and shape [4, 3, 2]', () => {
    const position = 11;
    const shape = [4, 3, 2];
    const result = positionToIndexes(position, shape);
    expect(result).toEqual([1, 2, 1]);
  });

  it('should return [3, 2, 1] for position 23 and shape [4, 3, 2]', () => {
    const position = 23;
    const shape = [4, 3, 2];
    const result = positionToIndexes(position, shape);
    expect(result).toEqual([3, 2, 1]);
  });

  it('should return [2, 2] for position 8 and shape [3, 3]', () => {
    const position = 8;
    const shape = [3, 3];
    const result = positionToIndexes(position, shape);
    expect(result).toEqual([2, 2]);
  });
});
