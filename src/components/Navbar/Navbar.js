import React from "react";
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import { useSelector } from "react-redux";

const NavBar = () => {  
      const cart = useSelector((state) => state.cartItems);
      return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{color: "white"}}>
          <Toolbar className="toolbar-nav" variant="root">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Shoply
            </Typography>
            <>
            <NavLink className="btn-btn-navbar" to="/" style={{ textDecoration: 'none', color: "white" }}>Products</NavLink>
            <NavLink className="btn-btn-navbar" to="/cart" style={{ textDecoration: 'none', color: "white" }}>Cart {cart.length}</NavLink>
            </>
            </Toolbar>
        </AppBar>
      </Box>
      )
}

export default NavBar