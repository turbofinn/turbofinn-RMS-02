import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const ViewPlate = () => {

  const Navigate = useNavigate();
  const meal = useSelector((state) => state.MealCartData.SelectMealData);

  return (
    <Box sx={{ position: "fixed", bottom: 70, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", justifyContent: "center", width: "85%", maxWidth: "400px", paddingX: "1rem", background: "white", borderRadius: "100px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)", zIndex: 3 }} >

      <Typography sx={{ flex: 1, textAlign: "center", fontSize: "1rem", fontWeight: 500, color: "rgba(3, 121, 117, 1)" }} >
        { meal.length } Item Added
      </Typography>

      <Box sx={{ flex: 1, textAlign: "center", alignContent: "right", fontSize: "1rem", fontWeight: 500, color: "rgba(35, 102, 66, 1)", marginRight: "-1rem", paddingY: "0.7rem", borderRadius: "0px 100px 100px 200px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)" }}
      onClick = {() => { Navigate('/yourmealcart') }} >
        View Plate
      </Box>

    </Box>
  );
};

export default ViewPlate;
