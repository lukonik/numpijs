
const SUB_QUERY_SPLITTER = ',';
const SLICE_SPLITTER = ':';

export interface Query {
  start: number;
  end: number;
  step: number;
}

export class QueryParser {
  constructor(private shape: number[]) {}

  private validateQuery(query: string) {
    const multiDimSliceRegex =
      /^\s*\[?\s*((-?\d+)?\s*:\s*(-?\d+)?\s*(:\s*(-?\d+)?\s*)?\s*,?\s*)+\]?\s*$/;
    if (!multiDimSliceRegex.test(query)) {
      throw new Error('Invalid query ' + query);
    }
  }

  parse(query: string) {
    this.validateQuery(query);
    const subQueries = this.generateSubQueries();
    this.updateSubQueriesWithQuery(subQueries, query);
    return subQueries;
  }

  private updateSubQueriesWithQuery(subQueries: Query[], query: string) {
    const subQueriesStr = query.split(SUB_QUERY_SPLITTER);

    for (let i = 0; i < subQueriesStr.length; i++) {
      const subQueryStr = subQueriesStr[i];
      const subQuery = subQueries[i];
      this.updateSubQueryWithSlice(subQuery, subQueryStr, i);
      this.validateSubQuery(subQuery, i);
    }
  }

  private updateSubQueryWithSlice(
    subQuery: Query,
    subQueryStr: string,
    currentIndex: number
  ) {
    const slicesStr = subQueryStr.split(SLICE_SPLITTER);
    const slice = this.fillEmptySlices(slicesStr, currentIndex);

    subQuery.start = slice[0];
    subQuery.end = slice[1];
    subQuery.step = slice[2];
  }

  private validateSubQuery(subQuery: Query, currentIndex: number) {
    const { start, end, step } = subQuery;
    const maxIndex = this.shape[currentIndex];
    if (step === 0) {
      throw new Error('Step cannot be zero.');
    }

    // If step is negative, start must be greater than or equal to end
    if (
      step !== undefined &&
      step < 0 &&
      start !== undefined &&
      end !== undefined
    ) {
      if (start < end) {
        throw new Error(
          'For a negative step, start must be greater than or equal to end.'
        );
      }
    }

    // Start and end must be within the valid range
    if (start !== undefined) {
      if (start < -maxIndex || start >= maxIndex) {
        throw new Error(
          `Start index ${start} is out of bounds. Valid range is [-${maxIndex}, ${
            maxIndex - 1
          }].`
        );
      }
    }

    if (end !== undefined) {
      if (end < -maxIndex || end > maxIndex) {
        throw new Error(
          `End index ${end} is out of bounds. Valid range is [-${maxIndex}, ${maxIndex}].`
        );
      }
    }

    // Check if start and end are within the valid range
    if (start < 0 || start >= this.shape.length) {
      throw new Error(
        `Query start value ${start} is out of bounds for shape with length ${this.shape.length}.`
      );
    }

    // Check if step is valid
    if (step === 0) {
      throw new Error(`Query step value cannot be 0.`);
    }

    // If end is -1, it means the query wants to go till the end of the dimension
    if (end === -1 && start >= this.shape.length) {
      throw new Error(
        `Query end value ${end} cannot be used with start value ${start} in a shape of length ${this.shape.length}.`
      );
    }

    // Ensure that the step and range make sense
    const rangeLength = Math.abs(end - start);
    if (step > rangeLength) {
      throw new Error(
        `Query step value ${step} is too large for the range defined by start ${start} and end ${end}.`
      );
    }
  }

  private fillEmptySlices(slices: string[], currentIndex: number): number[] {
    if (slices[0] === undefined || slices[0] === '') {
      slices[0] = '0';
    }
    if (slices[1] === undefined || slices[1] === '') {
      slices[1] = this.shape[currentIndex].toString();
    }
    if (slices[2] === undefined || slices[2] === '') {
      slices[2] = '1';
    }
    const numberSlices = slices.map((s) => parseInt(s));

    if (numberSlices[2] < 0) {
      throw new Error('Negative step is not implemented');
    }

    if (numberSlices[1] < 0) {
      numberSlices[1] = this.shape[currentIndex] + numberSlices[1];
    }

    if (numberSlices[0] < 0) {
      numberSlices[0] = this.shape[currentIndex] + numberSlices[0];
    }

    return numberSlices;
  }

  private generateSubQueries(): Query[] {
    const result: Query[] = [];

    for (let i = 0; i < this.shape.length; i++) {
      result.push({
        start: 0,
        end: this.shape[i],
        step: 1,
      });
    }
    return result;
  }
}
