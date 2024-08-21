import { DataTypes } from '../ndarray/data-types';

export function _createStorageByType(data: number[], dtype: DataTypes) {
  switch (dtype) {
    case DataTypes.Int8:
      return new Int8Array(data);
    case DataTypes.Int16:
      return new Int16Array(data);
    case DataTypes.Int32:
      return new Int32Array(data);
    case DataTypes.UInt8:
      return new Uint8Array(data);
    case DataTypes.UInt16:
      return new Uint16Array(data);
    case DataTypes.UInt32:
      return new Uint32Array(data);
    case DataTypes.Float32:
      return new Float32Array(data);
    case DataTypes.Float64:
      return new Float64Array(data);
  }
}
