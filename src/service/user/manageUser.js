import routes from "../SystemService/routes.js";
import axios from "axios"; // Assuming you're using axios for API calls

const UserServices = {
  getUser: async (token) => {
    try {
      const response = await axios.get(routes.getUser, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in Authorization header
        },
      });
      return response.data.getUserData; // Adjust depending on your API response structure
    } catch (error) {
      console.error("Error fetching user data", error);
      return []; // Return empty array or handle error as needed
    }
  },
};

export default UserServices;
