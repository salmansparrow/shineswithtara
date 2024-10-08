// src/store/manageOrderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "../../service/manageorders/manageOrders";

// Async action to place an order
export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const response = await orderService.addOrder(orderData);
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

// Async action to fetch orders
export const fetchOrders = createAsyncThunk(
  "order/fetchOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderService.getOrders();
      return response;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

const manageOrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearOrders: (state) => {
      state.orders = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle placeOrder actions
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload); // Add the newly placed order
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle errors
      })
      // Handle fetchOrders actions
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload; // Replace the orders with fetched data
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Handle errors
      });
  },
});

// Export actions and selectors
export const { clearOrders } = manageOrderSlice.actions;
export const selectOrders = (state) => state.order.orders;
export const selectOrderLoading = (state) => state.order.loading;
export const selectOrderError = (state) => state.order.error;

export default manageOrderSlice.reducer;
