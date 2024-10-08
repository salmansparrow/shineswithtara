// src/pages/OrderPage.js
import React, { useEffect, useState } from "react";
import Layout from "../component/Layout/Layout";
import { Box, Typography } from "@mui/material";
import OrderTable from "../component/Orders/OrdersTable";
import OrderForm from "../component/Orders/OrderForm";

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch cart data from localStorage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedTotalAmount =
      JSON.parse(localStorage.getItem("totalAmount")) || 0;

    setCartItems(storedCartItems);
    setTotalAmount(storedTotalAmount);
  }, []);

  // Function to clear cart items after order is placed
  const clearCart = () => {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalAmount");
    setCartItems([]);
    setTotalAmount(0);
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "rgb(164, 174, 233)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "50px",
          backgroundColor: "rgb(189, 168, 225)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight: "bold",
            marginTop: "32px",
          }}
        >
          Order Summary
        </Typography>

        {/* Display OrderTable component with cart items and total amount */}
        {cartItems.length > 0 ? (
          <OrderTable cartItems={cartItems} totalAmount={totalAmount} />
        ) : (
          <Typography
            variant="h6"
            sx={{
              color: "#000",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            Your cart is empty.
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(171, 202, 255)",
          padding: "20px",
        }}
      >
        {/* Pass cartItems and clearCart to OrderForm */}
        <OrderForm
          cartItems={cartItems}
          totalAmount={totalAmount}
          clearCart={clearCart}
        />
      </Box>
    </Layout>
  );
};

export default OrderPage;
