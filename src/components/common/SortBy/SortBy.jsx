import React from 'react'
import {Box,Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
        width: { xs: "6.5rem", md: "9rem" },
        height: { xs: "1.75rem", md: "2.25rem",xl:'2.635' },
        gap: {xs:"0.1rem",md:'0.5rem'},
        paddingLeft: "0.5rem",
      }}>
      <Typography
        sx={{
          fontSize: { xs: "0.8rem", md: "1rem" },
          letterSpacing: 1.7,
          fontWeight: "600",
        }}>
        Sort By
      </Typography>
      <ExpandMoreIcon
        sx={{
          fontSize: { xs: "0.8rem", md: "1.1rem" },
          color: "rgba(0,0,0,1)",
          fontWeight: "800",
        }}
      />
    </Box>
  );
}

export default SortBy