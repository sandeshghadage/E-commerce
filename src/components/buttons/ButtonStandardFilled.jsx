import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme, { colors } from "../../styles/styles";
import { Button } from "@mui/material";

export default function ButtonStandardFilled({
  height,
  width,
  value,
  onClick,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={onClick}
        sx={{
          height: height,
          width: width,
          fontWeight: "500",
          fontSize: "16px",
          lineHeight: "24px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        variant="contained"
      >
        {value}
      </Button>
    </ThemeProvider>
  );
}
