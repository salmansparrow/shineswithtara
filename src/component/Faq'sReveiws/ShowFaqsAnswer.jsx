import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

const ShowFaqsAnswer = () => {
  // State to manage which FAQ is open
  const [openIndices, setOpenIndices] = useState([]);

  // Hardcoded questions and answers
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase for a full refund."
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes between 3-5 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries around the world."
    },
    {
      question: "How can I track my order?",
      answer: "You will receive a tracking number via email once your order has shipped."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and bank transfers."
    },
  ];

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
          <Box key={index} sx={{ flex: "0 0 45%", margin: "5px" }}>
            <Box
              onClick={() => handleToggle(index)}
              sx={{
                backgroundColor: "rgb(171, 202, 255)", // Keeping original background color
                color: "black",
                padding: "15px",
                marginBottom: "5px",
                cursor: "pointer",
                borderRadius: "5px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                border: "1px solid black", // Border for the card
                transition: "0.2s", // Smooth transition effect
                boxShadow: openIndices.includes(index) ? "0 2px 10px rgba(0, 0, 0, 0.2)" : "none", // Shadow effect when expanded
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

              {/* Display answer inside the card when expanded */}
              {openIndices.includes(index) && (
                <Typography variant="body2" sx={{
                  fontSize: "0.9rem",
                  marginTop: "10px", // Space between question and answer
                  padding: "10px 0", // Padding for the answer
                  color: "black", // Maintain text color
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
