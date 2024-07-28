import React from "react";
import { Box, Typography, Container, useMediaQuery, useTheme } from "@mui/material";
import starter from "../../../assets/Image/sevenCourseMeal/starter.webp";
import soup from "../../../assets/Image/sevenCourseMeal/soup.jpg";
import salad from "../../../assets/Image/sevenCourseMeal/salad.png";
import mainCourse from "../../../assets/Image/sevenCourseMeal/main course.avif";
import dessert from "../../../assets/Image/sevenCourseMeal/dessert.png";
import ColdStarter from "../../../assets/Image/sevenCourseMeal/ColdStarter.jpg";
import appetizer from "../../../assets/Image/sevenCourseMeal/appetizer.jpg";

function CourseMealStage() {
  const theme = useTheme();
  const isWebView = useMediaQuery(theme.breakpoints.up("md"));

  const stages = [
    { name: "Appetizer", image: appetizer },
    { name: "PRE-STARTER", image: ColdStarter },
    { name: "STARTER", image: starter },
    { name: "Appetizer", image: soup },
    { name: "Appetizer", image: salad },
    { name: "STARTER", image: mainCourse },
    { name: "Appetizer", image: dessert },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 6 }, px: { xs: 2, md: 3 } }} >

      <Box sx={{ display: "flex", alignItems: "center" }}>

        <Typography variant="subtitle1" sx={{ fontWeight: 500, fontSize: { xs: "13px", md: "16px" }, mb: { xs: 2, md: 3 } }}>
          EXPLORE 7 COURSE MEAL STAGE
        </Typography>

        <Box component="span" sx={{ flexGrow: 1, height: "1px", background: "linear-gradient(to right, rgba(90, 90, 90, 0.47), rgba(255, 255, 255, 1))", marginLeft: "10px", marginTop: { xs: "-15px", lg: "-21px" } }} />

      </Box>

      <Box sx={{ display: "flex", overflowX: "auto", pb: 2, "&::-webkit-scrollbar": { display: "none" }, scrollbarWidth: "none", marginLeft: { lg: "5px" }, paddingLeft: { lg: "30px" } }} >

        {stages.map((stage, index) => (
          <Box key={index} sx={{ mr: { xs: 2, md: 3 }, textAlign: "center", minWidth: { xs: "120px", md: "170px" }, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)", marginTop: "4px", marginLeft: "2px", borderRadius: "16px", padding: { xs: "8px", md: "16px" }, display: "flex", flexDirection: "column", alignItems: "center", bgcolor: "white" }}>

            <Box sx={{ height: { xs: "100px", md: "100px" }, borderRadius: "50%", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", mb: 0 }}>
              <img src={stage.image} alt={stage.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>

            <Typography variant="body2" sx={{ fontWeight: 400, fontSize: { xs: "10px", md: "12px" }, color: "grey.600", mb: 0.5 }}>
              EXPLORE ALL
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: { xs: "14px", md: "16px" } }}>
              {stage.name}
            </Typography>

          </Box>

        ))}

      </Box>

    </Container>
  );
}

export default CourseMealStage;
