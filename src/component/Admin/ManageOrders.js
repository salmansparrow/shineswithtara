import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
  DialogActions,
  //   Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Dummy data for orders
const dummyOrders = [
  {
    id: 1,
    name: "Order 1",
    amount: 100,
    status: "Pending",
    image: require("../../images/colorful/img1.png"),
    quantity: 2,
    price: 50,
  },
  {
    id: 2,
    name: "Order 2",
    amount: 250,
    status: "Processing",
    image: require("../../images/colorful/img1.png"),
    quantity: 5,
    price: 50,
  },
  {
    id: 3,
    name: "Order 3",
    amount: 75,
    status: "Confirmed",
    image: require("../../images/colorful/img1.png"),
    quantity: 1,
    price: 75,
  },
];

const OrderList = () => {
  const [orders, setOrders] = useState(dummyOrders);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [status, setStatus] = useState("");

  // Handle opening the dialog with selected order details
  const handleOpenDialog = (order) => {
    setSelectedOrder(order);
    setStatus(order.status); // Set initial status based on order status
    setOpenDialog(true);
  };

  // Handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrder(null);
  };

  // Handle status change in the dialog
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // Handle updating the order status
  const handleUpdateStatus = () => {
    if (selectedOrder) {
      const updatedOrders = orders.map((order) =>
        order.id === selectedOrder.id ? { ...order, status } : order
      );
      setOrders(updatedOrders);
      handleCloseDialog();
    }
  };

  // Dialog content for showing order details and status update
  const renderOrderDetailsDialog = () => (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        {/* Horizontal Layout for Status and Order Items */}
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Row 1: Status and Checkboxes */}
          <Box display="flex" alignItems="center" gap={3}>
            <Typography variant="h6">Status:</Typography>
            <RadioGroup row value={status} onChange={handleStatusChange}>
              <FormControlLabel
                value="Pending"
                control={<Radio />}
                label="Pending"
              />
              <FormControlLabel
                value="Processing"
                control={<Radio />}
                label="Processing"
              />
              <FormControlLabel
                value="Confirmed"
                control={<Radio />}
                label="Confirmed"
              />
              <FormControlLabel
                value="Delivered"
                control={<Radio />}
                label="Delivered"
              />
              <FormControlLabel
                value="Rejected"
                control={<Radio />}
                label="Rejected"
              />
            </RadioGroup>
          </Box>

          {/* Row 2: Order Details (Image, Name, Price, Qty) */}
          {selectedOrder && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <img
                src={selectedOrder.image}
                alt="Order"
                style={{
                  width: 100,
                  height: 100,
                  objectFit: "cover",
                  marginRight: 16,
                }}
              />
              <Box>
                <Typography variant="body1">
                  <strong>Item Name:</strong> {selectedOrder.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Price:</strong> ${selectedOrder.price}
                </Typography>
                <Typography variant="body1">
                  <strong>Quantity:</strong> {selectedOrder.quantity}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>

      {/* Dialog Actions: Cancel and Update Buttons */}
      <DialogActions>
        <Button onClick={handleCloseDialog} color="error">
          Cancel
        </Button>
        <Button onClick={handleUpdateStatus} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Orders List
      </Typography>

      {/* Orders Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount ($)</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={order.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpenDialog(order)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Render Order Details Dialog */}
      {renderOrderDetailsDialog()}
    </Box>
  );
};

export default OrderList;
