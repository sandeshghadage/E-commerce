import { Box, Typography } from "@mui/material";
import React from "react";

export default function ChoosePayment() {
  return (
    <>
      <Typography variant="h6">Choose payment mode</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}></Box>
    </>
  );
}
