import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/Image/logo.png";

function LoaderWeb({
  bgCol = "rgba(255, 255, 255, 1)",
  img,
  title,
  imgML,
  imgH,
  imgW,
  imgBR,
  space = "1.5rem",
  welcomeCol = "rgba(0, 98, 119, 1)",
  titleCol = "rgba(0, 62, 76, 1)",
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: bgCol,paddingTop:'3.5rem'
      }}>
      <img src={logo} alt="logo" height="30rem"></img>
      <Typography
        sx={{
          fontSize: "1.15rem",
          fontWeight: "700",
          color: "rgba(10, 52, 61, 1)",marginTop:'2rem'
        }}>
        "Craving Goodness? Order Now and Savor the Flavor!"
      </Typography>

      <Box
        sx={{
          height: imgH,
          width: imgW,
          justifyContent: "center",
          display: "flex",marginTop:'2rem',marginLeft:imgML
        }}>
        <img
          src={img}
          style={{
            height: "100%",
            width: "100%",
            borderRadius: imgBR,
            objectFit: "cover",
          }}></img>
      </Box>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "700",
          color: welcomeCol,
          letterSpacing: -0.2,
          marginTop: "2rem",
        }}>
        Welcome To Our
      </Typography>
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "700",
          color: titleCol,
          letterSpacing: -0.2,
        }}>
        {title} Menu
      </Typography>
      <Typography
        sx={{
          fontSize: "1.15rem",
          fontWeight: "800",
          marginTop: "1rem",
        }}>
        Fetching today's delicious specials just for you!
      </Typography>
    </Box>
  );
}

export default LoaderWeb;
