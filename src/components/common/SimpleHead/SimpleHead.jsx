import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography, Box } from "@mui/material";

function SimpleHead({
  title,showSubtitle=false,
  subtitle='',
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
        alignItems: {xs:"center",md:'start'},
        color: "white",
        paddingInline: "1.25rem",
      }}>
      {functions ? aspect ? null : <ArrowBackIosIcon></ArrowBackIosIcon> : null}
      <Box sx={{width:"100%",display:'flex',flexDirection:'column',alignItems:'center',} }>
        <Typography
          sx={{
            fontSize: {xs:"1.5rem",md:'2.25rem'},
            fontWeight: "600",
            textTransform: "capitalize",textAlign:'center',marginTop:{md:'2.25rem'}
          }}>
          {title}
        </Typography>
        {line ? (
          <div
            style={{
              height: "2px",
              background: "rgba(70, 157, 177, 1)",
              width: "140px",
              marginInline: "auto",
              marginTop: "0.65rem",
            }}></div>
        ) : null}
        {showSubtitle?<Typography
          sx={{
            fontSize: "1.25rem",
            lineHeight:'1.625rem',
            fontWeight: "700",
            color:'rgba(0,0,0,0.74)',
            textTransform: "capitalize",marginTop:'2.5rem',width:'25rem',
            textAlign:'center'
          }}>
          {subtitle}
        </Typography>:null}
        
      </Box>

      {functions ? aspect ? null : <CancelIcon></CancelIcon> : null}
    </Box>
  );
}

export default SimpleHead;
