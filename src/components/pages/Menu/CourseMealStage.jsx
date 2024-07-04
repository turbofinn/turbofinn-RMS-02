import React from 'react';
import { Box, Chip } from '@mui/material';

function CourseMealStage() {
  const stages = ['Appetizer', 'Fer-Start', 'Starter', 'Appetizer'];

  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', mb: 2 }}>
      {stages.map((stage, index) => (
        <Chip
          key={index}
          label={stage}
          sx={{ mr: 1, mb: 1 }}
          color={index === 0 ? 'primary' : 'default'}
        />
      ))}
    </Box>
  );
}

export default CourseMealStage;