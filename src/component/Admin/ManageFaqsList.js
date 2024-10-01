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

const ManageFaqsList = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedFaqIndex, setSelectedFaqIndex] = useState(null);

  // Handle adding a new FAQ
  const handleAddFaq = () => {
    if (question && answer) {
      setFaqs([...faqs, { question, answer }]);
      setQuestion("");
      setAnswer("");
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
  const handleDeleteFaq = () => {
    const updatedFaqs = faqs.filter((_, index) => index !== selectedFaqIndex);
    setFaqs(updatedFaqs);
    handleCloseDeleteDialog();
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        FAQ Management
      </Typography>

      {/* Input Fields for Question and Answer */}
      <Box display="flex" gap={2} flexWrap="wrap">
        <TextField
          label="Question"
          variant="outlined"
          fullWidth
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <TextField
          label="Answer"
          variant="outlined"
          fullWidth
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddFaq}
          sx={{ height: "56px" }}
        >
          Add
        </Button>
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
            {faqs.map((faq, index) => (
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
