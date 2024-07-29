import React from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Box,
  Container,
  Paper,
} from "@mui/material";
import NavBar from "../../common/NavBar/NavBar";
import NavBarBottom from "../../common/NavBar/NavBarBottom.jsx";
import VegOrNon from "../../common/vegOrNon/VegOrNon.jsx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import img1 from "../../../assets/Image/meal/DalBatiChurma.png";
import { ArrowBackIos, Cancel, Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const orderedDish = [

  { img: img1, name: "dal bati churma", vegornot: "vegetarian", costPerServing: 70, serving: "01" },
  { img: img1, name: "dal bati churma", vegornot: "vegetarian", costPerServing: 70, serving: "02" },
  { img: img1, name: "dal bati churma", vegornot: "vegetarian", costPerServing: 70, serving: "03" }
  
];


const BillPage = () => {

  const Navigate = useNavigate()

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const totalCost = orderedDish.reduce(
    (acc, dish) => acc + dish.costPerServing * parseInt(dish.serving),
    0
  );

  return (

    <Container
      maxWidth={false}
      disableGutters
      sx={{ backgroundColor: "white", minHeight: "100vh", padding: 0, display: "flex", flexDirection: "column", overflowX: "hidden" }} >

      {matches && <NavBar />}

      <Box sx={{ p: { xs: 0, md: 4 } }}>

        <Grid container>

          <Grid item xs={1} />

          <Grid
            item xs={12} md={6}
            sx={{marginRight: { xs: 0, md: 3 },marginTop: { xs: 0, md: "1rem" },paddingRight: { xs: 0, md: 2 }, paddingLeft: { xs: 0, md: 0 } }}
          >
            <Card
              sx={{ color: "white", mb: 2, maxWidth: "100%", padding: 2, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "auto", minHeight: "103px", borderRadius: "0px 0px 22px 22px", position: "relative", background: "linear-gradient(180deg, #53CCE7 0%, #2BA8C4 100%)" }} >

              <CardContent sx={{ width: "100%", padding: "16px !important" }}>

                <Box sx={{ color: "white", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", padding: "0 1rem" }} >

                  {!matches && 
                    <ArrowBackIos  
                    onClick={()=>{
                      Navigate("/yourmealcart");
                    }} sx={{ marginLeft: -3.5 }} />                    
                  }

                  <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center", fontFamily: "Poppins, sans-serif", fontSize: { xs: "25px", md: "32px" }, fontWeight: { xs: 500, md: 600 }, lineHeight: { xs: "22.5px", md: "normal" }, color: "rgba(255, 255, 255, 1)" }} >
                    Bill & Orders

                    <div style={{ height: "2px", background: "rgba(70, 157, 177, 1)", width: !matches ? "130px" : "100%", maxWidth: !matches ? "239px" : "377px", margin: "0 auto", marginTop: 5 }}/>

                  </Typography>

                  {!matches && 
                    <Cancel  
                    onClick={()=>{
                      Navigate("/menu");
                    }} sx={{ marginRight: -3.5 }} />
                  }

                </Box>

              </CardContent>

            </Card>

            <Box sx={{ display: "flex", justifyContent: "center", marginX: 2.5, marginTop: { xs: 3.5, md: 0 } }} >

              <Grid container justifyContent="center">

                <Grid item xs={12} md={12}>

                  {orderedDish.map((elem, i) => (

                    <Paper key={i} sx={{ width: "100%", height: "9.5rem", marginBottom: { xs: "1rem", md: "2rem" }, borderRadius: "15px" }} >

                      <Paper sx={{ height: "68%", width: "100%", borderRadius: "15px", paddingInline: "2.25rem" }} >

                        <Box sx={{ display: "flex", flexDirection: "column", paddingBlock: "0.6rem", gap: "0.5rem", position: "relative" }} >

                          <Box sx={{ position: "absolute", right: 0, top: "0.6rem", display: "flex", flexDirection: "column", alignItems: "flex-end" }} >

                            <Button sx={{color:'white',fontSize: { xs: "10px", md: "12px" },fontWeight: "500",textTransform: "none",padding: "0",minWidth: "0",marginBottom: "0.5rem",marginRight: { xs: -2, md: 0 } }}>
                              .
                            </Button>

                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "10rem", marginRight: { xs: -2, md: 0 } }} >

                              <Typography noWrap sx={{ color: "rgba(82,82,82,1)", fontWeight: "300", fontSize: { xs: "0.4rem", md: "0.9rem" } }} >

                                {matches ? "Serving :" : ""}

                              </Typography>

                              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,0.48)", borderRadius: "66px", width: { xs: "4rem", md: "4.75rem" }, paddingInline: "0.5rem", marginLeft: "0.5rem" }} >

                                <Typography sx={{ textAlign: "center", fontSize: { xs: "0.8rem", md: "1rem" }, fontWeight: "500", color: "rgba(0, 0, 0, 0.67)", lineHeight: "20.5px" }} >
                                  {elem.serving}
                                </Typography>

                              </Box>

                            </Box>

                          </Box>

                          <Box sx={{ display: "flex", gap: "1rem" }}>
                            <img src={elem.img} alt={elem.name} style={{ height: !matches ? "87px" : "5.5rem", width: !matches ? "60px" : "5.5rem", borderRadius: !matches ? "35px" : "50%", marginLeft: !matches ? "-23px" : 0, objectFit: "cover" }} />

                            <Box>

                              <VegOrNon txtSize={matches ? "0.8rem" : "0.5rem"} txtValue={elem.vegornot} txtCol="#525252" txtWeight={600} space="0.25rem" />

                              <Typography sx={{ textTransform: "capitalize", fontSize: { xs: "1rem", md: "1.5rem" }, fontWeight: "600" }} >
                                {elem.name}
                              </Typography>

                              <Typography sx={{ fontWeight: "300", fontSize: { xs: "0.7rem", md: "0.9rem" }, lineHeight: "18.2px", marginTop: { xs: "1.5rem", md: 0 } }} >
                                Cost Per Serving : ₹ {elem.costPerServing}
                              </Typography>

                            </Box>

                          </Box>

                        </Box>

                        <Box sx={{ width: "100%", height: "32%", position: "relative" }} >

                          <Box sx={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2.5rem" }} />

                        </Box>

                      </Paper>

                      <Box sx={{ width: "100%", height: "32%", position: "relative" }}>

                        <Box sx={{ position: "absolute", right: 55, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2.5rem" }}>

                          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", width: "8.5rem" }} >

                            <Typography noWrap sx={{ fontSize: "0.875rem", fontWeight: "400", color: "rgba(82,82,82,1)", marginRight: "0.5rem" }} >
                              Total Cost :
                            </Typography>

                            <Typography noWrap sx={{ fontSize: "0.95rem", fontWeight: "500" }} >
                              ₹ {elem.costPerServing * parseInt(elem.serving)}
                            </Typography>

                          </Box>

                        </Box>

                      </Box>

                    </Paper>

                  ))}

                </Grid>

              </Grid>

            </Box>
            
          </Grid>

          <Grid item xs={12} md={4}>

            <Box sx={{ maxWidth: "485px", height: "364px", boxShadow: "0 0 9.5px 0 rgba(0,0,0,0.25)", borderRadius: "15px", justifyContent: "center", marginTop: "1rem", marginX: "1.5rem", marginBottom: "5rem" }} >

              <Box sx={{ width: "90%", marginInline: "auto", marginTop: "0.5rem", marginBlockEnd: "3.75rem", alignContent: "center", textAlign: "center" }} >

                <Typography sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, fontWeight: "600", color: "rgba(0, 0, 0, 1)", marginTop: "2rem" }} >
                  Grand Total
                </Typography>

                <div style={{ height: "1px", background: "#000", width: matches ? "277px" : "170px", margin: "0 auto 1rem auto", justifyContent: "center" }} />

                <Box sx={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "end", gap: "1rem", marginBottom: "0rem" }} > 

                  <Typography sx={{ fontSize: { xs: "1.75rem", md: "2.25rem" }, fontWeight: "600", height: "5.5rem" }} >
                    ₹
                  </Typography>

                  <Typography sx={{ background: "linear-gradient(270deg, #EE0979 0%, #F42C4E 54.5%, #FF6A00 92%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "500", fontSize: { xs: "5rem", md: "6rem" } }} >
                    {totalCost}
                  </Typography>

                </Box>

                <Box sx={{ marginX: "1.5rem", display: "flex", justifyContent: "space-between", marginTop: "1rem"}} >

                  <Button style={{ width: "48%", border: "1px solid rgba(70, 157, 177, 1)", textTransform: "capitalize", fontSize: "1rem", color: "rgba(70, 157, 177, 1)", borderRadius: "0.5rem" }}
                    onClick={() => {
                      Navigate("/menu");
                    }} >
                    Pay Later
                  </Button>

                  <Button variant="contained" style={{ width: "48%", backgroundColor: "rgba(70, 157, 177, 1)", color: "white", fontSize: "20px", textTransform: "capitalize", height: "3.5rem",        borderRadius: "0.5rem" }}
                    onClick={() => {
                      Navigate("/paymentmethod");
                    }} >
                    Pay Now
                  </Button>

                </Box>

              </Box>

            </Box>

          </Grid>

        </Grid>

      </Box>

      {!matches && <NavBarBottom />}

    </Container>
  );
};

export default BillPage;
