const obj = {
  a: +prompt("Enter first value : "),
  b: +prompt("Enter second value : "),

  addition: function (sum) {
    sum = obj.a + obj.b;
    console.log(sum);
  },
  subtraction: function (sub) {
    sub = obj.a - obj.b;
    console.log(sub);
  },
  multiplication: function (mult) {
    mult = obj.a * obj.b;
    console.log(mult);
  },
  division: function (div) {
    div = obj.a / obj.b;
    console.log(div);
  },
};
console.log("First value " + obj.a);
console.log("Second value " + obj.b);
obj.subtraction();
obj.addition();
obj.multiplication();
obj.division();
