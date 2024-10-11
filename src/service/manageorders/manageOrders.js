import axios from "axios";
import routes from "../SystemService/routes"; // Import the updated routes

const orderService = {
  // Function to add an order
  addOrder: async (orderData) => {
    try {
      const response = await axios.post(routes.addOrder, orderData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error placing order:", error);
      throw error;
    }
  },

  // Function to get all orders
  getOrders: async () => {
    try {
      // Retrieve token from localStorage
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(routes.getOrders, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token to the request header
        },
      });

      return response.data; // Return the data from the response
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  },

  // Function to get an order by ID
  getOrderById: async (orderId) => {
    try {
      const response = await axios.get(`${routes.getOrderById}/${orderId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching order:", error);
      throw error;
    }
  },

  // Function to update an order by ID
  updateOrder: async (orderId, updatedData) => {
    try {
      const response = await axios.put(
        `${routes.updateOrder}/${orderId}`,
        updatedData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating order:", error);
      throw error;
    }
  },
};

export default orderService;
