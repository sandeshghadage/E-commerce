import {
  Box,
  Card,
  Typography,
  Stack,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/styles";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useDispatch } from "react-redux";
import {
  setCurrTotalSellingPrice,
  updateItemQnty,
} from "../../redux/OrderSlice";

export default function BagItemCard(props) {
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
            src={props.img}
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
              <Typography color={colors.black30}>{props.itemName}</Typography>
              <Typography color={colors.black50} sx={{ cursor: "pointer" }}>
                REMOVE
              </Typography>
            </Stack>
            <span style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <Typography>₹{props.sellingPrice} </Typography>
              <s style={{ color: colors.black50 }}>₹{props.price} </s>

              <Typography color={colors.secondary} sx={{ fontWeight: "500" }}>
                {"(10% off)"}{" "}
              </Typography>
            </span>
            <small style={{ color: colors.secondaryGreen, fontWeight: "600" }}>
              You saved ₹{props.price - props.sellingPrice}
            </small>
            {/* -----------drop for size and qty------------------ */}
            <Stack direction="row" gap={2}>
              <DropDown name={"Size"} unit={"Kg"} btnWidth={"6rem"} count={1} />
              <DropDown
                name={"Qty"}
                btnWidth={"4.5rem"}
                count={props.count}
                itemId={props.itemId}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Card>
  );
}

function DropDown({ name, unit, btnWidth, count, itemId }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState(count);

  useEffect(() => {
    const updateQtyData = {
      itemId: itemId,
      count: selectedOption,
    };
    dispatch(updateItemQnty(updateQtyData));
    dispatch(setCurrTotalSellingPrice(""));
  }, [selectedOption]);

  const productArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
