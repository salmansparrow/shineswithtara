import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useForm } from "react-hook-form";
import { addReview, getReviews, deleteReview } from '../../service/Reviews/index';

const ManageReviewsList = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  // Fetch reviews on component mount
  useEffect(() => {
    fetchReviews();
  }, []);


  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedReviews = await getReviews();
      console.log("Fetched Reviews:", fetchedReviews); // Debugging line
      setReviews(fetchedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setError("Failed to load reviews. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  // Handle adding a new review
  const handleAddReview = async (data) => {
    const { name, comment, rating } = data;

    setLoading(true);
    setError(null);
    try {
      const newReview = await addReview({ name, comment, rating });
      console.log("New Review Added:", newReview); 

      if (newReview && newReview.name && newReview.comment && newReview.rating) {
        setReviews((prevReviews) => [...prevReviews, newReview]); 
      } else {
     
        setReviews((prevReviews) => [
          ...prevReviews,
          { name: name, comment: comment , rating:rating },
        ]);
      }
      reset(); // Clear form inputs
    } catch (error) {
      console.error("Error adding review:", error);
      setError("Failed to add review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Open the delete confirmation dialog
  const handleOpenDeleteDialog = (index) => {
    setSelectedReviewIndex(index);
    setDeleteDialogOpen(true);
  };

  // Close the delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedReviewIndex(null);
  };

  // Handle deleting a review
  const handleDeleteReview = async () => {
    setLoading(true);
    setError(null);

    try {
      const reviewToDelete = reviews[selectedReviewIndex];
      if (reviewToDelete && reviewToDelete._id) {
        await deleteReview(reviewToDelete._id);
        const updatedReviews = reviews.filter((_, index) => index !== selectedReviewIndex);
        setReviews(updatedReviews);
      } else {
        throw new Error("Review does not have a valid ID.");
      }

      handleCloseDeleteDialog();
    } catch (err) {
      console.error("Error deleting review:", err);
      setError("Failed to delete review. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Review Management
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <Box display="flex" gap={2} flexWrap="wrap">
        <form onSubmit={handleSubmit(handleAddReview)}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            {...register("name", { required: "Name is required" })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
          />
          <TextField style={{margin:"10px 0"}}
            label="Comment"
            variant="outlined"
            fullWidth
            {...register("comment", { required: "Comment is required" })}
            error={!!errors.comment}
            helperText={errors.comment ? errors.comment.message : ""}
          />
          <TextField style={{marginRight:"10px"}}
            label="Rating"
            variant="outlined"
            type="number"
            inputProps={{ min: 1, max: 5 }}
            {...register("rating", { required: "Rating is required", valueAsNumber: true })}
            error={!!errors.rating}
            helperText={errors.rating ? errors.rating.message : ""}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
            sx={{ height: "56px" }}
          >
            {loading ? "Adding..." : "Add"}
          </Button>
        </form>
      </Box>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Comment</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <TableRow key={review._id || index}> {/* Use unique ID from review */}
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{review.name}</TableCell>
                  <TableCell>{review.comment}</TableCell>
                  <TableCell>{review.rating}</TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => handleOpenDeleteDialog(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">No reviews available</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Do you really want to delete this review? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            No
          </Button>
          <Button onClick={handleDeleteReview} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageReviewsList;
