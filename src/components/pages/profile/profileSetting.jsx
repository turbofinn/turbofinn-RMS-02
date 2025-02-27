import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import profilePicture from "../../../assets/Image/profile/profilePicture.png";
import editIcon from "../../../assets/Image/profile/editIcon.png";
import logoutIcon from "../../../assets/Image/profile/logoutIcon.png";
import editProfileIcon from "../../../assets/Image/profile/editProfileIcon.png";
import helpIcon from "../../../assets/Image/profile/helpIcon.png";
import historyIcon from "../../../assets/Image/profile/orderHistoryIcon.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavBar from "../../common/NavBar/NavBar.jsx";
import NavBarBottom from "../../common/NavBar/NavBarBottom.jsx";
import backgroundImage from "../../../assets/Image/profile/backgroundProfile.png";
import ProfileEdit from "../yourProfile/YourProfile.jsx";
import api from '../../../services/apiServices.js'

const ProfileSettings = () => {

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const [edit, setEdit] = useState(false);

  const [dataFetched, setDataFetched] = useState(false);

  const [editProfilePicture, setEditProfilePicture] = useState(false);

  const [dp,setDp]=useState(profilePicture)

  const hiddenInputRef=useRef(null)

  const [userName,setUserName]=useState('Add user name')

  const [userNumber,setUserNumber]=useState('Add phone number')

  const handleDpEditClick=()=>{

    setEditProfilePicture(true)

  }

  const handleUploadFromMedia=()=>{

    hiddenInputRef.current.click();
    setEditProfilePicture(false)

  }

  const handleDpEdit=(e)=>{

    const file=e.target.files[0]
    setDp(URL.createObjectURL(file))

  }

 const user={

    mobileNo: "7985257933",
    action: "fetch"

  }

  const displayUserDetails= (name,mob) => {

    setUserName(name)
    setUserNumber(mob)

  }

  useEffect(()=>{

    try{

      api.getUserDetails(user).then((response) => {

        if(response.response.responseCode=== 1001)
        {
          displayUserDetails(response.user.userName, response.user.mobileNo)
          setDataFetched(true)
        }
        else
        {
          console.log("Error Occured")
          setDataFetched(false)
        }

      })

    }
    catch(error){

      console.log("Error occured in data", error)

    }
    
  })

  const Navigate = useNavigate();

  return (
    <>

      {edit ? <ProfileEdit setEdit={setEdit} /> : <></>}

      {matches ? <NavBar /> : <></>}

      <Container
        maxWidth={false}
        disableGutters
        sx={{ backgroundColor: "white", minHeight: "100vh", padding: 0, display: "flex", flexDirection: "column", overflowX: "hidden",
          "&:before": { content: '""', position: "absolute", top: "-50px", left: 0, right: 0, bottom: 420, backgroundImage: { xs: `url(${backgroundImage})`, lg: "none" }, backgroundSize: "cover", backgroundPosition: "center top", backgroundRepeat: "no-repeat", zIndex: 0, } }} >

        <Box sx={{ color: "white", padding: 2, display: "flex", alignItems: "center", justifyContent: "center",
            "@media (max-width: 800px)": { width: "100%", height: "103px", top: "0px", borderRadius: "0px 0px 22px 22px", position: "relative", background: "linear-gradient(to right, rgba(83, 204, 231, 0.2), rgba(43, 168, 196, 0.2))" }, 
            "@media (min-width: 800px)": { width: "100%", height: "150px", borderRadius: "0px 0px 22px 22px", background: "linear-gradient(180deg, #53CCE7 0%, #2BA8C4 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" } }} >

            <Box sx={{ display: { xs: "flex", lg: "none" }, border: "2px solid rgba(255, 255, 255, 1)", backgroundColor: "rgba(255, 255, 255, 1)", width: "33px", height: "33px", position: "absolute", left: "27px", gap: "0px", borderRadius: "8px 8px 8px 8px", opacity: "1", color: "white", alignItems: "center", justifyContent: "center" }} >

            <ArrowBackIcon
              onClick={() => {
              Navigate("/menu");
              }} 
              sx={{ color: "rgba(31, 104, 87, 1)" }} 
            />

          </Box>

          <Typography variant="h6" component="div" 
              sx={{ flexGrow: 1, textAlign: "center", fontFamily: "Poppins, sans-serif",
              "@media (min-width: 800px)": { fontSize: "40px", fontWeight: 700, marginTop: "5px", color: "rgba(255, 255, 255, 1)" },
              "@media (max-width: 800px)": { fontSize: "25px", fontWeight: 500, lineHeight: "22.5px", color: "rgba(0, 0, 0, 1)" } }} >
            Profile Settings
          </Typography>

        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 4, position: { xs: "relative", lg: "relative" }, marginTop: { lg: "22px" } }} >

          <Box sx={{ position: "relative", marginBottom: 1 }}>

            <Avatar src={dp} sx={{ position: "relative",objectFit:'contain', width: { xs: 198, md: 200 }, height: { xs: 198, md: 200 }, border: "8px solid #20B2AA", top: { xs: 0, sm: "auto" }, left: { xs: 0, sm: "auto" }, borderRadius: { xs: "97.5px 97.5px 97.5px 97.5px", sm: "50%" }, background: { xs: "linear-gradient(133.07deg, #40A0B5 14%, #409FB4 49.71%, rgba(65, 161, 182, 0.76) 85.42%)", lg: "none" }, opacity: 1 }} />

            <Box onClick={handleDpEditClick}
              onChange={handleDpEdit}
              size="small"
              sx={{ position: "relative", justifyContent: "center", alignContent: "center", bottom: { xs: 50, lg: 40 }, right: { xs: -157, lg: -150 }, backgroundColor: "white", padding: 0.5, borderRadius: 10, border: "1px solid rgba(31, 104, 87, 1.5)", width: { xs: "27px", lg: "27px" }, height: { xs: "27px", lg: "27px" }, cursor:'pointer' }} >

              <img src={editIcon} alt="editIcon" style={{ width: "17px" }} />

              <input ref={hiddenInputRef} type="file" style={{display:'none'}}></input>

            </Box>


          </Box>

          {editProfilePicture?
          
           <Box sx={{ position:'absolute', width:'22rem', height:'14rem', background:"linear-gradient(180deg, #53CCE7 0%, #2BA8C4 100%)", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem', borderRadius:'11px'}}>

            <Typography sx={{ fontSize:'1.5rem', cursor:'pointer', color:'white', fontWeight:'600', 
              '&:hover':{color:'#e7f1f6'} }} >
                Use Camera
            </Typography>

            <Typography button sx={{fontSize:'1.5rem',cursor:'pointer',color:'white',fontWeight:'600', 
              '&:hover':{color:'#e7f1f6'}}} 
              onClick={handleUploadFromMedia} >
                Upload From Gallery 
            </Typography>

            </Box> : ''
          
          }

          <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: "24px", lg: "35px" }, fontWeight: 500,   textAlign: "center", marginTop: "0.5rem" }} >
            {userName}
          </Typography>


          <Typography variant="body2" color="text.secondary" gutterBottom
            sx={{ fontSize: { xs: "16px", lg: "20px" }, fontWeight: 700, textAlign: "center" }} >
            {dataFetched?("+91 "+userNumber[0]+('*'.repeat(6))+userNumber.slice(7)):userNumber}
          </Typography>

          <Grid container sx={{ width: "100%", maxWidth: { xs: 360, lg: "600px" }, backgroundColor: "transparent", marginTop: "20px", marginBottom: "15px", marginX: "auto", display: "flex", flexDirection: { xs: "column", lg: "row" }, flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", gap: 2 }} >

            <Grid item xs={12} lg={4}>

              <ListItem
                sx={{ width: "100%", marginLeft: { lg: -8 },cursor:"pointer"  }}
                onClick={(e) => {
                  setEdit(true);
                }} >

                <ListItemIcon>

                  <IconButton
                    size="small"
                    sx={{ backgroundColor: "white", display: "flex" }} >

                    <img src={editProfileIcon} alt="editProfileIcon" style={{ width: 29, height: 29 }} />

                  </IconButton>

                </ListItemIcon>

                <ListItemText primary="Edit Profile" sx={{
                    "& .MuiListItemText-primary": { fontSize: { xs: "16px", lg: "20px" }, fontWeight: 500 },
                    fontSize: { xs: "16px", lg: "20px" } }} />

              </ListItem>

            </Grid>

            <Grid item xs={12} lg={4}>
              
              <ListItem sx={{ width: "100%", marginLeft: { lg: 10 },cursor:"pointer"  }}
                onClick={() => {
                  Navigate("/history");
                }} >

                <ListItemIcon>

                  <IconButton size="small" sx={{ backgroundColor: "white", display: "flex" }} >

                    <img src={historyIcon} alt="history" style={{ width: 24, height: 24 }} />

                  </IconButton>

                </ListItemIcon>

                <ListItemText primary="History" sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "16px", lg: "20px" },
                      fontWeight: 500,
                    }, fontSize: { xs: "16px", lg: "20px" }, }} />

              </ListItem>

            </Grid>

            <Grid item xs={12} lg={4}>

              <ListItem button sx={{ width: "100%", marginLeft: { lg: -8 },cursor:"pointer"  }}>

                <ListItemIcon>

                  <IconButton size="small" sx={{ backgroundColor: "white", display: "flex", marginLeft: -0.7 }} >
                    <img src={helpIcon} alt="helpIcon" style={{ width: 35, height: 35 }} />

                  </IconButton>

                </ListItemIcon>

                <ListItemText primary="Help" sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: { xs: "16px", lg: "20px" }, fontWeight: 500 } }} 
                />

              </ListItem>

            </Grid>

            <Grid item xs={12} lg={4}>

              <ListItem  
              onClick={() => {
                  Navigate("/login");
                }} 
                button 
                sx={{ width: "100%", marginLeft: { lg: 10 },cursor:"pointer"  }} >
                <ListItemIcon>

                  <IconButton size="small" sx={{ backgroundColor: "white", display: "flex" }} >
                    <img src={logoutIcon} alt="Logout" style={{ width: 28, height: 28 }} />
                  </IconButton>

                </ListItemIcon>

                <ListItemText primary="Log Out" sx={{ fontSize: {
                      "& .MuiListItemText-primary": {
                        fontSize: { xs: "16px", lg: "20px" }, fontWeight: 500, }, xs: "16px", lg: "20px" },
                        background: "linear-gradient(to right, rgba(251, 110, 43, 0.76), rgba(225, 59, 53, 0.76))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} />
              </ListItem>

            </Grid>

          </Grid>

        </Box>

        <Typography sx={{ marginTop: -5, marginBottom: 5, padding: 2, textAlign: "center", display: { xs: "block", md: "none" }, fontWeight: 500, fontsize: "16px" }} >
          Version 1.0245
        </Typography>

      </Container>

      {matches ? <></> : <NavBarBottom />}

    </>

  );
};

export default ProfileSettings;
