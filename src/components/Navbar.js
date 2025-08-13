import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

function Navbar() {
  return (
    <>
      <AppBar 
        position="static" 
        sx={{ backgroundColor: 'white', boxShadow: 'none' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          
          {/* Left side - Logo */}
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'black', 
              fontWeight: '900', 
              fontSize: '1.6rem', 
              marginLeft: 10
            }}
          >
            scrnshts
          </Typography>

          {/* Middle + Right side */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button sx={{ color: 'grey', textTransform: 'none', fontSize: '1rem', '&:hover': { color: 'black' } }}>Home</Button>
            <Button sx={{ color: 'grey', textTransform: 'none', fontSize: '1rem', '&:hover': { color: 'black' } }}>Best Practices</Button>
            <Button sx={{ color: 'grey', textTransform: 'none', fontSize: '1rem', '&:hover': { color: 'black' } }}>About</Button>
            <Button sx={{ color: 'grey', textTransform: 'none', fontSize: '1rem', '&:hover': { color: 'black' } }}>NewsSettler</Button>
            
            {/* Support Me Button - Far right */}
            <Button 
              sx={{ 
                backgroundColor: 'black', 
                color: 'white', 
                textTransform: 'none', 
                paddingX: 2, 
                paddingY: 0.8, 
                fontSize: '0.95rem', 
                '&:hover': { backgroundColor: '#333' },
                marginRight: 12,
                borderRadius: "22px"
              }}
            >
              Support Me
            </Button>
          </Box>

        </Toolbar>
      </AppBar>

      {/* Divider below navbar */}
      <Divider sx={{ backgroundColor: '#ddd', height: '1px' }} />
    </>
  );
}

export default Navbar;
