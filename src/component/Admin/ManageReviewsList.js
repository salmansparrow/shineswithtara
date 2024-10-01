import React, { useState } from "react";
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

const ManageReviewsList = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedReviewIndex, setSelectedReviewIndex] = useState(null);

  // Handle adding a new review
  const handleAddReview = () => {
    if (name && comment) {
      setReviews([...reviews, { name, comment, rating }]);
      setName("");
      setComment("");
      setRating(1); // Reset rating to default
    }
  };

  // Handle opening the delete confirmation dialog
  const handleOpenDeleteDialog = (index) => {
    setSelectedReviewIndex(index);
    setDeleteDialogOpen(true);
  };

  // Handle closing the delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedReviewIndex(null);
  };

  // Handle deleting a review
  const handleDeleteReview = () => {
    const updatedReviews = reviews.filter(
      (_, index) => index !== selectedReviewIndex
    );
    setReviews(updatedReviews);
    handleCloseDeleteDialog();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Review Management
      </Typography>

      {/* Input Fields for Name, Comment, and Rating */}
      <Box display="flex" gap={2} flexWrap="wrap">
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Comment"
          variant="outlined"
          fullWidth
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <TextField
          label="Rating"
          variant="outlined"
          type="number"
          inputProps={{ min: 1, max: 5 }}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddReview}
          sx={{ height: "56px" }}
        >
          Add
        </Button>
      </Box>

      {/* Table for displaying reviews */}
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
            {reviews.map((review, index) => (
              <TableRow key={index}>
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Do you really want to delete this review? This action cannot be
            undone.
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
