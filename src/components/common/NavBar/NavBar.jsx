import React from "react";
import {
    Box,
    Typography,
    Paper,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    Button,
    TextField,
    Container,
} from "@mui/material";
import logo from "../../../assets/Image/logo.png";
import bike from "../../../assets/Image/Navbar/bike.png";
import Group from "../../../assets/Image/Navbar/Group.png";
import dining from "../../../assets/Image/Navbar/dining.png";
import stars from "../../../assets/Image/Navbar/stars.png";
import coffeeMaker from "../../../assets/Image/Navbar/coffeeMaker.png";
import profile from "../../../assets/Image/profile.png";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const Navigate = useNavigate();
    return (
        <React.Fragment>
            <Box style={{
                border: '1px solid #dddd', shadow: '0.5rem', boxShadow: '0px 0px 0.5rem #dddd',
            }}>
                <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', paddingBottom: '1rem', maxWidth: '80%', marginRight: 'auto', marginLeft: 'auto' }} >

                    <Box onClick={()=>{ Navigate('/') }} >
                        <img src={logo} alt="logo" style={{ width: '5rem', cursor:'pointer' }} />
                    </Box>

                    <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', flexWrap: 'wrap' }} >

                        <Box onClick={() => { Navigate('/menu') }} 
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px', cursor:'pointer' }} >

                            <img src={dining} alt="dining" style={{ width: '1.3rem', marginRight: '1rem' }} />
                            <Typography style={{ fontSize: '0.9rem', fontWeight: 500 }} > 
                                Dine In Menu 
                            </Typography>

                        </Box>

                        <Box onClick={() => { Navigate('/menu') }} 
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px', cursor:'pointer' }} >

                            <img src={bike} alt="bike" style={{ width: '1.3rem', marginRight: '1rem' }} />
                            <Typography style={{ fontSize: '0.9rem', fontWeight: 500 }}> Take away </Typography>

                        </Box>

                        <Box onClick={() => { Navigate('/menu') }} 
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px', cursor:'pointer' }} >

                            <img src={coffeeMaker} alt="coffeeMaker" style={{ width: '1.3rem', marginRight: '1rem' }} />
                            <Typography style={{ fontSize: '0.9rem', fontWeight: 500 }}> Beverages </Typography>

                        </Box>

                        <Box onClick={() => { Navigate('/menu') }} 
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px', cursor:'pointer' }} >

                            <img src={stars} alt="stars" style={{ width: '1.3rem', marginRight: '1rem' }} />
                            <Typography style={{ fontSize: '0.9rem', fontWeight: 500 }}> Today’s Special </Typography>

                        </Box>

                        <Box onClick={() => { Navigate('/yourmealcart') }} 
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px', cursor:'pointer' }} >

                            <img src={Group} alt="Group" style={{ width: '1.3rem', marginRight: '1rem' }} />
                            <Typography style={{ paddingTop: '0.2rem', fontSize: '0.9rem', fontWeight: 500 }}> Plate </Typography>

                        </Box>

                        <Box onClick={() => { Navigate('/profile') }} 
                        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '10px', marginLeft: '1.5rem', cursor:'pointer' }} >

                            <img src={profile} alt="Group" style={{ width: '1.5rem', marginRight: '1rem' }} />
                            <Typography style={{ paddingTop: '0.2rem', fontSize: '1rem', fontWeight: 500 }}> Profile </Typography>

                        </Box>

                    </Box>

                </Box>

            </Box>

        </React.Fragment>
    )
}

export default NavBar;