import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography, Box, Grid, useMediaQuery, useTheme, Container } from "@mui/material";
import line2 from "../../../assets/Image/Line 5.png";

export default function FoodAddToCart({ name, image, isVegetarian }) {

  const Navigate = useNavigate();

  return (
    <Card sx={{ mb: { lg: 2 }, borderRadius: "15px", overflow: "hidden", position: "relative", marginTop: { lg: "0.5rem" }, height: "236px" }}       >

      <Box sx={{ position: "relative" }}>

        <CardMedia component="img" height="236px" image={ `https://turbo-treats.s3.amazonaws.com/Images/${image}.jpg` } alt={name} sx={{ position: "relative" }} />

        <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "16px", color: "white", }} >



          <Typography variant="h6" sx={{ fontWeight: 600 }}>  {name}  </Typography>

          <Box sx={{ display: "flex", alignItems: "center", marginBottom: "1rem", }} >

            <Typography variant="body2" sx={{ color: isVegetarian ? "rgba(132, 255, 145, 1)" : "red", mr: 1, fontSize: "20px", display: "flex", alignItems: "center" }} >
              {isVegetarian ? "●" : "●"}
              <text style={{ color: "white", fontSize: "12px", fontWeight: 500 }}>{isVegetarian ? "VEGETARIAN" : "NON-VEGETARIAN"}</text>
            </Typography>

          </Box>

          <img src={line2} style={{ width: "231px", height: "1px", display: "flex", justifyContent: "center", marginLeft: "3rem" }} />

          <CardContent sx={{ padding: "8px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }} >

            <Box sx={{ position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", cursor: "pointer" }}
              onClick={() => {
                Navigate("/productdetails");
              }}>

              <Typography variant="button" sx={{ fontWeight: 600, color: "white", fontSize: "0.875rem" }} >
                + ADD TO CART
              </Typography>

            </Box>

          </CardContent>



        </Box>

      </Box>

    </Card>
  );
}
