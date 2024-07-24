import React from "react";
import { Box } from "@mui/material";

function VerificationBG() {
  return (
    <Box sx={{ width: "3000px", height: "3000px" }}>
      <Box
        sx={{
          content: '""',
          borderRadius: "50%",
          background: "rgba(147, 212, 227, 1)",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Box
          sx={{
            content: '""',
            borderRadius: "50%",
            background: "rgba(113, 190, 208, 1)",
            height: "71%",
            width: "71%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Box
            sx={{
              content: '""',
              borderRadius: "50%",
              background: "rgba(70, 157, 177, 1)",
              height: "65%",
              width: "65%",
            }}></Box>
        </Box>
      </Box>
    </Box>
  );
}

export default VerificationBG;
