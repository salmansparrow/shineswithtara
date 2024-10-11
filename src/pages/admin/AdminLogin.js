import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AdminLoginService from "../../service/AdminLogin";
import {jwtDecode} from "jwt-decode"; // Import jwtDecode

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken ");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken?.role === "admin") {
        navigate("/admin"); // Redirect if already logged in as admin
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    try {
      const response = await AdminLoginService.login(credentials);

      if (response?.token) {
        const decodedToken = jwtDecode(response.token);
        

        // Check if the user has the 'admin' role
        if (decodedToken?.role === "admin") {
          localStorage.setItem("adminToken", response.token); // Save the token
          setError(""); // Clear any previous error messages
          navigate("/admin"); // Redirect to the admin dashboard
        } else {
          setError("You are not authorized to access this page."); // Show error if not admin
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage = error?.response?.data?.message || "Failed to login";
      setError(errorMessage);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }} style={{ padding: 70 }}>
      <Card sx={{ boxShadow: "none" }}>
        <CardContent>
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
              margin: "8px auto",
              backgroundColor: "rgb(143, 82, 161)",
            }}
          >
            <LockIcon fontSize="inherit" />
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
            <CardActions sx={{ justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  backgroundColor: "rgb(106, 57, 162)",
                  "&:hover": {
                    backgroundColor: "rgba(106, 57, 162, 0.8)",
                  },
                }}
              >
                Login
              </Button>
            </CardActions>
          </form>
          {error && <Typography color="error">{error}</Typography>}
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminLogin;
