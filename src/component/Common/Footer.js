import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink from React Router
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import { CreditCard, Paypal } from "./Card";
import "./Footer.css"; // Import CSS for footer styles

// Navigation items array
const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Watch", path: "/watch" },
  { label: "About", path: "/about" },
  { label: "Main Character", path: "/maincharacter" },
  { label: "Contact Us", path: "/contact" },
  { label: "Event Show", path: "/eventshow" },
  { label: "Colorful Club", path: "/colorfulclub" },
];

function Footer() {
  // Split the navigation items into groups for layout purposes
  const navGroups = [
    navItems.slice(0, 3), // First 3 items
    navItems.slice(3, 6), // Next 3 items
    navItems.slice(6), // Last 2 items
  ];

  return (
    <>
      <Box className="footer">
        <div className="container">
          <Grid container spacing={3}>
            {/* First Column - Social Media and Payment Icons */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" gutterBottom>
                Shine With Tara
              </Typography>
              {/* Social Media Icons */}
              <Box mb={2}>
                <IconButton href="#" aria-label="Facebook" color="inherit">
                  <FacebookIcon />
                </IconButton>
                <IconButton href="#" aria-label="Instagram" color="inherit">
                  <InstagramIcon />
                </IconButton>
                <IconButton href="#" aria-label="YouTube" color="inherit">
                  <YouTubeIcon />
                </IconButton>
                <IconButton href="#" aria-label="Twitter" color="inherit">
                  <TwitterIcon />
                </IconButton>
              </Box>
              {/* Payment Icons */}
              <Box>
                <IconButton href="#" aria-label="Credit Card" color="inherit">
                  <CreditCard />
                </IconButton>
                <IconButton href="#" aria-label="PayPal" color="inherit">
                  <Paypal />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Line Divider */}
          <Divider style={{ backgroundColor: "#fff", margin: "20px 0" }} />

          {/* Copyright Info */}
          <Typography
            variant="body2"
            align="center"
            style={{ marginTop: "20px" }}
            sx={{
              px: "35px !important",
              margin: "0px",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontWeight: "400",
              lineHeight: "1.5",
              textAlign: "center",
            }}
          >
            Content, including images, displayed on this website is protected by
            copyright laws. Downloading, republication, retransmission or
            reproduction of content on this website is strictly prohibited.
            Terms of Use | Privacy Policy
          </Typography>
        </div>
      </Box>
    </>
  );
}

export default Footer;
