function propertyTaker(
  obj = { continent: "Asia", country: "Japan" },
  propertyName
) {
  propertyName = obj.continent;
  document.write(propertyName);
}
propertyTaker();
