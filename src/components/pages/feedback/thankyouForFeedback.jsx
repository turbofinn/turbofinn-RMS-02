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
        padding: { xs: 0, sm: 2 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginTop: { xs: 1, sm: 2 },
          marginBottom: { xs: 3, sm: 5 },
          fontWeight: 600,
          fontSize: { xs: "24px", sm: "32px" },
        }}
      >
        Feedback
      </Typography>
      <Box>
        <img
          src={thankYou}
          alt="Thank You"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Typography
        sx={{
          marginBottom: { xs: 1, sm: 2 },
          fontWeight: 700,
          fontSize: { xs: "32px", sm: "40px" },
          marginTop: { xs: "2rem", sm: "3rem" },
        }}
      >
        Thanks Alot <br />
        For Your Feedback
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginTop: { xs: "1.5rem", sm: "2.5rem" },
          marginBottom: { xs: 2, sm: 3 },
          fontWeight: 700,
          fontSize: { xs: "32px", sm: "40px" },
        }}
      >
        It Means Alot
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, fontSize: { xs: "13px", sm: "16px" } }}
      >
        With in {countdown} Sec <br />
        you will be redirect to main page.
      </Typography>
      <Box sx={{ marginTop: { xs: 3, sm: 5 }, marginBottom: { xs: 1, sm: 2 } }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "40px", sm: "48px" },
            marginBottom: 1,
          }}
        >
          LOGO
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 600,
            fontSize: { xs: "14px", sm: "16px" },
            marginBottom: 0,
          }}
        >
          A Turbofinn AI Product
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: {
          xs: "white",
          sm: `
            linear-gradient(180deg, #0092B3 0%, rgba(83, 204, 231, 0.86) 70%),
            linear-gradient(180deg, rgba(83, 204, 231, 0.86) -90%, rgba(217, 217, 217, 1) 50%)
          `,
        },
        backgroundRepeat: { xs: "no-repeat", sm: "no-repeat" },
        backgroundSize: { xs: "auto", sm: "100% 55%, 100% 45%" },
        backgroundPosition: { xs: "auto", sm: "top, bottom" },
        padding: { xs: 0, sm: 2 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 600 },
          backgroundColor: "white",
          borderRadius: { xs: 0, sm: "20px" },
          boxShadow: {
            xs: "none",
            sm: "0px 0px 35.6px 6px rgba(0, 0, 0, 0.25)",
          },
          overflow: "hidden",
        }}
      >
        {content}
      </Box>
    </Box>
  );
};

export default ThankYouPage;
