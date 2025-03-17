import { create } from "zustand";

const UseBasket = create((set) => ({
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  addNewProduct: (product) =>
    set((state) => {
      const newBasket = [product, ...state.basket];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        basket: newBasket,
      };
    }),
  changeProductCount: (id, o) =>
    set((state) => {
      const current = state.basket.find((p) => (p.id = id));
      if (o === "+") {
        current.count += 1;
      } else if (o === "-") {
        if (current.count > 1) {
          current.count -= 1;
        }
      }
      current.totalPrice = current.count * current.price;
      localStorage.setItem("basket", JSON.stringify([...state.basket]));
      return {
        basket: [...state.basket],
      };
    }),
  deleteProductsFromBasket: (id) =>
    set((state) => {
      const allProducts = state.basket.filter((p) => p.id != id);
      localStorage.setItem("basket", JSON.stringify(allProducts));
      return {
        basket: allProducts,
      };
    }),
}));
export default UseBasket;
