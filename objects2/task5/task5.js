const user = {
  a: 1,
  b: 2,
  c: 3,
  d: null,
};
function existsAndTruthy(obj, string) {
  if (obj[string]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
existsAndTruthy(user, "d");
