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

import Header from "../../common/Header/Header.jsx";
import burder from "../../../assets/Image/burger.png";
import toast from "../../../assets/Image/toast.png";
import DalBatiChurma from "../../../assets/Image/meal/dal-bati-churma.png";
import plus from "../../../assets/Image/plus.png";
import minus from "../../../assets/Image/minus.png";
import greaterThanDownSide from "../../../assets/Image/greaterThanDownSide.png";

import AddToMealBox from "../../common/AddToMealBox/AddToMealBox";
import SmallMealBox from "../../common/SmallMealBox/SmallMealBox.jsx";
const AddTocard = () => {
    return (
        <React.Fragment>
            {/* <Box sx={{
                maxWidth: "lg", height: "20%", alignContent: 'center', justify: 'center', alignItems: 'center', maxWidth: '100%', marginLeft: 'auto', marginRight: 'auto'
            }}> */}
            <Header />
            <AddToMealBox />
            
            <Typography style={{ color:'#525252', fontSize:'1rem', maxWidth:'90%', marginLeft:'auto', marginRight:'auto0', marginTop:'1rem'}}>Add More Combinations</Typography>

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
                        fontSize: '1.5rem',
                        '&:hover': {
                            backgroundColor: '#0A343D',
                        },
                        borderRadius: '2rem',
                        marginTop: '4vh'
                    }}
                >
                    Order Now
                </Button>
            </Box>
            {/* </Box> */}
        </React.Fragment>
    )
}

export default AddTocard;