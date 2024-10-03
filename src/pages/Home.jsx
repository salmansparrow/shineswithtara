import React from "react";
import Layout from "../component/Layout/Layout";
import HeroPage from "../component/Hero/Hero";
import Intro from "../component/Intro/Intro";
import NewsLetter from "../component/NewsLetter/NewsLetter";
import { Typography } from "@mui/material";
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
          <Typography variant="h2">
            <span style={{ color: highLighted === "follow" ? "rgb(254, 157, 4)" : "white" }}>
              Follow,
            </span>
          </Typography>
        }
        learn={
          <Typography variant="h2">
            <span style={{ color: highLighted === "learn" ? "rgb(2, 27, 81)" : "white" }}>
              Learn <span style={{ color: "white" }}>and </span>
            </span>
          </Typography>
        }
        explore={
          <Typography variant="h2">
            <span style={{ color: highLighted === "explore" ? "rgb(235, 87, 119)" : "white" }}>
              Explore <span style={{ color: "white" }}>with Tara!</span>
            </span>
          </Typography>
        }
        subtitle="Click To See Latest Adventures!"
      />
      {/* <HeroPage
        follow={<Typography variant="h2">Unveil The Stories Behind</Typography>}
        explore={
          <Typography variant="h2">
            <span style={{ color: "rgb(254, 157, 4)" }}>Our</span>{" "}
            <span style={{ color: isMainBlue ? "rgb(2, 27, 81)" : "white" }}>Main</span>
            <span style={{ color: isMainBlue ? "white" : "rgb(235, 87, 119)" }}>
              {" "}Characters
            </span>
          </Typography>
        }
        subtitle={
          <Typography variant="h4">Click To See Latest Adventures!</Typography>
        }
      /> */}
      <Intro />
      <NewsLetter />
    </Layout>
  );
};

export default Home;
