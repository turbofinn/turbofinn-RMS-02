import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/Image/logo.png";

function LoaderMob({
  bgCol = "rgba(255, 255, 255, 1)",
  img,
  title,
  imgH,
  imgW,
  imgBR,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3.5rem",
      }}>
      <img src={logo} alt="logo" height="25rem"></img>
      
      <img
        src={img}
        style={{
          height: imgH,
          width: imgW,
          borderRadius: imgBR,
          marginTop: "10rem",
        }}></img>
      <Typography
        sx={{
          fontSize: "1.35rem",
          fontWeight: "700",
          color: "rgba(0, 98, 119, 1)",
          marginTop: "1.5rem",
        }}>
        Welcome To Our
      </Typography>
      <Typography
        sx={{
          fontSize: "1.35rem",
          fontWeight: "700",
          color: "rgba(0, 62, 76, 1)",
        }}>
        {title} Menu
      </Typography>
      <Typography
        sx={{
          fontSize: "0.75rem",
          fontWeight: "800",
          letterSpacing: -0.2,
          marginTop: "2rem",
        }}>
        Fetching today's delicious specials just for you!
      </Typography>
    </Box>
  );
}

export default LoaderMob;
