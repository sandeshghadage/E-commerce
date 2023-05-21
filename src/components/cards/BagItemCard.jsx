import {
  Box,
  Card,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../styles/styles";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

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
        >
          <img
            style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "cover" }}
            src={
              "https://media.istockphoto.com/id/595754692/photo/fresh-green-mango-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=e7c4f19vHdKlBCdmOe-XV5SbX8Z71GnUj949ZK8VY-Q="
            }
          />
        </Card>
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
            {/* -----------drop for size and qty------------------ */}
            <Stack direction="row" gap={2}>
              <DropDown name={"Size"} unit={"Kg"} btnWidth={"6rem"} />
              <DropDown name={"Qty"} btnWidth={"4.5rem"} />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

function DropDown({ name, unit, btnWidth }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(1);

  const productArr = [1, 2, 3];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "my-popover" : undefined;

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleClose();
  };
  return (
    <div
      style={{
        border: "1px solid #eaeaea",
        padding: "3px",
        width: btnWidth,
        borderRadius: 4,
      }}
    >
      <small
        style={{ display: "flex", alignItems: "center", gap: "4px" }}
        aria-describedby={id}
        onClick={handleClick}
      >
        {name}:{" "}
        <h3>
          {selectedOption} {unit}
        </h3>
        <ExpandMoreOutlinedIcon sx={{ color: colors.black50 }} />
      </small>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          elevation={2}
          MenuListProps={{
            "aria-labelledby": "options-menu",
          }}
        >
          {productArr.map((ele) => (
            <MenuItem onClick={() => handleOptionSelect(ele)}>
              {ele} {unit}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </div>
  );
}
