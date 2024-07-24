import React, { useRef, useEffect, useState } from "react";
import { Typography, Box, duration } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, transform, easeIn } from "framer-motion";
import vid1 from "../../../assets/GIF/special.gif";
import img2 from "../../../assets/Image/selectOne/cardImg/Beverages.png";
import img3 from "../../../assets/Image/selectOne/cardImg/dineIn.jpg";
import img4 from "../../../assets/Image/TakeAway.png";
import bg from "../../../assets/Image/selectOne/bg_food4.png";
import logo from "../../../assets/Image/logo.png";
import zIndex from "@mui/material/styles/zIndex";
import VerificationBG from "../../common/VerificationBG/VerificationBG";
import { Opacity } from "@mui/icons-material";


function CategoriesWeb() {
  const navigate = useNavigate();
  const categories = [
    {
      title: "Today's Special",
      image: vid1,
      to: "/specialToday",
    },
    {
      title: "Beverages",
      image: img2,
      to: "/beverages",
    },
    {
      title: "Dine In Menu",
      image: img3,
      to: "/dineIn",
    },
    {
      title: "Take away",
      image: img4,
      to: "/takeAway",
    },
  ];

  const anime = (variants) => {
    return { initial: "initial", animate: "enter", exit: "exit", variants };
  };

  const expand = {
    initial: {
      scale: 0.6,
      x: 0,
      y: 0,
    },
    enter: { scale: 1, x: 0, y: 0, transition: { duration: 0.2 } },
    exit: {
      scale: 3,
      x: 100,
      y: 100,
      transition: { delay: 0.2, duration: 0.6 },
    },
  };
  const fade = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: 0.2, ease: "easeIn" } },
  };
  return (
    <motion.div
      {...anime(fade)}
      style={{
        backgroundImage: `linear-gradient(to bottom,rgba(73,195,222,1),rgba(73, 195, 222, 0.936),rgba(73, 195, 222, 0.750),rgba(73, 195, 222, 0.600),rgba(73, 195, 222, 0.500),rgba(73, 195, 222, 0.300)),url(${bg})`,
        backgroundColor: "#49c3de",
        backgroundSize: "60rem",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 50,
        }}>
        <Box
          sx={{
            width: "full",
            display: "flex",
            flexDirection: "column",
            paddingInline: { md: "9rem", md: "10.75rem" },
            height: "60vh",
          }}>
          <img
            src={logo}
            alt="logo"
            style={{
              height: "30px",
              width: "111px",
              marginInline: "auto",
              marginTop: "3.5rem",
            }}></img>
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontSize: { md: "2.5rem", xl: "4rem" },
                fontWeight: "700",
                color: "white",
                marginBlockStart: {
                  md: "2.75rem",
                  md: "3.15rem",
                  xl: "8.5rem",
                },
              }}>
              Select One
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { md: "1.45rem", xl: "2.25rem" },
                fontWeight: "700",
                color: "white",
              }}>
              Categories
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { md: "1.15rem", xl: "2rem" },
                fontWeight: "500",
                color: "rgba(255,255,255,0.85)",
                maxWidth: { md: "20rem", xl: "41rem" },
                paddingBlockStart: { md: "1rem", xl: "1.75rem" },
              }}>
              Select anyone of the categories to proceed
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingInline: { md: "7rem", xl: "14rem" },
            gap: { md: "26px", xl: "30px" },
          }}>
          {categories.map((elem, i) => {
            return (
              <AnimatePresence mode={"wait"}>
                <Box
                  {...anime(expand)}
                  onClick={() => {
                      navigate("/menu");;
                  }}
                  key={i}
                  sx={{
                    height: { md: "13.75rem", xl: "19.25rem" },
                    width: { md: "12.5rem", xl: "16.7rem" },
                    boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                    margin: 0,
                    background: "#fff",
                    borderRadius: "15px",
                    paddingBottom: "1.1rem",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}>
                  <motion.div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}>
                    <Box
                      sx={{
                        height: { md: "68%", xl: "72%" },
                        marginBlockStart: { md: "14px", xl: "20px" },
                        marginInline: { md: "30px", xl: "38px" },
                      }}
                      title="">
                      <img
                        src={elem.image}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}></img>
                    </Box>
                    <Box sx={{ paddingInline: "0", paddingBlock: "14px" }}>
                      <Typography
                        sx={{
                          fontSize: { md: "0.625rem", xl: "0.813rem" },
                          letterSpacing: 2.75,
                          fontWeight: "600",
                          lineHeight: { md: "12.5px", xl: "16.9px" },
                          color: "rgba(82,82,82,1)",
                          marginInlineStart: "24px",
                        }}>
                        {" "}
                        EXPLORE ALL
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { md: "1rem", xl: "1.45rem" },
                          fontWeight: "800",
                          lineHeight: { md: "22px", xl: "31.2px" },
                          marginBlockStart: { md: "2px", xl: "8px" },
                          marginInlineStart: "24px",
                          color: "rgba(65,66,68,1)",
                        }}>
                        {elem.title}
                      </Typography>
                    </Box>
                  </motion.div>
                </Box>
              </AnimatePresence>
            );
          })}
        </Box>
      </Box>
    </motion.div>
  );
}

export default CategoriesWeb;
