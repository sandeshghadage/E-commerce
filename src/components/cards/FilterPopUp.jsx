import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import TuneTwoToneIcon from "@mui/icons-material/TuneTwoTone";

export default function FilterPopUp() {
  return (
    <Card
      elevation={0}
      sx={{
        minHeight: "12rem",
        minWidth: "25rem",
        border: "1px solid #eaeaea",
      }}
    >
      <Box>
        <Typography>
          <div>
            <h1>Filter by</h1>
            <TuneTwoToneIcon />
            <button>X</button>
          </div>
          <div>
            <select>
              <option value="">All Orders</option>
              <option value="">Active Orders</option>
              <option value="">Completed Orders</option>
              <option value="">Failed Orders</option>
            </select>
          </div>
        </Typography>
      </Box>
    </Card>
  );
}
