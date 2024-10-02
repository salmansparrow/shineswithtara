const BASE_URL = "https://your-api-url.com"; // Replace with your actual base URL

const routes = {
  // Authentication-related routes
  login: `${BASE_URL}/auth/login`,
  register: `${BASE_URL}/auth/register`,
  logout: `${BASE_URL}/auth/logout`,
  getData: `${BASE_URL}/auth/getData`,



  // User-related routes
  getUserProfile: `${BASE_URL}/user/profile`,
  updateUserProfile: `${BASE_URL}/user/profile/update`,
  deleteUser: `${BASE_URL}/user/delete`,
};

export default routes;
