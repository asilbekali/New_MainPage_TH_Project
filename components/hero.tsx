import { Box } from '@mui/material'
import React from 'react'

const Hero = () => {
  return (<>
  <Box    sx={{
    height: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
    marginLeft: '20px',
    justifyContent: 'center',
    borderRadius: '8px',
    marginBottom: '20px',
  }}>
    <h1>Welcome to TalimHub</h1>
  </Box>
  </>)
}

export default Hero