import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "./OrderSlice";

const Store = configureStore({
  reducer: {
    orderData: OrderReducer,
  },
});

export default Store;
