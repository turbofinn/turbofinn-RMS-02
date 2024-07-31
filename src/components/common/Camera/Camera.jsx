import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import {Box,Button,Paper} from '@mui/material'


function ProfilePicture() {
  

  const buttonStyle={

    textTransform: 'none', backgroundColor: '#469DB1', width: {xs:'8rem',md:'10rem'}, color: 'white', padding: '0.75rem', fontSize: {xs:'0.6rem',md:'0.75rem'},  borderRadius: '2.5rem',
    '&:hover': { backgroundColor: '#0A343D' },
    '&:focus': { backgroundColor: '#469DB1' },

  }

  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = () => {

    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

  };

  const retake=()=>{

    setCapturedImage(null)

  }

  return (
    <Paper elevation={6} sx={{width:'75vw', height:{xs:'60vh',md:"90vh"}, backgroundColor:'white', borderRadius:"22px", transform:'translate(-50%,-50%)', position:'absolute', top:'50vh', left:'50vw',alignContent:'center',paddingBottom:'1rem' }}>

      <Box sx={{width:'80%',height:{xs:'35%',md:'50%',lg:'75%'},marginInline:'auto',marginTop:'5vh',display:'flex',justifyContent:'center',alignItems:'center'}}>

        {capturedImage ? 
        (
        <img src={capturedImage} alt="Captured image" style={{height:'100%',marginInline:'auto'}} />
        ) : 
        (

            <Webcam style={{height:'100%',borderRadius:'33px'}} audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />            

        )}

      </Box>

      <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, gap:'.5rem',justifyContent:'center',alignItems:'center', marginInline:'auto',marginTop:'5vh'}}>

        <Button sx={buttonStyle} onClick={retake}>Upload from gallery</Button>
             
        <Button sx={buttonStyle} onClick={capturedImage?retake:capture}>{capturedImage?'Retake':'Capture Photo'}</Button>
        
        {capturedImage?<Button  sx={buttonStyle} onClick={capturedImage?retake:capture}> Save </Button>:<Button disabled  sx={buttonStyle} onClick={capturedImage?retake:capture}> Save </Button>}
        

      </Box>
           
    </Paper>

  );
}

export default ProfilePicture;
