import React from "react";
import LoaderWeb from "../../common/Loader/LoaderWeb";
import LoaderMob from '../../common/Loader/LoaderMob'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img from '../../../assets/GIF/special.gif'

function LoaderSpecialToday() {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  return aspect ? (
    <LoaderWeb
      img={img}
      title={"Today's Special"}
      imgH="20rem"
      imgW="20rem" imgML='4%'></LoaderWeb>
  ) : (
    <LoaderMob
      img={img}
      title={"Today's Special"}
      imgH="15rem"
      imgW="15rem" imgML="15%" space='2rem'></LoaderMob>
  );
}

export default LoaderSpecialToday;
