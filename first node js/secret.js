const url = "https://dummyjson.com/products";
import chalk from "chalk";
import axios from "axios";
// export const getData = () => {
//   fetch(secretKey)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// };
// export const users = {
//   ad: "Rauf",
//   age: "19",
//   superPower: "Invisible",
// };

export const getAllData = async () => {
  const products = await axios.get(url);
  console.log(products.data);
};
