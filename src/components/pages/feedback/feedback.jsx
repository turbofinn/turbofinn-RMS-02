import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  TextField,
  useTheme,
} from "@mui/material";
import ThankYouPage from "./thankyouForFeedback";

const FeedbackPage = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const theme = useTheme();

  const handleSubmit = () => {
    setShowThankYou(true);
  };

  if (showThankYou) {
    return <ThankYouPage />;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        background: `
          linear-gradient(180deg, #0092B3 0%, rgba(83, 204, 231, 0.86) 60%),
          linear-gradient(180deg, rgba(83, 204, 231, 0.86) 60%, rgba(217, 217, 217, 1) 40%)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 50%, 100% 50%",
        backgroundPosition: "top, bottom",
        padding: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          marginTop: 4,
          marginBottom: 14,
          fontWeight: 600,
          fontSize: "24px",
          color: "white",
        }}
      >
        Feedback
      </Typography>
      <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            marginBottom: 3,
            fontWeight: 600,
            fontSize: "24px",
            background: "linear-gradient(180deg, rgba(224, 224, 224, 1), rgba(255, 255, 255, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rate Our Service
        </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "white",
          borderRadius: '40px',
          padding: 3,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
       
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Rating
            name="service-rating"
            defaultValue={4}
            sx={{ fontSize: 52, color: "rgba(240, 149, 53, 1)", marginTop:5 }}
          />
          <Typography variant="subtitle1" sx={{ fontWeight: 600, fontSize: "20px" }}>
            Rate My Work
          </Typography>
          <TextField
            multiline
            rows={3}
            placeholder="Your Service Was Very Impressive"
            variant="outlined"
            fullWidth
            sx={{
              width: "312px",
              "& .MuiOutlinedInput-root": {
                height: "100px",
                backgroundColor: "rgba(227, 227, 227, 0.66)",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: "287px",
              height: "44px",
              background: "linear-gradient(180deg, rgba(9, 152, 184, 1), rgba(68, 187, 214, 1))",
              boxShadow: "0 4px -9.5px 0 rgba(0, 0, 0, 0.25)",
              fontWeight: 600,
              fontSize: "20px",
              borderRadius:'58px'
            }}
          >
            Submit
          </Button>
          <Typography
            sx={{
              cursor: "pointer",
              color: "text.secondary",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Skip Feedback
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: 4,
            fontWeight: 700,
            fontSize: "40px",
            color: "rgba(53, 177, 205, 1)",
          }}
        >
          LOGO
        </Typography>
        <Typography
          variant="caption"
          sx={{
            textAlign: "center",
            display: "block",
            marginTop: 1,
            fontWeight: 500,
            fontSize: "14px",
          }}
        >
          An Turbofinn AI Product
        </Typography>
      </Box>
    </Box>
  );
};

export default FeedbackPage;