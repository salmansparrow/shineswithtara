import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { getFaqs } from '../../service/faq/index'; // Adjust this import based on your file structure

const ShowFaqsAnswer = () => {
  // State to manage which FAQ is open
  const [openIndices, setOpenIndices] = useState([]);
  const [faqs, setFaqs] = useState([]); // State to store fetched FAQs
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); 


  useEffect(() => {
    

    fetchFaqs();
  }, []); 

  // Fetch FAQs on component mount
  const fetchFaqs = async () => {
    try {
      const faqData = await getFaqs(); // Call the getFaqs function
      setFaqs(faqData); // Set fetched FAQs in state
    } catch (err) {
      setError("Failed to fetch FAQs. Please try again later.");
      console.error("Error fetching FAQs: ", err);
    } finally {
      setLoading(false);
    }
  };

  

  // Function to handle click on question
  const handleToggle = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      if (openIndices.length < 2) {
        setOpenIndices([...openIndices, index]);
      }
    }
  };

  // Show loading or error message
  if (loading) {
    return <Typography variant="body1">Loading FAQs...</Typography>;
  }

  if (error) {
    return <Typography variant="body1" color="error">{error}</Typography>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "rgb(171, 202, 255)",
        padding: "20px",
        color: "black",
      }}
    >
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {faqs.map((faq, index) => (
          <Box key={faq._id} sx={{ flex: "0 0 45%", margin: "5px" }}> {/* Use faq._id as key */}
            <Box
              onClick={() => handleToggle(index)}
              sx={{
                backgroundColor: "rgb(171, 202, 255)",
                color: "black",
                padding: "15px",
                marginBottom: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: "1px solid black",
                transition: "0.2s",
                boxShadow: openIndices.includes(index) ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "none",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Typography variant="body1" sx={{ fontSize: "1rem", flexGrow: 1 }}>
                  {faq.question}
                </Typography>
                <span style={{ transform: openIndices.includes(index) ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                  &#9654; {/* Right arrow symbol */}
                </span>
              </Box>

              {openIndices.includes(index) && (
                <Typography variant="body2" sx={{
                  fontSize: "0.9rem",
                  marginTop: "10px",
                  padding: "10px 0",
                  color: "black",
                }}>
                  {faq.answer}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShowFaqsAnswer;
