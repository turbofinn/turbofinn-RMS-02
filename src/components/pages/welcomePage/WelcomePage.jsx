import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import welcomepage from "../../../assets/Image/welcomepage01.png";
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
const WelcomePage = () => {
    return (
        <div style={{
            border: '2px solid black'
        }}>
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
                <Box sx={{ mt: 16 }}>
                    <Typography
                        component="h1"
                        sx={{
                            // border: '2px solid black',
                            textAlign: 'center',
                            padding: 0,
                            margin: 0,
                            fontSize: '64px',
                            fontWeight: 800,
                        }}
                    >
                        LOGO
                    </Typography>
                </Box>
                <Box>
                    <img
                        src={welcomepage}
                        alt="welcomepage"
                        style={{
                            width: "98%",
                            maxWidth: "600px"
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        background: 'linear-gradient(to top, rgb(73, 195, 222,0.44) 0%, rgb(73, 195, 222, 0) 100%)',
                        padding: "24px",
                        width: '100%',
                    }}
                >
                    <Typography
                        component="h1"
                        sx={{
                            fontSize: '32px',
                            fontWeight: 700,
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
                        }}
                    >
                        Elevate Your Dining Experience.
                    </Typography>
                    <Box sx={{
                        my: 2,
                        textAlign: 'center'
                    }}>
                        <Button
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
                            }}
                        >
                            Continue Ordering
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    margin: 0,
                    padding: 0,
                    '@media (max-width: 960px)': {
                        display: 'none'
                    }
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
                            // marginTop: '1.5rem'
                        }}
                    >
                        LOGO
                    </Typography>
                </Box>
                {/* <Box>
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
                </Box> */}
                <Grid container spacing={2}
                    sx={{
                        background: 'linear-gradient(to top, rgb(73, 195, 222,0.44) 0%, rgb(73, 195, 222, 0) 100%)',
                        // paddingTop: '3.75rem',
                        // paddingBottom: '4.5rem',
                        // marginTop: '2vh',
                    }}
                >
                    {/* <Grid item xs={8}>
                        <Box
                            sx={{
                                backgroundImage: `url(${welcomepage})`,
                                backgroundSize: 'cover',
                                height: '55vh',
                                width: '55vw',
                                backgroundPosition: 'center',
                                color: 'white',
                                margin: 'auto',
                            }}
                        ></Box>
                    </Grid> */}

                    {/* <Grid item xs={4}>
                        <Box
                            sx={{
                                padding: '1.5rem',
                                width: '100%',
                                margin: '-5rem',
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
                                    marginTop: '2.971vh'
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
                    </Grid> */}
                </Grid>
            </Box>
        </div >
    )
}

export default WelcomePage;
