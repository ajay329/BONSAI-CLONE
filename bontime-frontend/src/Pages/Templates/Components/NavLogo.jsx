import React from 'react'
import navlogo from "../../../assets/Logo/logo.png"
import {Link} from "react-router-dom"
import { Box, Image } from '@chakra-ui/react'
function NavLogo() {
  return (
    <>
     <Box p="2rem 10rem">
        <Link to="/"> 
            <Image src={navlogo} h="40%"/>
        </Link> 
        
    </Box>
    </>
  )
}

export default NavLogo