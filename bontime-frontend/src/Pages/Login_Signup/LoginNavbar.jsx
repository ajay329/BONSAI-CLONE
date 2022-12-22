import React from "react";
import { Box, ButtonGroup, Flex, Image, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/logo.png";
export const LoginNavbar = () => {
  return (
    <Box w="100%" px="10px">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2" m="10px">
          <Link to="/">
            <Image height={"50px"} src={logo} />
          </Link>
        </Box>
        <Spacer />

        <ButtonGroup gap="2" fontSize="18px">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </ButtonGroup>
      </Flex>
      <hr />
    </Box>
  );
};
