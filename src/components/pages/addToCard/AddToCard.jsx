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
import burder from "../../../assets/Image/burger.png";
import toast from "../../../assets/Image/toast.png";
import DalBatiChurma from "../../../assets/Image/meal/dal-bati-churma.png";
import plus from "../../../assets/Image/plus.png";
import minus from "../../../assets/Image/minus.png";
const AddTocard = () => {
    return (
        <Container sx={{ maxWidth: "lg", height: "20%", border: '1px solid gray', borderRadius: '1.5rem', alignContent: 'center', justify: 'center', alignItems: 'center', padding: '1rem', maxWidth:'95%', marginLeft: 'auto',
            marginRight: 'auto', boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)', marginTop:'10px' }}>

            <Typography style={{ textAlign:'end', color:'#E95160', fontWeight:600 }}>Remove</Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}
                    sx={{
                        margin: 0,
                        padding: 0,
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}
                >
                    <img
                        src={DalBatiChurma}
                        alt="Dal Bati Churma"
                        style={{
                            borderRadius: '50%',
                            width: '12vh',
                            height: '12vh',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>
                <Grid item xs={8} style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft:'2rem'
                }}>
                    <Box style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Box style={{ backgroundColor: '#84FF91', width: '0.6rem', height: '0.6rem', borderRadius: '50%', marginRight: '12px' }}></Box>
                        <Typography variant="p" style={{ fontSize: '12px', color: '#525252' }}>VEGETARIAN</Typography>
                    </Box>
                    <Typography variant="h6" style={{ fontWeight: 600 }}>Dal Bati Churma</Typography>

                    <Box style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography style={{ color: '#525252', fontSize: '1.1rem' }}>Serving :</Typography>

                        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.2rem', border: '1px solid gray', borderRadius: '3.5rem', width: '35%', paddingLeft: '3.5rem', paddingRight: '3.5rem' }}>
                            <img src={minus} alt="minus" style={{ height: '20px' }} />
                            <Typography style={{ fontSize: '1.5rem', fontWeight: 500, opacity: 0.67, }}>01</Typography>
                            <img src={plus} alt="plus" style={{ height: '20px' }} />
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Typography style={{ fontSize: '1.3rem', color: '#525252', fontWeight: 500 }}>Total Cost :</Typography>
                        <Typography style={{ fontSize: '1.3rem', color: '#000000', fontWeight: 600 }}>₹ 70</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default AddTocard;