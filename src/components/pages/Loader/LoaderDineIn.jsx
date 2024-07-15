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
    <LoaderWeb
      img={img}
      title={"Dine In"}
      imgH="20%"
      imgW="20%"></LoaderWeb>
  ) : (
    <LoaderMob
      img={img}
      title={"Dine In"}
      imgH="55%"
      imgW="55%"></LoaderMob>
  );
}

export default LoaderDineIn;
