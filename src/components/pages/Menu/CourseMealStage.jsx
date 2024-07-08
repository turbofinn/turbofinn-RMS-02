import React from "react";
import { Box, Typography } from "@mui/material";
import line from "../../../assets/Image/horizontalLine2.png";
import starter from "../../../assets/Image/sevenCourseMeal/starter.webp";
import soup from "../../../assets/Image/sevenCourseMeal/soup.jpg";
import salad from "../../../assets/Image/sevenCourseMeal/salad.png";
import mainCourse from "../../../assets/Image/sevenCourseMeal/main course.avif";
import dessert from "../../../assets/Image/sevenCourseMeal/dessert.png";
import coldStarter from "../../../assets/Image/sevenCourseMeal/cold starter.jpg";
import appetizer from "../../../assets/Image/sevenCourseMeal/appetizer.jpg";

function CourseMealStage() {
  const stages = [
    {
      name: "Starter",
      image: starter,
    },
    {
      name: "Appetizer",
      image: appetizer,
    },
    {
      name: "Cold Starter",
      image: coldStarter,
    },
    {
      name: "Soup",
      image: soup,
    },
    {
      name: "Salad",
      image: salad,
    },
    {
      name: "Main Course",
      image: mainCourse,
    },
    {
      name: "Dessert",
      image: dessert,
    },
  ];

  return (
    <Box sx={{ marginTop: "4.5%", marginX: "2.45%" }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 500, fontSize: "13px" }}
        >
          EXPLORE 7 COURSE MEAL STAGE
        </Typography>
        <img
          src={line}
          style={{
            marginLeft: "4px",
            marginBottom: "5px",
          }}
          alt="line"
        />
      </Box>
      <Box sx={{ display: "flex", overflowX: "auto" }}>
        {stages.map((stage, index) => (
          <Box
            key={index}
            sx={{
              mr: 2,
              textAlign: "center",
              minWidth: "100px",
              boxShadow: "10px 0px 10px rgba(0, 0, 0, 0.2)",
              borderRadius: "16px",
              padding: "8px",
            }}
          >
            <Box
              sx={{
                width: "74px",
                height: "74px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
                mx: "auto",
              }}
            >
              <img
                src={stage.image}
                alt={stage.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 400, fontSize: "12px" }}
            >
              EXPLORE ALL
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: "14px" }}>
              {stage.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CourseMealStage;
