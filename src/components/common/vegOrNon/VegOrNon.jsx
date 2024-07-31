import React from 'react'
import { Typography,Box } from '@mui/material';

function VegOrNon({txtValue,space='0.75rem',txtCol="#000",txtWeight=500,txtSize='11px'}) {
  return (
    <Box sx={{display:'flex',alignItems:'center'}}>
      <div
        style={{
          height: "8px",
          width: "8px",
          borderRadius: "100%",
          background: "#84FF91",
          marginRight: space,
        }}></div>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: txtWeight,
          fontSize: txtSize,
          fontFamily: "Poppins",
          color:txtCol
        }}>
        {txtValue}
      </Typography>
    </Box>
  );
}

export default VegOrNon