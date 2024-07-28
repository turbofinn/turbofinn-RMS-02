import React from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FoodAddToCartGrid from "../../common/FoodAddToCart/FoodAddToCart";
import DalBatiChurma from "../../../assets/Image/meal/DalBatiChurma.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

// const menuItem = [
//   { name: "Dal Bati Churma", image: dalBatiChurma, isVegetarian: true },
//   { name: "Dal Bati Churma", image: dalBatiChurma, isVegetarian: true },
//   { name: "Dal Bati Churma", image: dalBatiChurma, isVegetarian: true },
//   { name: "Dal Bati Churma", image: dalBatiChurma, isVegetarian: true },
//   { name: "Dal Bati Churma", image: dalBatiChurma, isVegetarian: true },
//   { name: "Dal Bati Churma", image: dalBatiChurma, isVegetarian: true },
// ];

function MenuItems() {
  const theme = useTheme();
  const isWebView = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemDATA = useSelector((state) => state.ItemData.Items);
  console.log("itemsData", itemDATA);
  
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 6 }, px: { xs: 2, md: 3 } }} >

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: { xs: 2, md: 4 } }} >
          
          <Box sx={{ display: "flex", alignItems: "center" }}>

            <Box sx={{ display: "flex", alignItems: "center", fontWeight: 500, fontSize: { xs: "13px", md: "16px" } }}>
              MAIN COURSE
              <ExpandMoreIcon fontSize={isWebView ? "medium" : "small"} sx={{ ml: 1, mr: { xs: 0, lg: 3 } }} />
            </Box>

          </Box>
          <Box component="span" sx={{ alignContent: "center", flexGrow: isWebView ? "1" : "0.8", height: "1px", background: "linear-gradient(to right, rgba(90, 90, 90, 0.47), rgba(255, 255, 255, 1))" }} />

          <Box sx={{ display: "flex", alignItems: "center", fontWeight: 500, fontSize: { xs: "11px", md: "14px" }, backgroundColor: "rgba(244, 244, 244, 1)", borderRadius: "20px", padding: "5px 10px" }}>
            FILTER
            <ExpandMoreIcon fontSize={isWebView ? "medium" : "small"} sx={{ ml: 1 }} />
          </Box>

        </Box>
      </Container>
      <Container sx={{ px: { xs: 0, lg: 3 } }}>

        <Container maxWidth="lg" sx={{ px: isWebView ? 4 : 2 }}>

          <Grid container spacing={isWebView ? 3 : 2} sx={{ alignItems: "center", px: { xs: 0 } }}>

            {itemDATA.map((item, index) => (

              <Grid item xs={12} sm={6} md={4} key={index}>
                <FoodAddToCartGrid name={item.name} image={item.itemPicture} isVegetarian={item.category} />
              </Grid>

            ))}

          </Grid>

        </Container>

      </Container>
    </>
  );
}

export default MenuItems;
