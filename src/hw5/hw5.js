export function sumElementsArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += i;
  }
  console.log(sum);
}

export function doubleElementArray(arr) {
  return arr.map((element) => element * 2);
}

export function getMaxAndMinElementsArray(arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log(min, max);
}
