const convert = (rubl, dollar) => {
  dollar *= 75;
  let sum = rubl + dollar;
  return sum;
};
document.write(convert(1000, 60));
