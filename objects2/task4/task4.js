//spread
const obj1 = {
  country: "Spain",
  capital: "Madrid",
  language: "Sapnish",
};
const obj2 = { ...obj1 };

console.log(obj2);

//rest
function count(...n) {
  console.log(n);
}
count(1, 2, 3, 45, 5, 6, 7, 8, 9, 1000, 1234, 76, 543, 345, 678, 239);
