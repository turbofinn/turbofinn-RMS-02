import React from "react";
import NavBar from "../../common/NavBar/NavBar";
import SimpleHead from "../../common/SimpleHead/SimpleHead";
import { Box, Typography } from "@mui/material";
import SortBy from "../../common/SortBy/SortBy";
import OrderHistoryCardWeb from "../../common/OrderHistoryCard/OrderHistoryCardWeb";
import img1 from "../../../assets/Image/meal/menuItems/dal-bati-churma.jpg";

function OrderHistoryWeb() {

  const repeatedDish = [

    { 
      img: img1,
      name: "dal bati churma",
      vegornot:'vegetarian' 
    },
    { 
      img: img1, 
      name: "dal bati churma",
      vegornot:'vegetarian' 
    },
    { 
      img: img1, 
      name: "dal bati churma",
      vegornot:'vegetarian' 

    },

  ];

  return (

    <Box sx={{ width: "100%" }}>

      <NavBar />

      <SimpleHead title="Order history" h="16rem" showSubtitle={true} subtitle={`you may don't remember your choice but we do 😎`} />

      <Box sx={{ width: "90%", heigth: "100vh", marginInline: "auto" }} > 

        <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "5.5rem" }} >

          <Typography sx={{ width: "fit", fontSize: "1.25rem", fontWeight: "600", letterSpacing: -0.4 }} >
            Your Order History
          </Typography>

          <div style={{ background: "linear-gradient(to right,rgb(0, 0, 0),rgb(0, 0, 0),rgba(0, 0, 0, 0.95),rgba(255,255,255,1))", width: "70%", height: "1px" }} />

          <Box sx={{ width: "fit" }}>
            <SortBy />
          </Box>

        </Box>

        <Box sx={{ width: "95%", height: "100%", marginInline: "auto", marginTop: "3rem", display: "flex", gap: "3rem" }} >

          <Box sx={{ width: "72.5%" }} >
            <OrderHistoryCardWeb />
          </Box>

          <Box sx={{ width: "35%", minHeight: "28rem", height: "fit", boxShadow: "0 0 9.5px 0 rgba(0,0,0,0.25)", borderRadius: "15px", justifyContent: "center" }} >

            <Box
              sx={{ width: "90%", marginInline: "auto", marginBlock: "3rem" }} >

              <Typography variant="h1" sx={{ fontSize: "1.95rem", fontWeight: "700", textAlign: "center", width: { lg: "20rem" }, marginInline: "auto" }} >
                Your Top Repeated Dish
              </Typography>

              <Typography sx={{ textAlign: "end", fontSize: "0.8rem", fontWeight: "600", marginTop: "1.5rem", width: "85%", marginInline: "auto" }} >
                {"Check More >"}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", marginTop: "1rem" }} >

                {repeatedDish.map((elem, i) => (

                  <Box>
                    <img src={elem.img} alt={elem.name} style={{ borderRadius: "50%", height:'6rem', width:'6rem', objectFit: "cover", marginTop:'0.5rem' }} />

                    <Typography sx={{ color: "rgba(82,82,82,1)", fontSize: "0.75rem", textTransform: "capitalize", marginTop: "0.5rem" }} >
                      {elem.name}
                    </Typography>

                  </Box>

                ))}

              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderHistoryWeb;
