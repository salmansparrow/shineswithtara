import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./fonts/CustomTheme";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Watch from "./pages/Watch";
import About from "./pages/About";
import MainCharacter from "./pages/MainCharacter";
import ContactUs from "./pages/ContactUs";
import EventShow from "./pages/EventShow";
import ColorFulClub from "./pages/ColorFulClub";
import AdminLayout from "./component/Layout/AdminLayout";
import ManageUsers from "./pages/admin/manageusers";
import ManageOrder from "./pages/admin/manageorder";
import ManageFaqs from "./pages/admin/managefaqs";
import ManageReviews from "./pages/admin/managereviews";
import FaqReviews from "./pages/FaqReviews";
import OrderPage from "./pages/OrderPage";
import Login from "../src/component/login/Login";
import SignUp from "../src/component/login/SignUp";
import ManageProducts from "./component/Admin/ManageProducts";
import MyOrder from "./pages/MyOrder";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/about" element={<About />} />
          <Route path="/maincharacter" element={<MainCharacter />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/eventshow" element={<EventShow />} />
          <Route path="/colorfulclub" element={<ColorFulClub />} />
          <Route path="/faq" element={<FaqReviews />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/myorder" element={<MyOrder />} />

          {/* Admin Layout will wrap around admin routes */}

          <Route path="/adminLogin" element={<AdminLogin />} />
          {/* Protecting Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ManageUsers />} />{" "}
            {/* Default to User List */}
            <Route path="users" element={<ManageUsers />} />
            <Route path="manage-product" element={<ManageProducts />} />
            <Route path="manage-order" element={<ManageOrder />} />
            <Route path="manage-faq" element={<ManageFaqs />} />
            <Route path="manage-reviews" element={<ManageReviews />} />
            {/* Add more admin-specific routes here */}
          </Route>

          {/* Add more admin-specific routes here */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;