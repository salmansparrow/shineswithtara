import axios from "axios";
import routes from "../SystemService/routes"; // Import routes

const productService = {
  // Add Product
  addProducts: async (productData) => {
    try {
      const formData = new FormData();
      formData.append("bookName", productData.bookName);
      formData.append("bookPrice", productData.bookPrice);
      formData.append("category", productData.category);
      formData.append("image", productData.image); // Add the image file

      const response = await axios.post(routes.addProducts, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  },

  // Get Products (with pagination or filtering by category if needed)
  getProducts: async (params = {}) => {
    try {
      const { page = 1, limit = 10, category = "" } = params;
      const response = await axios.get(routes.getProducts, {
        params: { page, limit, category }, // Pass query params for pagination and filtering
      });

      return response.data.getProductData;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },

  // Update Product
  updateProduct: async (id, updatedProductData) => {
    try {
      const formData = new FormData();
      formData.append("bookName", updatedProductData.bookName);
      formData.append("bookPrice", updatedProductData.bookPrice);
      formData.append("category", updatedProductData.category);
      formData.append("image", updatedProductData.image); // Updated image file

      const response = await axios.put(
        `${routes.updateProduct}/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error updating product:", error);
      throw error;
    }
  },

  // Delete Product
  deleteProduct: async (id) => {
    try {
      const response = await axios.delete(`${routes.deleteProduct}/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting product:", error);
      throw error;
    }
  },
};

export default productService;
