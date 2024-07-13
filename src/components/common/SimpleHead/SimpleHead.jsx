import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography, Box } from "@mui/material";

function SimpleHead({
  title,
  h = "8.5rem",
  w = "100%",
  functions = false,
  line = false,
}) {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      sx={{
        width: w,
        height: h,
        background: "linear-gradient(to bottom,#53cce7,#2ba8c4)",
        borderRadius: "0 0 20px 20px",
        display: "flex",
        justifyContent: {
          xs: functions ? "space-between" : "center",
          md: "center",
        },
        alignItems: "center",
        color: "white",
        paddingInline: "1.25rem",
      }}>
      {functions ? aspect ? null : <ArrowBackIosIcon></ArrowBackIosIcon> : null}
      <Box sx={{alignContent:'center'}}>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textTransform: "capitalize",
          }}>
          {title}
        </Typography>
        {line ? 
          <div
            style={{
              height: "2px",
              background: "rgba(70, 157, 177, 1)", width:'140px',marginInline:'auto',marginTop:'0.25rem'
            }}></div>
         : null}
      </Box>

      {functions ? aspect ? null : <CancelIcon></CancelIcon> : null}
    </Box>
  );
}

export default SimpleHead;
