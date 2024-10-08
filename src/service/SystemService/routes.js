import { getReviews } from "../Reviews";

const routes = {
  login: "http://localhost:3000/User/Login",
  register: "http://localhost:3000/User/Register",
  AdminLogin: "http://localhost:3000/User/AdminLogin",
  addProducts: "http://localhost:3000/Product/AddProducts",
  getProducts: "http://localhost:3000/Product/GetProduct",
  updateProduct: "http://localhost:3000/Product/ProductUpdate",
  deleteProduct: "http://localhost:3000/Product/ProductDelete",

  // FAQ
  addFaqs: "http://localhost:3000/Faqs/AddFaqs",
  getFaqs: "http://localhost:3000/Faqs/GetFaqs",
  deleteFaq: "http://localhost:3000/Faqs/FaqsDelete",

  // Reviews
  addReview: "http://localhost:3000/Reviews/AddReviews", // New route for adding reviews
  getReview: "http://localhost:3000/Reviews/GetReviews",
  deleteReview: "http://localhost:3000/Reviews/ReviewsDelete/:id",
  // Add other routes as needed
};

export default routes;
