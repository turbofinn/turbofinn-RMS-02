import { Box, Typography, Paper, Radio, RadioGroup, FormControl, FormControlLabel, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery, useTheme } from "@mui/material";
import NavBar from "../../common/NavBar/NavBar";
import meal from "../../../assets/Image/meal/DalBatiChurma.png";
import React from "react";
import { useNavigate } from "react-router-dom";

function AddToMealWeb() {

  const Navigate = useNavigate();

  const CustomTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none", // Remove the default border
      },
      "&:hover fieldset": {
        border: "none", // Remove the border on hover
      },
      "&.Mui-focused fieldset": {
        border: "none",
      },
    },
  });

  const serving = [
    { serving: "Single", price: "70" },
    { serving: "Single", price: "170" },
    { serving: "Single", price: "290" },
  ];

  const theme2 = createTheme({
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

  const theme = useTheme();

  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  let rows;
  if (isMediumScreen) {
    rows = 2;
  } else if (isLargeScreen) {
    rows = 5;
  }

  const ResponsiveRadio = styled(Radio)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      fontSize: 24,
      [theme.breakpoints.up("md")]: {
        fontSize: 15,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24,
      },
    },
  }));

  return (
    // whole screen

    <Box>
      <NavBar />

      {/* upper section */}
      <Box sx={{ width: { md: "50rem", xl: "74.5rem" }, height: { md: "28.5rem", xl: "45.875rem" }, borderRadius: "24px", marginInlineStart: { md: "29%", xl: "23%" }, marginBlockStart: { md: "1rem", xl: "10.75rem" }, background: "#f8f8ff", display: "flex" }} >

        <Box sx={{ width: "45%", position: "relative" }} />

        <Box sx={{ width: { md: "25rem", xl: "41.75rem" }, height: { md: "17rem", xl: "27.56rem" }, position: "absolute", backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.150), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${meal})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "20px", transform: "translate(-30.5%,32%)" }} />

        <Box sx={{ width: "55%", marginInlineEnd: "3rem", marginBlock: { md: "1.5rem", xl: "2.82rem" } }} >

          <Typography variant="h4" sx={{ textTransform: "capitalize", fontSize: { md: "1.35rem", xl: "2rem" }, fontFamily: "Poppins", fontWeight: "600" }} >
            dal bati churma
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", marginBlockEnd: { md: "0.5rem", xl: "1rem" } }} >

            <Typography variant="subtitle1" sx={{ textTransform: "capitalize", fontFamily: "Poppins", fontWeight: "600", fontSize: { md: "0.85rem", xl: "1.5rem" }, letterSpacing: "-0.5px", color: "rgba(56, 56, 56,0.8)", marginInlineEnd: { md: "1.25rem", xl: "28px" } }} >
              legacy of rajasthan
            </Typography>

            <div style={{ height: "0.35rem", width: "0.35rem", borderRadius: "50%", background: "#84FF91", marginRight: "8px" }} />

            <Typography sx={{ textTransform: "uppercase", fontWeight: "700", fontSize: { md: "8.5px", xl: "16px" }, fontFamily: "Poppins" }} >
              Vegetarian
            </Typography>

          </Box>

          <Typography variant="subtitle2" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: { md: "10px", xl: "14px" }, letterSpacing: "2%", color: "#767676", marginBlockEnd: { md: "0.8rem", xl: "1.5rem" } }} >
            Dal baati churma is a dish that includes baati, pure ghee, daal
            (lentils) and many more. It is very popular in the state
            of Rajasthan.
          </Typography>

          <Paper elevation={1} sx={{ maxWidth: "36.125rem", height: { md: "10em", xl: "14.5rem" }, boxShadow: "0px 0px 20px #00000017", borderRadius: "20px", marginBlockEnd: { md: "1rem", xl: "1.5rem" } }} >

            <Box sx={{ paddingInline: { md: "2.25rem", xl: "3.25rem" }, paddingBlockStart: "1rem", paddingBlockEnd: "0.5rem" }} >

              <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "700", color: "#383838", fontSize: { md: "13px", xl: "16px" }, marginBottom: { md: "0.1rem", xl: "0.25rem" } }} >
                Quantity
              </Typography>

              <Box sx={{ fontFamily: "Poppins", fontWeight: "600", color: "#767676", fontSize: { md: "11px", xl: "14px" }, display: "flex", alignItems: "center", gap: "0.25rem" }} >

                <Typography variant="subtitle">Required</Typography>

                <div style={{ height: "3.5px", width: "3.5px", borderRadius: "100%", background: "rgba(118, 118, 118, 0.78)" }} />

                <Typography variant="subtitle">Select any 1 option</Typography>

              </Box>

            </Box>

            <div style={{ width: "100%", height: "0.5px", background: "rgba(232, 235, 242, 1)" }} />

            <Box sx={{ paddingInline: { md: "2.25rem", xl: "3.25rem" }, paddingBlock: { md: "0.05rem", xl: "1rem" } }} >

              <FormControl sx={{ width: "100%" }}>

                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="70" name="radio-buttons-group" >

                  {serving.map((elem, i) => (

                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >

                      <Typography sx={{ fontFamily: "Poppins", fontWeight: "600", lineHeight: "22.5px", color: "#000", fontSize: { md: "11px", xl: "16px" } }} >
                        0{i + 1} Single Serving
                      </Typography>

                      <FormControlLabel
                        value={elem.price}
                        control={<ResponsiveRadio sx={{ color: " #469db1" }} />}
                        label={
                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "600", fontSize: { md: "11px", xl: "16px" }, marginRight: "-6px" }}>
                            ₹ {elem.price}
                          </Typography>
                        }
                        labelPlacement="start"
                        sx={{ marginRight: "1rem" }} />

                    </Box>

                  ))}

                </RadioGroup>

              </FormControl>

            </Box>

          </Paper>

          <Paper elevation={1} sx={{ maxWidth: "36.125rem", height: { md: "9rem", xl: "14.5rem" }, boxShadow: "0px 0px 20px #00000017", borderRadius: "20px", marginBlockEnd: { md: "1rem", xl: "1.5rem" } }} >

            <Box sx={{ paddingInline: { md: "2.25rem", xl: "3.25rem" }, paddingBlockStart: "1rem", paddingBlockEnd: "0.5rem" }} >

              <Typography variant="h4" sx={{ fontFamily: "Poppins", fontWeight: "700", color: "#383838", fontSize: { md: "13px", xl: "16px" }, marginBottom: { md: "-0.25rem", xl: "0.25rem" } }} >
                Add a Note:
              </Typography>

              <Typography variant="subtitle" sx={{ fontFamily: "Poppins", fontWeight: "600", color: "#767676", fontSize: { md: "11px", xl: "14px" } }} >
                Required changes for your food
              </Typography>

            </Box>

            <div style={{ width: "100%", height: "0.5px", background: "rgba(232, 235, 242, 1)" }} />

            <Box sx={{ paddingInline: "4px" }}>

              <ThemeProvider theme={theme2}>

                <CustomTextField id="outlined-multiline-flexible" placeholder={`Changes to be done for dal bati churma...`} multiline rows={rows} sx={{ width: "100%", height: "100%", fontFamily: "Poppins", fontWeight: "600", color: "#767676", fontSize: { md: "6px", xl: "12px" }, paddingInline: { md: "8px", xl: "16px" } }} />
              </ThemeProvider>

            </Box>

          </Paper>

        </Box>

      </Box>

      {/* bottom part*/}
      <Box sx={{ height: { md: "4rem", xl: "8.3rem" }, width: { md: "24rem", xl: "33.375rem" }, marginBlockStart: { md: "0.5rem", xl: "1.75rem" }, alignContent: "center", marginInline: "auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "1.5rem" }} >\

        <Box sx={{ width: { md: "6rem", xl: "9.25rem" }, height: { md: "2.1rem", xl: "3.56rem" }, border: "1px solid rgba(0, 0, 0,0.48  )", borderRadius: "30px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingInline: "0.5rem" }} >

          <Box sx={{ height: "1.25rem", width: "1.25rem", fontSize: "1.25rem", fontWeight: "500", padding: 0, borderRadius: "50%", background: "rgb(70, 157, 177,0.89)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }} >
            -
          </Box>

          <Typography sx={{ fontSize: { md: "1rem", xl: "1.9rem" }, fontWeight: "700" }} >
            2
          </Typography>

          <Box sx={{ height: "1.25rem", width: "1.25rem", fontSize: "1.25rem", fontWeight: "500", padding: 0, borderRadius: "50%", background: "rgb(70, 157, 177,0.89)", color: "white", display: "flex", alignItems: "center", justifyContent: "center" }} >
            +
          </Box>

        </Box>

        <Button variant="contained" sx={{ width: { md: "11rem", xl: "19.8rem" }, height: { md: "2.75rem", xl: "4.5rem" }, background: "#3eb9d4", borderRadius: "10px" }}
          onClick={() => {
            Navigate("/menu");
          }} >

          {
            <Typography
              sx={{
                fontFamily: "Poppins", fontSize: { md: "18px", xl: "28px" }, textTransform: "initial",
              }}
            >
              Add to Meal
            </Typography>
          }

        </Button>

      </Box>

    </Box>

  );
}

export default AddToMealWeb;
