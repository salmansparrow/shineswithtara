import React, { useEffect, useState } from "react";
import Layout from "../component/Layout/Layout";
import img1 from "../images/colorful/img1.png";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid2,
  Grid,
} from "@mui/material";
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
    navigate("/");
  };

  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["orange", "white", "blue", "red"];

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every second
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
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
                  color: colors[colorIndex === 0 ? 0 : 1], // Orange if index is 0, else white
                  transition: "color 0.5s ease",
                }}
              >
                Color{" "}
              </Box>
              <Box
                component="span"
                sx={{
                  color: colors[colorIndex === 1 ? 2 : 1], // Blue if index is 1, else white
                  transition: "color 0.5s ease",
                }}
              >
                with{" "}
              </Box>
              <Box
                component="span"
                sx={{
                  color: colors[colorIndex === 2 ? 3 : 1], // Red if index is 2, else white
                  transition: "color 0.5s ease",
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
                borderRadius: 12,
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
          backgroundColor: "rgb(171, 202, 255)",
          color: "white",
          pl: { xs: 0, lg: 6 }, // Add padding on the left for large screens
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            flexDirection: { xs: "column", lg: "row" }, // Column direction on small screens, row on large
          }}
        >
          {/* Text on the left (or centered on small screens) */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", lg: "flex-start" },
              alignItems: { xs: "center", lg: "flex-start" },
              textAlign: { xs: "center", lg: "left" },
              mt: 15,
            }}
          >
            <Box>
              <Typography variant="h6" component="span">
                We Offer The Following Worksheets!
              </Typography>
            </Box>
            {/* First line of text with icons */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <img
                src={flower}
                alt="flower"
                style={{
                  width: "30px",
                  objectFit: "contain",
                  marginRight: "8px",
                }}
              />
              <Typography variant="body1" component="span">
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    textUnderlineOffset: "none",
                    color: "white",
                  }}
                >
                  Coloring Sheets{" "}
                </a>
              </Typography>
              <img
                src={flower}
                alt="flower"
                style={{
                  width: "30px",
                  objectFit: "contain",
                  marginLeft: "8px",
                }}
              />
            </Box>

            {/* Repeat the same for the other rows */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <img
                src={flower}
                alt="flower"
                style={{
                  width: "30px",
                  objectFit: "contain",
                  marginRight: "8px",
                }}
              />
              <Typography variant="body1" component="span">
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    textUnderlineOffset: "none",
                    color: "white",
                  }}
                >
                  Activity Sheets{" "}
                </a>
              </Typography>
              <img
                src={flower}
                alt="flower"
                style={{
                  width: "30px",
                  objectFit: "contain",
                  marginLeft: "8px",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <img
                src={flower}
                alt="flower"
                style={{
                  width: "30px",
                  objectFit: "contain",
                  marginRight: "8px",
                }}
              />
              <Typography variant="body1" component="span">
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    textUnderlineOffset: "none",
                    color: "white",
                  }}
                >
                  Learning Sheets{" "}
                </a>
              </Typography>
              <img
                src={flower}
                alt="flower"
                style={{
                  width: "30px",
                  objectFit: "contain",
                  marginLeft: "8px",
                }}
              />
            </Box>
          </Grid>

          {/* Image on the right (or bottom on small screens) */}
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignItems: "center",
              mt: { xs: 2, lg: 0 }, // Add margin-top for small screens
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${img2})`,
                width: "100%",
                height: { xs: "250px", lg: "300px" }, // Adjust height for small screens
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ColorFulClub;
