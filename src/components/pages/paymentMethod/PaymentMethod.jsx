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
import Gpay from "../../../assets/Image/PaymentGateway/Gpay.png";
import Cash from "../../../assets/Image/PaymentGateway/Cash.png";
import UPI from "../../../assets/Image/PaymentGateway/UPI.png";
import AmazonPay from "../../../assets/Image/PaymentGateway/AmazonPay.png";
import DebitCard from "../../../assets/Image/PaymentGateway/DebitCard.jpg";
import SimpleHead from "../../common/SimpleHead/SimpleHead";
import NavBar from '../../common/NavBar/NavBar'
import {useTheme } from '@mui/material/styles'
import useMediaQuery from "@mui/material/useMediaQuery";
function PaymentMethod() {
  const options = [
    { title: "Google Pay", icon: Gpay },
    { title: "Cash", icon: Cash },
    { title: "UPI", icon: UPI },
    { title: "Amazon Pay Balance", icon: AmazonPay },
    { title: "Debit Card", icon: DebitCard },
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

  const theme=useTheme();
  const aspect =useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box sx={{ width: "100vw", minHeight: "100vh" }}>
      {aspect?<NavBar></NavBar>:null}
      
      <SimpleHead title={"payment method"} functions={true} h={'8.75rem'} line={true}></SimpleHead>
      <Box
        sx={{width:'90%',
          marginInline: { xs: "1.625rem", sm: "auto" },
          maxWidth: { xs: "34rem", md: "33%" },
          marginTop: {xs:"4rem",lg:'6rem'},
        }}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: {xs:"0.875rem",md:'1.1rem'},
            marginBottom: {xs:"1.75rem",md:'2rem',lg:'3.75rem'},
            lineHeight: "1.138rem",
            color: "#000",
          }}>
          Select Payment Method To Proceed
        </Typography>
        <FormControl sx={{ width: "100%",marginInline:'auto' }}>
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
                    paddingInline: "1.5rem",width:'100%',
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
          height: {xs:"3.75rem",md:'3.25rem'},
          marginInline: { xs: "1rem", sm: "auto" },
          marginTop: {xs:"7.75rem",md:'1.5    rem',lg:'2.25rem'},
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

export default PaymentMethod;
