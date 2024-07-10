import React from "react";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
} from "@mui/material";
import gPay from "../../../assets/Image/paymentGateway/g-pay.png";
import cash from "../../../assets/Image/paymentGateway/cash.jpeg";
import upi from "../../../assets/Image/paymentGateway/upi.png";
import amazonPay from "../../../assets/Image/paymentGateway/amazon-pay.png";
import debitCard from "../../../assets/Image/paymentGateway/debit-card.jpg";
import SimpleHead from "../../common/SimpleHead/SimpleHead";

function PaymentGatway() {
  const options = [
    { title: "Google Pay", icon: { gPay } },
    { title: "Cash", icon: { cash } },
    { title: "UPI", icon: { upi } },
    { title: "Amazon Pay Balance", icon: { amazonPay } },
    { title: "Debit Card", icon: { debitCard } },
  ];
  const CustomLabel = ({ img, txt }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src={img} alt={txt} style={{ height: "40px", width: "40px" }}></img>
      <Typography
        sx={{
          fontWeight: "600",
          color: "#000",
          fontSize: "14px",
        }}>
        {txt}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh" }}>
      <SimpleHead title={"payment gateway"}></SimpleHead>
      <Box
        sx={{
          marginInline: { xs: "1.625rem", sm: "auto" },
          maxWidth: "34rem",
          marginTop: "5rem",
        }}>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "14px",
            marginBottom: "1.75rem",
            lineHeight: "1.138rem",
            color: "#000",
          }}>
          Select Payment Method To Proceed
        </Typography>
        <FormControl sx={{ width: "100%" }}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={"Google Pay"}
            name="radio-buttons-group">
            {options.map((elem, i) => {
              return (
                <FormControlLabel
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginLeft: "0",
                    border: "2px solid #469db1",
                    borderRadius: "10px",
                    marginBottom: "1rem",
                    paddingInline: "1.5rem",
                    height: "4.5rem",
                    "&:hover": {
                      border: "2.5px solid #1b92ea",
                      cursor: "pointer",
                    },
                  }}
                  label={
                    <CustomLabel img={elem.icon} txt={elem.title}></CustomLabel>
                  }
                  labelPlacement="start"
                  value={elem.title}
                  control={
                    <Radio sx={{ color: " #469db1", alignContent: "center" }} />
                  }>
                  {elem.title}
                </FormControlLabel>
              );
            })}
          </RadioGroup>
        </FormControl>
      </Box>
      <Box
        sx={{
          maxWidth: "24.75rem",
          height: "3.75rem",
          marginInline: { xs: "1rem", sm: "auto" },
          marginTop: "7.75rem",
          marginBottom: "0.5rem",
        }}>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            height: "100%",
            background: "#469db1",
            borderRadius: "10px",
          }}>
          <Typography
            sx={{
              fontSize: "1.25rem",
              fontWeight: "600",
              lineHeight: "1.625rem",
              textTransform: "capitalize",
            }}>
            Pay @ Rs. 70
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default PaymentGatway;
