import React from "react";
import Layout from "../component/Layout/Layout";
import img1 from "../images/colorful/img1.png";
import { Box, Typography } from "@mui/material";

const ColorFulClub = () => {
  return (
    <Layout>
      {/* Outer Box with purple background */}
      <Box
        sx={{
          backgroundColor: "rgb(189, 168, 225)",
          padding: "40px",
          pb: "100px",
          minHeight: "100vh",
        }}
      >
        {/* Inner Box acting as the card */}
        <Box
          sx={{
            backgroundColor: "#c2dbf3", // Card background color
            padding: "20px",
            textAlign: "center",
            borderRadius: "12px",
            boxShadow: 3, // Optional shadow for card effect
            marginTop: "40px", // Margin at the top of the card
          }}
        >
          {/* Heading with background */}
          <Box
            sx={{
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "8px",
              mt: 8,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "#fff", // Default white color
                fontWeight: "bold",
              }}
            >
              Come And{" "}
              <Box
                component="span"
                sx={{
                  animation: "colorChange1 3s infinite", // Animation for "Color"
                  "@keyframes colorChange1": {
                    "0%": { color: "orange" }, // Orange at start
                    "33%": { color: "white" }, // Change to white
                    "66%": { color: "white" }, // Continue white
                    "100%": { color: "orange" }, // Orange again
                  },
                }}
              >
                Color{" "}
              </Box>
              <Box
                component="span"
                sx={{
                  animation: "colorChange2 3s infinite",
                  "@keyframes colorChange2": {
                    "0%": { color: "white" },
                    "33%": { color: "blue" },
                    "66%": { color: "white" },
                    "100%": { color: "white" },
                  },
                }}
              >
                with{" "}
              </Box>
              <Box
                component="span"
                sx={{
                  animation: "colorChange3 3s infinite",
                  "@keyframes colorChange3": {
                    "0%": { color: "white" },
                    "33%": { color: "white" },
                    "66%": { color: "red" },
                    "100%": { color: "white" },
                  },
                }}
              >
                Tara
              </Box>
            </Typography>
          </Box>

          {/* Image section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "8px 10px",
            }}
          >
            <Box
              component="img"
              src={img1}
              alt="Colorful Art"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgb(171, 202, 255)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column", // Stack items vertically
          padding: "20px", // Optional padding for spacing
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "block", // Change to block
            color: "#1a237e",
            fontWeight: "bold",
            fontSize: "3rem",
            padding: "40px", // Add padding for spacing
            textAlign: "center", // Center text
          }}
        >
          Come And Color With Tara
        </Typography>

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h6"
            color="#fff"
            sx={{
              display: "block", // Change to block
            }}
          >
            If your little ones love Tara, then why not download these
            activities to help learn with their favorite characters off-screen.
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default ColorFulClub;
