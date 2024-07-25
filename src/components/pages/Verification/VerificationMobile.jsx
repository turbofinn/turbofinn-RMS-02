import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  Input,
} from "@mui/material";
import verification from "../../../assets/Image/phoneAuthentication.png";
import backgroundfood from "../../../assets/Image/BackgroundFood.png";
import loaderGIF from "../../../assets/GIF/loader.gif";
import { InputAdornment } from "@mui/material";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
  const [mobileNumber, setMobileNumber] = useState(null);
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("success");

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
  const Navigate = useNavigate();
  const handleClick = (message, severity) => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const sendOtp = async () => {
    setLoader(false);
    try {
      const response = await axios.post(
        "https://kfmk2viukk.execute-api.us-east-1.amazonaws.com/dev/send-otp",
        {
          mobileNo: mobileNumber,
        }
      );
      console.log("resp", response);
      if (response.data.response.responseCode === 1001) {
        handleClick("OTP sent successfully", "success");
        if (!isOtpSent) setIsOtpSent(true);
      } else {
        handleClick("Failed to send OTP", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      handleClick("Error sending OTP", "error");
    } finally {
      setLoader(true);
    }
  };

  const verifyOTP = async (mobileNumber, otp) => {
    console.log("mb", mobileNumber);
    console.log("otp", otp);
    setLoader(false);
    const requestData = {
      mobileNo: mobileNumber,
      otp: `${otp}`,
    };

    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "https://kfmk2viukk.execute-api.us-east-1.amazonaws.com/dev/verify-otp",
        requestData,
        requestOptions
      );
      if (response.data.response.responseCode === 1001) {
        Navigate("/category");
      } else if (response.data.response.responseCode === 9999) {
        handleClick("Wrong OTP", "error");
      }
    } catch (error) {
      handleClick("Error verifying OTP", "error");
    } finally {
      setLoader(true);
    }
  };

  const sentOtpClickHandler = () => {
    sendOtp();
  };

  const anime = (variants) => {
    return { initial: "initial", animate: "enter", exit: "exit", variants };
  };
  const fadeInEnterOtp = {
    initial: { scale: 0.8, opacity: 0.8 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: {duration:0.5, ease: [0.37, 0, 0.63, 1] },
    },
  };
  const fadeOutVerifyMobNum = {
    initial: { scale: 1, opacity: 1 },
    exit: {
      scale: 3,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.37, 0, 0.63, 1] },
    },
  };
  const dragUpVerifyBtn = {
    initial: { y: 3 },
    enter: {
      y: -3.5,
      transition: {duration: 0.6, ease: [0.37, 0, 0.63, 1] },
    },
  };
  const dragDownVerifyTxt = {
    initial: { y: -4,},
    enter: {
      y: 0,
      transition: { duration: 0.6, ease: [0.37, 0, 0.63, 1] },
    },
  };
  const dragUpSendOtpBtn = {
    initial: { y: 15, },
    exit: {
      y: 3.5,
      transition: { duration: 0.6,ease: [0.37, 0, 0.63, 1] },
    },
  };
  const dragDownSendOtpTxt = {
    initial: { y: 0, opacity: 1 },
    exit: {
      y: 15,
      opacity: 0,
      transition: { duration: 0.6, ease: [0.37, 0, 0.63, 1] },
    },
  };
  const easeInSubtitle = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <React.Fragment>
      {/* {!loader && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", // Adjust as needed
          }}>
          <img src={loaderGIF} alt="loaderGIF" />
        </Box>
      )} */}
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
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            justifyContent: "center",
          }}>
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
            }}></Box>

          <Typography
            variant="h4"
            sx={{
              color: "white",
              marginTop: "6.87%",
              zIndex: 1,
              fontSize: "2.5rem",
              fontWeight: 700,
            }}>
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
            }}>
            <AnimatePresence mode="wait">
              {isOtpSent ? (
                <motion.div
                  {...anime(fadeInEnterOtp)}
                  key="enter"
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginBottom: "0.1875rem",
                    zIndex: 1,
                    fontWeight: 600,
                    height: "2.5rem",
                  }}>
                  Enter Your OTP
                </motion.div>
              ) : (
                <Typography
                  variant="h5"
                  key="verify"
                  component={motion.div}
                  {...anime(fadeOutVerifyMobNum)}
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                    marginBottom: "0.1875rem",
                    zIndex: 1,
                    fontWeight: 600,
                    height: "2.5rem",
                  }}>
                  Verify Your Mobile Number
                </Typography>
              )}
            </AnimatePresence>
            {isOtpSent ? (
              <Typography
                component={motion.div}
                {...anime(easeInSubtitle)}
                style={{
                  color: "white",
                  opacity: 0.8,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: "10.09%",
                  maxWidth: "350px",
                }}>
                "Please Let Us Know Your OTP For Verification Purposes"
              </Typography>
            ) : (
              <Typography
                sx={{
                  color: "white",
                  opacity: 0.8,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  textAlign: "center",
                  marginBottom: "10.09%",
                  maxWidth: "350px",
                }}>
                "Please Let Us Know Your Mobile Number For Verification
                Purposes"
              </Typography>
            )}

            {isOtpSent ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  marginLeft: 6,
                }}>
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
              <Input
              onChange={(event) => {
                const value = event.target.value.replace(/\D/g, "").slice(0, 10);
                setMobileNumber(value);
                event.target.value = value;
              }}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 10,
              }}
              startAdornment={
                <InputAdornment position="start">
                  +91
                </InputAdornment>
              }
              disableUnderline
              sx={{
                backgroundColor: "white",
                borderRadius: "0.625rem",
                fontSize: "1.3rem",
                border: "0.09375rem solid rgba(31, 104, 87, 1)",
                fontWeight: 600,
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
                "&:focus": {
                  borderColor: "black",
                },
              }}
              onKeyDown={(event) => {
                if (
                  !/[0-9]/.test(event.key) &&
                  !["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(event.key)
                ) {
                  event.preventDefault();
                }
              }}
            />
            )}

            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "-5px" }}>
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
                    }}>
                    Didn’t Receive The OTP?
                  </Typography>
                  <Button
                  onClick={sentOtpClickHandler}
                      sx={{
                        color: "rgba(0, 0, 0, 0.8)",
                        fontSize: "13px",
                        fontWeight: 500,
                        margin: 0,
                        textDecoration: "underline",
                        marginLeft: 1,
                        marginTop: 2,
                        padding: 0,
                        minWidth: "auto",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Resend Code
                    </Button>
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
                    }}></FormControlLabel>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "13px",
                      fontWeight: 500,
                      margin: 0,
                    }}>
                    Is This Same Number in Whatsapp
                  </Typography>
                </>
              )}
            </Box>
            <AnimatePresence mode="wait">
              {isOtpSent ? (
                <motion.div
                  {...anime(dragUpVerifyBtn)}
                  key="verify"
                  style={{ width: "100%", height: "100%" }}>
                  <Button
                    component={Link}
                    variant="contained"
                    sx={{
                      borderRadius: "21px",
                      backgroundColor: "rgba(9, 146, 176, 0.9)",
                      marginTop: "8.62%",
                      marginBottom: "8.77%",
                      width: "12.8rem",
                      height: "3rem",
                      "&:focus": { bgcolor: "rgba(9, 146, 176, 0.9)" },
                      boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={() => {
                      verifyOTP(mobileNumber, otp);
                      console.log("OTP", otp);
                    }}>
                    <Typography
                      component={motion.div}
                      {...anime(dragDownVerifyTxt)}
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        textTransform: "none",
                      }}>
                      Verify
                    </Typography>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  {...anime(dragUpSendOtpBtn)}
                  key="SendOtp"
                  style={{ width: "100%", height: "100%" }}>
                  <Button
                    variant="contained"
                    sx={{
                      height: "3rem",
                      borderRadius: "21px",
                      backgroundColor: "rgba(9, 146, 176, 0.9)",
                      marginTop: "8.62%",
                      marginBottom: "8.77%",
                      width: "12.8rem",
                      "&:focus": { bgcolor: "rgba(9, 146, 176, 0.9)" },
                      boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
                    }}
                    onClick={sentOtpClickHandler}>
                    <Typography
                      component={motion.div}
                      {...anime(dragDownSendOtpTxt)}
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        textTransform: "none",
                      }}>
                      Send OTP
                    </Typography>
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
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
          }}>
          A Product Of TurboFinn AI
        </Typography>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}>
          <Alert
            onClose={handleClose}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </React.Fragment>
  );
};

export default VerificationMobile;
