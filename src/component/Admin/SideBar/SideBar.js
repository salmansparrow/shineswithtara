import React from "react";
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
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import BookIcon from "@mui/icons-material/Book";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import DescriptionIcon from "@mui/icons-material/Description";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpIcon from "@mui/icons-material/Help";
import RateReviewIcon from "@mui/icons-material/RateReview";
import logo from "../../../images/admin/logo.png";
import { NavLink } from "react-router-dom";
const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#f5f5f5",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Logo Section */}
        <Toolbar
          sx={{
            minHeight: { xs: 48, sm: 64 }, // Responsive height for the toolbar (48px for small screens, 64px for larger)
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
            <ListItemButton component={NavLink} to="/admin/managebook">
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Books" />
            </ListItemButton>
          </ListItem>

          {/* Manage Coloring Sheets */}
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/admin/managecolor">
              <ListItemIcon>
                <ColorLensIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Coloring Sheets" />
            </ListItemButton>
          </ListItem>

          {/* Manage Activity Sheets */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Activity Sheets" />
            </ListItemButton>
          </ListItem>

          {/* Manage Extra Sheets */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Extra Sheets" />
            </ListItemButton>
          </ListItem>

          {/* Orders */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </ListItem>

          {/* FAQs */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="FAQs" />
            </ListItemButton>
          </ListItem>

          {/* Reviews */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
              <ListItemText primary="Reviews" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
