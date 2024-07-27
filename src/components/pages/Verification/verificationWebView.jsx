import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Snackbar,
  Alert,
  duration,
} from "@mui/material";
import verification from "../../../assets/Image/phoneAuthentication.png";
import bgVerificationWeb from "../../../assets/Image/bgVerification.png";
import OtpInput from "react-otp-input";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import VerificationBG from "../../common/VerificationBG/VerificationBG";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const VerificationWebView = () => {
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
        setIsOtpSent(c => !c);
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
        navigate("/category");
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

  const [otpVerified, setOtpVerified] = useState(false);
  const anime = (variants) => {
    return { initial: "initial", animate: "enter", exit: "exit", variants };
  };
  const navigate = useNavigate();
  const bgEnlarge = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const cardEn = {
    initial: { scaleX: 0 },
    enter: {
      scaleX: 1,
      opacity: 1,
      transition: { delay: 0.3, duration: 1, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const imgDisplay = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { delay: 1.5 } },
  };
  const otpVerifiedTransitionEnlarge = {
    initial: { scale: 0, borderRadius: "44px" },
    enter: { scale: 1, transition: { duration: 0.35 } },
  };
  const otpVerifiedTransitionFade = {
    initial: { opacity: 1 },
    enter: {
      opacity: 0,
      transition: { delay: 0.4, duration: 0.35, ease: [0.33, 1, 0.68, 1] },
    },
  };
  return (
      <Box sx={{ maxHeight: "100vw", maxWidth: "100vw", overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        {otpVerified ? (
          <motion.div
            {...anime(otpVerifiedTransitionFade)}
            key="otpverified"
            style={{
              height: "100vh",
              width: "100vw",
              content: "",
              zIndex: 1000,
              position: "absolute",
            }}
          >
            <motion.div
              {...anime(otpVerifiedTransitionEnlarge)}
              style={{
                height: "100%",
                width: "100%",
                background: "#0992B0",
                transformOrigin: "75% 75%",
              }}
            ></motion.div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>

      <motion.div
        {...anime(bgEnlarge)}
        style={{
          top: "50%",
          position: "fixed",
          right: "-10%",
          transformOrigin: "90% 55%",
          translateY: "-50%",
          overflow: "hidden",
        }}
      >
        {" "}
        <VerificationBG></VerificationBG>
      </motion.div>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Poppins, sans-serif",
          background: "transparent",
          position: "absolute",
          zIndex: 100,
          top: 0,
        }}
      >
        <motion.div
          {...anime(cardEn)}
          style={{
            backgroundPosition: " center",
            width: "85%",
            height: "75%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.1)",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: "1.8rem",
            transformOrigin: "center right",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "50%",
              borderRadius: "1.8rem",
            }}
          >
            <motion.div
              {...anime(imgDisplay)}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: "75%",
                  // width: "68.57%",
                  alignContent: "left",
                }}
                alt="Phone verification illustration"
                src={verification}
              />
            </motion.div>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              width: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "1.8rem",
              boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(0.625rem)",
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
      height: '100%',
      overflowY: 'auto', 
      overflowX:'hidden'
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  marginTop: "14.86%",
                  zIndex: 1,
                  fontSize: {
                    xs: '2rem',
                    lg: '3rem',
                  },
                  fontWeight: 800,
                  textAlign: "center",
                }}
              >
                LOGO
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  opacity: 0.8,
                  fontSize: {
                    xs: '0.7rem',
                    lg: '1rem',
                  },
                  fontWeight: 600,
                  textAlign: "center",
                  marginTop: "1.57%",
                  width: "100%",
                  marginX: "12.7%",
                }}
              >
                "Craving Goodness? Order Now and Savor the Flavor!"
              </Typography>

              <Typography
                sx={{
                  color: "white",
                  fontSize: {
                    xs: '1rem',
                    lg: '1.8rem',
                  },
                  marginTop: "10.7%",
                  top: "38%",
                  zIndex: 1,
                  fontWeight: 600,
                }}
              >
                {isOtpSent ? "Enter Your OTP" : "Verify Your Mobile Number"}
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  opacity: 0.8,
                  fontSize: {
                    xs: '10px',
                    lg: '13px',
                  },
                  fontWeight: 700,
                  textAlign: "center",
                  marginTop: "2.1%",
                  width: "95%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {isOtpSent
                  ? "Please Let Us Know Your OTP For Verification Purposes"
                  : "Please Let Us Know Your Mobile Number For Verification Purposes"}
              </Typography>
              {isOtpSent ? (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                      marginLeft: -2,
                      marginTop: 1,
                      marginBottom: 1,
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
                            width: "45px",
                            height: "45px",
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
                </>
              ) : (
                <>
                  {" "}
                  <TextField
                    onChange={(event) => {
                      const value = event.target.value.replace(/\D/g, "");
                      setMobileNumber(value);
                      event.target.value = value.slice(0, 10);
                    }}
                    variant="standard"
                    InputProps={{
                      maxLength: 10,
                      inputMode: "numeric",
                      pattern: "[0-9]*",
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            textAlign: "center",
                            Color: "#171717",
                            opacity: "100%",
                          }}
                        >
                          {" "}
                          +91
                        </InputAdornment>
                      ),
                      disableUnderline: true,
                    }}
                    // placeholder=" 9452222225"
                    sx={{
                      outline: "none",
                      backgroundColor: "white",
                      borderRadius: "0.8rem",
                      fontSize: "1.5rem",
                      border: "0.09375rem solid black",
                      borderColor: "rgba(31, 104, 87, 1)",
                      fontWeight: 700,
                      width: "80%",
                      paddingTop: "0.6rem",
                      paddingBottom: "0.6rem",
                      paddingX: "0.5rem",
                      marginTop: "3.7%",
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
                      const currentValue = event.target.value.replace(
                        /\D/g,
                        ""
                      );
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
                      if (
                        /[0-9]/.test(event.key) &&
                        currentValue.length >= 10
                      ) {
                        event.preventDefault();
                      }
                    }}
                    inputMode="numeric"
                    pattern="\d*"
                  />
                </>
              )}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-5px",
                }}
              >
                {isOtpSent ? (
                  <>
                    {" "}
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "13px",
                        fontWeight: 500,
                        marginTop: "6.1%",
                        marginLeft: "-12px",
                      }}
                    >
                      Did’t Receive The OTP?
                    </Typography>{" "}
                    <Button
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
                      control={<Checkbox size="medium" />}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "5.4%",
                        marginLeft: "-20px",
                      }}
                    ></FormControlLabel>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: {
                          xs: '10px',
                          lg: '13px',
                        },
                        fontWeight: 500,
                        marginTop: "6.1%",
                        marginLeft: "-12px",
                      }}
                    >
                      Is This Same Number in Whatsapp
                    </Typography>
                  </>
                )}
              </Box>

              {isOtpSent ? (
                <Button
                  variant="contained"
                  component={Link}
                  // to="/category"
                  onClick={() => {
                    verifyOTP(mobileNumber, otp);
                    console.log("OTP", otp);
                  }}                  sx={{
                    paddingY: "3%",
                    width: "70%",
                    height: "9.8%",
                    borderRadius: "3rem",
                    backgroundColor: "#0992B0",
                    marginTop: "4.7%",
                    marginBottom: "5%",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                   {!loader ? (
                        <CircularProgress size="2rem" style={{ color: "white", margin:'auto', display: 'flex', justifyContent: 'center'}}/>) : (<>Verify</>)}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={sentOtpClickHandler}
                  sx={{
                    paddingY: "3%",
                    width: "70%",
                    height: "9.8%",
                    borderRadius: "3rem",
                    backgroundColor: "#0992B0",
                    marginY: {xs:'2%',lg:"5%"},
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {!loader ? (
                        <CircularProgress size="2rem" style={{ color: "white", margin:'auto', display: 'flex', justifyContent: 'center'}}/>) : (<>Send OTP</>)}
                </Button>
              )}
            </Box>
          </Box>
        </motion.div>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleClose}
            severity={severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Box>
    </Box>

  );
};

export default VerificationWebView;
