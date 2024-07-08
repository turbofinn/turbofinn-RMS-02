import React from "react";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import vid1 from "../../../assets/Video/special.gif";
import img2 from "../../../assets/Image/selectOne/cardImg/Beverages.svg";
import img3 from "../../../assets/Image/selectOne/cardImg/dineIn.jpg";
import img4 from "../../../assets/Image/selectOne/cardImg/takeaway.jpg";
import bg from "../../../assets/Image/selectOne/bg_food4.png";

function CategoriesWeb() {
  const categories = [
    {
      title: "Today's Special",
      image: `${vid1}`,
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
        width: "100%",
        backgroundColor: "#49c3de",
        backgroundSize: "60rem",
      }}>
      <Box
        sx={{
          width: "full",
          display: "flex",
          flexDirection: "column",
          paddingInline: { md: "9rem", md: "10.75rem" },
          height: "62vh",
        }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { md: "3rem", xl: "4rem" },
            fontWeight: "800",
            textAlign: "center",
            marginBlockStart: { md: "3.5rem", xl: "5.5rem" },
          }}>
          L<span style={{ color: "#138da8" }}>O</span>G
          <span style={{ color: "#138da8" }}>O</span>
        </Typography>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontSize: { md: "2.5rem", xl: "4rem" },
              fontWeight: "700",
              color: "white",
              marginBlockStart: { md: "2.75rem", md: "3.15rem", xl: "8.5rem" },
            }}>
            Select One
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { md: "1.45rem", xl: "2.25rem" },
              fontWeight: "700",
              color: "white",
            }}>
            Categories
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontSize: { md: "1.15rem", xl: "2rem" },
              fontWeight: "500",
              color: "rgba(255,255,255,0.85)",
              maxWidth: { md: "20rem", xl: "41rem" },
              paddingBlockStart: { md: "1rem", xl: "1.75rem" },
            }}>
            Select anyone of the categories to proceed
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingInline: { md: "7rem", md: "11rem", xl: "14rem" },
          gap: { md: "26px", md: "26px", xl: "30px" },
        }}>
        {categories.map((elem, i) => {
          return (
            <Card
              sx={{
                height: { md: "14rem", xl: "19.25rem" },
                width: { md: "12.5rem", xl: "16.7rem" },
                borderRadius: "15px",
                boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
              }}>
              <CardMedia
                sx={{
                  height: { md: "60%", xl: "62%" },
                  objectFit: "contain",
                  marginBlockStart: { md: "14px", xl: "20px" },
                  marginInline: { md: "24px", xl: "38px" },
                }}
                image={elem.image}
                title=""></CardMedia>
              <CardContent sx={{ paddingInline: "0", paddingBlock: "14px" }}>
                <Typography
                  sx={{
                    fontSize: { md: "0.625rem", xl: "0.813rem" },
                    letterSpacing: 2.75,
                    fontWeight: "600",
                    lineHeight: { md: "12.5px", xl: "16.9px" },
                    color: "rgba(82,82,82,1)",
                    marginInlineStart: "24px",
                  }}>
                  {" "}
                  EXPLORE ALL
                </Typography>
                <Typography
                  sx={{
                    fontSize: { md: "1rem", xl: "1.45rem" },
                    fontWeight: "800",
                    lineHeight: { md: "22px", xl: "31.2px" },
                    marginBlockStart: { md: "2px", xl: "8px" },
                    marginInlineStart: "24px",
                    color: '#414244'
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

export default CategoriesWeb;
