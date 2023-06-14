import React, { useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import style from "./OtpBox.module.css";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";


function OtpBox({ otp, onOtpVerify}) {
  const nav= useNavigate();


  function handleCLick(){
    console.log(otp)
    nav("/account")
  }

  return (
    <div>
      <Card sx={{ minWidth: 334 }}>
        <CardContent>
          <Typography
            sx={{ fontSize: 14, margin: "1rem" }}
            color="text.secondary"
            gutterBottom
          >
            <div className={style.heading}>
              <h3>OTP verification</h3>
              <h5>Enter 6-digit OTP sent to {mobile}</h5>
            </div>

            <div className={style.text}>
              <OtpInput
                OtpType="number"
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                autoFocus
              />
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <div>
            {/* <h1 onClick={handleCLick}>Timer</h1> */}
            <button onClick={onOtpVerify}>to account</button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
export default OtpBox;
