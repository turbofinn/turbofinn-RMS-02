import React from "react";
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
import { useState, useEffect } from "react";
import axios from 'axios';
import Header from "../../common/Header/Header.jsx";
import AddToMealBox from "../../common/AddToCardBox/AddToMealBox.jsx";
import SmallMealBox from "../../common/SmallMealBox/SmallMealBox.jsx";
import AddToMealBoxWeb from "../../common/AddToCardBox/AddToMealBoxWeb.jsx";
import FoodAddToCart from "../../common/FoodAddToCart/FoodAddToCart.jsx";
import NavBar from "../../common/NavBar/NavBar.jsx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PayConfirmationModal from "../paymentConfirmation/PayConfirmationModal.jsx";
import PayConfirmationModalWeb from "../paymentConfirmation/PayConfirmationModalWeb.jsx";
import ThanksModal from "../thanksPage/ThanksModal.jsx";
import ThanksModalWeb from "../thanksPage/ThanksModalWeb.jsx";
import api from '../../../services/apiServices.js';
import { useDispatch, useSelector} from 'react-redux';
import NavBarBottom from '../../common/NavBar/NavBarBottom.jsx';


const AddTocard = () => {
  const theme = useTheme();
  const aspect = useMediaQuery(theme.breakpoints.up("md"));
  const [success, setSuccess] = useState(false);
  const [thanks, setThanks] = useState(false);
  const [WebSuccess, setWebSuccess] = useState(false);
  const [WebThanks, setWebThanks] = useState(false);

  const dispatch = useDispatch();

  const userSelectedMeal = useSelector( (state) => state.MealCartData.SelectMealData ); 
  const OrderData = useSelector((state) => state.MealCartData.mealCartData);
  // const totalBill = useSelector((state) => state.MealCartData.TotalBill);
  
  const TotalBill = () => {

        let totalBill = 0;
        if( OrderData.length !== 0 ){

           OrderData.map(( data, index) => {
               totalBill += ( data.Quantity * data.price );
           });
           
           return totalBill;

        }
       
  }

  const creatOrder = async () => {

    const requestData = {
      orderId: "orderI535366373",
      tableNo: "table5",
      userId: "userId789",
      restaurantId: "308bc44a-de00-488e-b980-5ee0797e82e2",
      totalAmount: TotalBill(), 
      action: "CREATE",
      paymentStatus: "paid",
      orderLists: OrderData,
      orderStatus: "orderStatus",
      customerRequest: "Please make it spicy",
      customerFeedback: "Great service",
      customerRating: 4.5
    }

    try {

      api.createOrder(requestData).then((response) => {
        console.log('kaam ho gya', response);
      });

    }
    catch (error) { console.error(error) }

  }

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setThanks(true);
        setSuccess(false);
      }, 3000);
    }
  });
  useEffect(() => {
    if (WebSuccess) {
      setTimeout(() => {
        setWebThanks(true);
        setWebThanks(false);
      }, 3000);
    }
  });

  const handleOrderNow = (aspect) => {
    if (!aspect) {
      //Mob View
      setSuccess(true);
    } else {
      //Web View
      setWebSuccess(true);
    }
  };
  
  return (
    <React.Fragment>
      {!aspect ? (
        <Box>
          { success && (<PayConfirmationModal />) }

          { thanks && (<ThanksModal /> )}

          <Header />

          {  
             userSelectedMeal.length !== 0 && 

             userSelectedMeal.map((data, index) => {  return <AddToMealBox data={ data }/> })
          }
          

          <Typography style={{ color: "#525252", fontSize: "1rem", maxWidth: "90%", marginLeft: "auto", marginRight: "auto", marginTop: "1rem" }} >
            Add More Combinations
          </Typography>

          <SmallMealBox />

          <Box sx={{ textAlign: 'center' }} >

            <Button sx={{ textTransform: 'none', backgroundColor: '#469DB1', color: 'white', width: '90%', padding: '0.75rem 3.75rem', fontSize: '1.3rem', '&:hover': { backgroundColor: '#0A343D' }, borderRadius: '2rem', marginTop: '4vh', marginBottom: '3rem' }}
              onClick={() => {
                setSuccess(true);
                creatOrder();
                console.log('check order now', userSelectedMeal);
                console.log('order data', OrderData);
                console.log('bill', TotalBill());
                // console.log('total bill', totalBill);
              }} >
              Order Now
            </Button>

          </Box>

          <NavBarBottom />

        </Box>
      )
        :
        <Box>
          {WebSuccess && (<PayConfirmationModalWeb />)}

          {WebThanks && (<ThanksModalWeb />)}

          <NavBar />

          <Header />

          <AddToMealBoxWeb />

          <Typography style={{ fontSize: '0.8rem', fontWeight: 600, maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem' }}>
            Add More Combinations
          </Typography>
          <img />

          <FoodAddToCart />

          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem' }} >

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #dddd', width: '50%', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'space-between', borderRadius: '3rem', paddingLeft: '3rem', boxShadow: '0px 0px 1rem #dddd' }} >

              <Box style={{ display: 'flex', alignItems: 'center', gap: '10px' }} >

                <Typography style={{ fontSize: '1.2rem', color: '#525252', fontWeight: 500 }} >
                  Total Bill :
                </Typography>

                <Typography style={{ fontSize: '1.2rem', color: '#000000', fontWeight: 600 }} >
                  ₹ 70
                </Typography>

              </Box>

              <Box style={{ display: 'flex', alignItems: 'center' }} >

                <Button
                  onClick={() => {
                    setWebSuccess(true)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  sx={{ textTransform: 'none', backgroundColor: '#469DB1', color: 'white', padding: '0.75rem 6.5rem', fontSize: '1.3rem', '&:hover': { backgroundColor: '#0A343D', borderRadius: '2rem', width: '100%' } }} >
                  Order Now
                </Button>

              </Box>

            </Box>

          </Box>

        </Box>
      }

    </React.Fragment>
  )
}

export default AddTocard;
