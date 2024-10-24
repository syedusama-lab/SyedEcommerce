import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../slices/LoginSlice";
import productReduscer from "../slices/ProductSlice"
import cartReducer from "../slices/CartSlice"

const store = configureStore({
  reducer: {
    login: loginReducer,
    product:productReduscer,
    cart: cartReducer
  },
});

export default store;
