import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import SimpleHead from "../../common/SimpleHead/SimpleHead";
import { Box, Typography } from "@mui/material";
import SortBy from "../../common/SortBy/SortBy";
import DalBatiChurma from "../../../assets/Image/meal/dalBatiChurma.png";
import OrderPlacedCardWeb from "../../common/OrderPlaced/OrderPlacedCardWeb";
import OrderAgainButton from "../../common/OrderAgainButton/OrderAgainButton";

function OrderPlacedWeb() {
  // const orderedDish = [

  //   {
  //     img: img1,
  //     name: "dal bati churma",
  //     vegornot: "vegetarian",
  //     costPerServing: 70,
  //     serving: "01",
  //   },
  //   {
  //     img: img1,
  //     name: "dal bati churma",
  //     vegornot: "vegetarian",
  //     costPerServing: 70,
  //     serving: "02",
  //   },
  //   {
  //     img: img1,
  //     name: "dal bati churma",
  //     vegornot: "vegetarian",
  //     costPerServing: 70,
  //     serving: "03",
  //   }

  // ];

  return (

    <Box>

      <NavBar />

      <SimpleHead title={"Orders Placed"} h="9.5rem" />

      <Typography sx={{ fontSize: "2.75rem", lineHeight: "62.5px", fontWeight: "800", color: "rgba(0, 0, 0, 0.24)", width: "35%", marginInline: "auto", marginTop: "4rem", textAlign: "center" }} >
        Order Is On The Way
      </Typography>

      <Box sx={{ width: "90%", heigth: "100vh", marginInline: "auto" }} >

        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "3.75rem", gap: "1rem" }} >

          <Typography sx={{ minWidth: "177px", fontSize: "1.25rem", fontWeight: "600", letterSpacing: -0.4 }} >
            Your Order Placed
          </Typography>

          <div style={{ background: "linear-gradient(to right,rgb(0, 0, 0),rgb(0, 0, 0),rgba(0, 0, 0, 0.95),rgba(255,255,255,1))", width: "70%", height: "1px" }} />

          <Box sx={{ width: "fit" }} >

            <SortBy />

          </Box>

        </Box>

        <Box sx={{ width: "95%", height: "100%", marginInline: "auto", marginTop: "3rem", display: "flex", gap: "3rem" }} >

          <Box sx={{ width: "72.5%" }} >

            {/* {orderedDish.map((elem, i) => (

              <OrderPlacedCardWeb img={elem.img} name={elem.name} category={elem.vegornot} cps={elem.costPerServing} serving={elem.serving} />
            ))} */}

          </Box>

          <Box sx={{ width: "35%", height: "100%", boxShadow: "0 0 9.5px 0 rgba(0,0,0,0.25)", borderRadius: "15px", justifyContent: "center" }} >

            <Box sx={{ width: "90%", marginInline: "auto", marginTop: "0.5rem", marginBlockEnd: "3.75rem", alignContent: "center", textAlign: "center" }} >

              <Typography sx={{ fontSize: "4rem", fontWeight: "800", color: "rgba(0, 0, 0, 0.2)", marginBottom: "1rem" }} >
                Re-ORDER
              </Typography>

              <Typography sx={{ fontSize: "2.5rem", fontWeight: "800", color: "rgba(0, 0, 0, 1)", marginBottom: "0.5rem" }} >
                Grand Total
              </Typography>

              <div style={{ height: "1px", background: "#000", width: "100%", marginBottom: "2rem" }} />

              <Box sx={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "end", gap: "1rem", marginBottom: "2rem" }} >

                <Typography sx={{ fontSize: "2.25rem", fontWeight: "600", height: "5.5rem" }} >
                  ₹
                </Typography>

                <Typography sx={{ background: "linear-gradient(270deg, #EE0979 0%, #F42C4E 54.5%, #FF6A00 92%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "500", fontSize: "6rem" }} >
                  700
                </Typography>

              </Box>

              <OrderAgainButton rad="10px" h="4rem" w="90%" txtSize="1.25rem" txtWeight="600" txtCol="rgba(70, 157, 177, 1)" borderCol="rgba(70, 157, 177, 1)" borderThick="1.25px" />

            </Box>

          </Box>

        </Box>

      </Box>

    </Box>

  );
}


export default OrderPlacedWeb;
