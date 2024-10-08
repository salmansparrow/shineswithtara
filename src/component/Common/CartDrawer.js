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
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQty,
  increaseQty,
  removeItem,
} from "../../pages/features/Slice";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify"; 

const CartDrawer = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleIncreaseQty = (id) => {
    dispatch(increaseQty(id));
  };

  const handleDecreaseQty = (id) => {
    dispatch(decreaseQty(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
<<<<<<< HEAD
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); 
    } else {
      // Navigate to the OrderTable page with the cart items and total amount
      navigate("/order", {
        state: { cartItems, totalAmount: calculateSubtotal() }, // Include total amount
      });
    }
=======
    const totalAmount = calculateSubtotal(); // Calculate the total amount

    localStorage.setItem("cartItems", JSON.stringify(cartItems)); // Store cart items in localStorage
    localStorage.setItem("totalAmount", totalAmount); // Store total amount in localStorage

    // Navigate to the order page
    navigate("/order", {
      state: { cartItems, totalAmount }, // Passing cart items and total amount via state
    });

    // Clear the cart in Redux and localStorage after checkout
>>>>>>> f8daa1c54242f366b71ed47182ffb1e7f01c52b5
    onClose(); // Close the drawer after checkout
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          style: {
            backgroundColor: "grey",
            opacity: "0.2",
          },
        },
      }}
    >
      <Box
        sx={{
          width: 350,
          padding: 2,
        }}
      >
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
              <Box key={index}>
                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my: 2 }}>
                  <img src={item.image} alt={item.name} style={{ width: 60, height: 60 }} />
                  <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="body2">Price: ${item?.price?.toFixed(2)}</Typography>
                    <Box display="flex" alignItems="center">
                      <IconButton size="small" onClick={() => handleDecreaseQty(item.id)} disabled={item.quantity <= 1}>
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography variant="body2" sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton size="small" onClick={() => handleIncreaseQty(item.id)}>
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                  <Typography variant="body2" sx={{ ml: 2 }}>${(item.price * item.quantity).toFixed(2)}</Typography>
                  <IconButton size="small" onClick={() => handleRemoveItem(item.id)} color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))}

            <Box display="flex" justifyContent="space-between" my={2}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>Subtotal:</Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>${calculateSubtotal()}</Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth onClick={handleCheckout}>
              Checkout
            </Button>
          </Box>
        )}
      </Box>
      <ToastContainer position="top-right" /> {/* Include ToastContainer with position */}
    </Drawer>
  );
};

export default CartDrawer;
