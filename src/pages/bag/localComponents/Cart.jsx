import React from "react";
import BagItemCard from "../../../components/cards/BagItemCard";
import { Stack, Typography } from "@mui/material";

export default function Cart() {
  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h6">{"Shopping bag (4 Items)"}</Typography>
        <Typography variant="h6">Total ₹180</Typography>
      </Stack>
      <BagItemCard />
      <BagItemCard />
    </>
  );
}
