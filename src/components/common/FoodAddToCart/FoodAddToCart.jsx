import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import line2 from "../../../assets/Image/Line 5.png";
import image from "../../../assets/Image/meal/dal-bati-churma.png";

export default function FoodAddToCart() {
  const menuItem = {
    name: "Dal Bati Churma",
    image: image,
    isVegetarian: true,
  };

  return (
    <>
      <Card
        sx={{
          mb: 2,
          borderRadius: "15px",
          overflow: "hidden",
          position: "relative",
          marginTop: "0.5rem",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="236px"
            image={menuItem.image}
            alt={menuItem.name}
            sx={{ position: "relative" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "16px",
              color: "white",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {menuItem.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: menuItem.isVegetarian ? "green" : "red",
                  mr: 1,
                }}
              >
                {menuItem.isVegetarian ? "●" : "●"}
                <text
                  style={{ color: "white", fontSize: "10px", fontWeight: 500 }}
                >
                  {" "}
                  {menuItem.isVegetarian ? "VEGETARIAN" : "NON-VEGETARIAN"}{" "}
                </text>
              </Typography>
            </Box>
            <img
              src={line2}
              style={{
                width: "231px",
                height: "1px",
                display: "flex",
                justifyContent: "center",
                marginLeft: "4rem",
              }}
            />
            <CardContent
              sx={{
                padding: "8px 16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  left: 0,
                  right: 0,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="button"
                  sx={{
                    fontWeight: 600,
                    color: "white",
                    fontSize: "0.875rem",
                  }}
                >
                  + ADD TO CART
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </>
  );
}
