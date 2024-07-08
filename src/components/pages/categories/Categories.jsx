import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import img1 from "../../../assets/Image/selectOne/cardImg/takeaway.jpg";
import img2 from "../../../assets/Image/selectOne/cardImg/Beverages.svg";
import img3 from "../../../assets/Image/selectOne/cardImg/dineIn.jpg";
import img4 from "../../../assets/Image/selectOne/cardImg/takeaway.jpg";
import bg from "../../../assets/Image/selectOne/bg_food4.png";

const SelectOne = () => {
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
        backgroundColor: "#48c3de",
        backgroundImage:
          `linear-gradient(to bottom,rgba(73,195,222,1),rgba(73, 195, 222, 0.936),rgba(73, 195, 222, 0.750),rgba(73, 195, 222, 0.600),rgba(73, 195, 222, 0.500),rgba(73, 195, 222, 0.300)),url(${bg})`,

        minHeight: "100vh",
        paddingBlockEnd: { xs: "1rem", lg: 0 },
        backgroundRepeat: "none",
      }}>
      <Grid
        container
        sx={{
          justifyContent: "center",
          height: "100%",
          paddingBlockStart: { xs: "4.5rem", md: "3rem" },
          paddingInline: { sm: "8rem", xs: "2.5rem" },
        }}>
        <Grid
          item
          sx={{
            textAlign: "center",
            marginBlockEnd: { xs: "3.5rem", sm: "7rem" },
          }}
          xs={12}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2.5rem", sm: "2.5rem" },
              fontWeight: "900",
              fontFamily: "Poppins",
            }}>
            LOGO
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            marginBlockEnd: "0.75rem",
          }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "2.5rem",
                textWrap: "nowrap",
                fontFamily: "Poppins",
                fontWeight: "600",
                width: { xs: "100%", sm: "10%" },
              }}
              variant="h1">
              Select One
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: { xs: "1.75rem", sm: " 1.25rem" },
                fontWeight: "600",
                marginBlockEnd: "1rem",
              }}
              variant="h3">
              Categories
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontSize: "1rem",
                fontWeight: "200",
              }}
              paragraph
              variant="subtitle">
              Select any one of the categories to proceed
            </Typography>
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexWrap: { md: "nowrap", xs: "wrap" },
            justifyContent: "center",
            gap: "1.25rem",
            paddingInline: { sm: "8rem" },
          }}>
          {categories.map((elem, i) => {
            return (
              <Card
                sx={{
                  borderRadius: "15px",
                  height: { xs: "11.25rem", sm: "12rem" },
                  width: { xs: "10.1rem", sm: "10.5rem" },
                  padding:{sx:'0.05rem', sm:"0.15rem"},
                  paddingBlockEnd: "0.7rem",
                }}>
                <CardMedia
                  sx={{
                    height: "65%",
                    width: { xs: "75%" },
                    marginInline: "auto",
                  }}
                  image={elem.image}
                  title="takeaway"></CardMedia>
                <CardContent sx={{ height: "30%", width: "100%" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "600",
                      letterSpacing: 2,
                      lineHeight: "10.4px",
                      fontSize: "10px",
                      fontFamily: "Poppins",
                      marginBlockEnd: "0.6rem",
                    }}>
                    Explore All
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "start",
                      fontWeight: "800",
                      fontSize: "16px",
                      letterSpacing: "-0.2%",
                      lineHeight: "1.219rem",
                      fontFamily: "Poppins",
                    }}>
                    {elem.title}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Grid>

        <Grid item xs={12}>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: "700",
              position: "absolute",
              left: "50%",
              bottom: "0px",
              transform: "translateX(-50%)",
            }}
            paragraph
            variant="subtitle">
            A Product of TurboFinn AI
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SelectOne;
