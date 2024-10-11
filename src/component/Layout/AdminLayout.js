import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../Admin/SideBar/SideBar";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle profile menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle profile menu close
  const handleMenuClose = () => {
    localStorage.removeItem("token");
    navigate("/adminlogin");
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <Sidebar />
        {/* Main content area */}
        <Box sx={{ flexGrow: 1 }}>
          {/* AppBar for the profile icon */}
          <AppBar
            position="static"
            sx={{
              backgroundColor: "rgb(143, 82, 161)",
              color: "white",
            }}
          >
            <Toolbar sx={{ justifyContent: "flex-end" }}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>

              {/* Profile dropdown menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>

          {/* Render the child routes here */}
          <Box sx={{ padding: "20px" }}>
            <Outlet />
          </Box>
        </Box>
      </div>
    </>
  );
}
