export function maxNumber(num1, num2) {
  const result = num1 > num2 ? num1 : num2;
  console.log(result);
}

export function getMonth() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const input = +window.prompt("Enter number 1-12: ");
  let result = "Invalid input";
  if (input > 12 || input < 1) {
    console.log(result);
  } else {
    result = months[input - 1];
    console.log(result);
  }
}
