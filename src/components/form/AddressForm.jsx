import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  focused: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
        border: "1px solid",
      },
    },
  },
});

export default function AddressForm({ isDialog }) {
  return (
    <Dialog
      open={isDialog}
      onClose={isDialog}
      PaperProps={{
        style: {
          minHeight: "85%",
          minWidth: "50%",
          borderRadius: "10px",
        },
      }}
    >
      <DialogTitle>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <div>Add new address</div>
          <CloseIcon />
        </Stack>
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      >
        <InputComponent
          width={"100%"}
          placeholder={"Enter name"}
          label={"Name *"}
        />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <InputComponent
            width={"25rem"}
            placeholder={"Enter Mobile number"}
            label={"Mobile *"}
          />
          <InputComponent
            width={"25rem"}
            placeholder={"Enter email address"}
            label={"Email *"}
          />
        </Stack>
        <InputComponent
          width={"100%"}
          placeholder={"Flat / House No, Building, Colony"}
          label={"Address *"}
        />
        <Stack direction={"row"} justifyContent={"space-between"}>
          <InputComponent
            width={"25rem"}
            placeholder={"E.g. MG Road, Gandhi Nagar"}
            label={"Locality / Area (optional)"}
          />
          <InputComponent
            width={"25rem"}
            placeholder={"E.g. Near Bank, Chowk, etc."}
            label={"Landmark (optional)"}
          />
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <InputComponent
            width={"25rem"}
            placeholder={"Enter pin code"}
            label={"Pin Code *"}
          />
          <InputComponent
            width={"25rem"}
            placeholder={"Enter city"}
            label={"City *"}
          />
        </Stack>
        <InputComponent
          width={"25rem"}
          placeholder={"Enter state"}
          label={"State *"}
        />
      </DialogContent>
    </Dialog>
  );
}

function InputComponent({ width, label, placeholder }) {
  const classes = useStyles();
  return (
    <Stack direction={"column"} gap={1}>
      <div style={{ fontSize: "14px", fontWeight: "500" }}>{label}</div>
      <TextField
        variant="outlined"
        InputLabelProps={{ shrink: true }}
        placeholder={placeholder}
        sx={{ width: width }}
        className={classes.focused}
      />
    </Stack>
  );
}
