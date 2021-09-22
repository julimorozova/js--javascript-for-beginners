export function diff(num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
}

export function isWorld(str) {
  const arr = str.split(" ");
  return arr.length === 1;
}

export function pow(num, x) {
  let result = num;
  if (x === 1) {
    return num;
  }
  if (x === 0) {
    return 1;
  }
  for (let i = 1; i < x; i += 1) {
    result *= num;
  }
  return result;
}
