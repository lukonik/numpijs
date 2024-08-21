import { NDArray } from '../ndarray/ndarray';
import { iterate } from '../operations/iterate/iterate';
import { indexesToPosition } from './indexes-to-position';

export function aggregate(options: {
  axis?: null | number;
  initial?: number | null;
  action: (prev, curr) => number;
  where?: (value) => boolean;
}) {
  return (nd: NDArray) => {
    if (options.axis === null || options.axis === undefined) {
      const allValues = Array.from(iterate(nd)).map((d) => d.value);

      const initialValue = options?.initial ?? 0;
      let result = initialValue;
      for (let value of allValues) {
        if (options?.where && !options.where(value)) {
          value = initialValue;
        }
        result = options.action(result, value);
      }
      return result;
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
    const initialValue = options?.initial ?? 0;
    for (const key of Object.keys(grouppedIndexes)) {
      let accumulate = initialValue;
      const grouppedIndex = grouppedIndexes[key];
      const indexesValue = grouppedIndex.map((d) => d.value);
      const values = indexesValue.map((i) =>
        nd.get(indexesToPosition(i, nd.shape))
      );

      for (let value of values) {
        if (options?.where && !options.where(value)) {
          value = initialValue;
        }
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
