import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../common/Header/Header.jsx";
import PrioritySection from "./PrioritySection";
import WhatsInYourMind from "./WhatsInYourMind";
import CourseMealStage from "./CourseMealStage";
import MenuItems from "./MenuItems";
import NavBarBottom from "../../common/NavBar/NavBarBottom.jsx";

function MenuPage() {
  

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", pb: 7 }}>
      <Header />
      <PrioritySection />
      <WhatsInYourMind />
      <CourseMealStage />
      <MenuItems />
      <NavBarBottom />
    </Box>
  );
}

export default MenuPage;
