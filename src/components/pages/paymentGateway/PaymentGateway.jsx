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
import gPay from "../../../assets/Image/paymentGateway/gPay.png";
import cash from "../../../assets/Image/paymentGateway/csh.png";
import upi from "../../../assets/Image/paymentGateway/upi.png";
import amazonPay from "../../../assets/Image/paymentGateway/amazon-pay.png";
import debitCard from "../../../assets/Image/paymentGateway/debit-card.jpg";
import SimpleHead from "../../common/SimpleHead/SimpleHead";

function PaymentGatway() {
  const options = [
    { title: "Google Pay", icon: gPay },
    { title: "Cash", icon: cash },
    { title: "UPI", icon: upi },
    { title: "Amazon Pay Balance", icon: amazonPay },
    { title: "Debit Card", icon: debitCard },
  ];
  const CustomLabel = ({ img, txt }) => (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "8px", width: "100%" }}>
      <Box sx={{ height: "2.25rem", width: "2.75rem",display:'flex',alignItems:'center',justifyContent:'center' }}>
        <img src={img} alt={txt} style={{maxHeight:'100%',maxWidth:'100%'}}></img>
      </Box>

      <Typography
        sx={{
          fontWeight: "700",
          color: "#000",
          fontSize: {xs:"0.875rem",md:"0.75rem"},
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
          maxWidth: { xs: "34rem", md: "33%" },
          marginTop: {xs:"5rem",md:'3rem'},
        }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {xs:"0.875rem",md:'1.1rem'},
            marginBottom: {xs:"1.75rem",md:'2rem'},
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
                    height: { xs: "4.5rem", md: "4rem" },
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
                    <Radio sx={{ color: " #469db1", alignContent: "center" }} size='large' />
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
          maxWidth: { xs: "24.75rem", md: "24.5%" },
          height: "3.75rem",
          marginInline: { xs: "1rem", sm: "auto" },
          marginTop: {xs:"7.75rem",md:'1.5rem'},
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
