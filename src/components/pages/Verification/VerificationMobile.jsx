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
            top: 0,
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
            marginTop: "3.625rem",
            zIndex: 1,
            fontSize: "2.5rem",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          LOGO
        </Typography>

        <Box
          component="img"
          sx={{
            height: "14.375rem",
            width: "14.375rem",
            maxHeight: { xs: "18.75rem", md: "18.75rem" },
            maxWidth: { xs: "18.75rem", md: "18.75rem" },
            zIndex: 1,
            marginTop: "1.25rem",
            marginBottom: "2.375rem",
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
              marginBottom: "2.6875rem",
            }}
          >
            Please Let Us Know Your Mobile Number For Verification Purposes
          </Typography>

          <TextField
            placeholder="+91 9452222225"
            sx={{
              bgcolor: "white",
              borderRadius: "0.625rem",
              fontSize: "1.5rem",
              border: "0.09375rem",
              height: "3.4375rem",
              width: "20.875rem",
              borderColor: "white",
              marginBottom: "0.125rem",
            }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Is This Same Number in Whatsapp"
            sx={{ color: "white", fontSize: "0.8125rem", fontWeight: 500 }}
          />

          <Button
            variant="contained"
            sx={{
              paddingY: "0.75rem",
              paddingX: "4.1875rem",
              borderRadius: "0.375rem",
              backgroundColor: "#0992B0",
              marginTop: "2.4375rem",
              marginBottom: "4.625rem",
              fontSize: "0.9375rem",
              fontWeight: 700,
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
