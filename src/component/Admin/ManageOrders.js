import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import orderService from "../../service/manageorders/manageOrders"; // Import the service

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [status, setStatus] = useState("");

  // Fetch orders from API
  const fetchOrders = async () => {
    try {
      const response = await orderService.getOrders();
      console.log("Fetched Orders:", response); // Log the fetched data

      // Access the orders from the response
      const fetchedOrders = response.getOrderData; // Adjust this line based on the actual response
      setOrders(Array.isArray(fetchedOrders) ? fetchedOrders : []); // Ensure it's an array
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Fetch orders when the component mounts
  useEffect(() => {
    fetchOrders();
  }, []);

  // Handle opening the dialog with selected order details
  const handleOpenDialog = (order) => {
    setSelectedOrder(order);
    setStatus(order.orderStatus); // Set initial status based on order status
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
  const handleUpdateStatus = async () => {
    if (selectedOrder) {
      // Create the updated data object
      const updatedData = { orderStatus: status };

      try {
        // Call the updateOrder function from the orderService
        await orderService.updateOrder(selectedOrder._id, updatedData);

        // Update local orders state
        const updatedOrders = orders.map((order) =>
          order._id === selectedOrder._id
            ? { ...order, orderStatus: status }
            : order
        );
        setOrders(updatedOrders);
        handleCloseDialog();
      } catch (error) {
        console.error("Error updating order:", error);
      }
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
        <Box display="flex" flexDirection="column" gap={2}>
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

          {selectedOrder && (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <img
                src={selectedOrder.items[0].image}
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
                  <strong>Item Name:</strong>{" "}
                  {selectedOrder.items[0].productName}
                </Typography>
                <Typography variant="body1">
                  <strong>Price:</strong> ${selectedOrder.items[0].price}
                </Typography>
                <Typography variant="body1">
                  <strong>Quantity:</strong> {selectedOrder.items[0].quantity}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
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

  // Reverse the orders array to show the most recent ones first
  const reversedOrders = [...orders].reverse();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Orders List
      </Typography>
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
            {reversedOrders.length > 0 ? (
              reversedOrders.map((order, index) => (
                <TableRow key={order._id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {order.firstName} {order.lastName}
                  </TableCell>
                  <TableCell>{order.totalAmount}</TableCell>
                  <TableCell>{order.orderStatus}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpenDialog(order)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  <Typography variant="body1">No orders found.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Render Order Details Dialog */}
      {renderOrderDetailsDialog()}
    </Box>
  );
};

export default ManageOrders;
