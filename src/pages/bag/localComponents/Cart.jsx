import React, { useState, useEffect } from "react";
import BagItemCard from "../../../components/cards/BagItemCard";
import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decreaseItemQnty,
  increaseItemQnty,
} from "../../../redux/OrderSlice";

export default function Cart() {
  const cartStatus = useSelector((state) => state.orderData.cartData);
  const currTotalSellingPrice = useSelector(
    (state) => state.orderData.currTotalSellingPrice
  );
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    cartStatus.map((ele) => {
      if (ele.count > 0) {
        setCartItemCount(cartItemCount + 1);
        //problem in this function when getting itemcount in cart
      }
    });
  }, []);
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6">{`Shopping bag (${cartItemCount} Items)`}</Typography>
        <Typography variant="h6">Total ₹{currTotalSellingPrice}</Typography>
      </Stack>
      {cartStatus.map((ele) => {
        if (ele.count > 0) {
          return <BagItemCard {...ele} />;
        }
      })}
    </>
  );
}
