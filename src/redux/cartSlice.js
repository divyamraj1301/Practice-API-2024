import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;

      // Ensure state.products is an array
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      const existingProductIndex = state.products.findIndex(
        (product) => product.id === productToAdd.id
      );

      if (existingProductIndex !== -1) {
        state.products[existingProductIndex].quantity += 1;
      } else {
        state.products.push({ ...productToAdd, quantity: 1 });
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product.id === productIdToRemove
      );

      if (productIndex !== -1) {
        state.products.splice(productIndex, 1);
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product) {
        product.quantity += 1;
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    clearCart: (state) => {
      state.products = [];

      // Update local storage
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
