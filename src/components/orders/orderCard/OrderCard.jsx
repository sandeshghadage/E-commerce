import React from "react";
import orderData from "../orderData";
import style from "./OrderCard.module.css";
import { Card, Typography } from "@mui/material";

function OrderCard() {
  return (
    <div className={style.cardContainer}>
      {orderData.map((item) => {
        return (
          <div className={style.card}>
            <Card sx={{ minWidth: 175, margin: "1rem" }}>
              <Typography>
                <div>
                  <div>
                    <div>
                      <img src={item.img} alt=" " />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h5>{item.orderNo}</h5>
                    </div>
                    <div>
                      <h5>{item.price}</h5>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>{item.itemCount}</p>
                    </div>
                    <div>
                      <p>{item.date}</p>
                    </div>
                  </div>
                </div>
              </Typography>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default OrderCard;
