import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import verification from "../../../assets/Image/phoneAuthentication.png";
import backgroundfood from "../../../assets/Image/BackgroundFood.png";
import { InputAdornment } from "@mui/material";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

const styles = {
  textBox: {
    "& $div": {
      justifyContent: "center",
      "& $input": {
        width: "30%",
      },
    },
    "& $p": {
      alignSelf: "center",
    },
  },
};

const VerificationMobile = () => {
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if ("OTPCredential" in window) {
      const ac = new AbortController();
      navigator.credentials
        .get({
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp) => {
          setOtp(otp.code);
        })
        .catch((err) => {
          console.log(err);
        });

      return () => ac.abort();
    }
  }, []);

  function sentOtpClickHandler() {
    if (isOtpSent === false) setIsOtpSent((c) => !c);
  }
  return (
    <Box
      sx={{
        bgcolor: "#49C3DE",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.125rem",
        fontFamily: "Poppins",
        position: "fixed",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "fixed",
            top: -40,
            backgroundImage: `url(${backgroundfood})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "50vh",
            width: "100%",
            opacity: 0.4,
          }}
        ></Box>

        <Typography
          variant="h4"
          sx={{
            color: "white",
            marginTop: "6.87%",
            zIndex: 1,
            fontSize: "2.5rem",
            fontWeight: 700,
          }}
        >
          LOGO
        </Typography>

        <Box
          component="img"
          sx={{
            height: "27.90%",
            width: "60.38%",
            zIndex: 1,
            marginTop: "3.37%",
            marginBottom: "9.0%",
          }}
          alt=""
          src={verification}
        />

        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontSize: "1.5rem",
              marginBottom: "0.1875rem",
              zIndex: 1,
              fontWeight: 600,
            }}
          >
            {isOtpSent ? "Enter Your OTP" : "Verify Your Mobile Number"}
          </Typography>
          <Typography
            sx={{
              color: "white",
              opacity: 0.8,
              fontSize: "0.875rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "10.09%",
              maxWidth: "350px",
            }}
          >
            {isOtpSent
              ? "Please Let Us Know Your OTP For Verification Purposes"
              : "Please Let Us Know Your Mobile Number For Verification Purposes"}
          </Typography>

          {isOtpSent ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                marginLeft: 6,
              }}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "11px",
                      border: "2.5px solid transparent",
                      background:
                        "linear-gradient(white, white) padding-box, linear-gradient(90deg, #515ADA 0%, #2B3074 100%) border-box",
                      margin: "0 4px",
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#000",
                      outline: "none",
                    }}
                    onKeyDown={(event) => {
                      if (
                        !/[0-9]/.test(event.key) &&
                        event.key !== "Backspace" &&
                        event.key !== "Delete" &&
                        event.key !== "ArrowLeft" &&
                        event.key !== "ArrowRight" &&
                        event.key !== "Tab"
                      ) {
                        event.preventDefault();
                      }
                    }}
                    inputMode="numeric"
                    pattern="\d*"
                  />
                )}
              />
            </Box>
          ) : (
            <TextField
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "");
                event.target.value = value.slice(0, 10);
              }}
              variant="standard"
              InputProps={{
                maxLength: 10,
                startAdornment: (
                  <InputAdornment position="start" sx={{ textAlign: "center" }}>
                    {" "}
                    +91
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
              // placeholder=" 9452222225"
              sx={{
                outline: "none",
                backgroundColor: "white",
                borderRadius: "0.625rem",
                fontSize: "1.5rem",
                border: "0.09375rem solid black",
                borderColor: "rgba(31, 104, 87, 1)",
                fontWeight: 700,
                height: "3.4375rem",
                width: "20.875rem",
                padding: "0.5rem",
                marginBottom: "0.5rem",
                "& .MuiInputBase-root": {
                  height: "100%",
                  alignItems: "center",
                  padding: "0 0.5rem",
                },

                "& .MuiInputBase-input": {
                  padding: 0,
                  "&::placeholder": {
                    color: "black",
                    opacity: 0.5,
                  },
                },
                "&::placeholder": {
                  color: "black",
                  opacity: 0.5,
                  marginLeft: "0.5rem",
                },
                "&:focus": {
                  borderColor: "black",
                },
              }}
              onKeyDown={(event) => {
                const currentValue = event.target.value.replace(/\D/g, "");
                if (
                  !/[0-9]/.test(event.key) &&
                  event.key !== "Backspace" &&
                  event.key !== "Delete" &&
                  event.key !== "ArrowLeft" &&
                  event.key !== "ArrowRight" &&
                  event.key !== "Tab"
                ) {
                  event.preventDefault();
                }
                if (/[0-9]/.test(event.key) && currentValue.length >= 10) {
                  event.preventDefault();
                }
              }}
            />
          )}

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "-5px" }}
          >
            {isOtpSent ? (
              <>
                {" "}
                <Typography
                  sx={{
                    color: "rgba(243, 243, 243, 0.8)",
                    fontSize: "13px",
                    fontWeight: 500,
                    margin: 0,
                    marginLeft: 6,
                    marginTop: 2,
                  }}
                >
                  Did’t Receive The OTP?
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.8)",
                    fontSize: "13px",
                    fontWeight: 500,
                    margin: 0,
                    textDecoration: "underline",
                    marginLeft: 1,
                    marginTop: 2,
                  }}
                >
                  Resend Code
                </Typography>
              </>
            ) : (
              <>
                {" "}
                <FormControlLabel
                  control={<Checkbox size="12px" />}
                  sx={{
                    marginRight: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "39px",
                  }}
                ></FormControlLabel>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  Is This Same Number in Whatsapp
                </Typography>
              </>
            )}
          </Box>
          {isOtpSent ? (
            <Button
              component={Link}
              to="/category"
              variant="contained"
              sx={{
                paddingY: "0.75rem",
                paddingX: "4.1875rem",
                borderRadius: "21px",
                backgroundColor: "rgba(9, 146, 176, 0.9)",
                marginTop: "8.62%",
                marginBottom: "8.77%",
                fontSize: "0.9375rem",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
              }}
            >
              Verify
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{
                paddingY: "0.75rem",
                paddingX: "4.1875rem",
                borderRadius: "21px",
                backgroundColor: "rgba(9, 146, 176, 0.9)",
                marginTop: "8.62%",
                marginBottom: "8.77%",
                fontSize: "0.9375rem",
                fontWeight: 700,
                textTransform: "none",
                boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
              }}
              onClick={sentOtpClickHandler}
            >
              Send OTP
            </Button>
          )}
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          position: "relative",
          bottom: 30,
          width: "100%",
          textAlign: "center",
          color: "white",
          fontSize: "0.9375rem",
          mb: "1.0625rem",
          fontWeight: 700,
        }}
      >
        A Product Of TurboFinn AI
      </Typography>
    </Box>
  );
};

export default VerificationMobile;
