import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import line from "../../../assets/Image/horizontalLine2.png";
import nonVeg from "../../../assets/Image/yourPriority/Non Veg.png";
import pureVeg from "../../../assets/Image/yourPriority/Pure Veg.png";
import specialty from "../../../assets/Image/yourPriority/Speciality .png";
import todaysSpecial from "../../../assets/Image/yourPriority/Todays Special.png";

function PrioritySection() {
  const priorities = [
    {
      title: "Today's",
      subtitle: "Special",
      gradient:
        "linear-gradient(to right, rgba(251, 235, 245, 1), rgba(255, 255, 255, 1))",
      titleColor: "rgba(225, 54, 143, 1)",
      subtitleColor: "rgba(225, 54, 143, 1)",
      image: todaysSpecial,
    },
    {
      title: "SPECIALTY",
      subtitle: "Premium",
      gradient:
        "linear-gradient(to right, rgba(254, 246, 233, 1), rgba(255, 255, 255, 1))",
      titleColor: "rgba(203, 130, 16, 1)",
      subtitleColor: "rgba(208, 129, 11, 1)",
      image: specialty,
    },
    {
      title: "Vegetarian",
      subtitle: "Premium",
      gradient:
        "linear-gradient(to right, rgba(240, 236, 251, 1), rgba(255, 255, 255, 1))",
      titleColor: "rgba(101, 64, 231, 1)",
      subtitleColor: "rgba(117, 84, 231, 1)",
      image: pureVeg,
    },
    {
      title: "NON-VEG",
      subtitle: "Premium",
      gradient:
        "linear-gradient(to right,  rgba(237, 248, 244, 1), rgba(255, 255, 255, 1))",
      titleColor: "rgba(26, 166, 117, 1)",
      subtitleColor: "rgba(35, 163, 116, 1)",
      image: nonVeg,
    },
  ];

  return (
    <Box
      sx={{
        marginTop: "4.5%",
        fontWeight: 500,
        fontSize: "13px",
        marginX: "15px",
      }}
    >
      <Box>
        YOUR PRIORITY
        <img
          src={line}
          style={{
            alignItems: "center",
            marginBottom: "5px",
            marginLeft: "20px",
          }}
          alt="line"
        />
      </Box>
      <Grid container spacing={2} sx={{ marginTop: "0.67%" }}>
        {priorities.map((priority, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Paper
              sx={{
                p: 1,
                background: priority.gradient,
                color: "white",
                borderRadius: "13px",
                zIndex: "-1",
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <Box sx={{ flexGrow: 1, }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: priority.titleColor,
                    fontSize: "1rem",
                    fontWeight: 800,
                  }}
                >
                  {priority.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: priority.subtitleColor,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  {priority.subtitle}
                </Typography>
              </Box>
              <img
                src={priority.image}
                alt={priority.title}
                style={{
                  // width: "74px",
                  height: "65px",
                  marginLeft: "8px",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PrioritySection;
