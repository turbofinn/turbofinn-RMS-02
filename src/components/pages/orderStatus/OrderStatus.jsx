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
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import OrderStatusWeb from "./OrderStatusWeb";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'white',
    boxShadow: 24,
    height: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: 2,
    paddingTop: '2rem',
    paddingBottom: '4rem',
    borderRadius: '1.5rem',
    border: '2px solid #dddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'linear-gradient(to bottom, #53CCE7, #2BA8C4)',
};

const OrderStatus = () => {
    const theme = useTheme();
    const aspect = useMediaQuery(theme.breakpoints.up("md"));

    const renderTime = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return (
            <Box >

                <Typography variant="h4" style={{ color: 'rgba(0, 0, 0, 0.80)', fontSize: '3.8rem', fontWeight: 600, textAlign: 'center', marginTop: '20%', fontFamily: 'Poppins' }}>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </Typography>

                <Typography style={{ fontSize: '0.7rem', textAlign: 'center', maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto', color: 'rgba(0,0,0,0.86)', fontWeight: 600, fontFamily: 'Poppins' }}>
                    Food Preparing In Progress
                </Typography>
                
            </Box>
        );
    };
    const timerProps = {
        size: 230,
        strokeWidth: 12,
        trailColor: '#dddd'
    };

    return (
        <React.Fragment>
            {!aspect ?
                <Box sx={style}>
                    <Box style={{ color: 'white', textAlign: 'center' }}>

                        <Typography style={{ textAlign: 'end' }}> Close  X </Typography>

                        <Typography style={{ color: 'rgba(0,0.0,0.86)', fontWeight: 600, fontSize: '1.2rem' }}> 
                            Order Status 
                        </Typography>

                        <Typography style={{ fontWeight: 700, fontSize: '1.5rem', marginTop: '1.5rem' }}> 
                            ‘Bon appetit’
                        </Typography>

                        <Typography style={{ fontWeight: 600, fontSize: '1.2rem', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto', color: 'rgba(255,255,255,0.8)', marginTop: '0.5rem' }}>
                            Your Order Is In Process To Be Served.
                        </Typography>

                        <Typography style={{ fontWeight: 500, fontSize: '0.9rem', maxWidth: '80%', marginLeft: 'auto', marginRight: 'auto', color: 'rgba(255,255,255,0.86)', marginTop: '1rem' }}>
                            Timer Started
                        </Typography>

                    </Box>

                    <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '50%', width: '17.8rem', marginLeft: 'auto', marginRight: 'auto', padding: '1.8rem', marginTop: '1.5rem' }} >

                        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '50%', width: '13.8rem', marginLeft: 'auto', marginRight: 'auto' }} >

                            <CountdownCircleTimer
                                {...timerProps}
                                isPlaying
                                duration={1600}
                                colors={['#839462', '#839462', '#839462', '#839462']}
                                colorsTime={[420, 300, 120, 0]}
                            >
                                {renderTime}
                            </CountdownCircleTimer>

                        </Box>

                    </Box>

                </Box>
                :
                <OrderStatusWeb />
            }
        </React.Fragment>
    );
};

export default OrderStatus;
