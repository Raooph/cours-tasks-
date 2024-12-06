const min = (n1, n2, n3) => {
  let mesaj;
  if (n1 < n2 && n1 < n3) {
    mesaj = n1;
  } else if (n2 < n1 && n2 < n3) {
    mesaj = n2;
  } else {
    mesaj = n3;
  }
  return mesaj;
};
document.write(min(5, 8, 1));
