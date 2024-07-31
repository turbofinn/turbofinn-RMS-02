import React, { useState } from "react";
import { Box, Typography, Button, Rating, TextField } from "@mui/material";
import ThankYouPage from "./thankyouForFeedback";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FeedbackPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [showThankYou, setShowThankYou] = useState(false);

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
        linear-gradient(180deg, #0092B3 0%, rgba(83, 204, 231, 0.86) 50%),
        linear-gradient(180deg, white 50%, white 100%)
      `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 55%, 100% 45%",
        backgroundPosition: "top, bottom",
        padding: 2,
      }}
    >
      {matches ? (
        <></>
      ) : (
        <>
          {" "}
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
          </Typography>{" "}
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              marginBottom: 3,
              fontWeight: 600,
              fontSize: "24px",
              background:
                "linear-gradient(180deg, rgba(224, 224, 224, 1), rgba(255, 255, 255, 1))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rate Our Service
          </Typography>
        </>
      )}

      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 400, md: "557px" },
          backgroundColor: "white",
          borderRadius: { xs: "40px", md: "20px" },
          padding: 3,
          boxShadow: "0px 0px 35.6px 6px rgba(0, 0, 0, 0.25)",
          marginTop: { xs: 0, md: "6rem" },
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
          {matches ? (
            <>
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  marginTop: 4,
                  marginBottom: 8,
                  fontWeight: 600,
                  fontSize: "3rem",
                  color: { xs: "white", md: "black" },
                }}
              >
                Feedback
              </Typography>{" "}
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  marginBottom: 2,
                  fontWeight: 600,
                  fontSize: "2rem",
                  color: "black",
                }}
              >
                Rate Our Service
              </Typography>
            </>
          ) : (
            <></>
          )}
          <Rating
            name="service-rating"
            defaultValue={4}
            sx={{
              fontSize: { xs: 50, md: 80 },
              color: "rgba(240, 149, 53, 1)",
              marginTop: 1,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              fontSize: "20px",
              marginTop: { xs: 0, md: "2rem" },
            }}
          >
            Rate My Work
          </Typography>
          <TextField
            multiline
            rows={3}
            placeholder="Please provide your valuable feedback"
            variant="outlined"
            fullWidth
            sx={{
              width: { xs: "312px", md: "430px" },
              "& .MuiOutlinedInput-root": {
                height: { xs: "100px", md: "130px" },
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
              background:
                "linear-gradient(90deg, rgba(9, 152, 184, 1), rgba(68, 187, 214, 1))",
              boxShadow: "0px 4px 9.5px 0px rgba(0, 0, 0, 0.25) inset",
              fontWeight: 600,
              fontSize: "20px",
              borderRadius: "58px",
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
