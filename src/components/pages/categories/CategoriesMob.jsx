import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TodaySpecialGif from "../../../assets/GIF/special.gif";
import BeveragesPng from "../../../assets/Image/selectOne/cardImg/Beverages.png";
import DineInPng from "../../../assets/Image/selectOne/cardImg/dineIn.jpg";
import TakeAwayPng from "../../../assets/Image/TakeAway.png";
import BgFood from "../../../assets/Image/selectOne/BgFood.png";
import Logo from "../../../assets/Image/logo.png"
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemData } from "../../../features/ItemData/ItemDataSlice";
import { RootState } from '../../../redux/store';
import api from '../../../services/apiServices.js';
import LoaderDineIn from '../Loader/LoaderDineIn.jsx';

function Categories2() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);

  const getItem = async () => {

    setLoader(false);

    const requestData = {
      mode: 'CRITERIA',
      restaurantId: '308bc44a-de00-488e-b980-5ee0797e82e2',
      tag: 'takeaway'
    }

    try {

      api.getItem(requestData).then((response) => {

        if (response.response.responseCode === 1001) {
          
          console.log("response", response);
          console.log("loader", loader);
          dispatch(addItemData(response.items));
          navigate("/menu");

        }
        else {

        }
        setLoader(true);
      });

    }
    catch (error) { console.error(error) }

  }

  const itemDATA = useSelector((state) => state.ItemData.Items);

  const categories1 = [

    {
      title: "Today's Special",
      image: `${TodaySpecialGif}`,
    },
    {
      title: "Beverages",
      image: `${BeveragesPng}`,
    },

  ];

  const categories2 = [

    {
      title: "Dine In Menu",
      image: `${DineInPng}`,
    },
    {
      title: "Take away",
      image: `${TakeAwayPng}`,
    },

  ];


  return (
    <>
      {
        !loader ?
          <LoaderDineIn />
          :
          <Box sx={{ backgroundImage: `linear-gradient(to bottom,rgba(73,195,222,1),rgba(73, 195, 222, 0.95),rgba(73, 195, 222, 0.775),rgba(73, 195, 222, 0.57),rgba(73, 195, 222, 0.59)),url(${BgFood})`, minHeight: "100vh", width: "100%", backgroundColor: "#49c3de", position: "relative" }} >

            <Box sx={{ width: "full", display: "flex", flexDirection: "column", justifyContent: 'space-between' }} >

              <img src={Logo} alt="logo" style={{ width: "8rem", marginInline: 'auto', marginTop: '2.5rem' }} />

              <Box sx={{ paddingInline: "2.8rem" }}>

                <Typography
                  variant="h4" sx={{ fontSize: "2.25rem", fontWeight: "700", color: "white", marginBlockStart: "3rem" }} >
                  Select One
                </Typography>

                <Typography
                  variant="h4" sx={{ fontSize: "1.35rem", fontWeight: "700", color: "white" }} >
                  Categories
                </Typography>

                <Typography
                  variant="h4" sx={{ fontSize: "1rem", fontWeight: "500", color: "rgba(255,255,255,0.71)", marginTop: '2rem' }} >
                  Select anyone of the categories to proceed
                </Typography>

              </Box>
              <Box
                sx={{ display: "flex", justifyContent: "center", paddingInline: "2rem", gap: "20px", marginBlockStart: "2rem" }} >

                {categories1.map((elem, i) => {

                  return (

                    <Card
                      onClick={() => {
                        getItem();
                      }}
                      sx={{ height: "11.5rem", width: "10rem", borderRadius: "15px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)", flexWrap: "wrap" }} >

                      <CardMedia
                        sx={{ height: "60%", objectFit: "cover", marginBlockStart: "12px", marginInline: "22px" }} image={elem.image} title={elem.title} >
                      </CardMedia>

                      <CardContent sx={{ paddingInline: "0" }} >

                        <Typography
                          sx={{ fontSize: "9px", letterSpacing: 1.75, fontWeight: "600", lineHeight: "10.4px", color: "rgba(82,82,82,1)", marginInlineStart: "1.1rem", marginBlockStart: "-4px" }} >
                          EXPLORE ALL
                        </Typography>

                        <Typography
                          sx={{ fontSize: "0.8rem", fontWeight: "800", lineHeight: "19.5px", marginBlockStart: "5px", marginInlineStart: "1rem", color: "rgba(65,66,68,1)" }} >
                          {elem.title}
                        </Typography>

                      </CardContent>

                    </Card>
                  );
                })}
              </Box>

              <Box sx={{ display: "flex", justifyContent: "center", paddingInline: "2rem", gap: "20px", marginBlockStart: "20px", marginBlockEnd: "80px" }} >

                {categories2.map((elem, i) => {

                  return (

                    <Card
                      onClick={() => {
                        console.log("value", itemDATA);
                        navigate("/menu");
                      }}
                      sx={{ height: "11.5rem", width: "10rem", borderRadius: "15px", boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)", flexWrap: "wrap" }} >

                      <CardMedia
                        sx={{ height: "60%", objectFit: "contain", marginBlockStart: "12px", marginInline: "22px" }}
                        image={elem.image} title={elem.title} >
                      </CardMedia>

                      <CardContent sx={{ paddingInline: "0" }} >

                        <Typography
                          sx={{ fontSize: "9px", letterSpacing: 1.75, fontWeight: "600", lineHeight: "10.4px", color: "rgba(82,82,82,1)", marginInlineStart: "1rem", marginBlockStart: "-4px" }} >
                          EXPLORE ALL
                        </Typography>

                        <Typography
                          sx={{ fontSize: "0.8rem", fontWeight: "800", lineHeight: "19.5px", marginBlockStart: "5px", marginInlineStart: "1rem", color: "rgba(65,66,68,1)" }} >
                          {elem.title}
                        </Typography>

                      </CardContent>

                    </Card>
                  );
                })}
              </Box>

              <Box
                sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: "1rem", width: "100%", textAlign: "center" }} >

                <Typography
                  sx={{ fontWeight: "700", fontSize: "1rem", color: "white" }} >
                  A Product Of TurboFinn AI
                </Typography>

              </Box>

            </Box>

          </Box>

      }
    </>
  );
}

export default Categories2;
