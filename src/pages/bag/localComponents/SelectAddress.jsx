import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../styles/styles";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function SelectAddress() {
  return (
    <>
      <Typography variant="h6">Select a delivery address</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        <ChooseAddressCard />
        <ChooseAddressCard />
        <Card
          elevation={0}
          sx={{
            minHeight: "10rem",
            width: "22rem",
            border: "1px solid #eaeaea",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: colors.secondary,
            cursor: "pointer",
          }}
        >
          <Typography sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddOutlinedIcon />
            Add new address
          </Typography>
        </Card>
      </Box>
      <div>Remove me</div>
    </>
  );
}

function ChooseAddressCard() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <Card
      elevation={0}
      sx={{
        minHeight: "8rem",
        width: "22rem",
        border: isSelected ? "1px solid #eaeaea" : "1px solid #073642",
        cursor: "pointer",
      }}
    >
      <Box sx={{ m: 3, display: "flex", gap: "10px" }}>
        <Stack>
          {isSelected ? (
            <LensOutlinedIcon sx={{ color: colors.black50 }} />
          ) : (
            <AdjustOutlinedIcon sx={{ color: colors.primary }} />
          )}
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body1" color={colors.black12}>
            Sandesh Dattajirao Ghadage
          </Typography>
          <Typography variant="body2">
            <span>Mobile </span>+91-9807654323
          </Typography>
          <Stack>
            <div style={{ fontSize: "15px", color: colors.black50 }}>
              Mahadev Parvati niwas ,lane no 4,
            </div>
            <div style={{ fontSize: "15px", color: colors.black50 }}>
              Near Bank of Maharashtra
            </div>
            <div style={{ fontSize: "15px", color: colors.black50 }}>
              Pune 411001
            </div>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
