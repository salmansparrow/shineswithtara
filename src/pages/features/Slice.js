// src/store/cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      let items = state.items.filter((item) => item.id !== action.payload);
      state.items = items;
    },
    increaseQty: (state, action) => {
      console.log(state.items);

      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      console.log(existingItem);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;
