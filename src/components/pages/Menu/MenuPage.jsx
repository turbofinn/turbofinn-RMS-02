import React, { useState } from "react";
import { Box } from "@mui/material";
import Header from "../../common/Header/Header.jsx";
import PrioritySection from "./PrioritySection";
import WhatsInYourMind from "./WhatsInYourMind";
import CourseMealStage from "./CourseMealStage";
import MenuItems from "./MenuItems";
import NavBarBottom from "../../common/NavBar/NavBarBottom.jsx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "../../common/NavBar/NavBar.jsx";

function MenuPage() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh", pb: 7 }}>
      {matches ? <NavBar /> : <></>}
      <Header />
      <PrioritySection />
      <WhatsInYourMind />
      <CourseMealStage />
      <MenuItems />
      {matches ? <></> : <NavBarBottom />}
    </Box>
  );
}

export default MenuPage;
