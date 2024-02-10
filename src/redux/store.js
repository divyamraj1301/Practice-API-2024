import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice";

const storeCart = localStorage.getItem("cart");
const initialState = {
  cart: {
    products: storeCart ? JSON.parse(storeCart) : [],
  },
};

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
  preloadedState: initialState,
});

export default store;
