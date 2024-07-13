import React from "react";
import { Paper, Box, Typography, Rating, Button } from "@mui/material";
import VegOrNon from "../vegOrNon/VegOrNon";
import img1 from "../../../assets/Image/meal/menuItems/dal-bati-churma.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function OrderHistoryCard() {
  const value = "4.5";
  return (
    <Paper
      sx={{
        height: "13.75rem",
        maxWidth: "90%",
        marginTop: "1.75rem",
        background: "rgba(254, 254, 250,0.6)",
        marginInline: "auto",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.38)",
        boxShadow: "0 0 9.5px 0 rgba(0, 0, 0,0.38)",
      }}>
      <Paper
        sx={{
          width: "100%",
          height: "70%",
          borderRadius: "20px",
          background: "rgba(254, 254, 250,0.6)",
          display: "flex",
          border: "1px solid rgba(0,0,0,0.38)",
          boxShadow: "0 0 9.5px 0 rgba(0, 0, 0,0.38)",
        }}>
        <Box
          sx={{
            width: "45%",
            height: "100%",
            paddingInline: "5%",
            paddingBlock: "3%",
            justifyContent: "center",
            alignContent: "center",
          }}>
          <img
            src={img1}
            style={{
              objectFit: "cover",
              height: "7.5rem",
              width: "7.5rem",
              borderRadius: "100%",
            }}></img>
        </Box>
        <Box sx={{ width: "55%", height: "100%", paddingBlock: "5%" }}>
          <VegOrNon
            txtValue="vegetarian"
            txtCol="rgba(82,82,82,1)"
            txtWeight="500"
            space="4px"
            txtSize="0.6rem"></VegOrNon>
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: "500",
              marginTop: "0.25rem",
            }}>
            Dal Bati Churma
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: "7rem",
              color: "rgba(84,176,173,1)",
              marginBottom: "-2px",
            }}>
            <Typography sx={{ fontSize: "0.75rem", lineHeight: "1rem" }}>
              Indian Cuisine
            </Typography>
            <ArrowDropDownIcon></ArrowDropDownIcon>
          </Box>
          <div
            style={{
              height: "1px",
              maxWidth: "6.5rem",
              background: "#000",
            }}></div>
          <Typography sx={{ marginTop: "1.25rem" }}>
            <span
              style={{
                fontSize: "1.05rem",
                fontWeight: "600",
                color: "rgba(255,0,0,0.86)",
                lineHeight: "1.22rem",
                marginRight: "0.15rem",
              }}>
              ₹ 800/-{" "}
            </span>
            <span
              style={{
                fontSize: "0.625rem",
                color: "rgba(0,0,0,0.64)",
                fontWeight: "600",
                lineHeight: "0.82rem",
              }}>
              Per Meal
            </span>
          </Typography>
        </Box>
      </Paper>
      <Box
        sx={{
          width: "100%",
          height: "30%",
          display: "flex",
          alignItems: "center",
          paddingInline:'1rem'
        }}>
        <Box sx={{ width: "45%" }}>
          <Rating
            name="read-only"
            value={value}
            sx={{ color: "rgba(63, 186, 213, 1)",width:'6.5rem',height:'21px' }}
            precision={0.5}
            readOnly></Rating>
          <Typography
            sx={{
              fontSize: "0.675rem",
              fontWeight: "600",
              color: "rgba(0,0,0,0.64)",marginTop:'-0.25rem',marginLeft:'0.5rem'
            }}>
            {value} Star Rating
          </Typography>
        </Box>

        <Box sx={{ width: "55%", }}>
          <Button
            variant="outlined"
            sx={{
              border: "2.5px solid rgba(84, 176, 173, 1)",
              borderRadius: "11px",
              height: "2.625rem",
              width: "10.625rem",
            }}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                color: "rgb(22, 124, 121)",textTransform:'capitalize'
              }}>
              Order Again
            </Typography>
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default OrderHistoryCard;
