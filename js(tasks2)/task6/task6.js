month = prompt("Enter a month name : ");
const count = (month) => {
  let days;
  switch (month) {
    case "February":
      days = 28;
      break;

    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      days = 31;
      break;

    case "aprel":
    case "june":
    case "september":
    case "november":
      days = 30;
      break;

    default:
      console.log("The month you entered is incorrect.");
      break;
  }
  return days;
};
document.write(count(month));
