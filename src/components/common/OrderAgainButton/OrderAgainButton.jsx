import React from 'react'
import {Box,Button,Typography} from '@mui/material'

function OrderAgainButton({rad='11px', h='2.625rem', w='10.625rem',txtSize='1rem' ,txtWeight='600'}) {
  return (
    <Box sx={{width:'100%',margin:'auto'}}>
      <Button
        variant="outlined"
        sx={{
          border: "2.5px solid rgba(84, 176, 173, 1)",
          borderRadius: rad,
          height: h,
          width: w,alignContent:'center'
        }}>
        <Typography
          sx={{
            fontSize: txtSize,
            fontWeight: txtWeight,
            color: "rgb(22, 124, 121)",
            textTransform: "capitalize",
          }}>
          Order Again
        </Typography>
      </Button>
    </Box>
  );
}

export default OrderAgainButton