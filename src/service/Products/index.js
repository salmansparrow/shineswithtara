import { get } from "../index"; // Import the get method from your main service
import routes from "../SystemService/routes"; // Import routes for API endpoints

const ProductService = {
    getProducts: async () => { 
        try {
            const response = await get(routes.GetProduct); // Call the get method with the GetProduct route
            console.log("Product data response:", response); // Debug log
            return response; // Return the response from the API
        } catch (err) {
            // Enhanced error handling
            console.error("Product fetch error:", err);
            if (err.response) {
                console.error("Backend response:", err.response.data);
                throw new Error(err.response.data.message || "Unknown error occurred while fetching products.");
            } else if (err.request) {
                console.error("Request made but no response received:", err.request);
                throw new Error("No response from the server.");
            } else {
                throw new Error(`Request error: ${err.message}`);
            }
        }
    },
};

export default ProductService;
