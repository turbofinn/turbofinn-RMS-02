import React from "react";
import SimpleHead from "../../common/SimpleHead/SimpleHead";
import { Typography, Box, Paper, Card } from "@mui/material";
import NavBarBottom from "../../common/NavBar/NavBarBottom";
import SortBy from "../../common/SortBy/SortBy";
import VegOrNon from "../../common/vegOrNon/VegOrNon";
import OrderHistoryCardMob from "../../common/OrderHistoryCard/OrderHistoryCardMob";

function OrderHistory() {

  return (

    <Box>

      <SimpleHead title={"Order History"} />

      <Typography sx={{ fontWeight: "700", color: "rgba(0,0,0,0.74)", fontSize: "1.25rem", marginTop: "3.25rem", textAlign: "center", marginBlockEnd: "2rem", maxWidth: "21.4rem", marginInline: "auto" }} >
        You May Don't Remember Your Choice But We Do 😎
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", marginInline: "auto", width: "86.25%", justifyContent: "space-between" }} >

        <Typography sx={{ fontSize: "0.95rem", fontWeight: "600", letterSpacing: -0.35, width: "fit" }} >
          Your Order History
        </Typography>

        <div style={{ background: "linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(90,90,90,0.1))", width: "20%", height: "1px" }} />

        <Box sx={{ width: "fit" }}>

          <SortBy />
          
        </Box>

      </Box>

      <Box sx={{ maxWidth: "90%",marginInline:'auto' }}>

        <OrderHistoryCardMob />

      </Box>

      <NavBarBottom />

    </Box>
  );
}

export default OrderHistory;
