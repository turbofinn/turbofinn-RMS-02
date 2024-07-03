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
          height: 700,
          width: 714,
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: 5,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 480,
            width: 465,
            // maxHeight: { xs: 150, md: 200 },
            // maxWidth: { xs: 150, md: 200 },
            marginRight: 4,
            // boxShadow: 3,
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
          height: 700,
          width: 714,
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          borderRadius: 5,
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
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
              marginTop: "64px",
              zIndex: 1,
              fontSize: "40px",
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            LOGO
          </Typography>

          <Typography
            // variant="body3"
            sx={{
              color: "black",
              opacity: 0.8,
              fontSize: "16px",
              fontWeight: 600,
              textAlign: "center",
              marginTop: "25px",
            }}
          >
            "Craving Goodness? Order Now and Savor the Flavor!"
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontSize: "32px",
              marginTop: "90px",
              zIndex: 1,
              fontWeight: 600,
            }}
          >
            Provide Your Mobile Number
          </Typography>
          <Typography
            // variant="body3"
            sx={{
              color: "black",
              opacity: 0.8,
              fontSize: "14px",
              fontWeight: 700,
              textAlign: "center",
              marginTop: "13px",
              width: "449px",
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
              borderRadius: "16px",
              fontSize: "24px",
              border: "1.5px",
              height: "55px",
              width: "334px",
              borderColor: "white",
              marginTop: "28px",
            }}
          />

          <FormControlLabel
            control={<Checkbox />} //make this smaller
            label="Is This Same Number in Whatsapp"
            sx={{
              color: "black",
              fontSize: "13px",
              fontWeight: 500,
              marginTop: "43px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              paddingY: "15px",
              paddingX: "103px",
              borderRadius: 9,
              backgroundColor: "#0992B0",
              marginTop: "33px",
              fontSize: "20px",
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
