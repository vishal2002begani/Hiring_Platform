import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1565c0', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo or Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#ffffff',
              letterSpacing: '0.05em',
              marginLeft: '8px',
              padding: '4px',
            }}
          >
            Hiring Platform
          </Typography>

          {/* Buttons for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                color: '#ffffff',
                fontWeight: '500',
                fontSize: '1rem',
                textTransform: 'none',
                marginRight: '16px',
                '&:hover': { color: '#bbdefb' },
              }}
            >
              Dashboard
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="/assessments"
              sx={{
                color: '#ffffff',
                fontWeight: '500',
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': { color: '#bbdefb' },
              }}
            >
              Assessments
            </Button>
          </Box>

          {/* Dropdown menu for small screens on the right */}
          <Box sx={{ display: { xs: 'block', sm: 'none' }, marginLeft: 'auto' }}>
            <IconButton
              color="inherit"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={isMenuOpen}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Dashboard
              </MenuItem>
              <MenuItem component={Link} to="/assessments" onClick={handleMenuClose}>
                Assessments
              </MenuItem>
            </Menu>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
