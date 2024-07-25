import React from "react";
import { Box, duration, Typography } from "@mui/material";
import logo from "../../../assets/Image/logo.png";
import { delay, easeInOut, motion } from "framer-motion";
import bg from "../../../assets/Image/selectOne/bg_food4.png";
import { Opacity } from "@mui/icons-material";

function LoaderWeb({
  bgCol = "rgba(255, 255, 255, 1)",
  img,
  title,
  imgML,
  imgH,
  imgW,
  imgBR,
  imgX='-40%',
  imgY='25%',
  txtX,
  txtY,
  space = "1.5rem",
  welcomeCol = "rgba(0, 98, 119, 1)",
  titleCol = "rgba(0, 62, 76, 1)",
}) {
  const anime = (variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
    };
  };
  const pageDrag = {
    initial: {
      height: { md: "13.75rem", xl: "19.25rem" },
      width: { md: "12.5rem", xl: "16.7rem" },
      x: 200,
      y: 500,
      opacity: 0.6
    },
    enter: {
      height:'100%',width:'100%',
      x: 0,
      y: 0,
      opacity: 1,
      transition: {delay:0.2, duration: 0.6},
    },
  };
  const txtDrag = {
    initial: { scale: 0.2, x: -500, y: 200, opacity: 0 },
    enter: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      transition: {delay: 0.2, duration: 1,ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const imgDrag = {
    initial: { scale: 0.5, x: imgX, y: imgY, opacity: 0 },
    enter: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 1, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom,rgba(73,195,222,1),rgba(73, 195, 222, 0.936),rgba(73, 195, 222, 0.750),rgba(73, 195, 222, 0.600),rgba(73, 195, 222, 0.500),rgba(73, 195, 222, 0.300)),url(${bg})`,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#49c3de",
        backgroundSize: "60rem",
      }}>
      <motion.div
        {...anime(pageDrag)}
        style={{
          background: bgCol,
          height: "100vh",
          width: "100%",position:'absolute'
        }}></motion.div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          paddingTop: "3.5rem",
          zIndex: 3,
          position: "absolute",
        }}>
        <img src={logo} alt="logo" height="30rem"></img>
        <Typography
          sx={{
            fontSize: "1.15rem",
            fontWeight: "700",
            color: "rgba(10, 52, 61, 1)",
            marginTop: "2rem",
          }}>
          "Craving Goodness? Order Now and Savor the Flavor!"
        </Typography>
        <motion.div {...anime(imgDrag)}>
          <Box
            style={{
              height: imgH,
              width: imgW,
              justifyContent: "center",
              display: "flex",
              marginTop: "2rem",
              marginLeft: imgML,
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
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          {...anime(txtDrag)}>
          <Typography
            sx={{
              fontSize: "1.75rem",
              fontWeight: "700",
              color: welcomeCol,
              letterSpacing: -0.2,
              marginTop: space,
            }}>
            Welcome To Our
          </Typography>
          <Typography
            sx={{
              fontSize: "1.75rem",
              fontWeight: "700",
              color: titleCol,
              letterSpacing: -0.2,
            }}>
            {title} Menu
          </Typography>
        </motion.div>

        <Typography
          sx={{
            fontSize: "1.15rem",
            fontWeight: "800",
            marginTop: "1rem",
          }}>
          Fetching today's delicious specials just for you!
        </Typography>
      </Box>
    </Box>
  );
}

export default LoaderWeb;
