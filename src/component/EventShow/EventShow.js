import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Layout from "../Layout/Layout";

const imageList = [
  { src: require("../../images/eventshow/1.jpeg") },
  { src: require("../../images/eventshow/2.jpeg") },
  { src: require("../../images/eventshow/3.jpeg") },
  { src: require("../../images/eventshow/4.jpeg") },
  { src: require("../../images/eventshow/5.jpeg") },
  { src: require("../../images/eventshow/6.jpeg") },
  { src: require("../../images/eventshow/7.jpeg") },
  { src: require("../../images/eventshow/8.jpeg") },
  { src: require("../../images/eventshow/9.jpeg") },
  { src: require("../../images/eventshow/10.jpeg") },
];

const videoList = [
  { src: require("../../images/eventshow/video1.mp4") },
  { src: require("../../images/eventshow/video1.mp4") },
  { src: require("../../images/eventshow/video1.mp4") },
  { src: require("../../images/eventshow/video1.mp4") },
  { src: require("../../images/eventshow/video1.mp4") },
  { src: require("../../images/eventshow/video1.mp4") },
];

function EventShowPage() {
  return (
    <>
      <Layout>
        <Box
          sx={{
            background: "rgb(164, 174, 233)",
            paddingTop: { xs: "100px", md: "100px" },
            paddingBottom: { xs: "40px", md: "80px" },
            textAlign: "center",
          }}
        >
          <Container>
            {/* Heading */}
            <Box sx={{ mb: { xs: "20px", md: "40px" } }}>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                }}
              >
                Some Clicks of Events Organized By{" "}
                <span style={{ color: "rgb(136, 71, 155)" }}>
                  Shine With Tara
                </span>
              </Typography>
            </Box>

            {/* Image Section */}
            <Box
              sx={{
                display: "flex",
                overflowX: "auto", // Horizontal scroll for small screens
                gap: "16px",
                pb: "20px",
              }}
            >
              {imageList.map((image, index) => (
                <Box
                  key={index}
                  component="img"
                  src={image.src}
                  alt={`Event Image ${index + 1}`}
                  sx={{
                    minWidth: { xs: "250px", md: "200px" }, // Image width for different screen sizes
                    height: { xs: "150px", md: "200px" }, // Adjust height for small screens
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </Box>

            {/* Videos Section Heading */}
            <Box
              sx={{
                mt: { xs: "20px", md: "40px" },
                mb: { xs: "20px", md: "40px" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                }}
              >
                Some Videos of Events Organized By{" "}
                <span style={{ color: "rgb(136, 71, 155)" }}>
                  Shine With Tara
                </span>
              </Typography>
            </Box>

            {/* Videos Section */}
            <Box
              sx={{
                display: "flex",
                overflowX: "auto", // Horizontal scroll for small screens
                gap: "16px",
              }}
            >
              {videoList.map((video, index) => (
                <Box key={index}>
                  <Box
                    component="video"
                    // autoPlay=""
                    controls
                    src={video.src}
                    sx={{
                      minWidth: { xs: "250px", md: "350px" },
                      height: { xs: "150px", md: "200px" },
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Layout>
    </>
  );
}

export default EventShowPage;
