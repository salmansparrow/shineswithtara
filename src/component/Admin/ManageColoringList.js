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
import PaginationComponent from "../Pagination/Pagination";

const ManageColoringList = () => {
  const [name, setName] = useState(""); // Sheet name
  const [image, setImage] = useState(null); // Sheet image
  const [coloringSheets, setColoringSheets] = useState([]); // List of coloring sheets
  const [editIndex, setEditIndex] = useState(null); // Track editing index
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const [itemsPerPage, setItemsPerPage] = useState(5); // Items per page

  // Handle adding or updating a coloring sheet
  const handleAddSheet = () => {
    const newSheet = { name, image };

    if (editIndex !== null) {
      // Update existing sheet
      const updatedSheets = coloringSheets.map((sheet, index) =>
        index === editIndex ? newSheet : sheet
      );
      setColoringSheets(updatedSheets);
      setEditIndex(null); // Reset after editing
    } else {
      // Add new sheet
      setColoringSheets([...coloringSheets, newSheet]);
    }

    // Clear form inputs
    setName("");
    setImage(null);
  };

  // Handle editing a coloring sheet
  const handleEditSheet = (index) => {
    const sheet = coloringSheets[index];
    setName(sheet.name);
    setImage(sheet.image);
    setEditIndex(index);
  };

  // Handle deleting a coloring sheet
  const handleDeleteSheet = (index) => {
    const updatedSheets = coloringSheets.filter((_, i) => i !== index);
    setColoringSheets(updatedSheets);
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
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
  const currentSheets = coloringSheets.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Manage Coloring Sheets
      </Typography>

      {/* Input Form */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sheet Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" component="label" fullWidth>
            Browse Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={handleAddSheet}
            disabled={!name || !image}
            fullWidth
          >
            {editIndex !== null ? "Edit Sheet" : "Add Sheet"}
          </Button>
        </Grid>
      </Grid>

      {/* Coloring Sheets Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Picture</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentSheets.map((sheet, index) => (
              <TableRow key={indexOfFirstItem + index}>
                <TableCell>{indexOfFirstItem + index + 1}</TableCell>
                <TableCell>{sheet.name}</TableCell>
                <TableCell>
                  {sheet.image && (
                    <img
                      src={sheet.image}
                      alt="Sheet"
                      width={50}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditSheet(index)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteSheet(index)}
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
        totalItems={coloringSheets.length}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
        handleItemsPerPageChange={handleItemsPerPageChange}
      />
    </Box>
  );
};

export default ManageColoringList;
