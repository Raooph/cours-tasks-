const cardsContainer = document.querySelector("#cardsContainer");

const endpoint = "https://dummyjson.com/products/";
axios.get(endpoint).then((res) => {
  if (res.status === 200) {
    res.data.products.forEach(({ thumbnail, title, price, rating, id }) => {
      cardsContainer.innerHTML += ` <a href="cardDetailed.html?card=${id}" class="card" >
            <img src="${thumbnail}" >
            <h2> ${title}</h2>
            <h3>Rating: ${rating}</h3>
            <p>Price: ${price}$</p>
            </a>`;
    });
  }
});
