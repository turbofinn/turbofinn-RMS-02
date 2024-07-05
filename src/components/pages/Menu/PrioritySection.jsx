import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import line from "../../../assets/Image/horizontalLine2.png";

function PrioritySection() {
  const priorities = [
    { title: "Today's", subtitle: "Special", color: "#ff4081" },
    { title: "SPECIALTY", subtitle: "Premium", color: "#ff9800" },
    { title: "Vegetarian", subtitle: "Premium", color: "#8bc34a" },
    { title: "NON-VEG", subtitle: "Premium", color: "#f44336" },
  ];

  return (
    <>
      <Box sx={{ marginTop: "31px", fontWeight: 500, fontSize: "13px" }}>
      <Box >
         YOUR PRIORITY
       
          <img src={line} style={{alignItems:'center'}}/>
        </Box>
        <Grid container spacing={2}>
          {priorities.map((priority, index) => (
            <Grid item xs={6} key={index}>
              <Paper
                sx={{ p: 1, backgroundColor: priority.color, color: "white" }}
              >
                <Typography variant="h6">{priority.title}</Typography>
                <Typography variant="subtitle2">{priority.subtitle}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default PrioritySection;
