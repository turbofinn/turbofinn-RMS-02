import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
} from "@mui/material";
import verification from "../../../assets/Image/phoneAuthentication.png";
import bgVerificationWeb from "../../../assets/Image/bgVerification.png";

const VerificationWebView = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgVerificationWeb})`,
        backgroundSize: "cover",
        backgroundPosition: " center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Box
        sx={{
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "50%",

            borderRadius: "1.8rem",
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
              Provide Your Mobile Number
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
              Please Let Us Know Your Mobile Number For Verification Purposes
            </Typography>

            <TextField
              variant="standard"
              InputProps={{
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
            />
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "-5px" }}
            >
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
            </Box>
            <Button
              variant="contained"
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
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationWebView;
