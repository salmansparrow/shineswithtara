import routes from '../SystemService/routes';  // Import your routing file
import { post,get,deleted } from '../index';  
// Function to add a new FAQ
export const addFaq = async (faqData) => {
  try {
    // Use the post method and pass the correct route
    const response = await post(routes.addFaqs, faqData);
    return response;  // Return the response if successful
  } catch (error) {
    console.error("Error adding FAQ: ", error);  // Handle error
    throw error;
  }
};

// Function to fetch FAQs

export const getFaqs = async () => {
    try {
      const response = await get(routes.getFaqs); // Call the backend
      console.log("Response from getFaqs:", response); // Log the full response for debugging
  
      if (response && response.GetFaqs) {
        return response.GetFaqs; // Return the array under 'GetFaqs'
      } else {
        console.error("Unexpected response format:", response);
        return []; // Handle unexpected format
      }
    } catch (error) {
      console.error("Error fetching FAQs: ", error);
      throw error; // Rethrow error for further handling
    }
  };


  export const deleteFaq = async (id) => {
    try {
      const response = await deleted(`${routes.deleteFaq}/${id}`); // Ensure routes.deleteFaq is correct
      return response; // Return response if successful
    } catch (error) {
      console.error("Error deleting FAQ: ", error); // Handle error
      throw error; // Rethrow error for further handling
    }
  };
  
  
  
  
  

