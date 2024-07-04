import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';

function MenuItems() {
  const menuItem = {
    name: 'Dal Bati Churma',
    image: 'path_to_dal_bati_churma_image.jpg',
    isVegetarian: true,
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardMedia
        component="img"
        height="200"
        image={menuItem.image}
        alt={menuItem.name}
      />
      <CardContent>
        <Typography variant="h6">{menuItem.name}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography
            variant="body2"
            sx={{
              color: menuItem.isVegetarian ? 'green' : 'red',
              mr: 1,
            }}
          >
            {menuItem.isVegetarian ? '● VEGETARIAN' : '● NON-VEGETARIAN'}
          </Typography>
          <Button variant="contained" color="primary">
            ADD TO CART
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default MenuItems;