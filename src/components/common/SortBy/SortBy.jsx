import React from 'react'
import {Box,Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function SortBy() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(242,242,242,1)",
        border: "1.25px solid rgba(0,0,0,0.5)",
        borderRadius: "44px",
        width: "6.5rem",
        height: "1.75rem",
        gap: "0.1rem",
        paddingLeft: "0.5rem",
      }}>
      <Typography
        sx={{ fontSize: "0.8rem", letterSpacing: 1.7, fontWeight: "600" }}>
        Sort By
      </Typography>
      <KeyboardArrowDownIcon
        sx={{ fontSize: "0.8rem", color: "rgba(0,0,0,1)", fontWeight: "800" }}
      />
    </Box>
  );
}

export default SortBy