import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import star from "../../images/watch/star.png";
import { useLocation } from "react-router-dom";

const OrderForm = () => {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {
    cartItems: [],
    totalAmount: 0,
  }; // Fallback if no cart data

  const [formData, setFormData] = {};

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
              variant="outlined"
              sx={{
                backgroundColor: "white",
                boxSizing: "border-box", // Apply border-box sizing
                "& .MuiOutlinedInput-root": {
                  boxSizing: "border-box", // Ensures border-box applies to the outer element as well
                },
              }}
            />
            <TextField
              label="Last Name"
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
