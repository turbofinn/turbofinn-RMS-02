import React from "react";
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
            Provide Your Mobile Number
          </Typography>
          <Typography
            sx={{
              color: "white",
              opacity: 0.8,
              fontSize: "0.875rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "10.09%",
            }}
          >
            Please Let Us Know Your Mobile Number For <br /> Verification
            Purposes
          </Typography>

          <TextField
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ textAlign: "center" }}>
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
          />

          <Box
            sx={{ display: "flex", alignItems: "center", marginTop: "-5px" }}
          >
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
          </Box>
          <Button
            variant="contained"
            sx={{
              paddingY: "0.75rem",
              paddingX: "4.1875rem",
              borderRadius: "21px",
              backgroundColor: "#0992B0",
              marginTop: "8.62%",
              marginBottom: "8.77%",
              fontSize: "0.9375rem",
              fontWeight: 700,
              textTransform: "none",
              boxShadow: "0px 0px 9.5px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          position: "fixed",
          bottom: 0,
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
