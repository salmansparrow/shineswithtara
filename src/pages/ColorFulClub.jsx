import React from "react";
import Layout from "../component/Layout/Layout";
import img1 from "../images/colorful/img1.png";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import cardImg1 from "../images/colorful/imgcard1.png";
import cardImg2 from "../images/colorful/imgcard2.png";
import { useNavigate } from "react-router-dom";
import flower from "../images/maincharacter/flower.png";
import img2 from "../images/colorful/img2.png";

const ColorFulClub = () => {
  const cardData = [
    { id: 1, imgSrc: cardImg1, title: "Learning & Activity" },
    { id: 2, imgSrc: cardImg2, title: "Coloring Book" },
  ];

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleSeeMoreClick = () => {
    navigate("/"); // Navigate to the root page
  };

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

      {/* Section with description */}
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

      {/* Cards Section */}
      <Box
  sx={{
    backgroundColor: "rgb(171, 202, 255)",
    display: "flex",
    flexDirection: "column", // Stack items vertically
    alignItems: "center", // Center items horizontally
    padding: "40px",
    gap: "20px", // Space between card and sheets section
  }}
>
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
    }}
  >
    {cardData.map((card) => (
      <Card
        key={card.id}
        sx={{
          maxWidth: 450,
          backgroundColor: "#fff",
          boxShadow: 3,
          borderRadius: "12px",
        }}
      >
        <CardMedia
          component="img"
          height="250" // Increased image height for better scaling
          image={card.imgSrc}
          alt={card.title}
        />
        <CardContent
          sx={{
            backgroundColor: "rgb(199, 120, 5)", // Add orange background color
            borderRadius: "0 0 12px 12px", // Keep rounded corners on the bottom
          }}
        >
          {/* Flex container with justify-content: space-between */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="p"
              color="textPrimary"
              sx={{
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              {card.title}
            </Typography>

            {/* See More Text as clickable link */}
            <Typography
              sx={{
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={handleSeeMoreClick} // Handle navigation on click
            >
              See More
            </Typography>
          </Box>
        </CardContent>
      </Card>
    ))}
  </Box>

  {/* Sheets Section */}
  <Box
    sx={{
      display: "flex",

      alignItems: "center", // Center content
      justifyContent: "center",
      mt: 8,
      mb: "25px",
    }}
  >
    <img
      src={flower}
      alt="flower"
      style={{ width: "60px", marginRight: "8px" }}
    />
    <Typography
      variant="h4"
      sx={{
        color: "rgb(106, 57, 162)",
        fontWeight: "bold",
        fontSize: { xs: "2rem", md: "3rem" }, // Responsive font size
        textAlign: "center", // Center align the text
      }}
    >
      Sheets
    </Typography>
    <img
      src={flower}
      alt="flower"
      style={{ width: "60px", marginLeft: "8px" }}
    />
  </Box>
</Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between text and image
          alignItems: "flex-start", // Align items at the start
          backgroundColor: "rgb(171, 202, 255)", // Optional background color
          padding: "20px",
          borderRadius: "12px", // Optional rounded corners
        }}
      >
        {/* Left Side Text */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            We Offer The Following Worksheets!
          </Typography>
          <Box
            sx={{
              display: "flex",

            }}
          >
            <img
              src={flower}
              alt="flower"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Coloring Sheets
            </Typography>
            <img
              src={flower}
              alt="flower"
              style={{ width: "20px", marginLeft: "8px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
                          
            }}
          >
            <img
              src={flower}
              alt="flower"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Activity Sheets
            </Typography>
            <img
              src={flower}
              alt="flower"
              style={{ width: "20px", marginLeft: "8px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
                          mb: "25px",
            }}
          >
            <img
              src={flower}
              alt="flower"
              style={{ width: "20px", marginRight: "8px" }}
            />
            <Typography
              variant="h6"
              sx={{
                display: "inline-block",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Learning Sheets
            </Typography>
            <img
              src={flower}
              alt="flower"
              style={{ width: "20px", marginLeft: "8px" }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <img
            src={img2}
            alt="Worksheet"
            style={{ width: "250px", height: "300px" }}
          />
        </Box>
      </Box>
    </Layout>
  );
};

export default ColorFulClub;
