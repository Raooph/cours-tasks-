const urlParams = new URLSearchParams(window.location.search);
const gunId = urlParams.get("gun");

const endpoint = "http://localhost:3000/";

axios.get(endpoint + "guns/" + gunId).then((res) => {
  if (res.status === 200 && res.statusText === "OK") {
    document.body.innerHTML = `<div class="silahCards">
      <img src="${res.data.image}" >
    <h1>${res.data.ad}</h1>
        <h3>${res.data.menshe}</h3>
        <h3>${res.data.il}</h3>
        <h3>${res.data.kalibr}</h3>`;
  }
});
