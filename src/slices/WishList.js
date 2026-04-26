import { createSlice } from "@reduxjs/toolkit";

const loadWishList = () => {
  const LOCAL_KEY = "Wish_list";
  try {
    const rawData = localStorage.getItem(LOCAL_KEY);
    return rawData ? JSON.parse(rawData) : [];
  } catch (err) {
    console.log("Failed to parse data from local storage", err);
    return [];
  }
};

const initialState = loadWishList();

const wishListSlice = createSlice({
  name: "WishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const exitItem = state.find((i) => i.id === action.payload.id);
      if (!exitItem) {
        state.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      return state.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
