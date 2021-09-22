export function outputSumToConsole() {
  let sum = 0;
  for (let i = 50; i < 101; i += 1) {
    sum += i;
  }
  console.log(sum);
}

export function outputMultiplyTableToConsole(num) {
  for (let i = 1; i < 11; i += 1) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

export function outputArithmeticMeanOfOddNumbers() {
  let sumNumber = 0;
  let count = 0;
  const inputNumber = +window.prompt("Enter number: ");
  for (let i = 0; i <= inputNumber; i += 1) {
    if (i % 2 !== 0) {
      sumNumber += i;
      count += 1;
    }
  }
  console.log(sumNumber / count);
}
