import { Box, Container, Typography, Stack } from "@mui/material";
import React from "react";
import BagItemCard from "../components/cards/BagItemCard";

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
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h6">{"Shopping bag (4 Items)"}</Typography>
          <Typography variant="h6">Total ₹180</Typography>
        </Stack>
        <BagItemCard />
      </Box>

      <Box sx={{ width: "33.3%", border: "2px solid" }}>sff</Box>
    </Container>
  );
}
