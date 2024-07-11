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
import DalBatiChurma from "../../../assets/Image/meal/dal-bati-churma.png";
import plus from "../../../assets/Image/plus.png";
import minus from "../../../assets/Image/minus.png";
import plusBlack from "../../../assets/Image/plusBlack.png";
const AddToMealBoxWeb = () => {
    return (
        <React.Fragment>
            <Box sx={{
                maxWidth: "lg", height: "20%", borderRadius: '1.5rem', alignContent: 'center', justify: 'center', alignItems: 'center', maxWidth: '70%', marginLeft: 'auto', marginRight: 'auto', border: '1px solid #dddd', marginTop: '2rem'
            }}>
                <Box sx={{
                    height: "20%", borderRadius: '1.5rem', alignContent: 'center', justify: 'center', alignItems: 'center', padding: '1rem', marginLeft: 'auto', marginRight: 'auto', borderBottom: '1px solid #dddd', bgcolor: '#F8F8FF'
                }}>
                    <Typography style={{ textAlign: 'end', color: '#E95160', fontSize: '0.8rem', fontWeight: 600 }}>Remove</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={3} style={{
                            // border: '1px solid #dddd' 
                        }}>
                            <img
                                src={DalBatiChurma}
                                alt="Dal Bati Churma"
                                style={{
                                    borderRadius: '50%',
                                    width: '22vh',
                                    height: '22vh',
                                    objectFit: 'cover',
                                    marginTop: '-0.8rem',
                                    marginBottom: 'auto',
                                    marginTop: 'auto',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    marginLeft: '1.5rem'
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} style={{
                            // border: '1px solid #dddd', 
                            // display: 'flex',
                            // flexDirection: 'column',
                            // justifyContent: 'center',
                            // alignItems: 'center',
                        }}>
                            <Box style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Box style={{ backgroundColor: '#84FF91', width: '0.7rem', height: '0.7rem', borderRadius: '50%', marginRight: '12px' }}></Box>
                                <Typography variant="p" style={{ fontSize: '0.8rem', color: '#525252', fontWeight: 600 }}>VEGETARIAN</Typography>
                            </Box>

                            <Typography style={{ fontSize: '1.5rem', fontWeight: 600 }}>Dal Bati Churma</Typography>
                            <Typography style={{ fontSize: '0.9rem', fontWeight: 500, color: '#383838' }}>Legacy Of Rajasthan</Typography>
                            <Typography style={{ fontSize: '0.8rem', fontWeight: 600, color: '#767676' }}>Dal baati churma is a dish that includes baati, pure ghee, daal (lentils) and many more. It is very popular in the state of Rajasthan.</Typography>
                            <Box style={{ display: 'flex', marginTop: '1rem' }}>
                                <Typography style={{ borderRight: '1px solid black', paddingRight: '0.8rem', fontSize: '0.9rem', fontWeight: 500, color: '#525252' }}>Check Similar Dish</Typography>
                                <Typography style={{ borderLeft: '1px solid black', paddingLeft: '0.8rem', fontSize: '0.9rem', fontWeight: 500, color: '#525252' }}>Add Food Pair</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3} style={{
                            // border: '1px solid #dddd', 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Box style={{ marginTop: 'auto', marginBottom: 'auto' }}>
                                <Box style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                                    <Typography style={{ color: '#525252', fontSize: '1.1rem' }}>Serving :</Typography>

                                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', border: '1px solid gray', borderRadius: '3.5rem', maxWidth: '34%', paddingLeft: '3rem', paddingRight: '3rem' }}>
                                        <img src={minus} alt="minus" style={{ height: '0.8rem' }} />
                                        <Typography style={{ fontSize: '1rem', fontWeight: 500, opacity: 0.67, }}>01</Typography>
                                        <img src={plus} alt="plus" style={{ height: '0.8rem' }} />
                                    </Box>
                                </Box>

                                <Box style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.8rem' }}>
                                    <Typography style={{ fontSize: '1rem', color: '#525252', fontWeight: 500 }}>Total Cost :</Typography>
                                    <Typography style={{ fontSize: '1rem', color: '#000000', fontWeight: 600 }}>₹ 70</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box style={{ paddingTop: '1rem', paddingLeft: '2rem', paddingRight: '2rem', paddingBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography style={{ color: '#2A3143', fontWeight: 600, fontSize: '1rem' }}>Add an Note:</Typography>
                        <Typography style={{ color: '#596174', fontWeight: 500 }}>Required changes for your food</Typography>
                    </Box>
                    <img src={plusBlack} alt="plusBlack" />
                </Box>
            </Box>

        </React.Fragment>
    )
}

export default AddToMealBoxWeb;