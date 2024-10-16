// src/components/OrderTable.js
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
import { useLocation } from "react-router-dom";

const OrderTable = ({
  cartItems: propsCartItems,
  totalAmount: propsTotalAmount,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is small
  const location = useLocation();

  // Use location.state as fallback if no props are passed from OrderPage
  const { cartItems, totalAmount } = propsCartItems
    ? { cartItems: propsCartItems, totalAmount: propsTotalAmount }
    : location.state || { cartItems: [], totalAmount: 0 };

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
              <TableCell sx={{ fontWeight: "bold" }}>
                Product Name & Price
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((product, index) => (
              <TableRow
                key={product.id}
                sx={{ backgroundColor: "rgb(189, 168, 225)" }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <Avatar
                    src={product.image}
                    alt={product.name}
                    sx={{ width: 50, height: 50 }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="body1">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ${product.price}
                  </Typography>
                </TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  ${(product.price * product.quantity).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderTable;
