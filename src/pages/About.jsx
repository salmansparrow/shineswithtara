import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Layout from "../component/Layout/Layout";
import HeroPage from "../component/Hero/Hero";
import star from "../images/watch/star.png";
import mission from "../images/about/mission.png";
import vision from "../images/about/vision.png";

const About = () => {
  const [activeSection, setActiveSection] = useState("mission"); // State to track which section is active
  const [highLighted, setHighlighted] = useState("follow"); // Track which is highlighted

  const handleShowMission = () => {
    setActiveSection("mission");
  };

  const handleShowVision = () => {
    setActiveSection("vision");
  };

  // useEffect to toggle highlighted every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => {
        if (prev === "follow") return "learn";
        if (prev === "learn") return "explore";
        return "follow";
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
     <HeroPage
  follow={
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font sizes
        textAlign: "center", // Center the text for responsiveness
      }}
    >
      <span
        style={{
          color: highLighted === "follow" ? "rgb(254, 157, 4)" : "white",
        }}
      >
        Muslim{" "}
      </span>
      <span
        style={{
          color: highLighted === "learn" ? "rgb(2, 27, 81)" : "white",
        }}
      >
        Islamic{" "}
      </span>
      <span
        style={{
          color: highLighted === "explore" ? "rgb(235, 87, 119)" : "white",
        }}
      >
        Cartoon
      </span>
    </Typography>
  }
  learn={
    <Typography
      variant="h2"
      sx={{
        color: "rgb(143, 82, 161)",
        fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" }, // Responsive font sizes
        textAlign: "center", // Center the text
        marginTop: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Adjust margin for spacing
      }}
    >
      Shine With Tara
    </Typography>
  }
  subtitle={
    <Typography
      variant="subtitle1"
      sx={{
        color: "white",
        fontSize: { xs: "1rem", sm: "1.5rem", md: "2rem" }, // Responsive subtitle font size
        textAlign: "center", // Center the subtitle text
        marginTop: { xs: "0.5rem", sm: "1rem", md: "1.5rem" }, // Adjust margin for spacing
      }}
    >
      Halal Education Animation!
    </Typography>
  }
/>


      {/* Background Section Below HeroPage */}
      <Box
        sx={{
          backgroundColor: "rgb(171, 202, 255)", // Background color
          padding: { xs: 2, md: 4 }, // Responsive padding
          marginTop: "0", // Remove top margin
          marginBottom: "0", // Remove bottom margin (if applicable)
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
            textAlign: "center",
          }}
        >
          Watch Islamic Halal Cartoon{" "}
          <span style={{ color: "rgb(2, 27, 81)" }}>Shine And Tara</span>
        </Typography>

        {/* Centered Section with Stars and Buttons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 4,
            gap: { xs: 1, md: 2 }, // Responsive gap
          }}
        >
          {/* Left Star */}
          <img
            src={star}
            alt="Star"
            style={{ width: "40px", marginRight: "8px" }} // Responsive star size
          />

          {/* Mission and Vision Buttons */}
          <Box display="flex">
            <Button
              variant="contained"
              onClick={handleShowMission}
              sx={{
                paddingX: { xs: 5, md: 10 }, // Responsive horizontal padding
                backgroundColor:
                  activeSection === "mission"
                    ? "rgb(2, 27, 81)" // Active color when clicked
                    : "rgb(171, 202, 255)", // Default color
                color: activeSection === "mission" ? "#fff" : "#000", // Change text color based on active state
                borderRadius: "0px",
                border: `2px solid rgb(2, 27, 81)`,
                "&:hover": {
                  // No color change on hover
                  backgroundColor:
                    activeSection === "mission"
                      ? "rgb(2, 27, 81)"
                      : "rgb(171, 202, 255)", // Retain active state on hover
                },
              }}
            >
              Mission
            </Button>
            <Button
              variant="contained"
              onClick={handleShowVision}
              sx={{
                paddingX: { xs: 5, md: 10 }, // Responsive horizontal padding
                backgroundColor:
                  activeSection === "vision"
                    ? "rgb(2, 27, 81)" // Active color when clicked
                    : "rgb(171, 202, 255)", // Default color
                color: activeSection === "vision" ? "#fff" : "#000", // Change text color based on active state
                borderRadius: "0px", // No border-radius for square buttons
                border: `2px solid rgb(2, 27, 81)`, // Border color
                "&:hover": {
                  // No color change on hover
                  backgroundColor:
                    activeSection === "vision"
                      ? "rgb(2, 27, 81)"
                      : "rgb(171, 202, 255)", // Retain active state on hover
                },
              }}
            >
              Vision
            </Button>
          </Box>

          {/* Right Star */}
          <img
            src={star}
            alt="Star"
            style={{ width: "40px", marginLeft: "8px" }} // Responsive star size
          />
        </Box>

        {/* Conditionally Render Content Below the Buttons */}
        <Box sx={{ p: 2, mt: 4 }}>
          {" "}
          {/* Responsive padding */}
          {activeSection === "mission" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="#fff">
                Our mission is to become a trusted source of Islamic education
                for children worldwide, promoting understanding, compassion, and
                cultural appreciation through captivating animation and
                meaningful narratives.
              </Typography>
              <img
                src={mission}
                alt="Mission"
                style={{ width: "100%", height: "auto" }} // Responsive image
              />
            </Box>
          )}
          {activeSection === "vision" && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6" color="#fff">
                Our vision is to inspire a new generation of young Muslims
                through engaging, entertaining, and educational animations that
                reflect their beliefs.
              </Typography>
              <img
                src={vision}
                alt="Vision"
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "16px",
                  paddingLeft: 0,
                  paddingRight: 0,
                }} // Set padding to zero for left and right
              />
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
