import React from "react";
import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Divider from "@mui/material/Divider";
import backgroundImage from "../../assets/Image/MenuHeaderbg.png";
import burgerCharacter from "../../assets/Image/burger.png";
import sandwichCharacter from "../../assets/Image/sandwich.png";

function Header() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "16.25rem", // 260px
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem", // 16px
        boxSizing: "border-box",
        borderEndEndRadius: "0.9375rem", // 15px
        borderEndStartRadius: "0.9375rem", // 15px
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "0.9375rem", // 15px
          display: "flex",
          alignItems: "center",
          marginTop: "4.625rem", // 74px
          paddingY: "1.125rem", // 18px
          paddingX: "1.0625rem", // 17px
        }}
      >
        <InputBase
          fullWidth
          placeholder="Search for Your Delicious Food..."
          sx={{ flex: 1 }}
        />
        <SearchIcon sx={{ color: "gray", marginRight: "0.0625rem" }} />{" "}
        {/* 1px */}
        <Divider orientation="vertical" flexItem />
        <MicIcon sx={{ color: "#fe6017" }} />
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <img
            src={burgerCharacter}
            alt="Burger character"
            style={{
              position: "absolute",
              left: "-1.125rem", // -18px
              bottom: "0.9375rem", // 15px
              width: "7.5rem", // 120px
              height: "5.9375rem", // 95px
            }}
          />
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginTop: "1.875rem",
              fontWeight: 700,
              fontSize: "1.5rem",
            }} // 30px
          >
            'Bon appetit'
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: "0.938rem",
              opacity: 0.86,
            }}
          >
            Enjoy Your Food
          </Typography>

          <img
            src={sandwichCharacter}
            alt="sandwich character"
            style={{
              position: "absolute",
              right: "-1rem", // -16px
              bottom: "0.9375rem", // 15px
              width: "7.5rem", // 120px
              height: "5.9375rem", // 95px
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
