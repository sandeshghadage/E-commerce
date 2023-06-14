import React, { useState, useEffect } from "react";
import BagItemCard from "../../../components/cards/BagItemCard";
import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateItemQnty, setCartItemCount } from "../../../redux/OrderSlice";

export default function Cart() {
  const cartStatus = useSelector((state) => state.orderData.cartData);
  const currTotalSellingPrice = useSelector(
    (state) => state.orderData.currTotalSellingPrice
  );
  // const [cartItemCount, setCartItemCount] = useState(0);
  const cartItemCount = useSelector((state) => state.orderData.cartItemCount);
  const dispatch = useDispatch();

  useEffect(() => {
    let counter = 0;
    cartStatus.map((ele) => {
      if (ele.count > 0) {
        // setCartItemCount(cartItemCount + 1);
        counter++;
        //problem in this function when getting itemcount in cart
      }
    });
    dispatch(setCartItemCount(counter));
  }, [cartStatus]);

  function handleRemoveItemFromCart(itemId) {
    cartStatus.map((ele) => {
      if (ele.itemId == itemId) {
        const updateQtyData = {
          itemId: itemId,
          count: 0,
        };
        dispatch(updateItemQnty(updateQtyData));
      }
    });
  }
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6">{`Shopping bag (${cartItemCount} Items)`}</Typography>
        <Typography variant="h6">Total ₹{currTotalSellingPrice}</Typography>
      </Stack>
      {cartStatus.map((ele) => {
        if (ele.count > 0) {
          return (
            <BagItemCard
              count={ele.count}
              itemId={ele.itemId}
              img={ele.img}
              itemName={ele.itemName}
              sellingPrice={ele.sellingPrice}
              price={ele.price}
              handleRemoveItem={() => handleRemoveItemFromCart(ele.itemId)}
            />
          );
        }
      })}
    </>
  );
}
