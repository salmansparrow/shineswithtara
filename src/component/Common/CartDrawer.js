import React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CartDrawer = ({ open, onClose, cartItems }) => {
  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 300, padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 1 }} />
        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty.</Typography>
        ) : (
          <Box>
            {cartItems.map((item, index) => (
              <Box
                key={index}
                sx={{ display: "flex", justifyContent: "space-between", my: 1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: 50, height: 50 }}
                />
                <Box sx={{ flexGrow: 1, ml: 1 }}>
                  <Typography variant="body2">{item.name}</Typography>
                  <Typography variant="body2">
                    Price: ${item.price.toFixed(2)}
                  </Typography>
                  <Typography variant="body2">Qty: {item.quantity}</Typography>
                </Box>
              </Box>
            ))}
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Subtotal: ${calculateSubtotal()}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
