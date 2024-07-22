import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../../../assets/Image/logo.png";
import {motion} from 'framer-motion'

function LoaderMob({
  bgCol = "rgba(255, 255, 255, 1)",
  img,
  title,
  welcomeCol = "rgba(0, 98, 119, 1)",
  titleCol = "rgba(0, 62, 76, 1)",space='2rem',
  imgML,
  imgH,
  imgW,
  imgBR,
}) { const anime = (variants) => {
  return { initial: "initial", animate: "enter", exit: "exit", variants };
};
const dragPage = {
  initial: { scale: 0, x: -200, y: 200, opacity: 0 },
  enter: { scale: 1, x: 0, y: 0, opacity: 1 },
  transition: { delay: 2, duration: 6, ease: [0.25, 0.5, 0.75, 1.25, 1] },
};
  return (
    <motion.div {...anime(dragPage)}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          width: "100%",
          background: bgCol,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <img
          src={logo}
          style={{
            marginInline: "auto",
            height: "1.85rem",
            position: "absolute",
            top: "8%",
          }}></img>
        <Box
          sx={{
            position: "absolute",
            bottom: "17%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <img
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
          <Typography
            sx={{
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
    </motion.div>
  );
}

export default LoaderMob;
