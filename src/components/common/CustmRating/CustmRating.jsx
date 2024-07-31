import React from 'react'
import { Box, Rating, Typography } from '@mui/material'

function CustmRating({ value }) {

  const val = value

  return (
    <Box sx={{}} >

      <Rating name="read-only" value={value} sx={{ color: "rgba(63, 186, 213, 1)", height: "21px" }} precision={0.5} readOnly >
      </Rating>

      <Typography sx={{ fontSize: "0.675rem", fontWeight: "600", color: "rgba(0,0,0,0.64)", marginTop: "-0.25rem", marginLeft: "0.25rem" }} >
        {val} Star Rating
      </Typography>

    </ Box >
  );
}

export default CustmRating