import React from "react";
import Layout from "../component/Layout/Layout";
import HeroPage from "../component/Hero/Hero";
import Intro from "../component/Intro/Intro";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Home = () => {
  const [highLighted, setHighlighted] = useState("follow"); // Track which is highlighted

  // useEffect to toggle highlighted every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => {
        if (prev === "follow") return "learn";
        if (prev === "learn") return "explore";
        return "follow";
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <Layout>
      <HeroPage
        follow={
          <Box component="span" sx={{ paddingLeft: 2 }}>
            <Typography
              variant={{ xs: "h4", sm: "h3", md: "h2" }} // Responsive variant
              sx={{
                display: "inline",
                color: highLighted === "follow" ? "rgb(254, 157, 4)" : "white",
              }}
            >
              Follow,
            </Typography>
          </Box>
        }
        learn={
          <Box component="span" >
            <Typography
              variant={{ xs: "h4", sm: "h3", md: "h2" }} // Responsive variant
              sx={{
                display: "inline",
                color: highLighted === "learn" ? "rgb(2, 27, 81)" : "white",
              }}
            >
              Learn <span style={{ color: "white" }}>and </span>
            </Typography>
          </Box>
        }
        explore={
          <Box component="span" sx={{ paddingLeft: 2 }}>
            <Typography
              variant={{ xs: "h4", sm: "h3", md: "h2" }} // Responsive variant
              sx={{
                display: "inline",
                color:
                  highLighted === "explore" ? "rgb(235, 87, 119)" : "white",
              }}
            >
              Explore <span style={{ color: "white" }}>with Tara!</span>
            </Typography>
          </Box>
        }
        subtitle={
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", paddingTop: 2 }}
          >
            Click To See Latest Adventures!
          </Typography>
        }
      />
      <Intro />
      <NewsLetter />
    </Layout>
  );
};

export default Home;
