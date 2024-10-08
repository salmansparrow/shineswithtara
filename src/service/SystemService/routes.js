const routes = {
    login: "http://localhost:3000/User/Login", 
    register: "http://localhost:3000/User/Register", 
    
    // Get Products
    GetProduct: "http://localhost:3000/Product/GetProduct",


    // AdminLogin
    AdminLogin: "http://localhost:3000/User/AdminLogin",
 
  addProducts: "http://localhost:3000/Product/AddProducts", // Add product route
  getProducts: "http://localhost:3000/Product/GetProduct", // Get products route
  updateProduct: "http://localhost:3000/Product/ProductUpdate", // Update product route (id will be appended)
  deleteProduct: "http://localhost:3000/Product/ProductDelete", // Delete product route (id will be appended)

  // Add other routes as needed
};

export default routes;
