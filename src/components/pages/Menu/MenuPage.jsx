import React, { useState, useEffect } from "react";
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
import LoaderSpecialToday from "../Loader/LoaderSpecialToday.jsx";
import ViewPlate from "../../common/viewPlate/viewPlate.jsx";
import FloatButton from "../floatingButton/FloatingButton.jsx";
function MenuPage() {
  const [loader, setLoader] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {/* <FloatButton/> */}
      {loader ? (
        <LoaderSpecialToday />
      ) : (
        <Box
          sx={{
            backgroundColor: "white",
            minHeight: "100vh",
            pb: 7,
            overflowX: "hidden",
            marginRight: "-1px",
          }}
        >
          {matches ? <NavBar /> : null}
          <Header />
          <PrioritySection />
          <WhatsInYourMind />
          <CourseMealStage />
          <MenuItems />
          <ViewPlate/>
          {matches ? null : <NavBarBottom />}
        </Box>
      )}
    </>
  );
}

export default MenuPage;
