import React, { useState } from "react";
import { Card, CardContent, Avatar, Typography, Box, IconButton, Grid } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material"; // Import Material-UI icons

// Sample data for reviews
const reviewsData = [
  {
    name: "John Doe",
    image: "path/to/profile-pic1.jpg", // Replace with your profile image path
    stars: "★★★★☆",
    review: "This is an amazing product! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    image: "path/to/profile-pic2.jpg", // Replace with your profile image path
    stars: "★★★★★",
    review: "Absolutely loved it! Will buy again.",
  },
  {
    name: "Alice Johnson",
    image: "path/to/profile-pic3.jpg", // Replace with your profile image path
    stars: "★★★☆☆",
    review: "Good, but there’s room for improvement.",
  },
  {
    name: "Michael Brown",
    image: "path/to/profile-pic4.jpg", // Replace with your profile image path
    stars: "★★☆☆☆",
    review: "Not what I expected.",
  },
  {
    name: "Emily Davis",
    image: "path/to/profile-pic5.jpg", // Replace with your profile image path
    stars: "★★★★★",
    review: "Excellent service, very satisfied!",
  },
  {
    name: "David Wilson",
    image: "path/to/profile-pic6.jpg", // Replace with your profile image path
    stars: "★★★★☆",
    review: "Great quality, will purchase again.",
  },
  // Add more reviews as needed
];

const ReviewsProfile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Default number of reviews to show

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
                          <Typography variant="body1" color="yellow">
                            {review.stars}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    {/* Review Message */}
                    <Typography variant="body2" mt={1}>
                      "{review.review}"
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
