import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../component/Layout/Layout";
import star from "../images/watch/star.png";
import ShowFaqsAnswer from "../component/Faq'sReveiws/ShowFaqsAnswer";
import ReviewsProfile from "../component/Faq'sReveiws/ReviewProfile"

const FaqReviews = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "rgb(164, 174, 233)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "80px",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            color: "rgb(143, 82, 161)",
            marginTop: "32px",
          }}
        >
          FAQ's & Reviews
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(171, 202, 255)",
          padding: "20px",
        }}
      >
        <img
          src={star}
          alt="star"
          style={{ width: "60px", marginRight: "80px" }}
        />
        <Typography
          variant="h4"
          sx={{
            display: "inline-block",
            color: "rgb(143, 82, 161)",
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          FAQ's
        </Typography>
        <img
          src={star}
          alt="star"
          style={{ width: "60px", marginLeft: "80px" }}
        />
      </Box>
{/* DropDown Compoenent */}
      <ShowFaqsAnswer />


      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(171, 202, 255)",
          padding: "70px",
        }}
      >
        <img
          src={star}
          alt="star"
          style={{ width: "60px", marginRight: "80px" }}
        />
        <Typography
          variant="h4"
          sx={{
            display: "inline-block",
            color: "rgb(143, 82, 161)",
            fontWeight: "bold",
            fontSize: "3rem",
            textAlign: "center",

          }}
        >
        What People Are Saying
        </Typography>
        <img
          src={star}
          alt="star"
          style={{ width: "60px", marginLeft: "80px" }}
        />
      </Box>
      <ReviewsProfile />
    </Layout>
  );
};

export default FaqReviews;
