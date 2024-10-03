import React, { useState } from 'react';
import axios from 'axios';
import Layout from "../Layout/Layout";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');



  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/User/Login', { 
        email,
        password,
      });

      if (response.status === 201) {
        localStorage.setItem('token', response.data.token);
        window.location.href = '/dashboard'; 
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to login');
    }
  };

  return (
    <Layout>
      <Container maxWidth="xs" sx={{ mt: 8 }} style={{ padding: 70 }}>
        <Card sx={{ boxShadow: 'none' }}>
          <CardContent>
      
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: '40px',
                height: '40px',
                fontFamily: 'Poppins',
                fontSize: '1.25rem',
                lineHeight: 1,
                borderRadius: '50%',
                overflow: 'hidden',
                userSelect: 'none',
                color: 'rgb(255, 255, 255)',
                margin: '8px auto', // Center the icon
                backgroundColor: 'rgb(143, 82, 161)',
              }}
            >
              <LockIcon fontSize="inherit" /> {/* Lock icon */}
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
                InputProps={{
                  sx: {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(106, 57, 162)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(106, 57, 162)',
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
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgb(106, 57, 162)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'rgb(106, 57, 162)',
                      },
                    },
                  },
                }}
              />
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    backgroundColor: 'rgb(106, 57, 162)',
                    '&:hover': {
                      backgroundColor: 'rgba(106, 57, 162, 0.8)',
                    },
                  }}
                >
                  Login
                </Button>
              </CardActions>
            </form>
          </CardContent>
          <Box sx={{ p: 2, textAlign: 'center' }}>
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
