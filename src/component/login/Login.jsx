import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import AuthService from "../../service/Auth/auth";
import Layout from "../Layout/Layout";
import { useForm } from "react-hook-form"; // Import useForm
import {jwtDecode} from "jwt-decode"; // Correct function name

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Destructure from useForm
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const credentials = { email, password };

    try {
      const response = await AuthService.login(credentials);
      console.log("Login response:", response);

      // Handle successful login
      if (response && response.token) {
        // Store the token
        localStorage.setItem("token", response.token);

        // Decode the token to check the role (assuming the backend encodes role in token)
        const decodedToken = jwtDecode(response.token);
        console.log(decodedToken)

        // Check if the role is 'user'
        if (decodedToken.role === "user") {
          navigate("/"); 
          console.log(decodedToken.role);
          
        } else {
          setError("You do not have permission to access this page.");
        }
      } else {
        setError(response.data?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "Failed to login";
      setError(errorMessage);
    }
  };

  return (
    <Layout>
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
            <form onSubmit={handleSubmit(onSubmit)}> {/* Use handleSubmit */}
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
                InputProps={{
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(106, 57, 162)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(106, 57, 162)",
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
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
                InputProps={{
                  sx: {
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgb(106, 57, 162)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgb(106, 57, 162)",
                      },
                    },
                  },
                }}
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
          <Box sx={{ p: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
          </Box>
        </Card>
      </Container>
    </Layout>
  );
};

export default Login;
