export function _shapesAreEqual(a: number[], b: number[]) {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    const aShape = a[i];
    const bShape = b[i];
    if (aShape !== bShape) {
      return false;
    }
  }
  return true;
}

export function _assertShapesAreEqual(a: number[], b: number[]) {
  if (!_shapesAreEqual(a, b)) {
    throw new Error(`Shapes are not compatible, a:${a}, b:${b}`);
  }
}
