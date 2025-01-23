// 1. https://dummyjson.com/products -> bu linke sorgu atin
// ekranda sekli adi qiymeti ve basqa melumatlari gosterin

const endpoint = "https://dummyjson.com/products";

const userContainer = document.querySelector("#userContainer");

const xhr = new XMLHttpRequest();
xhr.open("GET", endpoint);

xhr.send();
xhr.onreadystatechange = (e) => {
  if (xhr.readyState === 4) {
    const data = JSON.parse(xhr.response);
    data.products.forEach((user) => {
      userContainer.innerHTML += ` <div class="user" >
      <img src="${user.thumbnail}" >
      <h2> ${user.title}</h2>
      <h2>Price: ${user.price}$</h2>
      <h2>Rating: ${user.rating}</h2>
      </div>`;
    });
  }
};
