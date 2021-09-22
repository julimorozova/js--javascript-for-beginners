export function validateStr() {
  const regData = /[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{2,4}/;
  const regEmail = /[\da-z]+@[\da-z]+\.[a-z]+/;
  const regTel =
    /\+\d[\s-]{0,1}\d{3}[\s-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}/;

  const str = window.prompt("Enter a date, email or tel number: ");
  if (regData.test(str)) {
    return "str is a date";
  }
  if (regEmail.test(str)) {
    return "str is a email";
  }
  if (regTel.test(str)) {
    return "str is a telephone number";
  }
  return "The entered value is incorrect";
}
