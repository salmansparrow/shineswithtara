import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import star from "../../images/watch/star.png";
import { useDispatch } from "react-redux";
import { placeOrder } from "../../pages/features/manageOrder";

const OrderForm = ({ cartItems, totalAmount, clearCart }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (simulated order placement)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled in
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      alert("Please fill in all the fields.");
      return;
    }

    // Prepare the order data
    const orderData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      items: cartItems, // Cart items passed via props
      totalAmount: totalAmount,
    };

    console.log(orderData.items);

    try {
      // Send the order to the backend
      // await orderService.addOrder(orderData);
      await dispatch(placeOrder(orderData)).unwrap();
      alert("Order placed successfully!");
      // Clear form fields
      // dispatch(clearCart());
      clearCart();

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error("Error placing order:", error);
      alert("There was a problem placing your order.");
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={8}>
        <Box
          sx={{
            background:
              "linear-gradient(90deg, rgba(235, 87, 122, 0.95) 0%, rgba(136, 71, 155, 0.95) 46%, rgba(249, 191, 41, 0.95) 100%)",
            padding: "40px",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={star}
              alt="Star"
              style={{ width: "40px", marginRight: "10px" }}
            />
            <Box textAlign="center" flexGrow={1}>
              <Typography
                variant="h2"
                sx={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: "24px",
                  textAlign: "center", // Center the "Orders" text
                }}
              >
                Orders
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // Center the "Shine With Tara" text
              marginBottom: "20px", // Add some spacing below
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgb(249, 191, 41)", // Set color for "Shine With Tara"
                fontSize: "20px", // Adjust font size if needed
                textAlign: "center", // Center the text
              }}
            >
              Shine With Tara
            </Typography>
          </Box>

          {/* Form Fields */}
          <Box
            component="form"
            onSubmit={handleSubmit} // Form submission handler
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr", // 1 field per row on xs screens
                sm: "1fr 1fr", // 2 fields per row on sm and above
                md: "1fr 1fr",
              },
              gap: "20px",
            }}
          >
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  boxSizing: "border-box",
                },
              }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  boxSizing: "border-box",
                },
              }}
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  boxSizing: "border-box",
                },
              }}
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="outlined"
              sx={{
                backgroundColor: "white",
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  boxSizing: "border-box",
                },
              }}
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              sx={{
                gridColumn: { xs: "span 1", sm: "span 2" },
                backgroundColor: "white",
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  boxSizing: "border-box",
                },
              }} // Span 2 columns on sm screens and up
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                gridColumn: "1 / -1", // Take full width
                marginTop: "20px",
                backgroundColor: "rgb(249, 191, 41)",
                color: "white",
                padding: "10px 10px",
                "&:hover": {
                  backgroundColor: "rgba(136, 71, 155, 0.95)",
                },
              }}
            >
              Confirm Order
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OrderForm;
