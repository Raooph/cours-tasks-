const calc = (n1, n2, k) => {
  let res;
  if (k === "+") {
    res = n1 + n2;
  } else if (k === "-") {
    res = n1 - n2;
  } else if (k === "*") {
    res = n1 * n2;
  } else if (k === "/") {
    res = n1 / n2;
  }
  return res;
};
document.write(calc(8, 9, "*"));
