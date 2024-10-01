import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Sample product data
const productData = [
  {
    id: 1,
    name: "Sample Product 1",
    price: 50,
    image: "https://via.placeholder.com/100",
    quantity: 2,
    total: 100,
  },
  {
    id: 2,
    name: "Sample Product 2",
    price: 75,
    image: "https://via.placeholder.com/100",
    quantity: 1,
    total: 75,
  },
];

const OrderTable = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is small

  return (
    <Box p={4}>
      {/* Table to display product data */}
      <TableContainer
        component={Paper}
        sx={{
          border: "3px solid rgb(189, 168, 225)", // Side border for the entire table
          borderRadius: "8px", // Optional for rounded corners
          overflowX: "auto", // Enable horizontal scrolling on small screens
        }}
      >
        <Table
          aria-label="order table"
          sx={{
            "& .MuiTableCell-root": {
              borderBottom: "none", // Removes the white lines inside the table
            },
            "& th, & td": {
              padding: isSmallScreen ? "8px" : "16px", // Adjust padding based on screen size
            },
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: "rgb(189, 168, 225)" }}>
              <TableCell sx={{ fontWeight: "bold" }}>No of Items</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Product Image</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Product Name & Price</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productData.map((product, index) => (
              <TableRow key={product.id} sx={{ backgroundColor: "rgb(189, 168, 225)" }}>
                {/* No of Items */}
                <TableCell>{index + 1}</TableCell>

                {/* Product Image */}
                <TableCell>
                  <Avatar src={product.image} alt={product.name} sx={{ width: 50, height: 50 }} />
                </TableCell>

                {/* Product Name & Price */}
                <TableCell>
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ${product.price}
                  </Typography>
                </TableCell>

                {/* Quantity */}
                <TableCell>{product.quantity}</TableCell>

                {/* Total */}
                <TableCell>${product.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
