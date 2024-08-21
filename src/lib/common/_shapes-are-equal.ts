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
