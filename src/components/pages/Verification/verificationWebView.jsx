import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  duration,
} from "@mui/material";
import verification from "../../../assets/Image/phoneAuthentication.png";
import bgVerificationWeb from "../../../assets/Image/bgVerification.png";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, transform } from "framer-motion";
import VerificationBG from "../../common/VerificationBG/VerificationBG";
import zIndex from "@mui/material/styles/zIndex";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const VerificationWebView = () => {
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

  const anime = (variants) => {
    return { initial: "initial", animate: "enter", exit: "exit", variants };
  };
  const flash = {
    initial: { scale: 1, opacity: 1 },
    enter: {
      scale: 1,
      opacity: 1,
    },
  };
  const bgEnlarge = {
    initial: { scale: 0, opacity: 0 },
    enter: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.8, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const cardEn = {
    initial: { scaleX: 0 },
    enter: {
      scaleX: 1,
      opacity: 1,
      transition: { delay: 0.1, duration: 0.8, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const imgDisplay = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { delay: 0.8 } },
  };
  return (
    <AnimatePresence mode="wait">
      <Box sx={{ maxHeight: "100vw", maxWidth: "100vw", overflow: "hidden" }}>
        <motion.div
          style={{
            height: "100vh",
            width: "100vw",
            content: "",
            zIndex: 0,
            background: "rgba(70, 157, 177, 1)",
            position: "absolute",
            transformOrigin: "75% 75%",
          }}
        ></motion.div>
        <motion.div
          {...anime(bgEnlarge)}
          style={{
            top: 0,
            position: "fixed",
            right: "-10%",
            transformOrigin: "90% 55%",
            translateY: "-40%",
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
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "white",
                    marginTop: "9.86%",
                    zIndex: 1,
                    fontSize: "3rem",
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
                    fontSize: "16px",
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
                  variant="h5"
                  sx={{
                    color: "white",
                    fontSize: "1.8rem",
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
                    fontSize: "13px",
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
                        width: "90%",
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
                          fontSize: "13px",
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
                    to="/category"
                    onClick={sentOtpClickHandler}
                    sx={{
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
                    {" "}
                    Verify{" "}
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
                      marginTop: "4.7%",
                      marginBottom: "5%",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {" "}
                    Send OTP{" "}
                  </Button>
                )}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </AnimatePresence>
  );
};

export default VerificationWebView;
