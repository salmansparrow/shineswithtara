import React from "react";
import girl1 from "../../images/newsletter/girl1.png";
import girl2 from "../../images/newsletter/girl2.png";
import { Box, Button, Container, Grid, InputBase } from "@mui/material";

function NewsLetter() {
  return (
    <>
      {/* Newsletter section */}
      <Box
        sx={{
          background: "rgb(171, 202, 255)",
          padding: { xs: "30px", md: "60px" }, // Responsive padding
        }}
      >
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(235, 87, 122, 0.95) 0%, rgba(136, 71, 155, 0.95) 46%, rgba(249, 191, 41, 0.95) 100%)",
            borderRadius: "25px",
            padding: { xs: "20px 10px", md: "40px 16px" }, // Responsive padding
            boxSizing: "border-box",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // Column for mobile, row for larger screens
              alignItems: "center", // Center items
              gap: "20px", // Gap between elements
            }}
          >
            {/* Left side with girl1 image, hidden below 900px */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: { xs: "none", md: "flex" }, // Hide on screens smaller than 900px
                justifyContent: "flex-start",
              }}
            >
              <img
                src={girl1}
                alt="girl1"
                style={{
                  width: "100%",
                  maxWidth: "200px", // Limit size on larger screens
                  borderRadius: "15px",
                }}
              />
            </Grid>

            {/* Center text and input */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                textAlign: "center", // Center text and input
                padding: { xs: "0 20px", md: "0" }, // Padding for smaller screens
              }}
            >
              {/* Responsive Heading */}
              <h2
                style={{
                  color: "#fff",
                  marginBottom: "16px",
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" }, // Responsive sizes
                }}
              >
                Subscribe to get information, latest news and other interesting
                offers about Shine With Tara
              </h2>

              {/* Input with button */}
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex", // Ensure the input and button are inline
                  width: "100%",
                  maxWidth: { xs: "100%", sm: "350px", md: "60%" }, // Responsive width
                  margin: "0 auto", // Center on the screen
                }}
              >
                <InputBase
                  sx={{
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                    width: "100%",
                    pr: "100px", // More padding to make room for the button
                  }}
                  placeholder="Enter your email"
                  inputProps={{ "aria-label": "Enter your email" }}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: "rgb(143, 82, 161) !important",
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    borderRadius: "10px",
                    padding: { xs: "8px 12px", sm: "10px 20px" }, // Responsive padding
                    // height: "100%",
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>

            {/* Right side with girl2 image, hidden below 900px */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: { xs: "none", md: "flex" }, // Hide on screens smaller than 900px
                justifyContent: "flex-end",
              }}
            >
              <img
                src={girl2}
                alt="girl2"
                style={{
                  width: "100%",
                  maxWidth: "200px", // Limit size on larger screens
                  borderRadius: "15px",
                }}
              />
            </Grid>
          </Container>
        </Box>
      </Box>
      {/* end of newsletter */}
    </>
  );
}

export default NewsLetter;
