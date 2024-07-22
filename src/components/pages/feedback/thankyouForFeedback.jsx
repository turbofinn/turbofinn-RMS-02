import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import thankYou from "../../../assets/Image/ThankYou.png";

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(5);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginTop: 1,
          marginBottom: 5,
          fontWeight: 600,
          fontSize: "24px",
        }}
      >
        Feedback
      </Typography>
      <Box>
        <img src={thankYou} alt="Thank You" />
      </Box>
      <Typography
        sx={{
          marginBottom: 1,
          fontWeight: 700,
          fontSize: "32px",
          marginTop: "3rem",
        }}
      >
        Thanks Alot <br />
        For Your Feedback
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: "2.5rem",
          marginBottom: 3,
          fontWeight: 700,
          fontSize: "32px",
        }}
      >
        It Means Alot
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "13px" }}>
        With in {countdown} Sec <br />
        you will be redirect to main page.
      </Typography>
      <Box sx={{ marginTop: 5, marginBottom: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, fontSize: "40px", marginBottom: 1 }}
        >
          LOGO
        </Typography>
        <Typography
          variant="caption"
          sx={{ fontWeight: 600, fontSize: "14px", marginBottom: 0 }}
        >
          A Turbofinn AI Product
        </Typography>
      </Box>
    </Box>
  );

  if (isMobile) {
    return (
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        {content}
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh", 
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          {content}
        </Box>
      </Box>
    );
  }
};

export default ThankYouPage;
