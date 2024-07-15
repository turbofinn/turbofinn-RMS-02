import React from "react";
import { Box, Button, Typography } from "@mui/material";

function OrderMoreButton({
  rad = "11px",
  h = "2.625rem",
  w = "10.625rem",
  borderCol = "rgba(84, 176, 173, 1)",
  borderThick = "2.5px",
  txtSize = "1rem",
  txtWeight = "600",
  txtCol = "rgb(22, 124, 121)",
}) {
  return (
    <Box sx={{ width: "100%", margin: "auto" }}>
      <Button
        variant="outlined"
        sx={{
          border: `${borderThick} solid ${borderCol}`,
          borderRadius: rad,
          height: h,
          width: w,
          alignContent: "center",
        }}>
        <Typography
          sx={{
            fontSize: txtSize,
            fontWeight: txtWeight,
            color: txtCol,
            textTransform: "capitalize",
          }}>
          Order More
        </Typography>
      </Button>
    </Box>
  );
}

export default OrderMoreButton;
