import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/images/Group 1 (2).png";

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none',px:'20px'}}>
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "79.64px", height: "40px", margin: "0 20px"}}
        />
      </Link>
      <Stack direction='row'gap='40px' alignItems='flex-end' fontSize='20px'>
        <Link to='/' style={{textDecoration:"none",color:'#3A1212',borderBottom:'3px solid #ffc0cb',fontWeight:'bold'}}>Home</Link>
        <a href="#excercises" style={{textDecoration:"none",color:'#3A1212',fontWeight:'bold'}}>Excercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
