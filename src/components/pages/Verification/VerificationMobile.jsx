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
        padding: 2,
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
            marginTop: "58px",
            zIndex: 1,
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
          }}
        >
          LOGO
        </Typography>

        <Box
          component="img"
          sx={{
            height: 230,
            width: 230,
            maxHeight: { xs: 300, md: 300 },
            maxWidth: { xs: 300, md: 300 },
            zIndex: 1,
            marginTop: "20px",
            marginBottom: "38px",
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
              fontSize: "24px",
              marginBottom: "3px",
              zIndex: 1,
              fontWeight: 600,
            }}
          >
            Provide Your Mobile Number
          </Typography>
          <Typography
            // variant="body3"
            sx={{
              color: "white",
              opacity: 0.8,
              fontSize: "14px",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "43px",
            }}
          >
            Please Let Us Know Your Mobile Number For Verification Purposes
          </Typography>

          <TextField
            // fullWidth
            // variant="outlined"
            placeholder="+91 9452222225"
            sx={{
              bgcolor: "white",
              borderRadius: "10px",
              fontSize: "24px",
              border: "1.5px",
              height: "55px",
              width: "334px",
              borderColor: "white",
              marginBottom: "2px",
            }}
          />

          <FormControlLabel
            control={<Checkbox />} //make this smaller
            label="Is This Same Number in Whatsapp"
            sx={{ color: "white", fontSize: "13px", fontWeight: 500 }}
          />

          <Button
            variant="contained"
            sx={{
              paddingY: "12px",
              paddingX: "67px",
              borderRadius: 6,
              backgroundColor: "#0992B0",
              marginTop: "39px",
              marginBottom: "74px",
              fontSize: "15px",
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
          fontSize: "15px",
          mb: "17px",
          fontWeight: 700,
        }}
      >
        A Product Of TurboFinn AI
      </Typography>
    </Box>
  );
};

export default VerificationMobile;
