import React from "react";
import LoaderWeb from "../../common/Loader/LoaderWeb";
import LoaderMob from "../../common/Loader/LoaderMob";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from "../../../assets/GIF/dineIn.gif";

function LoaderDineIn() {

  const theme = useTheme();

  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  
  return aspect ? (
    <LoaderWeb img={img} title={"Dine In"} imgH="16rem" imgW="16rem" imgBR="50%" bgCol="rgba(225, 140, 66, 1)" titleCol="rgba(255, 255, 255, 1)" welcomeCol="rgba(0, 79, 96, 1)" txtX={400} txtY={200} />
  ) : (
    <LoaderMob img={img} title={"Dine In"} imgH="fit" imgW="100%" space="4rem" bgCol="rgba(225, 140, 66, 1)" titleCol="rgba(255, 255, 255, 1)" welcomeCol="rgba(0, 79, 96, 1)" />
  );
}

export default LoaderDineIn;
