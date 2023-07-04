import { GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#653b46', p: 3, mt: 'auto' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <Link href="https://www.linkedin.com/in/sneha-gupta-239aa1201/" target="_blank" rel="noopener">
        <LinkedIn sx={{ color: 'pink',mr: 1 }} color='pink' />
      </Link>
      <Link href="https://github.com/Snehagupta1907" target="_blank" rel="noopener">
        <GitHub sx={{ color: 'pink',mx: 1 }} />
      </Link>
      <Link href="https://www.instagram.com/" target="_blank" rel="noopener">
        <Instagram sx={{ color: 'pink',ml: 1 }} />
      </Link>
    </Box>
    <Typography variant="body2" color="white" align="center">
      &copy; {new Date().getFullYear()} App Name. All rights reserved.
    </Typography>
    <Typography variant="body2" color="white" align="center">
      Made by Sneha Gupta
    </Typography>
  </Box>
  );
};

export default Footer