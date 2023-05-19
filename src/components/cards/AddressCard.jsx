import { Box, Button, Card, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";

export default function AddressCard() {
  return (
    <Card
      elevation={0}
      sx={{
        minHeight: "12rem",
        minWidth: "25rem",
        border: "1px solid #eaeaea",
      }}
    >
      <Box sx={{ m: 3 }}>
        <Typography variant="body1">Sandesh Dattajirao Ghadage</Typography>
        <Typography variant="body1">
          <span>Mobile </span>+91-9807654323
        </Typography>
        <Typography variant="body1">Lane no 1, last road</Typography>
        <Typography variant="body1">Near Bank of Maharashtra</Typography>
        <Typography variant="body1">Pune 411001</Typography>
        <div>
          <Button sx={{ p: 0, width: "50px" }}>Edit</Button>
          <Button>Delete</Button>
        </div>
      </Box>
    </Card>
  );
}
