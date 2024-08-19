import { rand } from './rand';
import { createNDArray } from './create-nd-array';
import { DataTypes } from '../ndarray/data-types';
import { array } from './array';

describe('rand', () => {
  beforeEach(() => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('should generate an NDArray with random values using the mocked Math.random', () => {
    const size = 5;

    const result = rand(size);
    expect(result).toNDArrayEqual(array([0.5, 0.5, 0.5, 0.5, 0.5])); // Or adjust according to your implementation
  });
});
