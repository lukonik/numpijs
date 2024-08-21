import { array } from '../array/array';
import { rand } from './rand';

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
