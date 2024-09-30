import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ManageBooks = () => {
  const [name, setName] = useState(""); // Book name
  const [price, setPrice] = useState(""); // Book price
  const [image, setImage] = useState(null); // Book image
  const [books, setBooks] = useState([]); // List of books
  const [editIndex, setEditIndex] = useState(null); // Track editing index

  // Handle adding or updating a book
  const handleAddBook = () => {
    const newBook = { name, price, image };

    if (editIndex !== null) {
      // Update existing book
      const updatedBooks = books.map((book, index) =>
        index === editIndex ? newBook : book
      );
      setBooks(updatedBooks);
      setEditIndex(null); // Reset after editing
    } else {
      // Add new book
      setBooks([...books, newBook]);
    }

    // Clear form inputs
    setName("");
    setPrice("");
    setImage(null);
  };

  // Handle editing a book
  const handleEditBook = (index) => {
    const book = books[index];
    setName(book.name);
    setPrice(book.price);
    setImage(book.image);
    setEditIndex(index);
  };

  // Handle deleting a book
  const handleDeleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Manage Books
      </Typography>

      {/* Input Form */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Book Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Book Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button variant="contained" component="label">
            Browse Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleAddBook}
            disabled={!name || !price || !image}
            sx={{ mt: 2 }}
          >
            {editIndex !== null ? "Edit Book" : "Add Book"}
          </Button>
        </Grid>
      </Grid>

      {/* Books Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.price}</TableCell>
                <TableCell>
                  {book.image && (
                    <img
                      src={book.image}
                      alt="Book"
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditBook(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteBook(index)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageBooks;
