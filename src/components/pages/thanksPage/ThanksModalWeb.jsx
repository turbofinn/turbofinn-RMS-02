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
import thanks from "../../../assets/GIF/Thanks.gif";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '38%',
    bgcolor: 'white',
    boxShadow: 24,
    height: '65vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: 2,
    py: 4,
    borderRadius: '1rem',
    border: '2px solid #dddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    zIndex:9999
};


const ThanksModalWeb = () =>{
    return(
        <React.Fragment>
      
        <Box sx={style}>

            <Box style={{ textAlign:'center'}} >

                <img src={thanks} alt="thanks" style={{ width: '40%'}} />
                
            </Box>

            <Box>
                <Typography style={{ color: '#107086', fontWeight: 600, fontSize: '1.3rem', textAlign: 'center', width:'50%', marginLeft:'auto', marginRight:'auto' }} >
                    Thanks For Ordering In Our Restaurant
                </Typography>

                <Typography style={{ color: 'black', fontWeight: 600, textAlign: 'center', fontSize: '0.8rem', marginTop: '1rem' }} >
                    Your Meal Will Served In Some Time
                </Typography>

                <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }} >

                    <Button variant="contained" color="primary" style={{ width: '48%', backgroundColor: '#35B1CD', color: 'white', fontSize: '0.9rem', textTransform: 'capitalize', height: '3rem', borderRadius: '0.5rem' }}>
                        Order More
                    </Button>

                </Box>

            </Box>

        </Box>

    </React.Fragment >
    )
}

export default ThanksModalWeb;