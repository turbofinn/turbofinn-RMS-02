import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import image from "../../../assets/Image/whatsinyourmind/starter.jpg";

function WhatsInYourMind() {
  const theme = useTheme();
  const isWebView = useMediaQuery(theme.breakpoints.up("md"));

  const items = [
    { name: "Rolls", image: image },
    { name: "Pizza", image: image },
    { name: "Chinese", image: image },
    { name: "Biryani", image: image },
    { name: "Cakes", image: image },
    { name: "Rolls", image: image },
    { name: "Pizza", image: image },
    { name: "Chinese", image: image },
    { name: "Biryani", image: image },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: 4, md: 6 }, px: { xs: 2, md: 3 } }}
    >
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: "0.8125rem", md: "1rem" },
          fontWeight: "500",
          mb: { xs: 2, md: 3 },
        }}
      >
        Let's See, what's in your mind?
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          mb: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
          marginLeft: { lg: "5px" },
          marginTop: { lg: "20px" },
          paddingLeft: { lg: "15px" },
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              mr: { xs: 6, md: 6 },
              ml: { xs: 1 },
              textAlign: "center",
              minWidth: { xs: "auto", md: "100px" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              zIndex: 1,
            }}
          >
            <Avatar
              src={item.image}
              sx={{
                width: { xs: 55, md: 80 },
                height: { xs: 55, md: 80 },
                mb: 1,
                boxShadow: "0px 5px 8px rgba(0, 0, 0, 0.4)",
                zIndex: 2,
                marginTop: "5px",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                textAlign: "center",
              }}
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}

export default WhatsInYourMind;
