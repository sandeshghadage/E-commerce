import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import style from "./SignIn.module.css";
import OtpBox from "./Otp/OtpBox.jsx";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier } from "firebase/auth";

function SignIn() {
  const [showOtp, setShowOtp] = useState(true);
  const [ph, setPh] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchaVerify() {
    if (!window.RecaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignUp() {
    
    onCaptchaVerify();
    const accountVerify = window.recaptchaVerifier;
    const formatePh = "+" + ph;
    console.log(formatePh);
    signInWithPhoneNumber(auth, formatePh, accountVerify)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;

        alert("otp sended successfully");
        setShowOtp(false);
      })
      .catch((error) => {
        console.log(error);
       
      });
  }

  function onOtpVerify() {
    window.confirmationResult.confirm(otp).then(async(res)=>{
      console.log(res);
      setUser(res.user);
    }).catch((err)=>{
      console.log(err)
    });
  }

  return (
    <div>
      <div className="recaptcha-container"></div>
      {showOtp ? (
        <Card sx={{ minWidth: 334 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, margin: "1rem" }}
              color="text.secondary"
              gutterBottom
            >
              <div className={style.heading}>
                <h3>Sign in</h3>
                <Button sx={{ color: "black" }}>X</Button>
                <div className="sign-in-button"></div>
              </div>
              <div className={style.text}>
                <PhoneInput
                  country={"in"}
                  value={ph}
                  onChange={setPh}
                  className={style.phInput}
                />
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            <div>
              <Button
                sx={{ backgroundColor: "black", marginLeft: "8rem" }}
                onClick={onSignUp}
              >
                Send OTP
              </Button>
            </div>
          </CardActions>
        </Card>
      ) : (
        <OtpBox otp={otp} onOtpVerify={onOtpVerify()}/>
      )}
    </div>
  );
}

export default SignIn;
