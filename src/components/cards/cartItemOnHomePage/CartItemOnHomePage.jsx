import React from "react";
import style from "./CartItemOnHomePage.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function CartItemOnHomePage({
  itemName,
  sellingPrice,
  count,
  price,
  handleDecrease,
  handleIncrease,
}) {
  return (
    <div className={style.cartItemHome}>
      <div
        style={{
          fontSize: "15px",
          fontWeight: "600",
          color: "#073642",
        }}
      >
        {itemName}
      </div>
      <small
        style={{
          color: "#073642",
        }}
      >
        size {count} kg
      </small>
      <div className={style.qtySection}>
        <div className={style.priceSection}>
          <div
            style={{
              color: "#073642",
            }}
          >
            {sellingPrice}
          </div>
          <s
            style={{
              color: "grey",
            }}
          >
            {price}
          </s>
        </div>

        <div className={style.btnDiv}>
          <RemoveIcon sx={{ width: "20px" }} onClick={handleDecrease} />
          <p>{count}</p>
          <AddIcon sx={{ width: "20px" }} onClick={handleIncrease} />
        </div>
      </div>
    </div>
  );
}
