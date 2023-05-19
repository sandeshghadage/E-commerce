import { Box, Button, Card, Typography, Stack } from "@mui/material";
import React from "react";
import { colors } from "../../styles/styles";

export default function BagItemCard() {
  return (
    <Card
      elevation={0}
      sx={{
        minHeight: "11rem",
        minWidth: "100%",
        border: "1px solid #eaeaea",
      }}
    >
      <Box sx={{ m: 1.5, display: "flex", gap: "1rem" }} height={"85%"}>
        <Card
          elevation={0}
          sx={{
            border: "1px solid #eaeaea",
            minHeight: "100%",
            minWidth: "18%",
          }}
        ></Card>
        <Stack
          sx={{
            // border: "1px solid #eaeaea",
            minHeight: "100%",
            minWidth: "78%",
          }}
        >
          <Box
            sx={{
              m: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              height: "100%",
            }}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography color={colors.black30}>Raw Mango</Typography>
              <Typography color={colors.black50}>REMOVE</Typography>
            </Stack>
            <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Typography>₹180 </Typography>
              <s style={{ color: colors.black50 }}>₹200 </s>

              <Typography color={colors.secondary} sx={{ fontWeight: "500" }}>
                {"(10% off)"}{" "}
              </Typography>
            </span>
            <small style={{ color: colors.secondaryGreen, fontWeight: "600" }}>
              You saved ₹20{" "}
            </small>
            <Button>Drop</Button>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}
