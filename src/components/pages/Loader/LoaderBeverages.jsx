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
    <LoaderWeb
      img={img}
      title={"Beverages"}
      imgH="20rem"
      imgW="30rem"></LoaderWeb>
  ) : (
    <LoaderMob
      img={img}
      title={"Beverages"}
      imgH="100%"
      imgW="87%" space='6.5rem'></LoaderMob>
  );
}

export default LoaderBeverages;
