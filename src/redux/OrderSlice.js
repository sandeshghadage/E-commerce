import { createSlice } from "@reduxjs/toolkit";
import { cardData } from "../components/cards/homeListCard/cardData";
import { getLocalData, setLocalData } from "../utils/LocalStorage";

const localData = getLocalData();
console.log("in state");

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    cartData: [...localData],
    currTotalSellingPrice: 0,
    selectedAddressIndex: 0,
    cartItemCount: 0,
  },
  reducers: {
    addItem: (state, actions) => {
      console.log("payload", actions.payload);
      state.cartData = actions.payload;
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
      setLocalData(state.cartData);
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
      setLocalData(state.cartData);
    },
    updateItemQnty: (state, actions) => {
      state.cartData.map((ele, i) => {
        if (ele.itemId === actions.payload.itemId) {
          const updatedItem = { ...ele };
          updatedItem.count = actions.payload.count;
          state.cartData[i] = updatedItem;
          console.log("inside updateItemQnty state", updatedItem);
        }
      });
      setLocalData(state.cartData);
    },
    setCurrTotalSellingPrice: (state, actions) => {
      let finalTotal = 0;
      state.cartData.map((ele) => {
        if (ele.count > 0) {
          finalTotal += ele.count * ele.sellingPrice;
        }
      });
      state.currTotalSellingPrice = finalTotal;
      setLocalData(state.cartData);
    },
    setSelectedAddressIndex: (state, actions) => {
      state.selectedAddressIndex = actions.payload;
    },
    setCartItemCount: (state, actions) => {
      state.cartData.map((ele) => {
        if (ele.count > 0) {
          state.cartItemCount = actions.payload;
        }
      });
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
  setCartItemCount,
} = orderSlice.actions;
export default orderSlice.reducer;
