import React from "react";
import SimpleHead from "../../common/SimpleHead/SimpleHead";
import { Typography, Box, Paper, Card } from "@mui/material";
import NavBarBottom from "../../common/NavBar/NavBarBottom";
import SortBy from "../../common/SortBy/SortBy";
import VegOrNon from "../../common/vegOrNon/VegOrNon";
import OrderPlacedCardMob from "../../common/OrderPlaced/OrderPlacedCardMob";
import DalBatiChurma from "../../../assets/Image/meal/dalBatiChurma.png";
import ColdStarter from "../../../assets/Image/sevenCourseMeal/ColdStarter.jpg";

function OrderHistory() {
  const orderPlaced = [

    {
      img: DalBatiChurma,
      title: "dal bati churma",
      vegOrNot: "vegetarian",
      cps: "70",
      servings: "01",
      drinkOrMeal: "Serving",
    },
    {
      img: ColdStarter,
      title: "cold starter",
      vegOrNot: "vegetarian",
      cps: "50",
      servings: "02",
      drinkOrMeal: "drinks",
    },

  ];

  return (

    <Box>

      <SimpleHead title={"Order Placed"} />

      <Box sx={{ marginBottom: "5rem" }} >

        <Typography sx={{ fontWeight: "700", color: "rgba(0, 0, 0, 0.24)", fontSize: "2rem", marginTop: "2.25rem", textAlign: "center", marginBlockEnd: "3.5rem", maxWidth: "21.4rem", marginInline: "auto" }} >
          Order Is On The Way
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", marginInline: "auto", width: "86.25%", justifyContent: "space-between", gap: '1rem' }} >

          <Typography sx={{ fontSize: "0.95rem", fontWeight: "600", letterSpacing: -0.35, minWidth: "134px" }} >
            Your Order Placed
          </Typography>

          <div style={{ background: "linear-gradient(to right,rgba(0, 0, 0, 0.7),rgba(90,90,90,0.1))", width: "80%", minWidth: "55%", height: "1px" }} />

        </Box>

        <Box sx={{ maxWidth: "90%", marginInline: "auto" }} >

          {orderPlaced.map((elem, i) => (

            <Box sx={{ marginBottom: "1rem", marginTop: "2rem" }} >

              <OrderPlacedCardMob img={elem.img} name={elem.title} category={elem.vegOrNot} serving={elem.servings} servingType={elem.drinkOrMeal} cps={elem.cps} />

            </Box>

          ))}

        </Box>

      </Box>

      <NavBarBottom></NavBarBottom>

    </Box>

  );
}


export default OrderHistory;
