import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import welcomepage from "../../../assets/Image/welcomepage01.png";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
const WelcomePage = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                // display: "flex",
                // flexDirection: "column",
                // alignItems: "center",
                width: '100vw',
                // padding: 2,
                fontFamily: "Poppins",
                position: "fixed",
            }}
        >
            <Box
                sx={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    overflow: 'hidden',
                    borderColor: "black",
                    '@media (min-width: 960px)': {
                        display: 'none'
                    }
                }}
            >
                <Box sx={{ mt: 8 }}>
                    <Typography
                        component="h1"
                        sx={{
                            // border: '2px solid black',
                            textAlign: 'center',
                            padding: 0,
                            margin: 0,
                            fontSize: '64px',
                            fontWeight: 800,
                            // border: '2px solid black'
                        }}
                    >
                        LOGO
                    </Typography>
                </Box>

                <Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        <img
                            src={welcomepage}
                            alt="welcomepage"
                            style={{
                                width: "100%",
                                maxWidth: "600px",
                                // border: '2px solid black',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            background: 'linear-gradient(to top, rgb(73, 195, 222,0.44) 0%, rgb(73, 195, 222, 0) 100%)',
                            padding: "24px",
                            paddingBottom: '7.75vh',
                            width: '100%',
                            // border: '2px solid black'
                        }}
                    >
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: '32px',
                                fontWeight: 700,
                                marginTop: '3vh'
                            }}
                        >
                            Hey Foodie,
                        </Typography>
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: '32px',
                                color: '#006075',
                                fontWeight: 700,
                                marginTop: '3vh'
                            }}
                        >
                            Welcome To Our Restaurant
                        </Typography>
                        <Typography
                            component="h2"
                            sx={{
                                fontSize: '20px',
                                color: '#0A343D',
                                fontWeight: 700,
                                marginTop: '3vh'
                            }}
                        >
                            Elevate Your Dining Experience.
                        </Typography>
                        <Box sx={{
                            my: 2,
                            textAlign: 'center'
                        }}>
                            <Button
                                component={Link}
                                to='/login'
                                sx={{
                                    textTransform: 'none',
                                    backgroundColor: '#469DB1',
                                    color: 'white',
                                    padding: '15px 75px',
                                    fontSize: '20px',
                                    '&:hover': {
                                        backgroundColor: '#0A343D'
                                    },
                                    borderRadius: '32px',
                                    marginTop: '3.5vh',
                                    marginBottom: '3.5vh'
                                }}
                            >
                                Continue Ordering
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    margin: 0,
                    padding: 0,
                    '@media (max-width: 960px)': {
                        display: 'none'
                    },
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    overflow: 'hidden',
                    position: 'relative'
                }}
            >
                <Box>
                    <Typography
                        component="h1"
                        sx={{
                            textAlign: 'center',
                            padding: 0,
                            margin: 0,
                            fontSize: '3rem',
                            fontWeight: 800,
                            marginTop: '3rem'
                        }}
                    >
                        LOGO
                    </Typography>
                    <Typography
                        component="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                        }}
                    >
                        "Craving Goodness? Order Now and Savor the Flavor!"
                    </Typography>
                </Box>
                <Box style={{
                    background: 'linear-gradient(to top, rgb(73, 195, 222,0.44) 0%, rgb(73, 195, 222, 0) 100%)',
                    paddingTop: '3.75rem',
                    paddingBottom: '4.5rem',
                    width: '100%'
                }}>
                    <Grid container spacing={2}
                        sx={{
                            // marginTop: '2vh',
                            // border: '2px solid black'
                        }}
                    >
                        <Grid item xs={8}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${welcomepage})`,
                                    backgroundSize: 'cover',
                                    height: '55vh',
                                    width: '55vw',
                                    backgroundPosition: 'center',
                                    color: 'white',
                                    // position: "absolute",
                                    top: "30%",
                                }}
                            ></Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    padding: '1.5rem',
                                    width: '100%',
                                    marginTop: '-10vh',
                                    marginLeft: '-12vh'
                                }}
                            >
                                <Typography
                                    component="h1"
                                    sx={{
                                        fontSize: '2.5rem',
                                        fontWeight: 700,
                                    }}
                                >
                                    Hey Foodie,
                                </Typography>
                                <Typography
                                    component="h1"
                                    sx={{
                                        fontSize: '2.5rem',
                                        color: '#006075',
                                        fontWeight: 700,
                                        marginTop: '1.5rem'
                                    }}
                                >
                                    Welcome To Our Restaurant
                                </Typography>
                                <Typography
                                    component="h2"
                                    sx={{
                                        fontSize: '1.5rem',
                                        color: '#0A343D',
                                        fontWeight: 700,
                                        marginTop: '3vh'
                                    }}
                                >
                                    Elevate Your Dining Experience.
                                </Typography>
                                <Typography
                                    component="h1"
                                    sx={{
                                        fontSize: '1.25rem',
                                        color: '#006075',
                                        fontWeight: 700,
                                    }}
                                >
                                    With LOGO
                                </Typography>
                                <Box
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button
                                        component={Link}
                                        to='/login'
                                        sx={{
                                            textTransform: 'none',
                                            backgroundColor: '#469DB1',
                                            color: 'white',
                                            padding: '0.75rem 3.75rem',
                                            fontSize: '1rem',
                                            '&:hover': {
                                                backgroundColor: '#0A343D',
                                            },
                                            borderRadius: '2rem',
                                            marginTop: '4vh'
                                        }}
                                    >
                                        Continue Ordering
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>


                    </Grid>

                    <Typography style={{
                        textAlign: 'center',
                        fontSize: '0.875rem',
                        position: 'fixed',
                        bottom: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>Created With Turbofinn AI Excellency</Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default WelcomePage;
