import React, { useState, useEffect } from "react";
import { Card, CardContent, Avatar, Typography, Box, IconButton, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import Material-UI icons
import { getReviews } from "../../service/Reviews/index"; // Adjust the import path as necessary
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder'; // Importing the empty star icon

const ReviewsProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewsData, setReviewsData] = useState([]); // State for reviews
  const itemsToShow = 3; // Default number of reviews to show

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviews = await getReviews(); // Fetch reviews from the backend
        setReviewsData(reviews); // Update state with fetched reviews
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews(); // Call the fetch function
  }, []); // Empty dependency array means this runs once when the component mounts

  // Function to render stars based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<StarIcon key={i} style={{ color: "yellow" }} />); // Filled star with yellow color
      } else {
        stars.push(<StarBorderIcon key={i} style={{ color: "yellow" }} />); // Empty star with yellow color
      }
    }
    return stars;
  };

  // Navigate to the next set of reviews
  const nextReviews = () => {
    if (currentIndex + itemsToShow < reviewsData.length) {
      setCurrentIndex(currentIndex + itemsToShow);
    }
  };

  // Navigate to the previous set of reviews
  const prevReviews = () => {
    if (currentIndex - itemsToShow >= 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" width="100%" backgroundColor="rgb(171, 202, 255)">
      <IconButton onClick={prevReviews} disabled={currentIndex === 0}>
        <ArrowBack />
      </IconButton>

      <Box
        width="100%"
        sx={{
          padding: "40px 10px", // 40px top/bottom, 10px left/right padding
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {reviewsData
            .slice(currentIndex, currentIndex + itemsToShow)
            .map((review, index) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={index}> {/* Responsive grid item */}
                <Card
                  sx={{
                    backgroundColor: "rgb(2, 27, 81)",
                    color: "white",
                    borderRadius: 2,
                    boxShadow: 3,
                    height: "100%", // Ensure cards have the same height
                  }}
                >
                  <CardContent>
                    <Box display="flex" alignItems="center">
                      {/* Profile Picture */}
                      <Avatar
                        alt={review.name}
                        src={review.image} // Profile image passed as prop
                        sx={{ width: 56, height: 56, border: "2px solid white" }}
                      />

                      {/* Profile Details */}
                      <Box ml={2}>
                        <Typography variant="h6">{review.name}</Typography>

                        {/* Rating Stars */}
                        <Box display="flex" alignItems="center">
                          {renderStars(review.rating)} {/* Render stars based on rating */}
                        </Box>
                      </Box>
                    </Box>
                    {/* Review Message */}
                    <Typography variant="body2" mt={1}>
                      "{review.comment}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>

      <IconButton
        onClick={nextReviews}
        disabled={currentIndex + itemsToShow >= reviewsData.length}
      >
        <ArrowForward />
      </IconButton>
    </Box>
  );
};

export default ReviewsProfile;
