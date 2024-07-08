import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import img1 from "../../../assets/Image/selectOne/cardImg/takeaway.jpg";
import img2 from "../../../assets/Image/selectOne/cardImg/Beverages.svg";
import img3 from "../../../assets/Image/selectOne/cardImg/dineIn.jpg";
import img4 from "../../../assets/Image/selectOne/cardImg/takeaway.jpg";
import bg from "../../../assets/Image/selectOne/bg_food4.png";

function Categories2() {
  const categories = [
    {
      title: "Today's Special",
      image: `${img1}`,
    },
    {
      title: "Beverages",
      image: `${img2}`,
    },
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
        backgroundImage: `linear-gradient(to bottom,rgba(73,195,222,1),rgba(73, 195, 222, 0.936),rgba(73, 195, 222, 0.750),rgba(73, 195, 222, 0.600),rgba(73, 195, 222, 0.500),rgba(73, 195, 222, 0.300)),url(${bg})`,
        minHeight: "100vh",
        backgroundColor: "#49c3de",
        backgroundSize: "60rem",
      }}>
      <Box
        sx={{
          width: "full",
          display: "flex",
          flexDirection: "column",
          paddingInline: "10.75rem",
          height: "62vh",
        }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: "4rem",
            fontWeight: "800",
            textAlign: "center",
            marginBlockStart: "6.5rem",
          }}>
          L<span style={{ color: "#138da8" }}>O</span>G
          <span style={{ color: "#138da8" }}>O</span>
        </Typography>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "white",
              marginBlockStart: "10.5rem",
            }}>
            Select One
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontSize: "2.25rem", fontWeight: "700", color: "white" }}>
            Categories
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: "2rem",
              fontWeight: "500",
              color: "rgba(255,255,255,0.71)",
              width: "40%",
              paddingBlockStart: "1.75rem",
            }}>
            Select anyone of the categories to proceed
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center",paddingInline:'16.4rem',gap:'30px' }}>
        {categories.map((elem,i)=>{
            return (
              <Card
                sx={{
                  height: "19.25rem",
                  width: "16.7rem",
                  borderRadius: "15px",
                  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
                }}>
                <CardMedia
                  sx={{
                    height: "62%",
                    objectFit: "contain",
                    marginBlockStart: "20px",
                    marginInline: "38px",
                  }}
                  image={elem.image}
                  title=""></CardMedia>
                <CardContent sx={{}}>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      letterSpacing: 2.75,
                      fontWeight: "600",
                      lineHeight: "16.9px",
                      color: "rgba(82,82,82,1)",
                      marginInlineStart: "17.5px",
                    }}>
                    {" "}
                    EXPLORE ALL
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      lineHeight: "31.2px",
                      marginBlockStart: "8px",
                      marginInlineStart: "13px",
                    }}>
                    {elem.title}
                  </Typography>
                </CardContent>
              </Card>
            );
        })}
      </Box>
    </Box>
  );
}

export default Categories2;
