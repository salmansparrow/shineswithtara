import routes from '../SystemService/routes';  // Adjust the import path as necessary
import { post,get,deleted } from '../index';  // Adjust the import path as necessary

// Function to add a review
export const addReview = async (reviewData) => {
  try {
    const response = await post(routes.addReview, reviewData);
    return response; // Return the response from the API
  } catch (error) {
    throw error; // Handle error appropriately
  }
};
export const getReviews = async () => {
    try {
      const response = await get(routes.getReview); // Call the backend
      console.log("Response from getReview:", response); // Log the full response for debugging
  
      if (response && response.GetReviews) { // Check for GetReviews instead of GetReview
        return response.GetReviews; // Return the array under 'GetReviews'
      } else {
        console.error("Unexpected response format:", response);
        return []; // Handle unexpected format by returning an empty array
      }
    } catch (error) {
      console.error("Error fetching Review:", error);
      throw error; 
    }
  };

  export const deleteReview = async (id) => {
    try {
      const response = await deleted(`${routes.deleteReview.replace(':id', id)}`); 
      return response; 
    } catch (error) {
      console.error("Error deleting review: ", error); 
      throw error; 
    }
  };
  
  
  