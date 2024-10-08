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
import { useForm } from "react-hook-form"; // Importing useForm
import { addFaq, getFaqs, deleteFaq } from "../../service/faq/index"; // Import functions

const ManageFaqsList = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm(); // Using useForm
  const [faqs, setFaqs] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFaqs(); // Trigger fetching FAQs
  }, []); // Empty dependency array to run the effect only on mount
 
 
  const fetchFaqs = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedFaqs = await getFaqs(); // Fetch FAQs from the updated function
      console.log("Fetched FAQs:", fetchedFaqs); // Debugging
      setFaqs(fetchedFaqs); // Update local state with fetched FAQs
    } catch (err) {
      console.error("Error fetching FAQs:", err); // Debugging
      setError("Failed to load FAQs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new FAQ
  const handleAddFaq = async (data) => {
    const { question, answer } = data; // Destructure question and answer from the data

    setLoading(true);
    setError(null);
    try {
      const newFaq = await addFaq({ question, answer }); // Add FAQ via API

      if (newFaq && newFaq.question && newFaq.answer) {
        setFaqs((prevFaqs) => [...prevFaqs, newFaq]); // Add the new FAQ to the list
      } else {
        // If the new FAQ is not returned correctly, use the input values
        setFaqs((prevFaqs) => [
          ...prevFaqs,
          { question: question, answer: answer },
        ]);
      }

      // Clear input fields
      reset(); // Reset the form fields
    } catch (err) {
      console.error("Error adding FAQ:", err); // Log error for debugging
      setError("Failed to add FAQ. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle opening the delete confirmation dialog
  const handleOpenDeleteDialog = (index) => {
    setSelectedFaqIndex(index);
    setDeleteDialogOpen(true);
  };

  // Handle closing the delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setSelectedFaqIndex(null);
  };

  // Handle deleting an FAQ
  const handleDeleteFaq = async () => {
    setLoading(true);
    setError(null);
    try {
      const faqToDelete = faqs[selectedFaqIndex]; // Get the FAQ to delete
      console.log("FAQ to delete:", faqToDelete); // Debugging line

      // Change id to _id
      if (faqToDelete && faqToDelete._id) {
        await deleteFaq(faqToDelete._id); // Call the delete function with the FAQ _id
        const updatedFaqs = faqs.filter((_, index) => index !== selectedFaqIndex); // Update state
        setFaqs(updatedFaqs); // Update local state
      } else {
        throw new Error("FAQ does not have a valid ID."); // This will trigger if the _id is missing
      }
      handleCloseDeleteDialog(); // Close the dialog
    } catch (err) {
      console.error("Error deleting FAQ:", err); // Log error for debugging
      setError("Failed to delete FAQ. Please try again."); // Update error state for UI feedback
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        FAQ Management
      </Typography>

      {/* Error message */}
      {error && <Typography color="error">{error}</Typography>}

      {/* Input Fields for Question and Answer */}
      <Box display="flex" gap={2} flexWrap="wrap">
        <form onSubmit={handleSubmit(handleAddFaq)}> {/* Use handleSubmit from react-hook-form */}
          <TextField
            label="Question"
            variant="outlined"
            fullWidth
            {...register("question", { required: "Question is required" })} // Register the question field
            error={!!errors.question} // Show error state
            helperText={errors.question ? errors.question.message : ""} // Show error message
          />
          <TextField
          style={{margin:"10px 0"}}
            label="Answer"
            variant="outlined"
            fullWidth
            {...register("answer", { required: "Answer is required" })} // Register the answer field
            error={!!errors.answer} // Show error state
            helperText={errors.answer ? errors.answer.message : ""} // Show error message
          />
          <Button
            variant="contained"
            color="primary"
            type="submit" // Change to submit
            disabled={loading}
            sx={{ height: "56px" }}
          >
            {loading ? "Adding..." : "Add"}
          </Button>
        </form>
      </Box>

      {/* Table for displaying FAQs */}
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Question</TableCell>
              <TableCell>Answer</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{faq.question}</TableCell>
                  <TableCell>{faq.answer}</TableCell>
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
                <TableCell colSpan={4} align="center">No FAQs available</TableCell>
              </TableRow>
            )}
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
            Do you really want to delete this FAQ? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            No
          </Button>
          <Button onClick={handleDeleteFaq} color="error">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageFaqsList;
