import React from "react";
import {
  Box,
  Typography,
  Link,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import img1 from "../images/watch/img1.png";
import img2 from "../images/watch/img2.png";
import Layout from "../component/Layout/Layout";
import star from "../images/watch/star.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample images array
const images = [
  { src: img1, title: "Story Of Miraj" },
  { src: img1, title: "Jungle Adventure" },
  { src: img1, title: "Bugs Adventure" },
  { src: img1, title: "Amazing Journey" },
  { src: img1, title: "Fun Time" },
];

// Custom Prev Arrow using Material-UI Button
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "absolute",
        left: "0px",
        top: "50%",
        zIndex: 1,
        backgroundColor: "yellow",
        borderRadius: "50%",
        height: "60px",
        width: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "orange",
        },
      }}
    >
      <span style={{ fontSize: "30px", color: "black" }}>←</span>
    </Button>
  );
};

// Custom Next Arrow using Material-UI Button
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      onClick={onClick}
      sx={{
        position: "absolute",
        right: "0px",
        zIndex: 1,
        backgroundColor: "yellow",
        borderRadius: "50%",
        height: "60px",
        width: "60px",
        bottom: "70px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          backgroundColor: "orange",
        },
      }}
    >
      <span style={{ fontSize: "30px", color: "black" }}>→</span>
    </Button>
  );
};

const Watch = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: "20px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "rgb(171, 202, 255)",
          color: "white",
          padding: 2,
        }}
      >
        {/* Title Section */}
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2rem", md: "4rem" },
            mt: { xs: 5, md: 10 },
            textAlign: "center",
          }}
        >
          Watch Islamic Halal Cartoon{" "}
          <span style={{ color: "rgb(106, 57, 162)" }}>Shine And Tara</span>
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", md: "3rem" },
            mt: 2,
            textAlign: "center",
          }}
        >
          With One Click
        </Typography>

        {/* YouTube Link Section */}
        <Link
          href="https://www.youtube.com/channel/UCDPkatnNvtWdiITSvzneBEw"
          target="_blank"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "black",
            mt: 2,
          }}
        >
          <YouTubeIcon sx={{ fontSize: 50, mr: 1, color: "red" }} />
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "black" }}>
            YouTube
          </Typography>
        </Link>

        {/* Divider Line */}
        <Box sx={{ width: "100%", borderTop: "2px solid white", mt: 8 }} />

        {/* Carousel Section */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "100%", // Ensure it takes the full width
            mt: 8,
            mb: 8,
          }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <Card
                key={index}
                sx={{
                  backgroundColor: "orange",
                  borderRadius: 6,
                  boxShadow: 3,
                  padding: 2,
                  mx: 2, // Add more spacing between cards
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={image.src}
                  alt={image.title}
                />
                <CardContent>
                  <Typography variant="h6" align="center" color="#fff">
                    {image.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Box>

        {/* Horizontal Line below the carousel */}
        <Box sx={{ width: "100%", borderTop: "2px solid white", mt: 2 }} />

        {/* Collaborating with section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 8,
          }}
        >
          <img
            src={star}
            alt="Star"
            style={{ width: "60px", marginRight: "8px" }}
          />
          <Typography variant="h4" sx={{ display: "inline-block" }}>
            Collaborating With{" "}
            <span style={{ color: "rgb(106, 57, 162)" }}>
              Islamic Relief Canada
            </span>
          </Typography>
          <img
            src={star}
            alt="Star"
            style={{ width: "60px", marginLeft: "8px" }}
          />
        </Box>

        <Box
          component="img"
          src={img2}
          alt="Islamic Relief"
          sx={{
            width: "100%",
            height: "auto",
            maxWidth: "100%",
            mt: 8,
            mb: 8,
          }}
        />

        {/* See More Button */}
        <Button
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCDPkatnNvtWdiITSvzneBEw",
              "_blank"
            )
          }
          sx={{
            mt: 4,
            mb: 4,
            width: "40%",
            backgroundColor: "rgb(143, 82, 161)",
            color: "white",
            textAlign: "center",
            paddingY: 2, // Add padding for top and bottom
            "&:hover": {
              backgroundColor: "rgb(123, 72, 141)", // Darker shade for hover effect
            },
          }}
        >
          See More
        </Button>
      </Box>
    </Layout>
  );
};

export default Watch;
