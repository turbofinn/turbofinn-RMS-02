import React from "react";
import { Box } from "@mui/material";
import line from "../../../assets/Image/horizontalLine2.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FoodAddToCart from "../../common/FoodAddToCart/FoodAddToCart";

function MenuItems() {
  return (
    <Box
      sx={{
        marginTop: "4.5%",
        fontWeight: 500,
        fontSize: "13px",
        marginX: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", fontWeight: 500 }}>
          MAIN COURSE
          <ExpandMoreIcon
            fontSize="small"
            sx={{ position: "relative", top: "-1px", marginX: "5px" }}
          />
        </Box>
        <img
          src={line}
          style={{
            width: "89px",
            alignItems: "center",
            marginBottom: "5px",
            marginLeft: "7px",
          }}
          alt="line"
        />
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "11px",
            backgroundColor: "rgba(244, 244, 244, 1)",
            borderRadius: "20px",
            padding: "5px 10px",
            marginLeft: "3rem",
            marginBottom: "5px",
          }}
        >
          FILTER
          <ExpandMoreIcon
            fontSize="small"
            sx={{ position: "relative", marginLeft: "0" }}
          />
        </Box>
      </Box>

      <FoodAddToCart />
    </Box>
  );
}

export default MenuItems;
