import axios from 'axios';
import routes from '../SystemService/routes'; // Import the routes for the API URL

const AdminLoginService = {
  login: async (credentials) => {
    try {
      // Make the API call to the backend using the AdminLogin route
      const response = await axios.post(routes.AdminLogin, credentials);
      
      // Return the response from the backend
      return response.data;
    } catch (error) {
      // Handle any errors during the login request
      throw error.response?.data || error.message;
    }
  },
};

export default AdminLoginService;
