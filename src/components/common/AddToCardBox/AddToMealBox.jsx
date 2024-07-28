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
import burger from "../../../assets/Image/burger.png";
import toast from "../../../assets/Image/toast.png";
import dalBatiChurma from "../../../assets/Image/meal/DalBatiChurma.png";
import plus from "../../../assets/Image/plus.png";
import minus from "../../../assets/Image/minus.png";
import greaterThanDownSide from "../../../assets/Image/greaterThanDownSide.png";
const AddToMealBox = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          maxWidth: "lg",
          height: "20%",
          border: "1px solid #d1d1d1",
          borderRadius: "1.5rem",
          alignContent: "center",
          justify: "center",
          alignItems: "center",
          padding: "1rem",
          maxWidth: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "10px",
        }}
      >
        <Typography
          style={{ textAlign: "end", color: "#E95160", fontWeight: 600 }}
        >
          Remove
        </Typography>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            sx={{
              margin: 0,
              padding: 0,
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <img
              src={dalBatiChurma}
              alt="Dal Bati Churma"
              style={{
                borderRadius: "50%",
                width: "12vh",
                height: "12vh",
                objectFit: "cover",
              }}
            />
          </Grid>
          <Grid
            item
            xs={8}
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "1.5rem",
            }}
          >
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
                style={{ fontSize: "13px", color: "#525252" }}
              >
                VEGETARIAN
              </Typography>
            </Box>
            <Typography
              variant="h6"
              style={{ fontWeight: 600, marginTop: "0.3rem" }}
            >
              Dal Bati Churma
            </Typography>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              <Typography style={{ color: "#525252", fontSize: "1.1rem" }}>
                Serving :
              </Typography>

              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.8rem",
                  border: "1px solid gray",
                  borderRadius: "3.5rem",
                  maxWidth: "34%",
                  paddingLeft: "3.6rem",
                  paddingRight: "3.6rem",
                }}
              >
                <img src={minus} alt="minus" style={{ height: "1rem" }} />
                <Typography
                  style={{ fontSize: "1.5rem", fontWeight: 500, opacity: 0.67 }}
                >
                  01
                </Typography>
                <img src={plus} alt="plus" style={{ height: "1rem" }} />
              </Box>
            </Box>

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "0.5rem",
              }}
            >
              <Typography
                style={{
                  fontSize: "1.3rem",
                  color: "#525252",
                  fontWeight: 500,
                }}
              >
                Total Cost :
              </Typography>
              <Typography
                style={{
                  fontSize: "1.3rem",
                  color: "#000000",
                  fontWeight: 600,
                }}
              >
                ₹ 70
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        style={{
          maxWidth: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1rem",
          borderBottom: "1px solid #d1d1d1",
          borderLeft: "1px solid #d1d1d1",
          borderRight: "1px solid #d1d1d1",
          borderBottomLeftRadius: "1.5rem",
          borderBottomRightRadius: "1.5rem",
          marginTop: "-1rem",
          paddingTop: "2rem",
          display: "flex",
          alignContent: "center",
          justify: "center",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            fontSize: "0.9rem",
            color: "#525252",
            marginRight: "0.5rem",
          }}
        >
          Customize Your Order
        </Typography>
        <img
          src={greaterThanDownSide}
          alt="greaterThanDownSide"
          style={{ width: "0.6rem" }}
        />
      </Box>
    </React.Fragment>
  );
};

export default AddToMealBox;
