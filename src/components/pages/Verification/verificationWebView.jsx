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
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: "43.75rem",
          width: "44.625rem",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "1.8rem",
          boxShadow: "0 0.25rem 1.25rem rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="img"
          sx={{
            height: "30rem",
            width: "29.0625rem",
            marginRight: "0.25rem",
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
          height: "43.75rem",
          width: "44.625rem",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
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
              marginTop: "4rem",
              zIndex: 1,
              fontSize: "2.5rem",
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
              fontSize: "1rem",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "1.5625rem",
            }}
          >
            "Craving Goodness? Order Now and Savor the Flavor!"
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontSize: "2rem",
              marginTop: "5.625rem",
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
              fontSize: "0.875rem",
              fontWeight: 700,
              textAlign: "center",
              marginTop: "0.8125rem",
              width: "28.0625rem",
            }}
          >
            Please Let Us Know Your Mobile Number For Verification Purposes
          </Typography>
          <TextField
            placeholder="+91 9452222225"
            sx={{
              bgcolor: "white",
              borderRadius: "1rem",
              fontSize: "1.5rem",
              border: "0.09375rem",
              height: "3.4375rem",
              width: "20.875rem",
              borderColor: "white",
              marginTop: "1.75rem",
            }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Is This Same Number in Whatsapp"
            sx={{
              color: "black",
              fontSize: "0.8125rem",
              fontWeight: 500,
              marginTop: "2.6875rem",
            }}
          />
          <Button
            variant="contained"
            sx={{
              paddingY: "0.9375rem",
              paddingX: "6.4375rem",
              borderRadius: "0.5625rem",
              backgroundColor: "#0992B0",
              marginTop: "2.0625rem",
              fontSize: "1.25rem",
              fontWeight: 700,
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default VerificationWebView;
