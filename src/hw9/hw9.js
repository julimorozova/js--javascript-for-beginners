export function isRectangularTriangle(a, b, c) {
  return a * a + b * b === c * c;
}

export function getSquareCircle(radius) {
  const l = Math.round(2 * Math.PI * radius);
  const square = Math.round(Math.PI * radius ** 2);
  console.log(l, square);
}

export function getRootsOfEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    console.log("there are no roots");
    return;
  }
  if (discriminant === 0) {
    const x = -b / (2 * a);
    console.log(x);
    return;
  }
  const x1 = ((-b + Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  const x2 = ((-b - Math.sqrt(b * b - 4 * a * c)) / 2) * a;
  console.log(x1, x2);
}
