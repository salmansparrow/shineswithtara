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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import navlogo from "../../images/nav/nav-logo.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CartDrawer from "./CartDrawer"; // Import your CartDrawer component

const drawerWidth = 240;
// Nav items and dropdown items (same as before)
const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Watch", path: "/watch" },
  { label: "Event Show", path: "/eventshow" },
  { label: "Main Character", path: "/maincharacter" },
  { label: "More", path: "/colorfulclub", hasDropdown: true },
];

const moreDropdownItems = [
  { label: "Contact Us", path: "/ContactUs" },
  { label: "About", path: "/about" },
  { label: "Colorful Club", path: "/colorfulclub" },
  { label: "FAQ", path: "/faq" },
];

function MainNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]); // State for cart items

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMoreClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCartOpen = () => {
    setCartOpen(true); // Open the CartDrawer
  };

  const handleCartClose = () => {
    setCartOpen(false); // Close the CartDrawer
  };

  // Function to add items to the cart (example item)
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, rgb(154, 182, 231) 0%, rgb(189, 168, 225) 46%, rgb(106, 57, 162) 100%)",
          mx: "auto",
          p: 1,
        }}
      >
        <img
          src={navlogo}
          alt="Navigation Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Typography>

      <Divider />
      <List
        sx={{
          background:
            "linear-gradient(135deg, rgb(154, 182, 231) 0%, rgb(189, 168, 225) 46%, rgb(106, 57, 162) 100%)",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                primary={
                  item.hasDropdown ? (
                    <Button
                      onClick={handleMoreClick}
                      sx={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <NavLink
                      to={item.path}
                      style={({ isActive }) => ({
                        textDecoration: "none",
                        color: isActive ? "#fff" : "inherit",
                        backgroundColor: isActive
                          ? "rgb(143, 82, 161)"
                          : "transparent",
                        padding: "6px 32px",
                        display: "block",
                        borderRadius: "4px",
                      })}
                    >
                      {item.label}
                    </NavLink>
                  )
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
        style={{ minHeight: "64px" }}
        sx={{
          background:
            "linear-gradient(135deg, rgb(154, 182, 231) 0%, rgb(189, 168, 225) 46%, rgb(106, 57, 162) 100%)",
          px: { xs: 0, lg: 4 },
        }}
      >
        <Toolbar sx={{ position: "relative", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: { xs: "block" },
              position: "absolute",
              left: "0",
              width: "180px",
              height: "35px",
            }}
          >
            <img src={navlogo} height={35} width={180} alt="Navigation Logo" />
          </Typography>

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", sm: "flex" },
              "@media (max-width:1200px)": { display: "none" },
              whiteSpace: "nowrap",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "#fff",
                  fontSize: "0.875rem",
                  minHeight: "64px",
                  whiteSpace: "nowrap",
                  ":hover": {
                    textDecoration: "none",
                    backgroundColor: "rgba(143, 82, 161, 0.04)",
                  },
                  ":active": {
                    backgroundColor: "rgb(143, 82, 161) !important",
                  },
                }}
              >
                {item.hasDropdown ? (
                  <Button
                    onClick={handleMoreClick}
                    sx={{
                      color: "#fff",
                      textDecoration: "none",
                      padding: "6px 32px",
                      display: "block",
                      borderRadius: "4px",
                    }}
                  >
                    {item.label}
                  </Button>
                ) : (
                  <NavLink
                    to={item.path}
                    style={({ isActive }) => ({
                      textDecoration: "none",
                      color: isActive ? "#fff" : "inherit",
                      backgroundColor: isActive
                        ? "rgb(143, 82, 161)"
                        : "transparent",
                      padding: "6px 32px",
                      display: "block",
                      borderRadius: "4px",
                    })}
                  >
                    {item.label}
                  </NavLink>
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            {/* Cart Button with Badge */}
            <IconButton
              color="inherit"
              aria-label="cart"
              onClick={handleCartOpen} // Open CartDrawer on click
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <Button variant="outlined" color="inherit" sx={{ px: 1 }}>
              Login
            </Button>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: {
                  lg: "none",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {moreDropdownItems.map((item) => (
          <MenuItem key={item.label} onClick={handleMenuClose}>
            <NavLink
              to={item.path}
              style={{
                textDecoration: "none",
                color: "inherit",
                width: "100%",
              }}
            >
              {item.label}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Pass open state and onClose handler to CartDrawer */}
      <CartDrawer
        open={cartOpen} // Open state for CartDrawer
        onClose={handleCartClose} // Close handler for CartDrawer
        cartItems={cartItems} // Items to display in the CartDrawer
      />
    </Box>
  );
}

MainNavbar.propTypes = {
  window: PropTypes.func,
};

export default MainNavbar;
