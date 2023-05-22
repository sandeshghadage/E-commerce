import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../../styles/styles";
import LensOutlinedIcon from "@mui/icons-material/LensOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { nanoid } from "nanoid";

const addressData = [
  {
    addressId: nanoid(),
    name: "Sandesh Dattajirao Ghadage",
    mobile: "+91-9807654323",
    isSelect: false,
    address: {
      flat: "Mahadev Parvati niwas ,lane no 4,",
      locality: "Near Bank of Maharashtra",
      city: "Pune 411001",
    },
  },
  {
    addressId: nanoid(),
    name: "Sandesh Dattajirao Ghadage",
    mobile: "+91-9807654323",
    isSelect: false,
    address: {
      flat: "Mahadev Parvati niwas ,lane no 4,",
      locality: "Near Bank of Maharashtra",
      city: "Pune 411001",
    },
  },
];

export default function SelectAddress() {
  const [isSelected, setIsSelected] = useState(0);
  const [demoAddress, setDemoAddress] = useState(addressData);

  // function handleAddressSelect(addressIndex) {
  //   const tempAddress = [...demoAddress];
  //   const curr = { ...demoAddress[addressIndex] };
  //   curr.isSelect = !curr.isSelect;
  //   tempAddress[addressIndex] = curr;
  //   setDemoAddress(tempAddress);
  // }

  return (
    <>
      <Typography variant="h6">Select a delivery address</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {demoAddress.map((item, addressIndex) => (
          <ChooseAddressCard
            name={item.name}
            mobile={item.mobile}
            isSelected={isSelected}
            address={item.address}
            onClick={() => setIsSelected(addressIndex)}
            addressIndex={addressIndex}
          />
        ))}

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
    </>
  );
}

function ChooseAddressCard({
  name,
  mobile,
  isSelected,
  address,
  onClick,
  addressIndex,
}) {
  const { flat, locality, city } = address;
  console.log("isSelected", isSelected);
  console.log("addressIndex", addressIndex);
  return (
    <Card
      onClick={onClick}
      elevation={0}
      sx={{
        minHeight: "8rem",
        width: "22rem",
        border:
          isSelected == addressIndex
            ? "1px solid #073642"
            : "1px solid #eaeaea",
        cursor: "pointer",
      }}
    >
      <Box sx={{ m: 3, display: "flex", gap: "10px" }}>
        <Stack>
          {isSelected == addressIndex ? (
            <AdjustOutlinedIcon sx={{ color: colors.primary }} />
          ) : (
            <LensOutlinedIcon sx={{ color: colors.black50 }} />
          )}
        </Stack>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body1" color={colors.black12}>
            {name}
          </Typography>
          <Typography variant="body2">
            <span>Mobile </span>
            {mobile}
          </Typography>
          <Stack>
            <div style={{ fontSize: "15px", color: colors.black50 }}>
              {flat}
            </div>
            <div style={{ fontSize: "15px", color: colors.black50 }}>
              {locality}
            </div>
            <div style={{ fontSize: "15px", color: colors.black50 }}>
              {city}
            </div>
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
