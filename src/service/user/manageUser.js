import axios from "axios";
import routes from "../SystemService/routes"; // Assuming route configurations are correct

const UserServices = {
  getUser: async (page, limit) => {
    try {
      const response = await axios.get(`${routes.getUser}?page=${page}&limit=${limit}`);
      console.log("API Response:", response.data); // Log response to verify structure
      return response.data; // Return entire data object
    } catch (error) {
      console.error("Error fetching user data:", error);
      return { getUserData: [], totalCount: 0 }; // Fallback for errors
    }
  },
};

export default UserServices;
