import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"; 
import LockIcon from "@mui/icons-material/Lock";
import AuthService from "../../service/Auth/auth"; 
import Layout from "../Layout/Layout";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // State for field errors
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const validateFields = () => {
    let isValid = true;

    // Reset error messages
    setNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    // Name validation
    if (!name) {
      setNameError("Name is required");
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Confirm password validation
    if (!confirmPassword) {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!validateFields()) {
      return; // If validation fails, do not proceed
    }

    const userData = { name, email, password, confirmPassword }; // Include name in user data
    try {
      const response = await AuthService.register(userData);
      setSuccess("Registration successful!"); // Set success message
      console.log("Registration successful:", response);

      // Reset fields after successful registration
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // Navigate to the login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Error caught in registration:", error);
      setError(`Error: ${error.message}`); // Set a user-friendly error message
    }
  };

  return (
    <Layout>
    <Container maxWidth="xs" style={{ padding: 70 }}>
      <Box sx={{ mt: 8, mb: 4 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            width: "40px",
            height: "40px",
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            lineHeight: 1,
            borderRadius: "50%",
            overflow: "hidden",
            userSelect: "none",
            color: "rgb(255, 255, 255)",
            margin: "8px auto", // Center the icon
            backgroundColor: "rgb(143, 82, 161)",
          }}
        >
          <LockIcon fontSize="inherit" /> {/* Lock icon */}
        </Box>
      </Box>
      <form onSubmit={handleSignUp}>
        {error && <Typography color="error">{error}</Typography>}{" "}
        {/* Display error */}
        {success && <Typography color="success">{success}</Typography>}{" "}
        {/* Display success */}
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          error={Boolean(nameError)} 
          helperText={nameError} 
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={Boolean(emailError)} 
          helperText={emailError} 
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={Boolean(passwordError)} 
          helperText={passwordError} 
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          error={Boolean(confirmPasswordError)} 
          helperText={confirmPasswordError} 
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "rgb(106, 57, 162)", // Button background color
            "&:hover": {
              backgroundColor: "rgba(106, 57, 162, 0.8)", // Darken on hover
            },
          }}
        >
          Sign Up
        </Button>
      </form>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account? <Link to="/login">Login</Link>
      </Typography>
    </Container>
    </Layout>
  );
};

export default SignUp;
