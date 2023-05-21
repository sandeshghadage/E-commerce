import { Box, Container, Typography, Stack, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React from "react";
import Cart from "./Cart";
import { TbDiscount2 } from "react-icons/tb";
import { colors } from "../../styles/styles";

export default function Bag() {
  return (
    <Container sx={{ display: "flex", gap: "1.5rem", height: "60vh", mt: 5 }}>
      <Box
        sx={{
          width: "66.6%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Cart />
      </Box>
      {/* -----right column------- */}
      <Box
        sx={{
          width: "33.3%",
          mt: 6,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* ----coupon----- */}
        <Stack
          sx={{
            border: "1px solid #eaeaea",
            width: "100%",
            height: "4rem",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"start"}
            sx={{
              width: "90%",
              m: 2,
              height: "80%",
            }}
          >
            <div style={{ display: "flex", gap: 6 }}>
              <TbDiscount2
                style={{ color: colors.secondaryGreen, fontSize: "1.5rem" }}
              />
              <div>
                <div style={{ color: colors.black12 }}>Coupons and offers</div>
                <small style={{ color: colors.black50 }}>
                  Save more with coupon and offers
                </small>
              </div>
            </div>
            <Stack direction={"row"} alignItems={"center"}>
              <span style={{ color: colors.primary }}>Apply</span>
              <KeyboardArrowRightIcon sx={{ color: colors.primary }} />
            </Stack>
          </Stack>
        </Stack>
        {/* ---cart---- */}
        <Box
          sx={{ border: "1px solid #eaeaea" }}
          width={"100%"}
          height={"100%"}
          borderRadius={"8px"}
        >
          <Stack
            sx={{ m: 3, display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="body1">Item total</Typography>
              <Typography variant="body1">
                <s style={{ color: colors.black50 }}>₹570 </s> ₹565
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="body1">Delivery fee</Typography>
              <Typography variant="body1" color={colors.secondaryGreen}>
                FREE
              </Typography>
            </Stack>
            {/* ------divider-------- */}
            <div
              style={{ borderTop: "1px dashed #d9d9d9", margin: "1rem 0rem" }}
            />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="body1">Grand total</Typography>
              <Typography variant="body1">
                <s style={{ color: colors.black50 }}>₹565 </s> ₹565
              </Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography variant="body1">Inclusive of all taxes</Typography>
            </Stack>
            {/* ------divider-------- */}
            <div
              style={{ borderTop: "1px dashed #d9d9d9", margin: "1rem 0rem" }}
            />
            <span>
              Average delivery time: <span>1-4 hours</span>
            </span>
            <Stack
              sx={{
                width: "100%",
                height: "2rem",
                backgroundColor: "#e7f7e8",
                m: "1rem 0rem",
                borderRadius: "4px",
                color: colors.secondaryGreen,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1">
                ₹5 saved so far on this order
              </Typography>
            </Stack>
            <Button variant="outlined">Continue</Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
