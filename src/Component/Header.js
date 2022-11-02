import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

export function ButtonAppBar({backgroundColor}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor : backgroundColor }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Welcome to Recoil
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Contact</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
ButtonAppBar.propTypes = {
    background: PropTypes.shape({
        color: PropTypes.string,
        fontSize: PropTypes.number
      }),
  
  }
  
  ButtonAppBar.defaultProps = {
        color: "inherit",
        fontSize: PropTypes.number
      
  
  }
  
