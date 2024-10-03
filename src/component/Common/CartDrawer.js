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
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartDrawer = ({
  open,
  onClose,
  cartItems,
  onIncreaseQty,
  onDecreaseQty,
}) => {
  //   console.log(cartItems);

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, padding: 2 }}>
        {/* Cart Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 1 }} />

        {/* Empty Cart Case */}
        {cartItems.length === 0 ? (
          <Typography variant="body1">Your cart is empty!</Typography>
        ) : (
          <Box>
            {/* Cart Items */}
            {cartItems.map((item, index) => (
              <Box key={index}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ my: 2 }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 60, height: 60 }}
                  />

                  {/* Item Details */}
                  <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="body2">
                      Price: ${item.price.toFixed(2)}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      {/* Quantity Controls */}
                      <IconButton
                        size="small"
                        onClick={() => onDecreaseQty(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2" sx={{ mx: 1 }}>
                        {item.quantity}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => onIncreaseQty(item.id)}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  {/* Total Price for the item */}
                  <Typography variant="body2" sx={{ ml: 2 }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))}

            {/* Subtotal and Checkout Button */}
            <Box display="flex" justifyContent="space-between" my={2}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Subtotal:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                ${calculateSubtotal()}
              </Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth>
              Checkout
            </Button>
          </Box>
        )}
      </Box>
    </Drawer>
  );
};

export default CartDrawer;
