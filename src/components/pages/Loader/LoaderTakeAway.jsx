import React from "react";
import LoaderWeb from "../../common/Loader/LoaderWeb";
import LoaderMob from "../../common/Loader/LoaderMob";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from "../../../assets/GIF/takeAway.gif";

function LoaderSpecialToday() {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  return aspect ? (
    <LoaderWeb
      img={img}
      title={"Take-Away"}
      imgH="20%"
      imgW="20%"></LoaderWeb>
  ) : (
    <LoaderMob
      img={img}
      title={"Take-Away"}
      imgH="55%"
      imgW="55%"></LoaderMob>
  );
}

export default LoaderSpecialToday;
