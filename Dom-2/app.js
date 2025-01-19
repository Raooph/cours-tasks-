// 1. node list ile html collection ferqi nedir?
// Əsas fərq NodeList və HTML Collection arasında, NodeList hər hansı bir dom elementlərini
//  dinamik olaraq seçməyə imkan verir və NodeList interfeysi Element obyektinə dönüşdürmək üçün istifade edir.
// HTML Collection isə bir HTML Element collection-nu qruplaşdırılmasına imkan verir və statik bir sıra dəyərlər cildidir.
// NodeList ilə müqayisədə, HTML Collection müəyyən təyinat dəyişənindən sonra avtomatik yenilənmir.
// 2. mobile menu yazin
// const bar = document.querySelector("#bar");
// const navBar = document.querySelector("#navBar");
// let isShow = false;
// let BarShow = () => {
//   if (isShow) {
//     navBar.classList.remove("hide");
//   } else {
//     navBar.classList.add("hide");
//   }
// };
// bar.onclick = () => {
//   isShow = !isShow;
//   BarShow();
// };
// 3. Calculator yazin
// 4. Faktoriali hesablayan proqram
const button = document.querySelectorAll(".btn");
let screen = document.querySelector("#screen");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const faktorial = document.querySelector("#faktorial");

button.forEach((e) => {
  e.onclick = () => {
    screen.innerText += e.innerText;
  };
});

equal.onclick = () => {
  screen.innerText = eval(screen.innerText);
};
clear.onclick = () => {
  screen.innerText = "";
};

faktorial.onclick = () => {
  let number = parseInt(screen.innerText);
  let prod = 1;
  for (let i = 1; i <= number; i++) {
    prod = prod * i;
  }
  screen.innerText = prod;
};
