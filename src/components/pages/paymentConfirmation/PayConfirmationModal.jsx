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
import Modal from '@mui/material/Modal';
import { Height } from "@mui/icons-material";
import logo from "../../../assets/Image/logo.png";
import tick from "../../../assets/Image/tick.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PayConfirmationModalWeb from "./PayConfirmationModalWeb";
import zIndex from "@mui/material/styles/zIndex";
const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'white',
    boxShadow: 24,
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: 2,
    paddingTop:'2rem',
    paddingBottom:'4rem',
    borderRadius: '1rem',
    border: '2px solid #dddd',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    zIndex:9999
};

const PayConfirmationModal = () => {
    const theme = useTheme();
    const aspect = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <React.Fragment>
            {!aspect ? 

            <Box sx={style}>

                <Box style={{ textAlign: 'center', marginTop:'2rem' }} >
                    <img src={logo} alt="logo" />
                </Box>

                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',alignItems: 'center' }} >

                    <Box style={{ marginLeft: 'auto', marginRight: 'auto', border: '1px solid #dddd', backgroundColor: 'rgba(41, 173, 203, 0.14)', padding: '2rem', display: 'flex',justifyContent: 'center', alignItems: 'center', width: '10rem', height: '10rem',borderRadius: '50%', border: '1px solid #29ADCB', marginTop: '2rem' }} >

                        <img src={tick} alt="tick" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', borderRadius: '50%', backgroundColor: 'rgb(0, 147, 70,0.78)', width: '8rem', height: '8rem' }} />

                    </Box>

                    <Box>

                        <Typography style={{ color: '#107086', fontWeight: 700, fontSize: '1.9rem', textAlign: 'center', marginTop: '2rem' }} >
                            Your Order Is Successfully Placed
                        </Typography>

                        <Typography style={{ color: 'black', fontWeight: 700, textAlign: 'center', fontSize: '1rem', marginTop: '1.5rem' }} >
                            Your Meal Will Served In Some Time
                        </Typography>

                    </Box>

                </Box>
                
            </Box>
            :
            <PayConfirmationModalWeb/>
            }
        </React.Fragment>
    )
}

export default PayConfirmationModal;