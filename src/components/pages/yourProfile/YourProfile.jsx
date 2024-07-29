import React,{useState,useEffect}  from "react";
import { Box, Typography, TextField, IconButton, Button, Checkbox, FormControlLabel, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import profileImage from "../../../assets/Image/profileImage.png";
import edit from "../../../assets/Image/Edit.png";
import YourProfileWeb from "./YourProfileWeb";
import api from "../../../services/apiServices"

const style = { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '90%', bgcolor: 'white', boxShadow: 24, minHeight:'70%', height:'fit', marginLeft: 'auto', marginRight: 'auto', px: 2, py: 3, borderRadius: '1rem', border: '2px solid #dddd', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', zIndex:9999 };


const YourProfile = (props) => {

    const theme = useTheme();

    const aspect = useMediaQuery(theme.breakpoints.up("md"));

    const user={

    mobileNo: "7985257933",
    action: "fetch"

  }

   const [formData, setFormData] = useState({
    name: 'Enter Your Name',
    number: 'Add phone number',
    gender: '',
    dob: '',
    email: 'Add email address',
  });


  useEffect(()=>{

    try{

      api.getUserDetails(user).then((response) => {

        if(response.response.responseCode=== 1001)
        {
          setFormData(
            {
                name:response.user.userName,
                number:response.user.mobileNo,
                email:response.user.email  
            })
        }
        else
        {
          console.log("Error Occured")
        }

      })

    }
    catch(error){

      console.log("Error occured in data", error)

    }
    
  },[])

   const updateData=(params)=>{
    try{
        api.updateUserDetails(params).then((response)=>{

            if(response.response.responseCode===1001){

                console.log(response.data)
                console.log('Data updated successfully')
            }
            else
            {
                console.log("Data update unsuccessfully")
                console.log(response.response.responseCode)
            }
            
        })
    }
    catch(error){

        console.log("Couldn't update data",error)
        throw error
    }
  }


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const saveUpdate=()=>{
    const requestData={ 

        mobileNo:formData.number, 
        action:"update",
        newDetails:
        {
        userName:formData.name,
        email:formData.email
        }
    }

    updateData(requestData)
  }


    return (
        <React.Fragment>

            {!aspect ?

                <Box sx={style}>

                    <Box style={{ textAlign: 'center', marginTop: '0rem', position: 'relative' }}>

                        <img src={profileImage} alt="logo" style={{ border: '0.6rem solid #40A0B5', borderRadius: '50%', padding: '0.4rem' }} />

                        <img src={edit} alt="edit" style={{ position: 'absolute', bottom: '20%', width: '2rem', left: '70%', backgroundColor: 'white', padding: '0.4rem', borderRadius: '35%', border: '1px solid #1F6857' }} />

                    </Box>

                    <table style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', padding: '0rem'}}>

                        <tbody>

                            <tr>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Name:</th>

                                <td>

                                    <input type="text" style={{ width: '100%', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor: 'rgb(0, 0, 0, 0.04)' }} name='name' value={formData.name} onChange={handleChange} />

                                </td>

                            </tr>

                            <tr>

                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Number:</th>

                                <td>
                                    <input type="tel" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor: 'rgb(0, 0, 0, 0.04)' }} name="number" value={formData.number} onChange={handleChange}  />

                                </td>

                            </tr>

                            <tr>
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Gender:</th>

                                <td>

                                    <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor: 'rgb(0, 0, 0, 0.04)', }}name='gender' value={formData.gender} onChange={handleChange}>

                                        <option style={{ fontSize: '0.8rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem' }} value="" >
                                            Select
                                        </option>

                                        <option style={{ fontSize: '0.8rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem' }} value="Male" >
                                            Male
                                        </option>

                                        <option style={{ fontSize: '0.8rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem' }} value="Female" >
                                            Female
                                        </option>

                                    </select>

                                </td>

                            </tr>

                            <tr>
                                
                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }} >DOB:</th>

                                <td>
                                    <input type="date" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor: 'rgb(0, 0, 0, 0.04)' }}  name='dob' value={formData.dob} onChange={handleChange} />
                                </td>

                            </tr>

                            <tr>

                                <th style={{ textAlign: "start", padding: '0.7rem 0.6rem', fontWeight: 600 }}>Email:</th>

                                <td>

                                    <input type="email" style={{ width: '100%', padding: '0.5rem', borderRadius: '0.3rem', border: '2px solid #41A1B6', color: 'rgb(0,0,0,0.72) ', fontSize: '1rem', fontFamily: 'Poppins', fontWeight: 500, padding: '0.3rem 0.5rem', backgroundColor: 'rgb(0, 0, 0, 0.04)' }}  name="email" value={formData.email} onChange={handleChange} />

                                </td>

                            </tr>

                        </tbody>

                    </table>

                    <Box style={{ textAlign: 'center' }}>

                        <button style={{ width: '60%', padding: '0.6rem 0rem', borderRadius: '3rem', backgroundColor: '#41A2B8', color: "white", border: '0px solid #41A2B8', fontSize: '1.3rem', fontWeight: 500, color: 'rgb(255, 255, 255 ,0.88)', fontFamily: 'Poppins', marginTop:'1rem' }}
                        onClick={()=>{ props.setEdit(false) }} >
                            Save
                        </button>

                    </Box>
                    
                </Box>
                :
                <Box>
                    <YourProfileWeb setEdit={props.setEdit}/>
                </Box>
            }

        </React.Fragment>
    )
}

export default YourProfile;