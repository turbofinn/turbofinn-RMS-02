import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import navmenuActive from "../../../assets/Image/Navbar/nav menu active.png";
import navmenu from "../../../assets/Image/Navbar/nav menu.png";
import plate from "../../../assets/Image/Navbar/whats in plate.svg";
import profilePhoto from "../../../assets/Image/Navbar/profile.png";
import category from "../../../assets/Image/Navbar/category.png";
import { useState } from "react";

export default function NavBarBottom() {
  const [value, setValue] = useState(0);
  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          boxShadow: "0px -4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <BottomNavigationAction
          label="Food"
          icon={
            <img
              src={value === 0 ? navmenuActive : navmenu}
              alt="Food"
              style={{ width: 24, height: 24 }}
            />
          }
        />
        <BottomNavigationAction
          label="Category"
          icon={
            <img
              src={category}
              alt="Category"
              style={{ width: 24, height: 24 }}
            />
          }
        />
        <BottomNavigationAction
          label="Plate"
          icon={
            <img src={plate} alt="Plate" style={{ width: 24, height: 24 }} />
          }
        />
        <BottomNavigationAction
          label="Profile"
          icon={
            <img
              src={profilePhoto}
              alt="Plate"
              style={{ width: 24, height: 24 }}
            />
          }
        />
      </BottomNavigation>
    </>
  );
}
