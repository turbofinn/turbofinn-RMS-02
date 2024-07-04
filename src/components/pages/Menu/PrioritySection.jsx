import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

function PrioritySection() {
  const priorities = [
    { title: "Today's", subtitle: 'Special', color: '#ff4081' },
    { title: 'SPECIALTY', subtitle: 'Premium', color: '#ff9800' },
    { title: 'Vegetarian', subtitle: 'Premium', color: '#8bc34a' },
    { title: 'NON-VEG', subtitle: 'Premium', color: '#f44336' },
  ];

  return (
    <>
    YOUR PRIORITY
    <Grid container spacing={2}>
      {priorities.map((priority, index) => (
        <Grid item xs={6} key={index}>
          <Paper sx={{ p: 1, backgroundColor: priority.color, color: 'white' }}>
            <Typography variant="h6">{priority.title}</Typography>
            <Typography variant="subtitle2">{priority.subtitle}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid></>
  );
}

export default PrioritySection;