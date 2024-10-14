import React from "react";
import {
  Box,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const PaginationComponent = ({
  currentPage,
  totalItems,
  itemsPerPage,
  handlePageChange,
  handleItemsPerPageChange,
}) => {
  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={3}
    >
      {/* Items per page select */}
      <FormControl size="small" variant="outlined">
        <InputLabel>Items per page</InputLabel>
        <Select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          label="Items per page"
        >
          {/* You can define your options here */}
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>

      {/* Pagination */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        showFirstButton // Optional: Adds a button for the first page
        showLastButton // Optional: Adds a button for the last page
      />
    </Box>
  );
};

export default PaginationComponent;
