import React from "react";
import LoaderWeb from "../../common/Loader/LoaderWeb";
import LoaderMob from "../../common/Loader/LoaderMob";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from "../../../assets/GIF/takeAway2.gif";

function LoaderSpecialToday() {

  const theme = useTheme();

  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  
  return aspect ? (
    <LoaderWeb img={img} title={"Take-Away"} imgH="16rem" imgW="16rem" imgBR="50%" txtX={400} txtY={200} />
  ) : (
    <LoaderMob img={img} title={"Take-Away"} imgH="16.5rem" imgW="16.5rem" space="6.5rem" imgBR="50%" />
  );
}

export default LoaderSpecialToday;
