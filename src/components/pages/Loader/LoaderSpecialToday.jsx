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
    <LoaderWeb img={img} title={"Today's Special"} imgH="16rem" imgW="16rem" imgML='4%'  imgY={200} txtX={-125} txtY={50} />
  ) : (
    <LoaderMob img={img} title={"Today's Special"} imgH="15rem" imgW="15rem" imgML="15%" space='2rem' />
  );
}

export default LoaderSpecialToday;
