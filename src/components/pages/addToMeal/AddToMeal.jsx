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
import meal from "../../../assets/Image/meal/dal-bati-churma.png";
import React from "react";

function AddToMeal() {
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
  const ResponsiveRadio = styled(Radio)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      fontSize: 24,
      [theme.breakpoints.up("lg")]: {
        fontSize: 14, // Smaller size for small screens
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 24, // Smaller size for small screens
      },
    },
  }));
  
  return (
    // whole screen

    <Box sx={{ maxHeight: "100vh" }}>
      {/* main page */}
      <Box
        sx={{
          width: { lg: "51rem", xl: "74.5rem" },
          height: { lg: "29.5rem", xl: "45.875rem" },
          borderRadius: "24px",
          marginInlineStart: "22.5rem",
          marginBlockStart: { lg: "5rem", xl: "11.75rem" },
          background: "#f8f8ff",
          display: "flex",
        }}>
        <Box sx={{ width: "45%", position: "relative" }}></Box>
        <Box
          sx={{
            width: { lg: "25rem", xl: "41.75rem" },
            height: { lg: "17rem", xl: "27.56rem" },
            position: "absolute",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.150), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${meal})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            transform: "translate(-30.5%,32%)",
          }}></Box>
        <Box
          sx={{
            width: "55%",
            marginInlineEnd: "3rem",
            marginBlock: { lg: "1.5rem", xl: "2.82rem" },
          }}>
          <Typography
            variant="h4"
            sx={{
              textTransform: "capitalize",
              fontSize: { lg: "1.35rem", xl: "2rem" },
              fontFamily: "Poppins",
              fontWeight: "600",
            }}>
            dal bati churma
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBlockEnd: { lg: "0.5rem", xl: "1rem" },
            }}>
            <Typography
              variant="subtitle1"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: { lg: "0.85rem", xl: "1.5rem" },
                letterSpacing: "-0.5px",
                color: "#383838",
                marginInlineEnd: { lg: "10px", xl: "28px" },
              }}>
              legacy of rajasthan
            </Typography>
            <div
              style={{
                height: { lg: "8px", xl: "10px" },
                width: { lg: "8px", xl: "10px" },
                borderRadius: "100%",
                background: "#84FF91",
                marginRight: { lg: "5px", xl: "8px" },
              }}></div>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: { lg: "8.5px", xl: "16px" },
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
              fontSize: { lg: "10px", xl: "14px" },
              letterSpacing: "2%",
              color: "#767676",
              marginBlockEnd: { lg: "0.8rem", xl: "1.5rem" },
            }}>
            Dal baati churma is a dish that includes baati, pure ghee, daal
            (lentils) and many more. It is very popular in the state
            of Rajasthan.
          </Typography>
          <Paper
            elevation={1}
            sx={{
              maxWidth: "36.125rem",
              height: { lg: "9.5rem", xl: "14.5rem" },
              boxShadow: "0px 0px 20px #00000017",
              borderRadius: "20px",
              marginBlockEnd: { lg: "1rem", xl: "1.5rem" },
            }}>
            <Box
              sx={{
                paddingInline: { lg: "2.25rem", xl: "3.25rem" },
                paddingBlock: { lg: "0.5rem", xl: "1rem" },
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#383838",
                  fontSize: { lg: "14px", xl: "16px" },
                  marginBottom: { lg: "0.15rem", xl: "0.25rem" },
                }}>
                Quantity
              </Typography>
              <Box
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#767676",
                  fontSize: { lg: "11px", xl: "14px" },
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
                paddingInline: { lg: "2.25rem", xl: "3.25rem" },
                paddingBlock: { lg: "0.05rem", xl: "1rem" },
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
                        fontSize: { lg: "13px", xl: "16px" },
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
                            fontSize: { lg: "13px", xl: "16px" },
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
                        fontSize: { lg: "13px", xl: "16px" },
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
                            fontSize: { lg: "13px", xl: "16px" },
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
                        fontSize: { lg: "13px", xl: "16px" },
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
                            fontSize: { lg: "13px", xl: "16px" },
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
              height: { lg: "10rem", xl: "14.5rem" },
              boxShadow: "0px 0px 20px #00000017",
              borderRadius: "20px",
            }}>
            <Box
              sx={{
                paddingInline: { lg: "2.25rem", xl: "3.25rem" },
                paddingBlockStart: { lg: ".75rem", xl: "1rem" },
                paddingBlockEnd: { lg: ".5rem", xl: "1rem" },
              }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  color: "#383838",
                  fontSize: { lg: "14px", xl: "16px" },
                  marginBottom: { lg: "-0.15rem", xl: "0.25rem" },
                }}>
                Add on Note:
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  color: "#767676",
                  fontSize: { lg: "11px", xl: "14px" },
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
                  fontSize: { lg: "6px", xl: "12px" },
                  paddingInline: { lg: "8px", xl: "16px" },
                }}
              />
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* bottom part*/}
      <Box
        sx={{
          height: { lg: "4rem", xl: "8.3rem" },
          width: { lg: "24rem", xl: "33.375rem" },
          marginBlockStart: { lg: "0.5rem", xl: "2.5rem" },
          alignContent: "center",
          marginInline: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}>
        <Box
          sx={{
            width: { lg: "6rem", xl: "9.25rem" },
            height: { lg: "2.1rem", xl: "3.56rem" },
            border: "2px solid #000",
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: "7px",
          }}>
          <Button
            variant="contained"
            sx={{
              minHeight: { lg: "24px", xl: "40px" },
              minWidth: { lg: "24px", xl: "40px" },
              padding: 0,
              fontSize: { lg: "14px", xl: "24px" },
              borderRadius: "100%",
              background: "#3eb9d4",
            }}>
            -
          </Button>
          <Typography
            sx={{
              fontSize: { lg: "1.15rem", xl: "1.9rem" },
              fontWeight: "700",
            }}>
            2
          </Typography>
          <Button
            variant="contained"
            sx={{
              minHeight: { lg: "24px", xl: "40px" },
              minWidth: { lg: "24px", xl: "40px" },
              padding: 0,
              fontSize: { lg: "14px", xl: "24px" },
              borderRadius: "100%",
              background: "#3eb9d4",
            }}>
            +
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            width: { lg: "11rem", xl: "19.8rem" },
            height: { lg: "2.75rem", xl: "4.5rem" },
            background: "#3eb9d4",
            borderRadius: "10px",
          }}>
          {
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { lg: "18px", xl: "28px" },
                textTransform: "initial",
              }}>
              Add to Meal
            </Typography>
          }
        </Button>
      </Box>
    </Box>
  );
}

export default AddToMeal;
