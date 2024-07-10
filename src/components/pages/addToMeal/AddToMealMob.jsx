import {
  Box,
  Typography,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Button,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import meal from "../../../assets/Image/meal/dal-bati-churma.png";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import React from "react";

function AddToMealWeb() {
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
              fontWeight:'500',
              lineHeight:'21px',
              letterSpacing:'2%',
              opacity: 1, 
              color:'#596174',fontFamily:'Poppins'
            },
          },
        },
      },
    },
  });
  const ResponsiveRadio = styled(Radio)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      fontSize: 24,
      [theme.breakpoints.up("xs")]: {
        fontSize: 16, 
      },
    },
  }));

  return (
    // whole screen

    <Box sx={{ minHeight: "100vh", position: "relative" }}>
      {/* Back key */}
      <Box
        sx={{
          color: "#fff",
          position: "absolute",
          display: "flex",
          alignItems: "center",

          marginTop: "0.75rem",
          marginLeft: "1.25rem",
        }}>
        <KeyboardBackspaceIcon
          sx={{ fontSize: "1.25rem" }}></KeyboardBackspaceIcon>
        <Typography
          sx={{ fontWeight: "600", marginLeft: "10px", fontSize: "0.85rem" }}>
          Product Details
        </Typography>
      </Box>
      {/* Meal Image */}
      <Box
        sx={{
          width: "100%",
          height: "21rem",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.150), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${meal})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: "-1",
        }}>
        {/* Description list */}
        <Box
          sx={{
            width: "100%",
            height: "fit",
            position: "absolute",
            top: "19.2rem",
            borderRadius: "25px 25px 0 0 ",
            backgroundColor: "#f8f8ff",
            paddingInline: "1.438rem",
            paddingBlock: "0.688rem",
          }}>
          <Box
            sx={{
              paddingInline: "0.75rem",
            }}>
            <Typography
              variant="h4"
              sx={{
                textTransform: "capitalize",
                fontSize: "1.5rem",
                fontFamily: "Poppins",
                fontWeight: "600",
                lineHeight: "1.95rem",
                marginBlockEnd: "0.625rem",
              }}>
              dal bati churma
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBlockEnd: "0.75rem",
              }}>
              <Typography
                variant="subtitle1"
                sx={{
                  textTransform: "capitalize",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  fontSize: "1rem",
                  lineHeight: "19.2px",
                  color: "#383838",
                  marginRight: "1.5rem",
                }}>
                legacy of rajasthan
              </Typography>
              <div
                style={{
                  height: "8px",
                  width: "8px",
                  borderRadius: "100%",
                  background: "#84FF91",
                  marginRight: "10px",
                }}></div>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "500",
                  fontSize: "11px",
                  fontFamily: "Poppins",
                }}>
                Vegetarian
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "11px",
                letterSpacing: "2%",
                lineHeight: "14.3px",
                color: "#767676",
                marginBlockEnd: "1.438rem",
              }}>
              Dal baati churma is a dish that includes baati, pure ghee, daal
              (lentils) and many more. It is very popular in the state
              of Rajasthan.
            </Typography>
          </Box>

          <Paper
            elevation={1}
            sx={{
              maxWidth: "36.125rem",
              height: { md: "9.5rem", xl: "14.5rem" },
              boxShadow: "0px 0px 20px #00000017",
              borderRadius: "20px",
              marginBlockEnd: { md: "1rem", xl: "1.5rem" },
            }}>
            <Box
              sx={{
                paddingInline: "1rem",
                paddingBlock: "1rem",
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#383838",
                  fontSize: "1rem",
                  marginBottom: "0.25rem",
                }}>
                Quantity
              </Typography>
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#767676",
                  fontSize: "0.8rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}>
                <Typography variant="subtitle">Required</Typography>
                <div
                  style={{
                    height: "4px",
                    width: "4px",
                    borderRadius: "100%",
                    background: "#767676",
                  }}></div>
                <Typography variant="subtitle">Select any 1 option</Typography>
              </Box>
            </Box>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                background: "#76767642",
              }}></div>
            <Box
              sx={{
                paddingInline: "1rem",
                paddingBlock: "0.5rem",
              }}>
              <FormControl sx={{ width: "100%" }}>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="70"
                  name="radio-buttons-group">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        color: "#383838",
                        fontSize: "1rem",
                      }}>
                      01. Single Serving
                    </Typography>
                    <FormControlLabel
                      value="70"
                      control={<ResponsiveRadio sx={{ color: " #3EB9D4" }} />}
                      label={
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "700",
                            fontSize: "1rem",
                          }}>
                          Rs. 70
                        </Typography>
                      }
                      labelPlacement="start"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        color: "#383838",
                        fontSize: "1rem",
                      }}>
                      01. Single Serving
                    </Typography>
                    <FormControlLabel
                      value="170"
                      control={<ResponsiveRadio sx={{ color: " #3EB9D4" }} />}
                      label={
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "700",
                            fontSize: "1rem",
                          }}>
                          Rs. 170
                        </Typography>
                      }
                      labelPlacement="start"
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        color: "#383838",
                        fontSize: "1rem",
                      }}>
                      01. Single Serving
                    </Typography>
                    <FormControlLabel
                      value="290"
                      control={<ResponsiveRadio sx={{ color: " #3EB9D4" }} />}
                      label={
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: "700",
                            fontSize: "1rem",
                          }}>
                          Rs. 290
                        </Typography>
                      }
                      labelPlacement="start"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
          </Paper>
          <Paper
            elevation={1}
            sx={{
              maxWidth: "36.125rem",
              marginBlockStart: "27px",
              height: "14.75rem",
              boxShadow: "0px 0px 20px #00000017",
              borderRadius: "20px",
              marginBlockEnd: "100px",
            }}>
            <Box
              sx={{
                paddingInline: "1rem",
                paddingBlock: "1rem",
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#383838",
                  fontSize: "1rem",
                  marginBottom: { md: "-0.15rem", xl: "0.25rem" },
                }}>
                Add on Note:
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#767676",
                  fontSize: "0.75rem",
                }}
                variant="subtitle">
                Required changes for your food
              </Typography>
            </Box>
            <div
              style={{
                width: "100%",
                height: "0.5px",
                background: "#76767642",
              }}></div>
            <Box sx={{ paddingInline: "4px" }}>
              <ThemeProvider theme={theme}>
                <CustomTextField
                  id="outlined-multiline-flexible"
                  placeholder={`Changes to be done for dal bati churma...`}
                  multiline
                  rows={5}
                  sx={{
                    width: "100%",
                    height: "100%",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    color: "#767676",
                    fontSize: { md: "6px", xl: "12px" },
                    paddingInline: { md: "8px", xl: "16px" },
                  }}
                />
              </ThemeProvider>
            </Box>
          </Paper>
        </Box>
        {/* Button */}

        <Box
          sx={{
            height: "90px",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.75rem",
            background: "#fff",
            paddingBlock: "1rem",
            position: "fixed",
            bottom: "0",
          }}>
          <Box
            sx={{
              width: "6.8rem",
              height: "2.5rem",
              border: "1px solid rgba(0, 0, 0,0.48  )",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingInline: "7px",
            }}>
            <Button
              variant="contained"
              sx={{
                minHeight: "20px",
                minWidth: "20px",
                padding: 0,
                fontSize: "12px",
                borderRadius: "100%",
                background: "#3eb9d4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              -
            </Button>
            <Typography
              sx={{
                fontSize: { md: "1rem", xl: "1.9rem" },
                fontWeight: "700",
              }}>
              2
            </Typography>
            <Button
              variant="contained"
              sx={{
                minHeight: "20px",
                minWidth: "20px",
                padding: 0,
                fontSize: "12px",
                borderRadius: "100%",
                background: "#3eb9d4",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              +
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{
              width: "14.5rem",
              height: "3.3rem",
              background: "#3eb9d4",
              borderRadius: "10px",
            }}>
            {
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: { md: "18px", xl: "28px" },
                  textTransform: "initial",
                }}>
                Add to Meal
              </Typography>
            }
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default AddToMealWeb;
