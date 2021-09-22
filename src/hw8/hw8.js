export function getWeekDay() {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const inputDate = window.prompt("Enter a date to format DD.MM.YYYY: ");
  const dateArray = inputDate.split(".");
  const date = new Date(+dateArray[2], dateArray[1] - 1, +dateArray[0]);
  return weekDays[date.getDay()];
}

export function getMinutes() {
  const date = new Date();
  const minutes = date.getHours() * 60 + date.getMinutes();
  console.log(minutes);
}

export function getUserYounger(br1, br2) {
  const birthday1 = br1.split(".");
  const birthday2 = br2.split(".");
  const date1 = new Date(+birthday1[2], birthday1[1] - 1, +birthday1[0]);
  const date2 = new Date(+birthday2[2], birthday2[1] - 1, +birthday2[0]);
  return date1 > date2 ? "User1 is younger" : "User2 is younger";
}
