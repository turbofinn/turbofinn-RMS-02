import React from "react";
import { Box, Typography, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import Divider from "@mui/material/Divider";
import backgroundImage from "../../../assets/Image/MenuHeaderbg.png";
import burgerCharacter from "../../../assets/Image/burger.png";
import sandwichCharacter from "../../../assets/Image/sandwich.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // width: "100%",
        height: "16.25rem", // 260px
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem", // 16px
        boxSizing: "border-box",
        borderEndEndRadius: "0.9375rem", // 15px
        borderEndStartRadius: "0.9375rem", // 15px
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius:{ xs: "10px", md: "15px" },  
          display: "flex",
          alignItems: "center",
          marginTop: { xs: "4rem", lg: "3rem" }, // 74px
          paddingY: { xs: "0.5rem", md:"1.125rem" }, // 18px
          paddingX:{ xs: "1rem", md: "1.0625rem" },  // 17px
          width: "90%",
          maxWidth: "1018px",
          mx: "auto",
        }}
      >
        <InputBase
          placeholder="Search for Your Delicious Food..."
          sx={{
            flex: 1,
            fontSize:{xs:'13px',md:'1rem'},
            "& input::placeholder": {
              color: "rgba(102, 106, 109, 1)",
              opacity: 1,
            },
          }}
        />
        <SearchIcon sx={{ color: "gray", marginRight: "0.0625rem" }} />{" "}
        {/* 1px */}
        <Divider orientation="vertical" flexItem sx={{ marginX: "6px" }} />
        <MicIcon sx={{ color: "#fe6017" }} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <img
          src={burgerCharacter}
          alt="Burger character"
          style={{
            height: !isLargeScreen ? "6rem" : "7rem",
            objectFit: "contain",
            marginBottom: "-8px",
          }}
        />
        <Box
          sx={{
            textAlign: "center",
            mb: 1.5,
            paddingX: { xs: "15px", lg: "100px" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "1.2rem", sm: "1.5rem", lg: "2rem" },
              marginBottom: "0.3rem",
            }}
          >
            'Bon appetit'
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "0.675rem", sm: "0.938rem" },
              opacity: 0.86,
              marginBottom: "7px",
            }}
          >
            Enjoy Your Food
          </Typography>
        </Box>
        <img
          src={sandwichCharacter}
          alt="sandwich character"
          style={{
            height: !isLargeScreen ? "6rem" : "7rem",
            objectFit: "contain",
            marginBottom: "-1px",
          }}
        />
      </Box>
    </Box>
  );
}

export default Header;
