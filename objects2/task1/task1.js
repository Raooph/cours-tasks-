function Car(brand, model, year, engine) {
  this.marka = brand;
  this.model = model;
  this.il = year;
  this.motor = engine;
}
const car1 = new Car("bmw", "x6", "2016", "ee012");
const car2 = new Car("bmw", "m5", "2018", "ee013");
const car3 = new Car("mercedes", "cls", "2013", "ee014");
console.log(car1);
console.log(car2);
console.log(car3);
