import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../components/cards/homeListCard/cardData";
import { getLocalData } from "../utils/LocalStorage";

const localData = getLocalData();

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    cartData: [...cardData],
    currTotalSellingPrice: 0,
    selectedAddressIndex: 0,
  },
  reducers: {
    addItem: (state, actions) => {
      state.cartData.push(actions.payload);
    },
    increaseItemQnty: (state, actions) => {
      let currItem = actions.payload;

      state.cartData.map((ele, i) => {
        if (ele.itemId === currItem.itemId) {
          const updatedItem = { ...ele };
          updatedItem.count = updatedItem.count + 1;
          state.cartData[i] = updatedItem;
        }
      });
    },
    decreaseItemQnty: (state, actions) => {
      let currItem = actions.payload;

      state.cartData.map((ele, i) => {
        if (ele.itemId === currItem.itemId) {
          const updatedItem = { ...ele };
          updatedItem.count = updatedItem.count - 1;
          state.cartData[i] = updatedItem;
        }
      });
    },
    updateItemQnty: (state, actions) => {
      // let currItem = actions.payload;
      state.cartData.map((ele, i) => {
        if (ele.itemId === actions.payload.itemId) {
          const updatedItem = { ...ele };
          updatedItem.count = actions.payload.count;
          state.cartData[i] = updatedItem;
          console.log("inside updateItemQnty state", updatedItem);
        }
      });
    },
    setCurrTotalSellingPrice: (state, actions) => {
      state.currTotalSellingPrice = actions.payload;
    },
    setSelectedAddressIndex: (state, actions) => {
      state.selectedAddressIndex = actions.payload;
    },
  },
});

export const {
  addItem,
  increaseItemQnty,
  decreaseItemQnty,
  updateItemQnty,
  setCurrTotalSellingPrice,
  setSelectedAddressIndex,
} = orderSlice.actions;
export default orderSlice.reducer;
