import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../../common/Header";
import PrioritySection from "./PrioritySection";
import WhatsInYourMind from "./WhatsInYourMind";
import CourseMealStage from "./CourseMealStage";
import MenuItems from "./MenuItems";

function MenuPage() {
  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Header />
      <PrioritySection />
      <Typography
        variant="h6"
        sx={{
          fontSize: "0.8125rem",
          fontWeight: "500",
          marginX: "2.45%",
          marginTop: "2.74%",
        }}
      >
        Let's See, What's in your mind?
      </Typography>
      <WhatsInYourMind />
      
      <CourseMealStage />
       {/* 
      <MenuItems /> */}
    </Box>
  );
}

export default MenuPage;
