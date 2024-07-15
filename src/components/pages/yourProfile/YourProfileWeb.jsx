import React from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
    Checkbox,
    FormControlLabel,
    Container,
    Grid
} from "@mui/material";
import profileImage from "../../../assets/Image/profileImage.png";
import edit from "../../../assets/Image/Edit.png";
import { Edit } from "@mui/icons-material";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '35%',
    bgcolor: 'white',
    boxShadow: 24,
    height: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
    px: 2,
    py:3,
    borderRadius: '1rem',
    border: '2px solid #dddd',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};
const YourProfileWeb = () =>{
    return (
        <React.Fragment>
                <Box sx={style}>
                    <Box style={{ textAlign: 'center', marginTop: '0rem', position: 'relative' }}>
                        <img src={profileImage} alt="logo" style={{
                            border: '0.6rem solid #40A0B5',
                            borderRadius: '50%',
                            padding: '0.4rem',
                            width:'11rem'
                        }} />
                        <img src={edit} alt="edit" style={{
                            position: 'absolute',
                            bottom: '20%',
                            width:'2rem',
                            left:'62%',
                            backgroundColor:'white',
                            padding:'0.4rem',
                            borderRadius:'35%',
                            border:'1px solid #1F6857'
                        }} />
                    </Box>

                    <table style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '85%',
                        padding: '0rem',
                    }}>
                        <tbody>
                            <tr style={{ }}>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600, }}>Name:</th>
                                <td>
                                    <input type="text" style={{ width: '100%', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor:'rgb(0, 0, 0, 0.04)' }} value={"Vāsudeva-Krishna"} />
                                </td>
                            </tr>
                            <tr style={{ }}>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Number:</th>
                                <td>
                                    <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor:'rgb(0, 0, 0, 0.04)' }} value={"+91 9*****88"} />
                                </td>
                            </tr>
                            <tr style={{ }}>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Gender:</th>
                                <td>
                                    <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor:'rgb(0, 0, 0, 0.04)' }}>
                                        <option style={{ fontSize: '0.8rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem' }} value="">Select</option>
                                        <option style={{ fontSize: '0.8rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem' }} value="Male">Male</option>
                                        <option style={{ fontSize: '0.8rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem' }} value="Female">Female</option>
                                    </select>
                                </td>
                            </tr>
                            <tr style={{ }}>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>DOB:</th>
                                <td>
                                    <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor:'rgb(0, 0, 0, 0.04)' }} value={"18/07/3228"} />
                                </td>
                            </tr>
                            <tr style={{ }}>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Email:</th>
                                <td>
                                    <input type="text" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor:'rgb(0, 0, 0, 0.04)' }} value={"None"} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Box style={{textAlign:'center'}}>
                        <button style={{
                            width: '60%',
                            padding: '0.6rem 0rem',
                            borderRadius: '3rem',
                            backgroundColor: '#41A2B8',
                            color: "white",
                            border: '0px solid #41A2B8', 
                            fontSize:'1.3rem',
                            fontWeight:500,
                            color:'rgb(255, 255, 255 ,0.88)',
                            fontFamily:'Poppins',
                            // marginTop:'1rem'
                        }}>
                            Save
                        </button>
                    </Box>

                </Box>
        </React.Fragment>
    )
}

export default YourProfileWeb;