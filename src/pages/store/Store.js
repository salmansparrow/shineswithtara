import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Slice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
