import React from "react";
import { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Grid,
} from "@mui/material";
import burger from "../../../assets/Image/burger.png";
import toast from "../../../assets/Image/toast.png";
import dalBatiChurma from "../../../assets/Image/meal/DalBatiChurma.png";
import plus from "../../../assets/Image/plus.png";
import minus from "../../../assets/Image/minus.png";
import greaterThanDownSide from "../../../assets/Image/greaterThanDownSide.png";
import { useDispatch, useSelector } from 'react-redux';
import { removeData, addNewQuantity, addTotalBill } from '../../../features/UserMealCart/MealCartDataSlice';



const AddToMealBox = ({ data }) => {

  const dispatch = useDispatch();
  const newData = useSelector((state) => state.MealCartData.SelectMealData);
  const OrderData = useSelector((state) => state.MealCartData.mealCartData);

  const [quantity, setQuantity] = useState(data.Quantity);

  useEffect(()=>{
         const changesData = {
            itemId: data.products.itemId,
            Quantity: quantity
         }
         dispatch( addNewQuantity( changesData ) );
        //  dispatch( addTotalBill() );
  },[ quantity ]);
  
  return (
    <React.Fragment>
      <Container sx={{ maxWidth: "lg", height: "20%", border: "1px solid #d1d1d1", borderRadius: "1.5rem", alignContent: "center", justify: "center", alignItems: "center", padding: "1rem", maxWidth: "95%", marginLeft: "auto", marginRight: "auto", marginTop: "10px" }} >

        <Typography style={{ textAlign: "end", color: "#E95160", fontWeight: 600 }} 
         onClick={()=>{
              console.log("idd", data.products.itemId );
              dispatch( removeData( data.products.itemId ) );
         }}>
          Remove
        </Typography>

        <Grid container spacing={2}>

          <Grid item xs={4} sx={{ margin: 0, padding: 0, marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "auto" }} >

            <img src={`https://turbo-treats.s3.amazonaws.com/Images/${data.products.itemPicture}.jpg`} alt={ data.name } style={{ borderRadius: "50%", width: "12vh", height: "12vh", objectFit: "cover" }} />

          </Grid>


          <Grid item xs={8} style={{ marginTop: "auto", marginBottom: "auto", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem" }} >

            <Box style={{ display: "flex", alignItems: "center" }} >

              <Box style={{ backgroundColor: "#84FF91", width: "0.6rem", height: "0.6rem", borderRadius: "50%", marginRight: "12px" }} >

              </Box>

              <Typography variant="p" style={{ fontSize: "13px", color: "#525252" }} onClick={()=>{
                  console.log('newdata', newData);
              }} >
                { data.products.category }
              </Typography>

            </Box>

            <Typography variant="h6" style={{ fontWeight: 600, marginTop: "0.3rem" }} >
              { data.products.name }
            </Typography>

            <Box style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.5rem" }} >

              <Typography style={{ color: "#525252", fontSize: "1.1rem" }} >
                Serving :
              </Typography>

              <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.8rem", border: "1px solid gray", borderRadius: "3.5rem", maxWidth: "34%", paddingLeft: "3.6rem", paddingRight: "3.6rem" }} >

                <img src={minus} alt="minus" style={{ height: "1rem" }} 
                onClick={() => {
                    if(quantity > 1) setQuantity( quantity => quantity - 1);
                }} />

                <Typography style={{ fontSize: "1.5rem", fontWeight: 500, opacity: 0.67 }} >
                   { quantity }
                </Typography>

                <img src={plus} alt="plus" style={{ height: "1rem" }} 
                onClick={() => { setQuantity( quantity => quantity + 1) }}/>

              </Box>

            </Box>

            <Box style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "0.5rem" }} >

              <Typography style={{ fontSize: "1.3rem", color: "#525252", fontWeight: 500 }} >
                Total Cost :
              </Typography>

              <Typography style={{ fontSize: "1.3rem", color: "#000000", fontWeight: 600 }} >
                ₹ { quantity * data.products.price }
              </Typography>

            </Box>

          </Grid>

        </Grid>

      </Container>


      <Box style={{ maxWidth: "95%", marginLeft: "auto", marginRight: "auto", padding: "1rem", borderBottom: "1px solid #d1d1d1", borderLeft: "1px solid #d1d1d1", borderRight: "1px solid #d1d1d1", borderBottomLeftRadius: "1.5rem", borderBottomRightRadius: "1.5rem", marginTop: "-1rem", paddingTop: "2rem", display: "flex", alignContent: "center", justify: "center", alignItems: "center" }} >

        <Typography style={{ fontSize: "0.9rem", color: "#525252", marginRight: "0.5rem" }} >
          Customize Your Order
        </Typography>

        <img src={greaterThanDownSide} alt="greaterThanDownSide" style={{ width: "0.6rem" }} />

      </Box>

    </React.Fragment>
  );
};

export default AddToMealBox;
