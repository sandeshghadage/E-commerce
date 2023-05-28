import { createSlice } from "@reduxjs/toolkit";
import { getLocalData } from "../utils/LocalStorage";

const localData = getLocalData();

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    cartData: [...localData],
  },
  reducers: {
    // addProduct: (state, actions) => {
    //   const currItem = actions.payload;
    //   if (state.cartData.length == 0) {
    //     state.cartData.push(currItem);
    //   }
    //   state.cartData.map((ele, i) => {
    //     if (ele.itemId === currItem.itemId) {
    //       const updatedItem = { ...ele };
    //       updatedItem.count = updatedItem.count + 1;
    //       state.cartData[i] = updatedItem;
    //     } else {
    //       state.cartData.push(currItem);
    //     }
    //   });
    // },
  },
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;
