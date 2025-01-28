const endpoint = "http://localhost:3000/";
const guns = document.querySelector("#silahlar");
const container = document.querySelector("#container");
const Form = document.querySelector("#Form");
const adInp = document.querySelector("#adInp");
const mensheInp = document.querySelector("#mensheInp");
const ilInp = document.querySelector("#ilInp");
const kalibrInp = document.querySelector("#kalibrInp");
const catSelect = document.querySelector("#catSelect");

// const Kateqoriyalar = [
//   "Avtomat",
//   "Tapança",
//   "Snayper tüfəngi",
//   "Tapança-pulemyot",
// ];

// const silahlar = [
//   {
//     ad: "AK-47",
//     kateqoriya: "Avtomat",
//     menshe: "Rusiya",
//     il: 1949,
//     kalibr: "7.62x39mm",
//   },
//   {
//     ad: "M16",
//     kateqoriya: "Avtomat",
//     menshe: "ABŞ",
//     il: 1964,
//     kalibr: "5.56x45mm",
//   },
//   {
//     ad: "Glock 17",
//     kateqoriya: "Tapança",
//     menshe: "Avstriya",
//     il: 1982,
//     kalibr: "9x19mm",
//   },
//   {
//     ad: "Barrett M82",
//     kateqoriya: "Snayper tüfəngi",
//     menshe: "ABŞ",
//     il: 1989,
//     kalibr: ".50 BMG",
//   },
//   {
//     ad: "MP5",
//     kateqoriya: "Tapança-pulemyot",
//     menshe: "Almaniya",
//     il: 1966,
//     kalibr: "9x19mm",
//   },
//   {
//     ad: "Desert Eagle",
//     kateqoriya: "Tapança",
//     menshe: "ABŞ/İsrail",
//     il: 1983,
//     kalibr: ".50 AE",
//   },
//   {
//     ad: "M4 Carbine",
//     kateqoriya: "Avtomat",
//     menshe: "ABŞ",
//     il: 1994,
//     kalibr: "5.56x45mm",
//   },
//   {
//     ad: "FN SCAR",
//     kateqoriya: "Avtomat",
//     menshe: "Belçika",
//     il: 2009,
//     kalibr: "7.62x51mm",
//   },
//   {
//     ad: "Dragunov SVD",
//     kateqoriya: "Snayper tüfəngi",
//     menshe: "Rusiya",
//     il: 1963,
//     kalibr: "7.62x54mmR",
//   },
//   {
//     ad: "Uzi",
//     kateqoriya: "Tapança-pulemyot",
//     menshe: "İsrail",
//     il: 1950,
//     kalibr: "9x19mm",
//   },
// ];

//--------------------------------------------------------------------------

const showCategories = (arr) => {
  container.innerHTML = "";
  arr.forEach((c) => {
    container.innerHTML += `<button>${c}</button>`;
  });
};
deleteGuns = (id) => {
  const isAgree = confirm("Eminsiniz ? ");
  if (isAgree) {
    axios.delete(endpoint + "guns/" + id).then((res) => {
      if (res.status === 200 && res.statusText === "OK") {
        getGuns();
      }
    });
  }
};
const showGuns = (arr) => {
  guns.innerHTML = "";
  arr.forEach(({ ad, menshe, il, kalibr, image, id }) => {
    guns.innerHTML += `<div class="silahCards">
      <img src="${image}" >
    <a href="file:///C:/Users/user/Desktop/cours(tasks)/fakeDB/Html/gunDetail.html?gun=${id}"><h1>${ad}</h1></a>
        <h3>${menshe}</h3>
        <h3>${il}</h3>
        <h3>${kalibr}</h3>
        <button onclick="deleteGuns('${id}')">delete</button>
    <button>edit</button>
        </div>`;
  });
};
//--------------------------------------------------------------------------

const getGuns = () => {
  axios.get(endpoint + "guns").then((res) => {
    if (res.status === 200 && res.statusText === "OK") {
      showGuns(res.data);
    }
  });
};
getGuns();

axios.get(endpoint + "categories").then((res) => {
  if (res.status === 200 && res.statusText === "OK") {
    showCategories(res.data);
    res.data.forEach((cat) => {
      catSelect.innerHTML += `<option>${cat}</option>`;
    });
  }
});

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  const obj = {
    ad: adInp.value,
    menshe: mensheInp.value,
    il: ilInp.value,
    kalibr: kalibrInp.value,
    kateqoriya: catSelect.value,
  };
  axios.post(endpoint + "guns", obj).then((res) => {
    if (res.status === 201 && res.statusText === "Created") {
      alert("Succesfully created");
      showGuns();
    }
  });
});
