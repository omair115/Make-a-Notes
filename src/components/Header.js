import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'

  
  const Header =()=>{

    return (

    <div style={{flexGrow: 1}}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" style={{ marginRight: '2'}} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{flexGrow: 1}}>
          Make a Notes 
        </Typography>
        <Link to="/"><Button color="inherit">App</Button></Link>
        <Link to="/login"><Button color="inherit">Login</Button></Link>
      </Toolbar>
    </AppBar>
  </div>
    )
}
  

export default Header