import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import image from "../../../assets/Image/whatsinyourmind/starter.jpg";

function WhatsInYourMind() {
  const items = [
    { name: "Rolls", image: image },
    { name: "Pizza", image: image },
    { name: "Chinese", image: image },
    { name: "Rolls", image: image },
    { name: "Pizza", image: image },
    { name: "Chinese", image: image },
  ];

  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontSize: "0.8125rem",
          fontWeight: "500",
          marginX: "2.45%",
          marginTop: "4%",
          marginLeft: "15px",
        }}
      >
        Let's See, What's in your mind?
      </Typography>
      <Box sx={{ display: "flex", overflowX: "auto", mb: 2, marginX: "2.45%" }}>
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{ marginRight: "20px", textAlign: "center", marginTop: "15px" }}
          >
            <Avatar src={item.image} sx={{ width: 55, height: 55, mb: 1 }} />
            <Typography variant="body2">{item.name}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default WhatsInYourMind;
