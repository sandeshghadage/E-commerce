import { Box, TextField, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../../../styles/styles";

export default function AdditionalInfo() {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 4 }}>
        Fill additional information
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Field
          lable={"Right Your Delivery Instructions.... (optional)"}
          placeholder={"Enter text here"}
        />
        <Field lable={"Email (optional)"} placeholder={"Enter email address"} />
      </Box>
    </Box>
  );
}

function Field({ lable, placeholder }) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ width: "45%", display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Typography>{lable}</Typography>
        <TextField placeholder={placeholder} sx={{ width: "100%" }} />
      </Box>
    </ThemeProvider>
  );
}
