import React, { useEffect, useState } from "react";
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
  const [imagePreview, setImagePreview] = useState(null); // Image preview
  const [imageName, setImageName] = useState(""); // Image file name
  const [books, setBooks] = useState([]); // List of products
  const [editIndex, setEditIndex] = useState(null); // Track editing index
  const [editId, setEditId] = useState(null); // Track the ID of the product being edited
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState(5); // Items per page

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

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
    setImageName(file ? file.name : ""); // Set the image name
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
    setImage(null); // Image will be set only when uploaded again
    setImagePreview(book.imageURL); // Assuming imageURL is the URL for the image in the database
    setEditIndex(index);
    setEditId(book._id); // Use the product ID for editing
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
        <Grid item xs={12} sm={4}>
          <TextField
            label="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Product Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            size="small"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
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

        {/* Image Upload and Add Product Button on the Same Line */}
        <Grid item xs={12} sm={6} lg={4}>
          <Button
            variant="contained"
            component="label"
            fullWidth
            size="medium"
            sx={{
              textTransform: "none",
              mb: 2,
              borderColor: "rgba(0, 0, 0, 0.23)",
            }}
          >
            {imageName ? imageName : "Browse Image"}{" "}
            {/* Show image name if available */}
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>

          {/* Image Preview */}
          {imagePreview && (
            <Box mt={2}>
              <img
                src={imagePreview}
                alt="Product Preview"
                width="100%"
                style={{ maxHeight: 200, objectFit: "cover", borderRadius: 8 }}
              />
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Button
            variant="contained"
            onClick={handleAddBook}
            disabled={!name || !price || !category || !imagePreview}
            fullWidth
            size="medium"
            sx={{
              backgroundColor: "rgb(143, 82, 161)",
              "&:hover": { backgroundColor: "rgb(120, 70, 140)" },
            }}
          >
            {editIndex !== null ? "Edit Product" : "Add Product"}
          </Button>
        </Grid>
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
                  {/* {book.imageURL && ( */}
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
                  {/* )} */}
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
