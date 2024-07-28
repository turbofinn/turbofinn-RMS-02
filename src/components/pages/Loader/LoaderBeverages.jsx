import React from "react";
import LoaderWeb from "../../common/Loader/LoaderWeb";
import LoaderMob from "../../common/Loader/LoaderMob";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from "../../../assets/GIF/beverages.gif";

function LoaderBeverages() {

  const theme = useTheme();

  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  
  return aspect ? (
    <LoaderWeb img={img} title={"Beverages"} imgH="16rem" imgW="24rem" txtX={50} txtY={125} />
  ) : (
    <LoaderMob img={img} title={"Beverages"} imgH="100%" imgW="87%" space="6.5rem" />
  );
}

export default LoaderBeverages;
