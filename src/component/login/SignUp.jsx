import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AuthService from "../../service/Auth/auth"; // Adjust the import path as needed

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userData = { email, password }; // Prepare user data
      await AuthService.register(userData); // Call the registration service
      setSuccess("Registration successful! Please log in.");
      console.log("Registration successful:", userData); // Log successful registration
      setEmail(""); // Clear input fields
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError("Registration failed. Please try again.");
      console.error("Registration error:", err); // Log error for debugging
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
        <form onSubmit={handleSignup}>
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success">{success}</Typography>}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(106, 57, 162)", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(106, 57, 162)", // Border color on focus
                  },
                },
              },
            }}
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
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(106, 57, 162)", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(106, 57, 162)", // Border color on focus
                  },
                },
              },
            }}
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
            InputProps={{
              sx: {
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "rgba(0, 0, 0, 0.23)", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "rgb(106, 57, 162)", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgb(106, 57, 162)", // Border color on focus
                  },
                },
              },
            }}
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
