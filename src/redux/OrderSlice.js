import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../components/cards/homeListCard/cardData";
import { getLocalData } from "../utils/LocalStorage";

const localData = getLocalData();

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    cartData: [...cardData],
  },
  reducers: {
   
    addItem: (state, actions) => {
      state.cartData.push(actions.payload)

    },
    increaseItemQnty: (state, actions) =>{
     let currItem = actions.payload;

      state.cartData.map((ele, i) => {
            if (ele.itemId === currItem.itemId) {
              const updatedItem = { ...ele };
              updatedItem.count = updatedItem.count + 1;
              state.cartData[i] = updatedItem;
            } 
          });
    },
    decreaseItemQnty: (state, actions) =>{
     let currItem = actions.payload;

      state.cartData.map((ele, i) => {
            if (ele.itemId === currItem.itemId) {
              const updatedItem = { ...ele };
              updatedItem.count = updatedItem.count - 1;
              state.cartData[i] = updatedItem;
            } 
          });
    }
  },
});

export const { addItem, increaseItemQnty, decreaseItemQnty } = orderSlice.actions;
export default orderSlice.reducer;
