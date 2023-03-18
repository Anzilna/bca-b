import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">
            <Link to="/Home" style={{color:'white'}}>Home</Link>
            </Button>
          </Typography>
          <Button color="inherit">
            <Link to="/login" style={{color:'white'}}>Login</Link>
          </Button>
          <Button>
            <Link to="/signup" style={{color:'white'}}>Signup</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
