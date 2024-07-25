import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/Image/logo.png";
import { motion } from "framer-motion";
import { red } from "@mui/material/colors";

function LoaderMob({
  bgCol = "rgba(255, 255, 255, 1)",
  img,
  title,
  welcomeCol = "rgba(0, 98, 119, 1)",
  titleCol = "rgba(0, 62, 76, 1)",
  space = "2rem",
  imgML,
  imgH,
  imgW,
  imgBR,
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
      x: -200,
      y: 200,
      opacity: 0.2,
    },
    enter: {
      height: "100%",
      width: "100%",
      x: 0,
      y: 0,
      opacity: 1,
      transition: {delay:0.2, duration: 0.6 },
    },
  };
  const txtDrag = {
    initial: { scale: 0.2, x: -500, y: 200, opacity: 0 },
    enter: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 1, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const imgDrag = {
    initial: { scale: 0.2, x: -400, y: 200, opacity: 0 },
    enter: {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 1, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const subtitle = {
    initial: { scale: 1, y: "100vh", opacity: 1 },
    enter: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 1, ease: [0.34, 1.3, 0.64, 1] },
    },
  };
  const enlarge = {
    initial: { scale: 0, borderRadius: "50%" },
    enter: {
      scale: 1,
      borderRadius: 0,
      transition: { duration: 0.4 },
    },
  };
  const fade = {
    initial: { opacity: 1 },
    enter: {
      display: "none",
      opacity: 0,
      transition: { delay: 0.4, duration: 0.6 },
    },
  };
  return (
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          background: bgCol,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",position:'relative'
        }}>
        <motion.div
          {...anime(fade)}
          style={{
            position: "absolute",
            zIndex: 100,
            height: "100vh",
            width: "100vw",
          }}>
          <motion.div
            {...anime(enlarge)}
            style={{
              height: "100%",
              width: "100%",
              content: '""',
              background: bgCol,
              transformOrigin: "85% 75%",
            }}></motion.div>
        </motion.div>
        <motion.img
          src={logo}
          style={{
            marginInline: "auto",
            height: "1.85rem",
            position: "absolute",
            top: "8%",
          }}></motion.img>
        <Box
          sx={{
            position: "absolute",
            bottom: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <motion.img
            {...anime(imgDrag)}
            src={img}
            alt={title}
            style={{
              height: imgH,
              width: imgW,
              marginLeft: imgML,
              borderRadius: imgBR,
              objectFit: "cover",
            }}
          />
          <motion.div
            style={{ height: "100%", width: "100%" }}
            {...anime(txtDrag)}>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1.25rem",
                color: welcomeCol,
                textAlign: "center",
                marginTop: space,
                letterSpacing: -0.2,
              }}>
              Welcome To Our
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "1.25rem",
                color: titleCol,
                textAlign: "center",
                letterSpacing: -0.2,
              }}>
              {title} Menu
            </Typography>
          </motion.div>

          <Typography
            component={motion.div}
            {...anime(subtitle)}
            style={{
              fontWeight: "800",
              fontSize: "0.75rem",
              color: "rgba(0,0,0,1)",
              textAlign: "center",
              marginTop: "2.5rem",
            }}>
            Fetching today's delicious specials just for you!
          </Typography>
        </Box>
      </Box>
  );
}

export default LoaderMob;
