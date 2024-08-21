import { _createStorageByType } from '../common/_create-storage-by-type';
import { _stringify } from '../operations/stringified/_stringify';
import { DataTypes } from './data-types';
type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

export class NDArray {
  private _shape: number[];
  private _strides: number[];
  private _dtype: DataTypes;
  private _data: TypedArray;

  get shape() {
    return this._shape;
  }

  get strides() {
    return this._strides;
  }

  get dtype() {
    return this._dtype;
  }

  get data() {
    return this._data;
  }

  get length() {
    return this._data.length;
  }

  constructor(options: { data: number[]; dtype?: DataTypes; shape: number[] }) {
    this._dtype = options.dtype;
    this._shape = options.shape;
    this._strides = [];
    this.validateShape(options.data, options.shape);
    for (let i = 0; i < this._shape.length; i++) {
      const stride = this.shape
        .slice(i + 1)
        .reduce((prev, curr) => prev * curr, 1);
      this.strides.push(stride);
    }
    this.createStorage(options.data);
  }

  private validateShape(data: number[], shape: number[]) {
    const totalElements = shape.reduce((a, b) => a * b, 1);
    // Check if total elements match
    if (data.length !== totalElements) {
      throw new Error(
        `Shape and data are not compatible shape:${shape}, data length:${data.length}`
      );
    }
  }

  private createStorage(data: number[]) {
    if (!this._dtype) {
      this._dtype = DataTypes.Float32;
    }
    this._data = _createStorageByType(data, this.dtype);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  do<T = NDArray>(...funcs: ((instance: NDArray) => any)[]): T {
    return funcs.reduce((acc, func) => func(acc), this);
  }

  get(position: number) {
    return this._data[position];
  }

  set(position: number, value: number) {
    this._data[position] = value;
  }

  toString() {
    return _stringify(this);
  }
}
