const obj = {
  name: "Rauf",
  gender: "male",
  age: "19",
  setAge: function () {
    obj.age = +prompt("Enter your age : ");
    console.log(obj.age);
  },
  getYearsBeforeRetirement: function (count) {
    count = 60 - obj.age;
    console.log(count);
  },
};
obj.setAge();
obj.getYearsBeforeRetirement();
console.log(obj);
