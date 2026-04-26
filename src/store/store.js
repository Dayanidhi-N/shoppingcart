import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slices/CartSlice";
import productsReducer from "../slices/ProductSlice";
import listReducer from "../slices/WishList";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    wishList: listReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("Wish_list", JSON.stringify(state.wishList));
});
