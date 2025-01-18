// 1. ekranda rengli duymeler var,her duymeye click etdikde hemin reng ekrana yazilsin
// const circles = document.getElementsByClassName("circle");
// for (let circle of circles) {
//   circle.onclick = () => {
//     console.log(circle.innerText);
//   };
// }
// 2. lampa
// const circles = document.getElementsByClassName("circle");
// const box = document.getElementById("box");
// for (let circle of circles) {
//   circle.onclick = () => {
//     box.style.backgroundColor = circle.innerText;
//   };
// }
const btn = document.querySelector("#btn");
const lamp = document.querySelector("#lamp");

const islamp = lamp.getAttribute("src");
let isTrue = true;
btn.onclick = () => {
  if (isTrue) {
    isTrue = false;
    lamp.setAttribute("src", "boff.gif");
  } else {
    isTrue = true;
    lamp.setAttribute("src", "aon.gif");
  }
};
// ekranda mehsullari gostereceksiniz
// const arr = [
//   { id: 0, name: "Phone", price: "100 AZN" },
//   { id: 2, name: "Computer", price: "200 AZN" },
// ];
// for (let i of arr) {
//   console.log(i);
// }
