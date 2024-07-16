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
import triangle from "../../../assets/Image/Triangle.png";
import zIndex from "@mui/material/styles/zIndex";
const FloatingButton = () => {
    return (
        <React.Fragment>
            <Box style={{position:'fixed', bottom:'4rem', right:'1rem', zIndex:'9999'}}>
                <Box style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button style={{
                        backgroundColor: '#469DB1',
                        padding: '0.5rem',
                        border: '1px solid #dddddd',
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: 'white',
                        width:'10rem'
                    }}>
                        Pay Now
                    </Button>
                    <Button style={{
                        backgroundColor: 'white',
                        padding: '0.5rem',
                        border: '1px solid #dddddd',
                        borderRadius: '0.5rem',
                        fontWeight: 600,
                        textAlign: 'center',
                        textTransform: 'capitalize',
                        color: 'black',
                        width:'10rem',
                        marginTop:'0.5rem'
                    }}>
                        Order Status X
                    </Button>
                    <img src={triangle} alt="triangle" style={{ marginTop: '-0.3rem' }} />
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
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default FloatingButton;