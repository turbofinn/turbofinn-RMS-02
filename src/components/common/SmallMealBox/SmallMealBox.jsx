import React from "react";
import DalBalChurma from "../../../assets/Image/meal/dalBatiChurma.png";
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
import { useNavigate } from "react-router-dom";
import { BorderBottom, Padding } from "@mui/icons-material";
const SmallMealBox = () => {
  const Navigate = useNavigate();
  return (
    <React.Fragment>
      <Box
        style={{
          border: "1px solid #d1d1d1",
          borderRadius: "1.5rem",
          alignContent: "center",
          justify: "center",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
          maxWidth: "50%",
        }}
      >
        <Box>
          <img
            src={DalBalChurma}
            alt="DalBalChurma"
            style={{ width: "100%", borderRadius: "1.5rem" }}
          />
        </Box>
        <Box style={{ paddingBottom: "0.7rem" }}>
          <Box
            style={{
              borderBottom: "1px solid #d1d1d1",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
            }}
          >
            <Typography style={{ fontSize: "1.1rem", fontWeight: 600 }}>
              Dal Bati Churma
            </Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  backgroundColor: "#84FF91",
                  width: "0.6rem",
                  height: "0.6rem",
                  borderRadius: "50%",
                  marginRight: "12px",
                }}
              ></Box>
              <Typography
                variant="p"
                style={{
                  fontSize: "0.7rem",
                  color: "#525252",
                  fontWeight: 500,
                }}
              >
                VEGETARIAN
              </Typography>
            </Box>
          </Box>

          <Typography
            onClick={() => {
              Navigate("/productdetails");
            }}
            style={{
              fontSize: "0.9rem",
              textAlign: "center",
              marginTop: "0.5rem",
              fontWeight: 600,
            }}
          >
            + ADD TO CART
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SmallMealBox;
