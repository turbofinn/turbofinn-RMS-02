import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import vid1 from "../../../assets/GIF/special.gif"
import img2 from '../../../assets/Image/selectOne/cardImg/Beverages.png'
import img3 from "../../../assets/Image/selectOne/cardImg/dineIn.jpg";
import img4 from "../../../assets/Image/TakeAway.png";
import bg from "../../../assets/Image/selectOne/bg_food4.png";

function Categories2() {
  const categories1 = [
    {
      title: "Today's Special",
      image: `${vid1}`,
    },
    {
      title: "Beverages",
      image: `${img2}`,
    },
  ];
  const categories2 = [
    {
      title: "Dine In Menu",
      image: `${img3}`,
    },
    {
      title: "Take away",
      image: `${img4}`,
    },
  ];
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom,rgba(73,195,222,1),rgba(73, 195, 222, 0.95),rgba(73, 195, 222, 0.775),rgba(73, 195, 222, 0.57),rgba(73, 195, 222, 0.59)),url(${bg})`,
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#49c3de",
        position:'relative'
      }}>
      <Box
        sx={{
          width: "full",
          display: "flex",
          flexDirection: "column",
        }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "800",
            textAlign: "center",
            marginBlockStart: "4rem",
          }}>
          L<span style={{ color: "#138da8" }}>O</span>G
          <span style={{ color: "#138da8" }}>O</span>
        </Typography>
        <Box sx={{ paddingInline: "2.8rem" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "2.25rem",
              fontWeight: "700",
              color: "white",
              marginBlockStart: "3rem",
            }}>
            Select One
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "1.35rem", fontWeight: "700", color: "white" }}>
            Categories
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "1rem",
              fontWeight: "500",
              color: "rgba(255,255,255,0.71)",
              paddingBlockStart: "0.7rem",
            }}>
            Select anyone of the categories to proceed
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingInline: "2rem",
            gap: "20px",
            marginBlockStart: "2rem",
          }}>
          {categories1.map((elem, i) => {
            return (
              <Card
                sx={{
                  height: "11.5rem",
                  width: "10rem",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                  flexWrap: "wrap",
                }}>
                <CardMedia
                  sx={{
                    height: "60%",
                    objectFit: "cover",
                    marginBlockStart: "12px",
                    marginInline: "22px",
                  }}
                  image={elem.image}
                  title={elem.title}></CardMedia>
                <CardContent sx={{ paddingInline: "0" }}>
                  <Typography
                    sx={{
                      fontSize: "8px",
                      letterSpacing: 1.75,
                      fontWeight: "600",
                      lineHeight: "10.4px",
                      color: "rgba(82,82,82,1)",
                      marginInlineStart: "1.3rem",
                      marginBlockStart: "-4px", 
                    }}>
                    {" "}
                    EXPLORE ALL
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: "800",
                      lineHeight: "19.5px",
                      marginBlockStart: "5px",
                      marginInlineStart: "1.2rem",
                      color:'rgba(65,66,68,1)',
                    }}>
                    {elem.title}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingInline: "2rem",
            gap: "20px",
            marginBlockStart: "20px",
            marginBlockEnd: "80px",
          }}>
          {categories2.map((elem, i) => {
            return (
              <Card
                sx={{
                  height: "11.5rem",
                  width: "10rem",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                  flexWrap: "wrap",
                }}>
                <CardMedia
                  sx={{
                    height: "60%",
                    objectFit: "contain",
                    marginBlockStart: "12px",
                    marginInline: "22px",
                  }}
                  image={elem.image}
                  title={elem.title}></CardMedia>
                <CardContent sx={{ paddingInline: "0" }}>
                  <Typography
                    sx={{
                      fontSize: "8px",
                      letterSpacing: 1.75,
                      fontWeight: "600",
                      lineHeight: "10.4px",
                      color: "rgba(82,82,82,1)",
                      marginInlineStart: "1.3rem",
                      marginBlockStart: "-4px",
                    }}>
                    {" "}
                    EXPLORE ALL
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "0.95rem",
                      fontWeight: "800",
                      lineHeight: "19.5px",
                      marginBlockStart: "5px",
                      marginInlineStart: "1.2rem",
                      color: "rgba(65,66,68,1)",
                    }}>
                    {elem.title}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            bottom: "1rem",
            width: "100%",
            textAlign: "center",
          }}>
          <Typography
            sx={{ fontWeight: "700", fontSize: "1rem", color: "white" }}>
            A Product Of TurboFinn AI
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Categories2;
