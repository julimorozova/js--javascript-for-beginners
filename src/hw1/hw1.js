export function sumAndMultiply(a, b) {
  const sum = a + b;
  const multiply = a * b;
  console.log(sum, multiply);
}

export function getStringsLength(str1, str2) {
  console.log(str1.length + str2.length);
}

export function sumDigitsInput() {
  const input = window.prompt("Введите трехзначное число: ");
  const sumInput = +input[0] + +input[1] + +input[2];
  console.log(sumInput);
}
