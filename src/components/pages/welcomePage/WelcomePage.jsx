import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import welcomepage from "../../../assets/Image/welcomepage01.png";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import logo from "../../../assets/Image/logo.png";
const WelcomePage = () => {
    return (
        <Box sx={{ minHeight: "100vh", width: '100vw', fontFamily: "Poppins", position: "relative", overflowY: "auto", fontFamily: 'Poppins' }} >

            <Box sx={{
                background: 'linear-gradient(to top, rgba(73, 195, 222, 0.44) 0%, rgba(73, 195, 222, 0) 100%)', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', overflow: 'hidden', '@media (min-width: 960px)': { display: 'none' }
            }} >

                <Box sx={{ mt: 0 }}>
                    <img src={logo} alt="logo" />
                </Box>

                <Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '2rem' }}>

                        <Box component="img" src={welcomepage} alt="welcomepage" sx={{ width: '100%', maxWidth: '600px', height: 'auto' }} />

                    </Box>

                    <Box sx={{ padding: '24px', width: '100%' }} >

                        <Typography component="h1" sx={{ fontSize: 'calc(1.3em + 1vw + 1vh)', fontWeight:800, marginTop: '3vh' }}>
                            Hey Foodie,
                        </Typography>

                        <Typography component="h1" sx={{ fontSize: '32px', color: '#006075', fontWeight:700, marginTop: '3vh' }} >
                            Welcome To Our Restaurant
                        </Typography>

                        <Typography component="h2" sx={{ fontSize: '20px', color: '#0A343D', fontWeight:700, marginTop: '3vh' }} >
                            Elevate Your Dining Experience.
                        </Typography>

                    </Box>

                </Box>

                <Box sx={{ textAlign: 'center' }}>

                    <Button component={Link} to='/login' sx={{ textTransform: 'none', backgroundColor: '#469DB1', color: 'white', padding: '1rem', width: '90vw', fontSize: '20px', '&:hover': { backgroundColor: '#0A343D' }, borderRadius: '3.5rem', '@media (max-width: 600px)': { padding: '1rem', fontSize: '1.3rem' } }} >
                        Continue Ordering
                    </Button>

                </Box>
                
            </Box>

            <Box sx={{ margin: 0, padding: 0, '@media (max-width: 960px)': { display: 'none' }, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden', position: 'relative', paddingTop: '3rem', paddingBottom: '1rem', background: 'linear-gradient(to top, rgb(73, 195, 222,0.33) 0%, rgb(73, 195, 222, 0) 100%)' }} >

                <Box>
                    <Box sx={{ mt: 0, textAlign: 'center' }}>
                        <img src={logo} alt="logo" />
                    </Box>

                    <Typography component="h3" sx={{ textAlign: 'center', fontWeight: 600, fontSize: '0.9rem', marginTop:'2rem' }} >
                        "Craving Goodness? Order Now and Savor the Flavor!"
                    </Typography>
                </Box>

                <Box style={{ width: '100%' }} >

                    <Grid container spacing={2}>

                        <Grid item xs={8}>

                            <Box sx={{ backgroundImage: `url(${welcomepage})`, backgroundSize: 'cover', height: '60vh', width: '60vw', backgroundPosition: 'center', color: 'white', top: "30%" }} >

                            </Box>

                        </Grid>

                        <Grid item xs={4}>
                            <Box sx={{ padding: '0rem', width: '100%', marginTop: '0vh', marginLeft: '0vh',  }} >

                                <Typography component="h1" sx={{ fontSize: '2.5rem', fontWeight: 700 }} >
                                    Hey Foodie,
                                </Typography>

                                <Typography component="h1" sx={{ fontSize: '2.5rem', color: '#006075', fontWeight: 700, marginTop: '1rem' }}>
                                    Welcome To Our Restaurant
                                </Typography>

                                <Typography component="h2" sx={{ fontSize: '1.5rem', color: '#0A343D', fontWeight: 700, marginTop: '1.5rem' }} >
                                    Elevate Your Dining Experience.
                                </Typography>

                                <Typography component="h2" sx={{ fontSize: '1.25rem', color: '#006075', fontWeight: 700 }} >
                                    With LOGO
                                </Typography>

                                <Box sx={{ textAlign: 'center', marginTop:'1.5rem' }}>

                                    <Button component={Link} to='/login' sx={{ textTransform: 'none', backgroundColor: '#469DB1', width: '70%', color: 'white', padding: '0.8rem', fontSize: '1.1rem', '&:hover': { backgroundColor: '#0A343D' }, borderRadius: '2.5rem', '@media (max-width: 600px)': { padding: '1.5rem', fontSize: '1rem' } }} >
                                        Continue Ordering
                                    </Button>

                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Typography style={{ textAlign: 'center', fontSize: '0.8rem', fontWeight: 600 }}>
                    Created With Turbofinn AI Excellency
                </Typography>
            </Box>
        </Box>
    )
}

export default WelcomePage;