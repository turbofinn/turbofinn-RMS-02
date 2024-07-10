import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import { Typography, Box } from "@mui/material";

function SimpleHead({ title }) {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "5.5rem",
          background: "linear-gradient(to bottom,#53cce7,#2ba8c4)",
          borderRadius: "0 0 20px 20px",
          display: "flex",
          justifyContent: { xs: "space-between", md: "center" },
          alignItems: "center",
          color: "white",
          paddingInline: "1.25rem",
        }}>
        {aspect ? "" : <ArrowBackIosIcon></ArrowBackIosIcon>}
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textTransform: "capitalize",
          }}>
          {title}
        </Typography>
        {aspect ? "" : <CancelIcon></CancelIcon>}
      </Box>
    </div>
  );
}

export default SimpleHead;
