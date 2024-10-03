import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import starfish from "../../images/contact/1.png";

function Contact({ to, Explore, More, Contact, Us, sign }) {
  return (
    <section className="hero-section">
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgb(154, 182, 231) 0%, rgb(189, 168, 225) 46%, rgb(106, 57, 162) 100%)",
          width: "100%",
          minHeight: "900px", // Set minimum height to 900px
          paddingTop: "80px",
          paddingBottom: "80px",
          display: "flex", // Align items in the center
          alignItems: "center",
        }}
      >
        <Box className="hero-background">
          <Grid container spacing={2} sx={{ zIndex: 1 }}>
            <Grid
              item
              xs={12}
              md={7}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "40px",
                paddingTop: "60px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "40px",
                    sm: "50px",
                    md: "70px",
                  },
                  textAlign: { xs: "center", sm: "center", md: "left" },
                  paddingRight: { xs: "0px", sm: "0px", md: "150px" },
                  fontFamily: "righteous",
                }}
              >
                <span style={{ color: "white" }}>{to}</span>
                <span>{Explore}</span>
                <span>{More}</span>
                <span>{Contact}</span>
                <span>{Us}</span>
                <span>{sign}</span>
              </Typography>

              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    href="https://www.youtube.com/@Shinewithtara"
                    fullWidth
                    sx={{
                      position: "relative",
                      boxSizing: "border-box",
                      outline: 0,
                      border: 0,
                      margin: 0,
                      cursor: "pointer",
                      userSelect: "none",
                      verticalAlign: "middle",
                      textDecoration: "none",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.75,
                      borderRadius: "4px",
                      transition:
                        "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
                        "box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
                        "border-color 250ms cubic-bezier(0.4, 0, 0.2, 1), " +
                        "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(143, 82, 161)",
                      boxShadow:
                        "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, " +
                        "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, " +
                        "rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                      width: "100%",
                      padding: "8px 32px",
                      textTransform: "capitalize",
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Start Adventure
                  </Button>
                </Grid>
                <Grid item xs={12} md={6} className="social">
                  <Grid container spacing={2} className="social-icons">
                    <Grid item>
                      <a
                        aria-label="Follow on Facebook"
                        href="https://www.facebook.com/profile.php?id=61554711500749"
                      >
                        <FacebookIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        aria-label="Follow on Instagram"
                        href="https://www.instagram.com/shineswithtara/"
                      >
                        <InstagramIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        aria-label="Follow on YouTube"
                        href="https://www.youtube.com/@Shinewithtara"
                      >
                        <YouTubeIcon />
                      </a>
                    </Grid>
                    <Grid item>
                      <a
                        aria-label="Follow on TikTok"
                        href="https://www.tiktok.com/@shinewithtara"
                      >
                        <TikTokIcon />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Header Section */}
      <Box
        sx={{
          background: "rgb(171, 202, 255)",
          width: "100%",
          height: "100%",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <Grid justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Box sx={{ color: "white", textAlign: "center" }}>
              <Typography
                variant="h1"
                sx={{
                  margin: "0px",
                  fontFamily: "Poppins",
                  lineHeight: "1.235",
                  fontWeight: "600",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  textAlign: "center", // Center heading
                }}
              >
                Contact The Team at{" "}
                <span style={{ color: "rgb(2, 27, 81)" }}>
                  Shine With Tara{" "}
                </span>
                <br />
                To Keep In Touch With The Latest Updates
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Form Section */}
        <Grid container justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                background:
                  "linear-gradient(90deg, rgba(235, 87, 122, 0.95) 0%, rgba(136, 71, 155, 0.95) 46%, rgba(249, 191, 41, 0.95) 100%)",
                padding: "40px",
                marginTop: "20px",
                borderRadius: "8px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={starfish}
                  alt="Starfish"
                  style={{ width: "40px", marginRight: "10px" }}
                />
                <Box textAlign="center" flexGrow={1}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "white",
                      fontWeight: "600",
                      fontSize: "24px",
                    }}
                  >
                    Get In Touch
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontSize: "16px" }}
                  >
                    We would love to hear from you!
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Email: contact@shinewithtara.com{" "}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                  Copyright 2024 © All rights Reserved By Shine With Tara Design
                  By Sana Kazmi
                </Typography>
              </Box>

              {/* Form Fields */}
              <Box
                component="form"
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr", // 1 field per row on xs screens
                    sm: "1fr 1fr", // 2 fields per row on sm and above
                    md: "1fr 1fr",
                  },
                  gap: "20px",
                }}
              >
                <TextField
                  label="First Name"
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  label="Phone"
                  variant="outlined"
                  sx={{ backgroundColor: "white" }}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  sx={{
                    gridColumn: { xs: "span 1", sm: "span 2" },
                    backgroundColor: "white",
                  }} // Span 2 columns on sm screens and up
                />
                <Button
                  variant="contained"
                  sx={{
                    gridColumn: "1 / -1", // Take full width
                    marginTop: "20px",
                    backgroundColor: "rgb(143, 82, 161)",
                    color: "white",
                    padding: "10px 20px", // Adjust padding for a better look
                    "&:hover": {
                      backgroundColor: "rgb(123, 72, 141)", // Darker shade on hover
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

// SVG Icons can be components, defined below
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <circle cx="35.2143" cy="35.9999" r="35.2143" fill="#3D5A98"></circle>
    <path
      d="M49.6995 19.7217H20.733C19.7408 19.7217 18.9365 20.526 18.9365 21.5182V50.4847C18.9365 51.4768 19.7408 52.2811 20.733 52.2811H49.6995C50.6917 52.2811 51.496 51.4768 51.496 50.4847V21.5182C51.496 20.526 50.6917 19.7217 49.6995 19.7217Z"
      fill="#3D5A98"
    ></path>
    <path
      d="M37.1493 50.4569V37.8485H41.3805L42.0132 32.935H37.1493V29.7987C37.1493 28.3764 37.5454 27.4053 39.584 27.4053H42.1866V23.0035C40.9263 22.8721 39.6598 22.8097 38.3928 22.8164C34.6457 22.8164 32.0652 25.0998 32.0652 29.3118V32.935H27.834V37.8485H32.0652V50.4569H37.1493Z"
      fill="white"
    ></path>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <circle
      cx="35.643"
      cy="35.9999"
      r="35.2143"
      fill="url(#paint0_linear_149_233)"
    ></circle>
    <g clipPath="url(#clip0_149_233)">
      <path
        d="M52.1944 19.2638H18.1351C16.3488 19.2638 15.0004 20.5687 15.0004 21.7465V52.2533C15.0004 53.431 16.3488 54.735 18.1351 54.735H52.1944C53.9815 54.735 55.3301 53.431 55.3301 52.2533V21.7465C55.3301 20.5687 53.9815 19.2638 52.1944 19.2638Z"
        fill="#F6F5F7"
      ></path>
      <path
        d="M36.0855 48.7243C43.2224 48.7243 48.7243 43.2224 48.7243 36.0855C48.7243 28.9486 43.2224 23.4467 36.0855 23.4467C28.9486 23.4467 23.4467 28.9486 23.4467 36.0855C23.4467 43.2224 28.9486 48.7243 36.0855 48.7243Z"
        fill="#3D5A98"
      ></path>
      <path
        d="M42.1837 29.0813C42.3562 28.6812 42.4456 28.2955 42.4456 27.8981C42.4456 26.0366 41.0147 24.4205 39.2487 24.4205C38.6684 24.4205 38.1403 24.6814 37.8931 24.8281C37.6458 24.6814 37.1177 24.4205 36.5374 24.4205C34.7714 24.4205 33.3405 26.0366 33.3405 27.8981C33.3405 28.2955 33.4299 28.6812 33.6024 29.0813C32.8769 29.1688 32.2998 29.7462 32.2998 30.4493C32.2998 31.4718 33.1222 32.2865 34.1508 32.2865H37.8904C38.9191 32.2865 39.7415 31.4718 39.7415 30.4493C39.7415 29.7462 39.1644 29.1688 38.4389 29.0813H42.1837Z"
        fill="#3D5A98"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_149_233"
        x1="15.625"
        y1="15.625"
        x2="55.6875"
        y2="55.6875"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F6F5F7"></stop>
        <stop offset="1" stopColor="#D1D0D3"></stop>
      </linearGradient>
      <clipPath id="clip0_149_233">
        <rect width="54.429" height="54.429" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const YouTubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <circle cx="35.6429" cy="36" r="35.2143" fill="#FF0000"></circle>
    <path
      d="M50.1542 24.7544C49.6614 23.5507 48.3621 22.7574 46.0347 22.7574H24.2529C21.9256 22.7574 20.6263 23.5507 20.1335 24.7544C19.2286 26.7533 18.9425 29.8557 18.9425 31.6638V40.0864C18.9425 42.3025 19.2286 45.0284 20.1335 47.0261C20.6263 48.2298 21.9256 49.0231 24.2529 49.0231H46.0347C48.3621 49.0231 49.6614 48.2298 50.1542 47.0261C51.059 45.0284 51.3451 42.3025 51.3451 40.0864V31.6638C51.3451 29.8557 51.059 26.7533 50.1542 24.7544Z"
      fill="white"
    ></path>
    <path
      d="M29.7757 36.0002L36.2947 32.8379L36.2947 39.1625L29.7757 36.0002Z"
      fill="#FF0000"
    ></path>
  </svg>
);

const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    viewBox="0 0 71 72"
    fill="none"
  >
    <circle cx="35.643" cy="35.9999" r="35.2143" fill="#69C9F0"></circle>
    <path
      d="M46.6187 29.3788C46.452 24.1495 43.1764 19.9485 38.5759 19.9485C36.5786 19.9485 34.5797 20.8955 33.6584 22.1794C33.3126 22.5909 32.8495 22.7668 32.4875 22.7668C31.9728 22.7668 31.4788 22.3686 31.4788 21.8434V18.7583C31.4788 17.8991 31.9878 17.2728 32.7559 17.2728H34.5512C37.7672 17.2728 40.8436 19.1623 42.4925 22.0786C42.6032 22.3627 42.7584 22.6158 42.9697 22.7902C43.9623 23.4246 45.1151 24.0741 46.1241 24.429C46.6942 24.6145 47.031 24.9491 47.0327 25.3672C47.0327 25.3781 46.6212 25.8788 46.6187 29.3788Z"
      fill="white"
    ></path>
    <path
      d="M29.9344 35.9997C29.9344 44.4096 25.9999 50.2081 21.0524 50.2081C16.191 50.2081 12.2527 44.4096 12.2527 35.9997C12.2527 27.5898 16.191 21.7913 21.0524 21.7913C25.9999 21.7913 29.9344 27.5898 29.9344 35.9997Z"
      fill="white"
    ></path>
  </svg>
);

export default Contact;
