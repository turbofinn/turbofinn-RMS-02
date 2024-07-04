import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

function WhatsInYourMind() {
  const items = [
    { name: 'Rolls', image: 'path_to_rolls_image.jpg' },
    { name: 'Pizza', image: 'path_to_pizza_image.jpg' },
    { name: 'Chinese', image: 'path_to_chinese_image.jpg' },
  ];

  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', mb: 2 }}>
      {items.map((item, index) => (
        <Box key={index} sx={{ mr: 2, textAlign: 'center' }}>
          <Avatar src={item.image} sx={{ width: 80, height: 80, mb: 1 }} />
          <Typography variant="body2">{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default WhatsInYourMind;