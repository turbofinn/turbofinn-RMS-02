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

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import thanks from "../../../assets/GIF/Thanks.gif";
import ThanksModalWeb from "./ThanksModalWeb";
import { useNavigate } from "react-router-dom";
const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '92%',
    bgcolor: 'white',
    boxShadow: 24,
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: 2,
    py: 4,
    borderRadius: '1rem',
    border: '2px solid #dddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex: 9999
};

const ThanksModal = () => {
    const theme = useTheme();
    const aspect = useMediaQuery(theme.breakpoints.up("md"));
    const Navigate = useNavigate();
    return (
        <React.Fragment>
            {!aspect ?

                <Box sx={style}>

                    <Box style={{ textAlign: 'center' }} >

                        <img src={thanks} alt="thanks" style={{ width: '90%' }} />

                    </Box>

                    <Box>

                        <Typography style={{ color: '#107086', fontWeight: 600, fontSize: '1.5em', textAlign: 'center' }} >
                            Thanks For Ordering In Our Restaurant
                        </Typography>

                        <Typography style={{ color: 'black', fontWeight: 600, textAlign: 'center', fontSize: '0.8rem', marginTop: '0.8rem' }}>
                            Your Meal Will Served In Some Time
                        </Typography>

                        <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.1rem' }} >

                            <Button style={{ width: '48%', border: '2px solid #35B1CD ', textTransform: 'capitalize', fontSize: '0.9rem', color: 'black', borderRadius: '0.5rem' }}
                                onClick={() => { Navigate('/menu') }} >
                                Home
                            </Button>

                            <Button variant="contained" color="primary" style={{ width: '48%', backgroundColor: '#35B1CD', color: 'white', fontSize: '0.9rem', textTransform: 'capitalize', height: '3.5rem', borderRadius: '0.5rem' }}
                                onClick={() => { Navigate("/billing") }} >
                                View Bill & Share
                            </Button>

                        </Box>

                    </Box>

                </Box>

                :

                <ThanksModalWeb />

            }
        </React.Fragment >
    )
}

export default ThanksModal;