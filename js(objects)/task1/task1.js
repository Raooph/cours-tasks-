function Constructor(model, marka, ram, yaddas) {
  this.marka = marka;
  this.model = model;
  this.ram = ram;
  this.yaddas = yaddas;
}
const comp1 = new Constructor("asus", "zenbook", 16, 512);
console.log(comp1);
