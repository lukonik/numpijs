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

  get length(){
    return this._data.length;
  }

  constructor(options: { data: number[]; dtype?: DataTypes; shape: number[] }) {
    this._dtype = options.dtype;
    this._shape = options.shape;
    this._strides = [];
    for (let i = 0; i < this._shape.length; i++) {
      const stride = this.shape
        .slice(i + 1)
        .reduce((prev, curr) => prev * curr, 1);
      this.strides.push(stride);
    }
    this.createStorage(options.data);
  }

  private createStorage(data: number[]) {
    switch (this.dtype) {
      case DataTypes.Int8:
        this._data = new Int8Array(data);
        break;
      case DataTypes.Int16:
        this._data = new Int16Array(data);
        break;
      case DataTypes.Int32:
        this._data = new Int32Array(data);
        break;
      case DataTypes.UInt8:
        this._data = new Uint8Array(data);
        break;
      case DataTypes.UInt16:
        this._data = new Uint16Array(data);
        break;
      case DataTypes.UInt32:
        this._data = new Uint32Array(data);
        break;
      case DataTypes.Float32:
        this._data = new Float32Array(data);
        break;
      case DataTypes.Float64:
        this._data = new Float64Array(data);
        break;
      default:
        this._data = new Float32Array(data);
        this._dtype = DataTypes.Float32;
        break;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  do<T = NDArray>(...funcs: ((instance: NDArray) => any)[]): T {
    return funcs.reduce((acc, func) => func(acc), this);
  }

  get(position: number) {
    return this._data[position];
  }
}
