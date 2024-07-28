import React from "react";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useEffect, useState } from "react";
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
import NavBar from "../../common/NavBar/NavBar.jsx";
import timerGIF from "../../../assets/GIF/timerGIF.gif";
import zIndex from "@mui/material/styles/zIndex.js";
import { BorderBottom } from "@mui/icons-material";



const OrderStatusWeb = () => {
    const Timer = () => {
        const [second, setSeconds] = useState(1600);
        useEffect(() => {
            if (second > 0) {
                const timer = setTimeout(() => setSeconds(second - 1), 1000);
                return () => clearTimeout(timer);
            }
        }, [second]);

        const formatTime = (second) => {
            const minutes = Math.floor(second / 60);
            const remainingSeconds = second % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        };
        return (
            <div>
                <p>{formatTime(second)}</p>
            </div>
        );
    }
    const timerProps = {
        size: 230,
        strokeWidth: 12,
        trailColor: '#dddd'
    };
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
    return (
        <React.Fragment>

            <NavBar />

            <Box style={{ background: 'linear-gradient(to bottom, #53CCE7, #2BA8C4)', color: 'white', textAlign: 'center', paddingBottom:'1rem', paddingTop:'1rem', borderRadius:'0% 0% 1.5rem 1.5rem' }}>

                <Typography style={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    ‘Bon appetit’
                </Typography>

                <Typography style={{ fontWeight: 600, fontSize: '1.2rem', maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto', color: 'rgba(255,255,255,0.86)', marginTop:'1rem' }}>
                    Your Order Is In Process To Be Served.
                </Typography>

                <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem' }} >

                    <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'rgba(167, 218, 206, 1)', borderRadius: '50%', width: '17.8rem', padding: '1.8rem', marginRight:'-5%', zIndex:10 }} >

                        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'white', borderRadius: '50%', width: '13.8rem', background: `url(${timerGIF})`,  backgroundSize: 'cover', backgroundPosition: 'center' }} >

                            <CountdownCircleTimer
                                {...timerProps}
                                isPlaying
                                duration={1600}
                                colors={['#839462', '#839462', '#839462', '#839462']}
                                colorsTime={[420, 300, 120, 0]} >

                                <img src={timerGIF} alt="timerGIF" />

                            </CountdownCircleTimer>

                        </Box>

                    </Box>

                    <Box style={{ backgroundColor: '#E1EDC9', paddingLeft: '5rem', paddingRight: '5rem', paddingTop: '2rem', paddingBottom: '2rem', borderRadius: '2rem', textAlign: 'center', zIndex:5 }} >

                        <Typography style={{ fontSize: '1.2rem', fontWeight: 500, color: '#2D2D2D' }}>
                            Timer Started
                        </Typography>

                        <Typography style={{ fontSize: '3rem', fontWeight: 700, color: 'black' }}>
                            {<Timer initialSeconds={1600} />}
                        </Typography>

                        <Typography style={{ fontSize: '1.1rem', fontWeight: 600, color: '#37B3CE' }}>
                            Your Order Is Taken And Will Start Cooking In A While...
                        </Typography>
                        
                    </Box>
                </Box>
            </Box>



        </React.Fragment>
    )
}

export default OrderStatusWeb;