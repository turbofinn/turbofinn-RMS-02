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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '92%',
    bgcolor: 'white',
    boxShadow: 24,
    height: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: 2,
    py: 4,
    borderRadius: '1rem',
    border: '2px solid #dddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const ThanksModal = () => {
    const theme = useTheme();
    const aspect = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <React.Fragment>
            {!aspect ? 
            <Box sx={style}>

                <Box style={{ textAlign:'center'}} >
                    <img src={thanks} alt="thanks"
                        style={{
                            width: '80%',
                        }} />
                </Box>

                <Box>
                    <Typography
                        style={{ color: '#107086', fontWeight: 600, fontSize: '1.76em', textAlign: 'center',  }}
                    >Thanks For Ordering In Our Restaurant</Typography>

                    <Typography style={{ color: 'black', fontWeight: 600, textAlign: 'center', fontSize: '1rem', marginTop: '1rem' }}>Your Meal Will Served In Some Time</Typography>

                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
                        <Button variant="contained" color="primary" style={{
                            width: '48%', backgroundColor: '#35B1CD', color: 'white', fontSize: '0.9rem', textTransform: 'capitalize', height: '3.5rem', borderRadius: '0.5rem'
                        }}>View Bill & Share</Button>
                        <Button style={{ width: '48%', border: '2px solid #35B1CD ', textTransform: 'capitalize', fontSize: '0.9rem', color: 'black', borderRadius: '0.5rem' }}>Back</Button>
                    </Box>
                </Box>
            </Box>
            : <ThanksModalWeb/>
            }
        </React.Fragment >
    )
}

export default ThanksModal;