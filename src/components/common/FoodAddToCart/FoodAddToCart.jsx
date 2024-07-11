import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import line2 from "../../../assets/Image/Line 5.png";
import image from "../../../assets/Image/meal/dal-bati-churma.png";

const menuItem = [
  { name: "Dal Bati Churma", image: image, isVegetarian: true },
  { name: "Dal Bati Churma", image: image, isVegetarian: true },
  { name: "Dal Bati Churma", image: image, isVegetarian: true },
  { name: "Dal Bati Churma", image: image, isVegetarian: true },
  { name: "Dal Bati Churma", image: image, isVegetarian: true },
  { name: "Dal Bati Churma", image: image, isVegetarian: true },
];

export default function FoodAddToCart() {
  const theme = useTheme();
  const isWebView = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Container maxWidth="lg" sx={{ px: isWebView ? 4 : 2 }}>
      <Grid
        container
        spacing={isWebView ? 3 : 2}
        sx={{ alignItems: "center", px: { xs: -2 } }}
      >
        {menuItem.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                mb: { lg: 2 },
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                marginTop: { lg: "0.5rem" },
                // width:'354px',
                height: "236px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <CardMedia
                  component="img"
                  height="236px"
                  image={item.image}
                  alt={item.name}
                  sx={{ position: "relative" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                      "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "16px",
                    color: "white",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: item.isVegetarian
                          ? "rgba(132, 255, 145, 1)"
                          : "red",
                        mr: 1,
                        fontSize: "20px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {item.isVegetarian ? "●" : "●"}
                      <text
                        style={{
                          color: "white",
                          fontSize: "12px",
                          fontWeight: 500,
                        }}
                      >
                        {" "}
                        {item.isVegetarian
                          ? "VEGETARIAN"
                          : "NON-VEGETARIAN"}{" "}
                      </text>
                    </Typography>
                  </Box>
                  <img
                    src={line2}
                    style={{
                      width: "231px",
                      height: "1px",
                      display: "flex",
                      justifyContent: "center",
                      marginLeft: "3rem",
                    }}
                  />
                  <CardContent
                    sx={{
                      padding: "8px 16px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 10,
                        left: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="button"
                        sx={{
                          fontWeight: 600,
                          color: "white",
                          fontSize: "0.875rem",
                        }}
                      >
                        + ADD TO CART
                      </Typography>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
