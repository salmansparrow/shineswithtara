import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  useMediaQuery,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpIcon from "@mui/icons-material/Help";
import RateReviewIcon from "@mui/icons-material/RateReview";
import logo from "../../../images/admin/logo.png";
import { NavLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false); // State to manage drawer visibility on small screens
  const theme = useTheme(); // Access theme for media queries
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detect mobile screen size

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content (extracted for reuse in both mobile and desktop drawers)
  const drawerContent = (
    <div>
      {/* Logo Section */}
      <Toolbar
        sx={{
          minHeight: { xs: 48, sm: 64 },
          display: "flex",
          justifyContent: "center",
          background: "rgb(143, 82, 161)",
        }}
      >
        <span style={{ width: "100%" }}>
          <img
            src={logo}
            alt="admin logo"
            style={{
              width: "100%",
              objectFit: "contain",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "block",
            }}
          />
        </span>
      </Toolbar>
      <Divider />

      {/* Navigation Items */}
      <List>
        {/* User List */}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/users">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="User List" />
          </ListItemButton>
        </ListItem>

        {/* Manage Books */}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/manage-product">
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Manage Products" />
          </ListItemButton>
        </ListItem>

        {/* Orders */}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/manage-order">
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>

        {/* FAQs */}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/manage-faq">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="FAQs" />
          </ListItemButton>
        </ListItem>

        {/* Reviews */}
        <ListItem disablePadding>
          <ListItemButton component={NavLink} to="/admin/manage-reviews">
            <ListItemIcon>
              <RateReviewIcon />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar for the hamburger menu on mobile */}
      {isMobile && (
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            backgroundColor: "rgb(143, 82, 161)",
            display: { md: "none" },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      {/* Drawer component */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"} // Show temporary drawer on mobile, permanent on larger screens
        open={mobileOpen} // Control open state for mobile drawer
        onClose={handleDrawerToggle} // Close drawer when clicking outside
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f5f5f5",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Push content right when drawer is open on large screens */}
    </Box>
  );
}
