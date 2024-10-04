import { post } from "../index"; // Import the post method from your main service
import routes from "../SystemService/routes"; // Import routes for API endpoints

const AuthService = {
 login: async (credentials) => {
        try {
            const response = await post(routes.login, credentials); // Call the post method with the login route
            console.log("Login response:", response); // Debug log
            return response; // Return the response from the API
        } catch (err) {
            // Enhanced error handling
            console.error("Login error:", err); 
            if (err.response) {
                console.error("Backend response:", err.response.data);
                throw new Error(err.response.data.message || "Unknown error occurred during login.");
            } else if (err.request) {
                console.error("Request made but no response received:", err.request);
                throw new Error("No response from the server.");
            } else {
                throw new Error(`Request error: ${err.message}`);
            }
        }
    },

    register: async (userData) => { // New registration method
        try {
            const response = await post(routes.register, userData); 
            console.log("Registration response:", response);
            return response; // Return the response from the API
        } catch (error) {
       
            console.error("Registration error:", error); 
            if (error.response) {
                // If there’s a response from the server
                console.error("Backend response:", error.response.data);
                throw new Error(error.response.data.message || "Unknown error");
            } else if (error.request) {
                // If the request was made but no response received
                console.error("Request made but no response received:", error.request);
                throw new Error("No response from the server.");
            } else {
                // If there was an error setting up the request
                throw new Error(`Request error: ${error.message}`);
            }
        }
    },
};

export default AuthService;
