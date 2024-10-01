import React from "react";
import Layout from "../component/Layout/Layout";
import {Box,Typography} from "@mui/material"
import OrderTable from "../component/Orders/OrdersTable";
import OrderForm from "../component/Orders/OrderForm";


const OrderPage=()=>{
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
          backgroundColor:"rgb(189, 168, 225)"
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            color: "#000",
            fontWeight:"bold",
            marginTop: "32px",
          }}
        >
         Order Summary
        </Typography>
        <OrderTable />
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
    
      
      <OrderForm/>
      </Box>
    </Layout>
)}

export default OrderPage;