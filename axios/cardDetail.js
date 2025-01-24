const urlParams = new URLSearchParams(window.location.search);
const cardID = urlParams.get("card");
cardIdContainer.innerHTML = `Loading...`;

if (cardID) {
  const url = `https://dummyjson.com/products/${cardID}`;
  axios
    .get(url)
    .then((res) => {
      const product = res.data;
      cardIdContainer.innerHTML = `
                <div class="card">
                    <img src="${product.thumbnail}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <h3>Rating: ${product.rating}</h3>
                    <p>Price: ${product.price}$</p>
                </div>`;
    })
    .catch((error) => {
      console.error("Error fetching the product data:", error);
      cardIdContainer.innerHTML = `Error loading product.`;
    });
} else {
  cardIdContainer.innerHTML = `No card ID not found.`;
}
