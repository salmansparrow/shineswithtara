import React, { useState, useEffect } from "react";
import Layout from "../component/Layout/Layout";
import Contact from "../component/ContactUs/ContactUs";
import { Typography } from "@mui/material";
const ContactUs = () => {
  const [highLighted, setHighlighted] = useState("follow"); // Track which is highlighted

  // useEffect to toggle highlighted every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlighted((prev) => {
        if (prev === "Contact") return "Us";
        if (prev === "Us") return "explore";
        return "Contact";
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <Layout>
   <Contact
  to="To"
  Explore="Explore"
  More="More About Tara And Shine."
  Contact={
    <Typography variant="h2">
      {/* Contact */}
      <span
        style={{
          color: highLighted === "Contact" ? "rgb(254, 157, 4)" : "white",
        }}
      >
        Contact
      </span>
 
      <span
        style={{
          color: highLighted === "Us" ? "rgb(2, 27, 81)" : "white",
          marginLeft: "5px", 
        }}
      >
        Us
      </span>
      
      <span
        style={{
          color: highLighted === "explore" ? "rgb(235, 87, 119)" : "white",
          marginLeft: "5px", 
        }}
      >
        !
      </span>
    </Typography>
  }
/>


    </Layout>
  );
};
export default ContactUs;
