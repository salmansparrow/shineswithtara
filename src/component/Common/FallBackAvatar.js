import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Function to get the first letter of the email
const getInitials = (email) => {
  if (!email) return ''; // Return empty string if no email
  return email.charAt(0).toUpperCase(); // Get and return the first letter of the email in uppercase
};

const FallbackAvatars = ({ userEmail }) => {
  const avatars = [
    { email: userEmail, src: '' }, // Use userEmail passed as a prop
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Open the dropdown menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the dropdown menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu item actions
  const handleMyOrders = () => {
    console.log("My Orders clicked");
    handleClose();
    navigate('/myorder'); // Navigate to My Orders page
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem("token"); // Remove the token from local storage
    handleClose();
    navigate('/login'); // Navigate to the Login page
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {avatars.map((avatar, index) => (
        <div key={index}>
          <Avatar
            alt={avatar.email}
            src={avatar.src}
            onClick={handleClick} // Open dropdown on avatar click
            sx={{ cursor: 'pointer' }} // Change cursor to pointer
          >
            {avatar.src ? <img src={avatar.src} alt={avatar.email} /> : getInitials(avatar.email)}
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            keepMounted
          >
            <MenuItem onClick={handleMyOrders}>My Orders</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ))}
    </Stack>
  );
};

// Prop validation
FallbackAvatars.propTypes = {
  userEmail: PropTypes.string.isRequired, // Ensure userEmail is required
};

export default FallbackAvatars;
