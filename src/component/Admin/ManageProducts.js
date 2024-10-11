import React, { useState, useEffect } from "react";
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PaginationComponent from "../Pagination/Pagination";
import productService from "../../service/addproduct/addProduct";

const ManageProducts = () => {
  const [name, setName] = useState(""); // Product name
  const [price, setPrice] = useState(""); // Product price
  const [category, setCategory] = useState(""); // Product category
  const [image, setImage] = useState(null); // Product image file
  const [imagePreview, setImagePreview] = useState(null); // Image preview (for new upload and existing images)
  const [imageName, setImageName] = useState(""); // Image file name
  const [books, setBooks] = useState([]); // List of products
  const [editIndex, setEditIndex] = useState(null); // Track editing index
  const [editId, setEditId] = useState(null); // Track the ID of the product being edited
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState(5); // Items per page
  const [dragOver, setDragOver] = useState(false); // State to track drag-and-drop
  const [imageError, setImageError] = useState(null);

  const categories = ["Books", "Coloring", "Activity-Sheets", "Extra-Sheets"]; // Sample categories

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the database
  const fetchProducts = async () => {
    try {
      const products = await productService.getProducts({ page: 1, limit: 10 });
      setBooks(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle adding or updating a product
  const handleAddBook = async () => {
    try {
      const productData = {
        bookName: name,
        bookPrice: price,
        category,
        image,
      };

      if (editId) {
        // If editing, call updateProduct method
        await productService.updateProduct(editId, productData);
      } else {
        // Otherwise, call addProduct method
        await productService.addProducts(productData);
      }

      // Fetch updated list after adding or editing
      fetchProducts();

      // Clear form after successful addition or update
      clearForm();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  // Handle image upload via input
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);

    if (file) {
      const fileSize = 3;
      const maxSizeInBytes = fileSize * 1024 * 1024; // 3MB in bytes
      if (file.size > maxSizeInBytes) {
        setImageError(
          `File size exceeds ${fileSize}MB. Please upload a smaller file.`
        );
        return;
      }
      setImageError(null);
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Show image preview
      setImageName(file.name); // Show file name
    }
  };

  // Handle image drop via drag-and-drop
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const fileSize = 3;
      const maxSizeInBytes = fileSize * 1024 * 1024; // 3MB in bytes
      if (file.size > maxSizeInBytes) {
        setImageError(
          `File size exceeds ${fileSize}MB. Please upload a smaller file.`
        );
        return;
      }
      setImageError(null);
      setImage(file);
      setImagePreview(URL.createObjectURL(file)); // Show image preview
      setImageName(file.name); // Show file name
      setDragOver(false); // Reset drag state
    }
  };

  // Clear form
  const clearForm = () => {
    setName("");
    setPrice("");
    setCategory("");
    setImage(null);
    setImagePreview(null);
    setImageName("");
    setEditIndex(null);
    setEditId(null); // Clear editId for future add operations
  };

  // Handle editing a book
  const handleEditBook = (index) => {
    const book = books[index];
    setName(book.bookName);
    setPrice(book.bookPrice);
    setCategory(book.category);
    setImage(null); // Reset image file
    setImagePreview(
      book.imageUrl ? `http://localhost:3000/${book.imageUrl}` : null
    ); // Show the current image URL if available
    setEditIndex(index);
    setEditId(book._id); // Use the product ID for editing
    setImageName(book.imageUrl); // Show image file name in the drag and drop box
  };

  // Handle deleting a book
  const handleDeleteBook = async (id) => {
    try {
      await productService.deleteProduct(id); // Call API to delete product
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(event.target.value);
    setCurrentPage(1); // Reset to first page when items per page changes
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  // Calculate the items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Manage Products
      </Typography>

      {/* Input Form */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Product Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, index) => (
                <MenuItem key={index} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Drag and Drop Image Upload */}
        <Grid item xs={12} sm={6} lg={4}>
          <Box
            onDrop={handleImageDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            sx={{
              border: "2px dashed #ccc",
              p: { xs: 2, sm: 3 }, // Padding adjusts on small screens
              textAlign: "center",
              cursor: "pointer",
              borderRadius: "8px",
              backgroundColor: dragOver ? "#f0f0f0" : "transparent",
              mb: 2,
              height: { xs: "150px", sm: "200px" }, // Adjust height for small screens
              display: "flex",
              flexDirection: "column", // Stack content vertically
              justifyContent: "center", // Center vertically
              alignItems: "center", // Center horizontally
            }}
          >
            <Typography variant="body2" sx={{ mb: 2 }}>
              {" "}
              {/* Added margin-bottom for spacing */}
              {imageName ||
                (dragOver
                  ? "Drop the image here..."
                  : "Drag & drop an image here, or click to select one")}
            </Typography>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageUpload}
              id="file-input"
            />
            <label htmlFor="file-input">
              <Button
                variant="contained"
                component="span"
                size="small"
                sx={{ mt: 2 }} // Adds margin-top to create space between text and button
              >
                Browse Image
              </Button>
            </label>
          </Box>
          {imageError && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {imageError}
            </Typography>
          )}
        </Grid>

        {/* Image Preview */}
        <Grid item xs={12} sm={6}>
          {imagePreview && (
            <Box
              sx={{
                height: { xs: "150px", sm: "200px" }, // Match the drag and drop height
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imagePreview}
                alt="Product Preview"
                style={{
                  maxHeight: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>

      {/* Add Product Button at the Bottom Left */}
      <Grid container justifyContent="flex-start" sx={{ mb: 3 }}>
        <Button
          variant="contained"
          onClick={handleAddBook}
          disabled={!name || !price || !category || !imagePreview}
          size="medium"
          sx={{
            backgroundColor: "rgb(143, 82, 161)",
            "&:hover": { backgroundColor: "rgb(120, 70, 140)" },
          }}
        >
          {editIndex !== null ? "Edit Product" : "Add Product"}
        </Button>
      </Grid>

      {/* Products Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentBooks.map((book, index) => (
              <TableRow key={indexOfFirstItem + index}>
                <TableCell>{indexOfFirstItem + index + 1}</TableCell>
                <TableCell>{book.bookName}</TableCell>
                <TableCell>{book.bookPrice}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>
                  <img
                    src={"http://localhost:3000/" + book?.imageUrl} // Assuming imageURL is provided by the database
                    alt="Product"
                    width={200}
                    height={100}
                    style={{
                      objectFit: "contain",
                      borderRadius: 4,
                    }}
                  />
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditBook(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteBook(book._id)}
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

      {/* Pagination */}
      <PaginationComponent
        currentPage={currentPage}
        totalItems={books.length}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
    </Box>
  );
};

export default ManageProducts;
