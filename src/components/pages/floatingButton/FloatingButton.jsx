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
import timerGIF from "../../../assets/GIF/timerGIF.gif";
import { Height } from "@mui/icons-material";
const FloatingButton = () => {
    return (
        <React.Fragment>
            <Button style={{ backgroundColor:'white', padding:'0.5rem', border:'1px solid #dddd', width:'50%', borderRadius:'0.5rem', fontWeight:600, textAlign:'center'}}>Order Status X</Button>
            <Box
                style={{
                    background: `url(${timerGIF})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '6rem',
                    height: '6rem',
                    borderRadius: '50%',
                    boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.6)'
                }}>
            </Box>

        </React.Fragment>
    )
}

export default FloatingButton;