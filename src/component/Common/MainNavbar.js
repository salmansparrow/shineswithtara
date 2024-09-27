import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Cart Icon
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import navlogo from "../../images/nav/nav-logo.png";

const drawerWidth = 240;
const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Watch", path: "/watch" },
  { label: "Event Show", path: "/eventshow" },
  { label: "Main Character", path: "/maincharacter" },
  { label: "More", path: "/colorfulclub" },
];

function MainNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  <Link
                    to={item.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {item.label}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          px: 4,
          background:
            "linear-gradient(135deg, rgb(154, 182, 231) 0%, rgb(189, 168, 225) 46%, rgb(106, 57, 162) 100%)",
        }}
      >
        <Toolbar sx={{ position: "relative", justifyContent: "space-between" }}>
          {/* Logo Section on the Left */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "block" },
              position: "absolute",
              left: "0",
              width: "180px",
            }}
          >
            <img src={navlogo} height={35} width={180} alt="Navigation Logo" />
          </Typography>

          {/* Centered Navigation Items */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", sm: "flex" },
              gap: 2, // Spacing between buttons
            }}
          >
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: "#fff" }}>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Right Section with Drawer, Cart, and Login Buttons */}
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            {/* Cart Button */}
            <IconButton color="inherit" aria-label="cart">
              <ShoppingCartIcon />
            </IconButton>

            {/* Login Button */}
            <Button variant="outlined" color="inherit" sx={{ px: 1 }}>
              Login
            </Button>

            {/* Drawer Icon (Visible on all screen sizes) */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block" }, // Drawer is available on all screen sizes
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

MainNavbar.propTypes = {
  window: PropTypes.func,
};

export default MainNavbar;
