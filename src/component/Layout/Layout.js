import React from "react";
import MainNavbar from "../Common/MainNavbar";
import Footer from "../Common/Footer";

function Layout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
