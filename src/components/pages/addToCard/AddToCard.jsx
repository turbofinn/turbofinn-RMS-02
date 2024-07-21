import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Container,
    Grid
} from "@mui/material";
import { useState, useEffect } from "react";
import Header from "../../common/Header/Header.jsx";
import AddToMealBox from "../../common/AddToCardBox/AddToMealBox.jsx";
import SmallMealBox from "../../common/SmallMealBox/SmallMealBox.jsx";
import AddToMealBoxWeb from "../../common/AddToCardBox/AddToMealBoxWeb.jsx";
import FoodAddToCart from "../../common/FoodAddToCart/FoodAddToCart.jsx";
import NavBar from "../../common/NavBar/NavBar.jsx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PayConfirmationModal from "../paymentConfirmation/PayConfirmationModal.jsx";
import ThanksModal from "../thanksPage/ThanksModal.jsx";
// import { useNavigate } from "react-router-dom";
// const Navigate = useNavigate();
const AddTocard = () => {
    const theme = useTheme();
    const aspect = useMediaQuery(theme.breakpoints.up("md"));
    const [ success, setSuccess] = useState(false);
    const [ thanks, setThanks] = useState(false);
    // const Navigate = useNavigate();
    
    useEffect(()=>{
        if(success){
            setTimeout(()=>{
               setThanks(true);
               setSuccess(false);
            },3000);  
        }
    })
    return (
        <React.Fragment>
            {
              success && (
                <PayConfirmationModal/>
              )
            }
            {
              thanks && (
                <ThanksModal/>
              )
            }
            {!aspect ?

                <Box>
                    <Header />
                    <AddToMealBox />

                    <Typography style={{ color: '#525252', fontSize: '1rem', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto0', marginTop: '1rem' }}>Add More Combinations</Typography>

                    <SmallMealBox />

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
                                width: '90%',
                                padding: '0.75rem 3.75rem',
                                fontSize: '1.3rem',
                                '&:hover': {
                                    backgroundColor: '#0A343D',
                                },
                                borderRadius: '2rem',
                                marginTop: '4vh'
                            }}
                            onClick={()=>{
                                setSuccess(true);
                            }}
                        >
                            Order Now
                        </Button>
                    </Box>
                </Box> :

                <Box>
                    <NavBar />
                    <Header />
                    <AddToMealBoxWeb />
                    <Typography style={{ fontSize: '0.8rem', fontWeight: 600, maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3rem' }}>Add More Combinations</Typography>
                    <img />

                    <FoodAddToCart />

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // border: '1px solid #dddd',
                            marginTop: '2rem',
                            marginBottom: '2rem'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid #dddd',
                                width: '50%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                justifyContent: 'space-between',
                                borderRadius: '3rem',
                                paddingLeft: '3rem',
                                boxShadow: '0px 0px 1rem #dddd'
                            }}
                        >
                            <Box style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Typography
                                    style={{
                                        fontSize: '1.2rem',
                                        color: '#525252',
                                        fontWeight: 500,
                                        // border: '1px solid #dddd',
                                    }}
                                >
                                    Total Bill :
                                </Typography>
                                <Typography
                                    style={{
                                        fontSize: '1.2rem',
                                        color: '#000000',
                                        fontWeight: 600,
                                        // border: '1px solid #dddd',
                                    }}
                                >
                                    ₹ 70
                                </Typography>
                            </Box>
                            <Box style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Button
                                    sx={{
                                        textTransform: 'none',
                                        backgroundColor: '#469DB1',
                                        color: 'white',
                                        padding: '0.75rem 6.5rem',
                                        fontSize: '1.3rem',
                                        '&:hover': {
                                            backgroundColor: '#0A343D',
                                        },
                                        borderRadius: '2rem',
                                        width: '100%',
                                    }}
                                >
                                    Order Now
                                </Button>
                            </Box>
                        </Box>
                    </Box>


                </Box>
            }

        </React.Fragment>
    )
}

export default AddTocard;