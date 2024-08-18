import { DataTypes } from '../ndarray/data-types';
import { NDArray } from '../ndarray/ndarray';
import { indexesToPosition } from './indexes-to-position';
import { iterate } from './iterate';
import { positionToIndexes } from './position-to-indexes';

export function aggregate(options: {
  axis?: null | number;
  initialValue?: number | null;
  action: (prev, curr) => number;
}) {
  return (nd: NDArray) => {
    if (options.axis === null || options.axis === undefined) {
      const allValues = Array.from(iterate(nd)).map((d) => d.value);

      let initialValue = options?.initialValue ?? 0;
      for (const value of allValues) {
        initialValue = options.action(initialValue, value);
      }
      return initialValue;
    }

    const axisShapeIndex = nd.shape.findIndex(
      (_, index) => index === options.axis
    );

    if (axisShapeIndex === -1) {
      throw new Error('Axis not found');
    }

    const allIndexes = Array.from(iterate(nd)).map((d) => d.indexes);

    const allIndexesHash = allIndexes.map((a) => ({
      value: a,
      key: a.filter((item, index) => index !== axisShapeIndex).toString(),
    }));

    const grouppedIndexes = groupBy(allIndexesHash, (k) => k.key);

    const result = [];
    const initialValue = options?.initialValue ?? 0;
    for (const key of Object.keys(grouppedIndexes)) {
      let accumulate = initialValue;
      const grouppedIndex = grouppedIndexes[key];
      const indexesValue = grouppedIndex.map((d) => d.value);
      const values = indexesValue.map((i) =>
        nd.get(indexesToPosition(i, nd.shape))
      );
      for (const value of values) {
        accumulate = options.action(accumulate, value);
      }
      result.push(accumulate);
    }
    const newArray = new NDArray({
      data: result,
      dtype: nd.dtype,
      shape: nd.shape.filter((item, index) => index !== axisShapeIndex),
    });
    return newArray;
  };
}

function groupBy<T, K extends keyof any>(
  array: T[],
  key: (item: T) => K
): Record<K, T[]> {
  return array.reduce((result, currentItem) => {
    const groupKey = key(currentItem);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(currentItem);
    return result;
  }, {} as Record<K, T[]>);
}
