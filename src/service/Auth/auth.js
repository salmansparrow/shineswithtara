import { post } from "../index"; // Import the post method from your main service
import routes from "../SystemService/routes"; // Import routes for API endpoints

const AuthService = {
    login: async (credentials) => {
        try {
            const response = await post(routes.login, credentials); // Call the post method with the login route
            return response; // Return the response from the API
        } catch (error) {
            throw error; // Handle errors as needed
        }
    },

    register: async (userData) => { // New registration method
        try {
            const response = await post(routes.register, userData); // Call the post method with the registration route
           console.log(response);
            return response; // Return the response from the API
        } catch (error) {
            throw error; // Handle errors as needed
        }
    },
};

export default AuthService;
