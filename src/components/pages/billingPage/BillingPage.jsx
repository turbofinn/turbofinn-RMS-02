import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Box,
  Container,
} from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import StarIcon from "@mui/icons-material/Star";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../../common/NavBar/NavBar";
import NavBarBottom from "../../common/NavBar/NavBarBottom.jsx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const BillPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        {matches ? <NavBar /> : <></>}
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7.5}>
              <Card
                sx={{
                  bgcolor: "#4dabf5",
                  color: "white",
                  mb: 2,
                  maxWidth: "833px",
                  padding: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "@media (max-width: 800px)": {
                    width: "100%",
                    height: "103px",
                    top: "0px",
                    borderRadius: "0px 0px 22px 22px",
                    position: "relative",
                    background:
                      "linear-gradient(to right, rgba(83, 204, 231, 0.2), rgba(43, 168, 196, 0.2))",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6">Bill & Orders</Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: "833px" }}>
                <CardContent>
                  <Grid container alignItems="center">
                    <Grid item xs={8}>
                      <Typography variant="subtitle1" sx={{ color: "green" }}>
                        VEGETARIAN
                      </Typography>
                      <Typography variant="h6">Dal Bati Churma</Typography>
                      <Typography variant="body2">
                        Cost Per Serving: ₹70
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                        }}
                      >
                        <IconButton size="small">
                          <RemoveIcon />
                        </IconButton>
                        <Typography sx={{ mx: 1 }}>01</Typography>
                        <IconButton size="small">
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography align="right">Total Cost: ₹70</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4.5}>
              <Box
                sx={{
                  maxWidth: "485px",
                  height: "364px",
                  boxShadow: "0 0 9.5px 0 rgba(0,0,0,0.25)",
                  borderRadius: "15px",
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
              >
                <Box
                  sx={{
                    width: "90%",
                    marginInline: "auto",
                    marginTop: "0.5rem",
                    marginBlockEnd: "3.75rem",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      fontWeight: "600",
                      color: "rgba(0, 0, 0, 1)",
                      marginTop: "2rem",
                    }}
                  >
                    Grand Total
                  </Typography>
                  <div
                    style={{
                      height: "1px",
                      background: "#000",
                      width: "377px",
                      margin: "0 auto 1rem auto",
                      justifyContent: "center",
                    }}
                  ></div>

                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "end",
                      gap: "1rem",
                      marginBottom: "0rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "1.75rem", md: "2.25rem" },
                        fontWeight: "600",
                        height: "5.5rem",
                      }}
                    >
                      ₹
                    </Typography>
                    <Typography
                      sx={{
                        background:
                          "linear-gradient(270deg, #EE0979 0%, #F42C4E 54.5%, #FF6A00 92%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight: "500",
                        fontSize: { xs: "5rem", md: "6rem" },
                      }}
                    >
                      700
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "1rem",
                    }}
                  >
                    <Button
                      style={{
                        width: "48%",
                        border: "1px solid rgba(70, 157, 177, 1)",
                        textTransform: "capitalize",
                        fontSize: "1rem",
                        color: "rgba(70, 157, 177, 1)",
                        borderRadius: "0.5rem",
                      }}
                    >
                      Pay Later
                    </Button>
                    <Button
                      variant="contained"
                      style={{
                        width: "48%",
                        backgroundColor: "rgba(70, 157, 177, 1)",
                        color: "white",
                        fontSize: "20px",
                        textTransform: "capitalize",
                        height: "3.5rem",
                        borderRadius: "0.5rem",
                      }}
                    >
                      Pay Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {matches ? <></> : <NavBarBottom />}
    </>
  );
};

export default BillPage;
