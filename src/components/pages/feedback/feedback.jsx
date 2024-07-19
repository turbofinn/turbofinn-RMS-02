import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";

const FeedbackPage = () => {
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(5);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (step === 3) {
      const timer = setInterval(() => {
        setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [step]);

  const handleContinue = () => {
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h6">
              How was your experience with us today?
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <SentimentVeryDissatisfiedIcon
                sx={{ fontSize: 48, cursor: "pointer" }}
              />
              <SentimentNeutralIcon sx={{ fontSize: 48, cursor: "pointer" }} />
              <SentimentSatisfiedAltIcon
                sx={{ fontSize: 48, cursor: "pointer" }}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleContinue}
              sx={{ width: "100%", marginTop: 2 }}
            >
              Continue
            </Button>
            {!isMobile && (
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "text.secondary",
                  marginTop: 1,
                }}
              >
                Skip Feedback
              </Typography>
            )}
          </Box>
        );
      case 2:
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="h6">Rate Our Service</Typography>
            <Rating
              name="service-rating"
              defaultValue={5}
              sx={{ fontSize: 40 }}
            />
            <Typography variant="subtitle1">Rate My Work</Typography>
            <TextField
              multiline
              rows={3}
              placeholder="Your Service Was Very Impressive"
              variant="outlined"
              fullWidth
              sx={{ marginTop: 1, marginBottom: 2 }}
            />
            <Button
              variant="contained"
              onClick={handleContinue}
              sx={{ width: "100%" }}
            >
              Submit
            </Button>
            {!isMobile && (
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "text.secondary",
                  marginTop: 1,
                }}
              >
                Skip Feedback
              </Typography>
            )}
          </Box>
        );
      case 3:
        const content = (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              textAlign: "center",
              padding: 3,
            }}
          >
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
              Feedback
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: "#4a90e2",
                fontStyle: "italic",
                marginBottom: 2,
              }}
            >
              Thank You!
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Thanks Alot For Your Feedback
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
              It Means Alot
            </Typography>
            <Typography variant="body2">
              With in {countdown} Sec you will be redirect to main page.
            </Typography>
            <Box sx={{ marginTop: "auto", marginBottom: 2 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                LOGO
              </Typography>
              <Typography variant="caption">An Turbofinn AI Product</Typography>
            </Box>
          </Box>
        );
        if (isMobile) {
          return (
            <Box
              sx={{
                height: "100vh",
                //   width: '100vw',
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
                minHeight: "100vh",
                backgroundColor: "#f0f0f0",
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
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "white",
          borderRadius: 2,
          padding: 3,
          boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
        }}
      >
        {step < 3 && (
          <>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", marginBottom: 1 }}
            >
              Feedback
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                textAlign: "center",
                marginBottom: 2,
                color: "text.secondary",
              }}
            >
              Step {step} of 2
            </Typography>
          </>
        )}
        {renderStep()}
        {step < 3 && (
          <>
            <Typography
              sx={{
                textAlign: "center",
                marginTop: 3,
                fontSize: 24,
                fontWeight: "bold",
                color: "#4a90e2",
              }}
            >
              LOGO
            </Typography>
            <Typography
              variant="caption"
              sx={{ textAlign: "center", display: "block", marginTop: 1 }}
            >
              An Turbofinn AI Product
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default FeedbackPage;
