import { Query, QueryParser } from './query-parser';

describe('QueryParser', () => {
  let parser: QueryParser;

  beforeEach(() => {
    parser = new QueryParser([6, 4, 5]);
  });

  function generateRestTwo(first: Query) {
    return [
      first,
      ...[
        {
          start: 0,
          end: 4,
          step: 1,
        },
        {
          start: 0,
          end: 5,
          step: 1,
        },
      ],
    ];
  }
  function generateRestOne(first: Query, second: Query) {
    return [
      first,
      second,
      {
        start: 0,
        end: 5,
        step: 1,
      },
    ];
  }

  it('Should throw an error for invalid query', () => {
    expect(() => {
      parser.parse('Invalid query');
    }).toThrowError();
  });
  it('1D query', () => {
    const result = parser.parse('1:2:1');
    expect(result).toEqual(
      generateRestTwo({
        start: 1,
        end: 2,
        step: 1,
      })
    );
  });
  it('Negative Start', () => {
    const result = parser.parse('-4:4:1');
    expect(result).toEqual(
      generateRestTwo({
        start: 2,
        end: 4,
        step: 1,
      })
    );
  });
  it('Negative End', () => {
    const result = parser.parse('1:-1:1');
    expect(result).toEqual(
      generateRestTwo({
        start: 1,
        end: 5,
        step: 1,
      })
    );
  });
  it('Throw not implemented on negative step', () => {
    expect(() => {
      parser.parse('1:2:-1');
    }).toThrowError();
  });

  it('should throw an error if step is zero', () => {
    expect(() => parser.parse('2:8:0')).toThrowError();
  });

  it('should throw an error if start is greater than end with a negative step', () => {
    expect(() => parser.parse('2:8:-1')).toThrowError();
  });

  it('should throw an error if start is out of bounds', () => {
    expect(() => parser.parse('-11:8:1')).toThrowError();
  });

  it('should throw an error if end is out of bounds', () => {
    expect(() => parser.parse('2:11:1')).toThrowError();
  });

  it('should throw an error if start is out of bounds for positive step', () => {
    expect(() => parser.parse('10:2:1')).toThrowError();
  });

  it('should throw an error if end is out of bounds for positive step', () => {
    expect(() => parser.parse('2:10:1')).toThrowError();
  });

  it('2D', () => {
    const result = parser.parse('::,0:2');
    expect(result).toEqual(
      generateRestOne(
        {
          start: 0,
          end: 6,
          step: 1,
        },
        {
          start: 0,
          end: 2,
          step: 1,
        }
      )
    );
  });
});
