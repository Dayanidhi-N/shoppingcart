import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const removed = state.filter((i) => i.id !== action.payload);
      return removed;
    },
    incrementQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      item.quantity += 1;
    },
    decrementQty: (state, action) => {
      const item = state.find((i) => i.id === action.payload);
      if (item.quantity > 1) item.quantity -= 1;
    },
  },
});

export const { addItem, removeItem, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
