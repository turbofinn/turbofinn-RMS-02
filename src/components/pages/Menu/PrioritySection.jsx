import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import line from "../../../assets/Image/horizontalLine2.png";
import lineWeb from "../../../assets/Image/lineWeb.png";
import nonVeg from "../../../assets/Image/yourPriority/Non Veg.png";
import pureVeg from "../../../assets/Image/yourPriority/Pure Veg.png";
import specialty from "../../../assets/Image/yourPriority/Speciality .png";
import todaysSpecial from "../../../assets/Image/yourPriority/Todays Special.png";
import Container from "@mui/material/Container";

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

function PrioritySection() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: 4, lg: 5 }, px: { xs: 2, lg: 3 } }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Typography
          // variant="subtitle1"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "13px", lg: "16px" },
            marginLeft: { lg: "35px" },
          }}
        >
          YOUR PRIORITY
        </Typography>
        <Box
          component="span"
          sx={{
            flexGrow: 0.8,
            height: "1px",
            background:
              "linear-gradient(to right, rgba(90, 90, 90, 0.47), rgba(255, 255, 255, 1))",
            marginLeft: { xs: "5px" },
          }}
        />
      </Box>
      <Grid container spacing={2}>
        {priorities.map((priority, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Paper
              sx={{
                p: { xs: 1, lg: 2 },
                background: priority.gradient,
                borderRadius: "13px",
                display: "flex",
                alignItems: "center",
                boxShadow: "none",
                height: { lg: "100px" },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: priority.titleColor,
                    fontSize: { xs: "1rem", lg: "1.25rem" },
                    fontWeight: 800,
                  }}
                >
                  {priority.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: priority.subtitleColor,
                    fontSize: { xs: "0.75rem", lg: "1rem" },
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
                  height: isLargeScreen ? "110px" : "65px",
                  marginLeft: "8px",
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PrioritySection;
