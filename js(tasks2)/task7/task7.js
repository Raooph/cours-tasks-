number = prompt("Enter the number : ");
const armstrong = (number) => {
  let n1 = number % 10;
  let n2 = ((number - n1) / 10) % 10;
  let n3 = ((number - n1) / 10 - n2) / 10;
  let count = 0;

  for (let i = 1; i <= number; i++) {
    number === number / i;
    count += 1;
  }
  let sum = Math.pow(n1, count) + Math.pow(n2, count) + Math.pow(n3, count);
  if (number === sum) {
    console.log("The" + `${number}` + "is armstrong number");
  }
};
document.write(armstrong(number));
