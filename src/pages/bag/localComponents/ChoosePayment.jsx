import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../styles/styles";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ButtonStandardFilled from "../../../components/buttons/ButtonStandardFilled";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { addOrder } from "../../../network/Network";

export default function ChoosePayment() {
  const [selectedMethod, setSelectedMethod] = useState("Online payment");
  const currTotalSellingPrice = useSelector(
    (state) => state.orderData.currTotalSellingPrice
  );
  const navigate = useNavigate();

  function handleSelectOnlinePaymentMethod() {
    setSelectedMethod("Online payment");
  }
  function handleSelectCashPaymentMethod() {
    setSelectedMethod("Cash on delivery");
  }

  function handleOnlinePayment() {
    alert(
      "online payment method is currently out of service, Kindly choose COD."
    );
  }
  function handleCashPayment() {
    const cart = JSON.parse(localStorage.getItem("finalCart"));
    console.log("cart", cart);
    const orderObj = {
      userId: "3423",
      orderId: 3462,
      cartItems: cart,
      shippingAddress: localStorage.getItem("orderAddress"),
      status: "pending",
      totalPrice: currTotalSellingPrice,
      createdAt: new Date().toLocaleString(),
      paymentMethod: "COD",
    };
    addOrder(orderObj);
    alert("Order has been placed");
    navigate("/");
    // clear local storage after order
  }

  return (
    <>
      <Typography variant="h6">Choose payment mode</Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "13rem",
          border: "1px solid #eaeaea",
          borderRadius: 2,
        }}
      >
        <Box sx={{ width: "40%", height: "100%" }}>
          <Stack
            onClick={handleSelectOnlinePaymentMethod}
            sx={{
              height: "33.3%",
              width: "100%",
              borderBottom: "1px solid #eaeaea",
              borderRight: "1px solid #eaeaea",
              // borderLeft:
              //   selectedMethod === "Online payment"
              //     ? "2px solid #073642"
              //     : "1px solid #eaeaea",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor:
                selectedMethod === "Online payment" ? "#fff" : "#fafafa",
            }}
          >
            {selectedMethod === "Online payment" && (
              <Stack
                sx={{
                  width: "3px",
                  height: "100%",
                  backgroundColor: colors.primary,
                  borderTopLeftRadius: 3,
                }}
              />
            )}
            <Stack direction={"row"} gap={1} sx={{ marginLeft: 2 }}>
              <PaymentIcon sx={{ color: colors.primary }} />
              <Typography
                sx={{ fontWeight: "600", color: colors.primary }}
                variant="body1"
              >
                Online payment
              </Typography>
            </Stack>
          </Stack>
          <Stack
            onClick={handleSelectCashPaymentMethod}
            sx={{
              height: "33.3%",
              width: "100%",
              borderBottom: "1px solid #eaeaea",
              borderRight: "1px solid #eaeaea",
              // borderLeft:
              //   selectedMethod === "Cash on delivery"
              //     ? "2px solid #073642"
              //     : "1px solid #eaeaea",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor:
                selectedMethod === "Cash on delivery" ? "#fff" : "#fafafa",
            }}
          >
            {selectedMethod === "Cash on delivery" && (
              <Stack
                sx={{
                  width: "3px",
                  height: "100%",
                  backgroundColor: colors.primary,
                  borderTopLeftRadius: 3,
                }}
              />
            )}
            <Stack direction={"row"} gap={1} sx={{ marginLeft: 2 }}>
              <LocalShippingOutlinedIcon sx={{ color: colors.primary }} />
              <Typography
                sx={{ fontWeight: "600", color: colors.primary }}
                variant="body1"
              >
                Cash on delivery
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "33.3%",
              width: "100%",
              borderRight: "1px solid #eaeaea",
              backgroundColor: "#fafafa",
            }}
          ></Stack>
        </Box>
        {/* --------payment button---------- */}
        <Box
          sx={{
            width: "60%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "90%",
              width: "90%",
              margin: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {selectedMethod === "Online payment" ? (
              <Stack>
                <Typography
                  sx={{
                    color: colors.black25,
                  }}
                  variant="h6"
                >
                  Pay online
                </Typography>
                <Typography
                  sx={{
                    color: colors.black50,
                  }}
                >
                  Use credit/debit card, net-banking, UPI, wallets to complete
                  the payment.
                </Typography>
              </Stack>
            ) : (
              <Stack>
                <Typography
                  sx={{
                    color: colors.black25,
                  }}
                  variant="h6"
                >
                  {"Pay on delivery (Cash/Card/UPI)"}
                </Typography>
                <Typography
                  sx={{
                    color: colors.black50,
                  }}
                >
                  Pay in cash or pay in person at the time of delivery with
                  GPay/PayTM/PhonePe.
                </Typography>
              </Stack>
            )}
            {selectedMethod === "Online payment" ? (
              <ButtonStandardFilled
                height={"3rem"}
                width={"100%"}
                value={"Pay 565"}
                onClick={handleOnlinePayment}
              />
            ) : (
              <ButtonStandardFilled
                height={"3rem"}
                width={"100%"}
                value={"Place Order"}
                onClick={handleCashPayment}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
