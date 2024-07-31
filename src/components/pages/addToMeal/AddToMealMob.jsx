import { Box, Typography, Paper, Radio, RadioGroup, FormControl, FormControlLabel, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import meal from "../../../assets/Image/meal/DalBatiChurma.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import VegOrNon from "../../common/vegOrNon/VegOrNon";
import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import api from '../../../services/apiServices';
import { useDispatch, useSelector } from 'react-redux';
import { addMealData, addSelectedData, addNewQuantity } from "../../../features/UserMealCart/MealCartDataSlice";
import NavBarBottom from "../../common/NavBar/NavBarBottom";

function AddToMealWeb() {
  const [productDetail, setProductDetail] = useState(null);
  const [Quantity, setQuantity] = useState(1);
  const Navigate = useNavigate();
  const disptach = useDispatch();

  const productId = useSelector((state) => state.ProductId.productID);
  const meal = useSelector((state) => state.MealCartData.mealCartData);
  const select = useSelector((state) => state.MealCartData.SelectMealData);

  useEffect(() => {

    if(productDetail !== null) {

      const mealdata = {

        itemId: productDetail.itemId,
        Quantity: Quantity,
        price: productDetail.price,

      } 

      const selectMeal = {

          products: productDetail,
          Quantity: Quantity

      }
       
      disptach(addMealData(mealdata));
      disptach(addSelectedData(selectMeal));

    }

  }, [productDetail, Quantity])
  

  const getItem = async () => {

    const requestData = {

      mode: 'BYID',
      itemId: productId,

    }

    try {
      api.getItem(requestData).then((response) => {

        if (response.response.responseCode === 1001) {

          setProductDetail(response.items[0]);
          console.log('pd01', response.items[0]);

        } else {

          console.log('Invalid Items');

        }

      })
    }
    catch (error) { console.error(' unable to fetch a product details ', error) }
  }

  useEffect(() => {
    getItem();
  }, []);

  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
      },
      "&:hover fieldset": {
        border: "none",
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  });

  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            "&::placeholder": {
              fontSize: "0.75rem",
              fontWeight: "500",
              lineHeight: "21px",
              letterSpacing: "2%",
              opacity: 1,
              color: "#596174",
              fontFamily: "Poppins",
            },
          },
        },
      },
    },
  });

  const serving = [
    { serial: "01", serving: "Single", price: "70" },
    { serial: "02", serving: "Single", price: "170" },
    { serial: "03", serving: "Single", price: "290" },
  ];

  const ResponsiveRadio = styled(Radio)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      fontSize: 24,
      [theme.breakpoints.up("xs")]: {
        fontSize: 18,
      },
    },
  }));

  return (

    <>
      {productDetail !== null &&

        <Box sx={{ minHeight: "100vh", position: "relative" }}>
          {/* Back key */}

          <Box
            sx={{ color: "#fff", position: "absolute", display: "flex", alignItems: "center", marginTop: "0.75rem", marginLeft: "1.25rem" }} >

            <KeyboardBackspaceIcon sx={{ fontSize: "1.25rem" }} />

            <Typography sx={{ fontWeight: "600", marginLeft: "10px", fontSize: "0.85rem" }}>
              Product Details
            </Typography>

          </Box>
          {/* Meal Image */}

          <Box
            sx={{ width: "100%", height: "21rem", backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.150), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(https://turbo-treats.s3.amazonaws.com/Images/${productDetail.itemPicture}.jpg)`, backgroundSize: "cover", backgroundPosition: "center", zIndex: "-1" }} >

            <Box sx={{ width: "100%", height: "fit", position: "absolute", top: "19.2rem", borderRadius: "25px 25px 0 0 ", backgroundColor: "#f8f8ff", paddingInline: "0.625rem", paddingBlock: "1.5rem" }} >

              <Box sx={{ paddingInline: "0.75rem" }} >

                <Typography variant="h4" sx={{ textTransform: "capitalize", fontSize: "1.5rem", fontFamily: "Poppins", fontWeight: "700", lineHeight: "1.95rem", marginBlockEnd: "0.625rem" }} >
                  {productDetail.name}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", marginBlockEnd: "0.75rem" }} >

                  <Typography variant="subtitle1" sx={{ textTransform: "capitalize", fontFamily: "Poppins", fontWeight: "600", fontSize: "1rem", lineHeight: "19.2px", color: "rgba(56, 56, 56,0.95)", marginRight: "1.5rem" }} >
                    legacy of rajasthan
                  </Typography>

                  <VegOrNon state="vegetarian" />

                </Box>

                <Typography variant="subtitle2" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "11px", letterSpacing: "2%", lineHeight: "14.3px", color: "#767676", marginBlockEnd: "1.438rem" }} >
                  {productDetail.description}
                </Typography>

              </Box>

              <Paper
                elevation={1}
                sx={{ maxWidth: "36.125rem", height: { md: "9.5rem", xl: "14.5rem" }, boxShadow: "0px 0px 20px #00000017", borderRadius: "20px", marginBlockEnd: { md: "1rem", xl: "1.5rem" } }} >

                <Box
                  sx={{ paddingInline: "1rem", paddingBlock: "1rem" }}>

                  <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "700", color: "#383838", fontSize: "0.95rem", marginBottom: "0.25rem" }} >
                    Quantity
                  </Typography>

                  <Box sx={{ fontFamily: "Poppins", fontWeight: "600", color: "#767676", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.25rem" }} >

                    <Typography variant="subtitle">Required</Typography>

                    <div style={{ height: "4px", width: "4px", borderRadius: "100%", background: "#767676" }} />

                    <Typography variant="subtitle">Select any 1 option</Typography>

                  </Box>

                </Box>

                <div style={{ width: "100%", height: "0.5px", background: "#76767642" }} />

                <Box sx={{ paddingInline: "1rem", paddingBlock: "0.5rem" }} >

                  <FormControl sx={{ width: "100%" }} >

                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="70" name="radio-buttons-group" sx={{ gap: "0.8rem" }} >

                      {serving.map((elem, i) => (

                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >

                          <Typography sx={{ fontFamily: "Poppins", fontWeight: "600", color: "#000", fontSize: "0.95rem" }} >
                            {elem.serial} Single Serving
                          </Typography>

                          <FormControlLabel
                            value={elem.price}
                            control={<ResponsiveRadio sx={{ color: " #469db1" }} />}
                            label={
                              <Typography
                                variant="body1" sx={{ fontWeight: "600", fontSize: "0.95rem" }} >
                                ₹ {productDetail.price}
                              </Typography>
                            }
                            labelPlacement="start"
                          />

                        </Box>
                      ))}

                    </RadioGroup>

                  </FormControl>

                </Box>

              </Paper>

              <Paper elevation={1} sx={{ maxWidth: "36.125rem", height: { md: "9.5rem", xl: "14.5rem" }, boxShadow: "0px 0px 20px #00000017", borderRadius: "20px", marginBlockStart: "1.5rem" }} >

                <Box sx={{ paddingInline: "1rem", paddingBlock: "1rem" }} >

                  <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "700", color: "#383838", fontSize: "0.95rem", marginBottom: "0.25rem" }} >
                    Add a Note:
                  </Typography>

                  <Typography variant="subtitle" sx={{ fontFamily: "Poppins", fontWeight: "600", color: "#767676", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.25rem" }} >
                    Required changes for your food
                  </Typography>

                </Box>

                <div
                  style={{ width: "100%", height: "0.5px", background: "#76767642" }} />

                <Box sx={{ paddingInline: "4px" }}>

                  <ThemeProvider theme={theme}>

                    <CustomTextField
                      id="outlined-multiline-flexible"
                      placeholder={`Changes to be done for dal bati churma...`}
                      multiline
                      rows={5}
                      sx={{ width: "100%", height: "100%", fontFamily: "Poppins", fontWeight: "600", color: "#767676", fontSize: { md: "6px", xl: "12px" }, paddingInline: { md: "8px", xl: "16px" } }} />

                  </ThemeProvider>

                </Box>

              </Paper>

            </Box>

            <Box sx={{ height: "90px", width: "100vw", display: "flex", justifyContent: "center", gap: "0.85rem", alignItems: "center", background: "#fff", paddingBlock: "1rem", paddingInline: "0.625rem", position: "fixed", bottom: "0" }} >

              <Box sx={{ width: "6.82rem", height: "2.55rem", border: "1px solid rgba(0, 0, 0, 0.48)", borderRadius: "30px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingInline: "0.5rem" }}>

                <Box sx={{ height: "1.25rem", width: "1.25rem", fontSize: "1.25rem", fontWeight: "500", padding: 0, borderRadius: "50%", background: "rgb(70, 157, 177,0.89)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: 'pointer' }}
                  onClick={() => {
                    if (Quantity > 1) setQuantity(Quantity => Quantity - 1);
                  }} >
                  -
                </Box>

                <Typography sx={{ fontSize: "1.35rem", fontWeight: "700" }}>
                  {Quantity}
                </Typography>

                <Box sx={{ height: "1.25rem", width: "1.25rem", fontSize: "1.25rem", fontWeight: "500", padding: 0, borderRadius: "50%", background: "rgb(70, 157, 177,0.89)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", cursor: 'pointer' }}
                  onClick={() => { setQuantity(Quantity => Quantity + 1) }} >
                  +
                </Box>

              </Box>

              <Button variant="contained" sx={{ width: "14.5rem", height: "3.3rem", background: "rgb(62, 185, 212)", borderRadius: "10px" }}
                onClick={() => {
                  Navigate("/menu");
                  
                  console.log('meal', meal);
                  console.log('select', select);
                }}>

                {
                  <Typography
                    sx={{ fontFamily: "Poppins", fontSize: "1.35rem", textTransform: "initial" }} >
                    Add to Meal
                  </Typography>
                }

              </Button>

            </Box>

          </Box>

        </Box>

      }
    </>
  );
}

export default AddToMealWeb;
