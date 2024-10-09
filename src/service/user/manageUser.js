import routes from "../SystemService/routes.js";
import axios from "axios"; // Assuming you're using axios for API calls

const UserServices = {
  getUser: async () => {
    try {
      const response = await axios.get(routes.getUser);
      return response.data.getUserData; // Adjust depending on your API response structure
    } catch (error) {
      console.error("Error fetching user data", error);
      return [];
    }
  },
};

export default UserServices;
