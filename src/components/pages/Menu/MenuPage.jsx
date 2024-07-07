import React from "react";
import { Box } from "@mui/material";
import Header from "../../common/Header/Header";
import PrioritySection from "./PrioritySection";
import WhatsInYourMind from "./WhatsInYourMind";
import CourseMealStage from "./CourseMealStage";
import MenuItems from "./MenuItems";

function MenuPage() {
  return (
    <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
      <Header />
      <PrioritySection />
      {/* <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        Let's See, WHAT'S IN YOUR MIND ?
      </Typography>
      <WhatsInYourMind />
      <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
        EXPLORE 7 COURSE MEAL STAGE
      </Typography>
      <CourseMealStage />
      <MenuItems /> */}
    </Box>
  );
}

export default MenuPage;
