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
    <Box sx={{ display: "flex", overflowX: "auto", mb: 2, marginX: "2.45%" }}>
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{ marginRight: "20px", textAlign: "center", marginTop: "19px" }}
        >
          <Avatar src={item.image} sx={{ width: 55, height: 55, mb: 1 }} />
          <Typography variant="body2">{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default WhatsInYourMind;
