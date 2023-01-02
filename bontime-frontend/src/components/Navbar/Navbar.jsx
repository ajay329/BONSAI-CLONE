import style from './navar.module.css'
import React,{useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";

import {
  Box,
  Image,
  Flex,
  Text,
  Spacer,Button
} from "@chakra-ui/react";

import logo from "../../assets/Logo/logo.png";
const Navbar = () => {
  let input = localStorage.getItem("token");

  const [token, setToken] = useState(input ? input : "");
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setTimeout(() => {
      localStorage.removeItem("token");
      setToken("");
      navigate("/login");
    }, 2000);
  };
  
  return (
    <>
      <Box
        w={{ sm: "95%", md: "100%", lg: "100%" }}
        m="auto"
        
        top="0"
        position="sticky"
        zIndex="2000"
        bgColor={"white"}
        
      >
        <Box w={{ sm: "95%", md: "100%", lg: "75%" }} m="auto">
          <Flex flexWrap={"wrap"}>
            <Box>
              <Link to="/">
                <Image w="180px" mt="15px" src={logo} alt=".." />
              </Link>
            </Box>
            <Spacer />

            <Box p="2">
              <div class={style.dropdown}>
                <button class={style.dropbtn}>Product ⌵</button>
                <div class={style.dropdownContent}>
                  <Link to="/bonCash">
                    <Text fontSize={"22px"}>Bonsai Workflow</Text>
                    <Text mt="15px" color="grey">
                      Look professional, win more clients and manage your
                      business from one place
                    </Text>
                    <Box mt="40px">
                      <hr />
                    </Box>
                  </Link>
                  <Link to="/bonTax">
                    <Text fontSize={"22px"}>Bonsai Tax</Text>
                    <Text mt="15px" color="grey">
                      Track expenses,maximize tax write-off,and estimate tax
                      without headche
                    </Text>
                    <Box mt="40px">
                      <hr />
                    </Box>
                  </Link>
                  <Link to="/bonCash">
                    <Text fontSize={"22px"}>Bonsai cash</Text>
                    <Text mt="15px" color="grey">
                      Bonsai's all in one financial hub: No fees and lighting
                      fast payouts
                    </Text>
                    <Box mt="40px"></Box>
                  </Link>
                </div>
              </div>
            </Box>
            <Box p="2">
              <div class={style.dropdown}>
                <button class={style.dropbtn}>Templates ⌵</button>
                <div class={style.dropdownContent}>
                  <Link to="/freeContract">
                    <Text>☲ Contract Templates</Text>
                  </Link>
                  <Link to="/digitalMarketingContract">
                    <Text mt="8px">☲ Digital Marketing Contract</Text>
                  </Link>
                  <Link to="/graphicDesignContract">
                    <Text mt="8px">☲ Graphic Design Contract</Text>
                  </Link>
                  <Link to="/socialMediaContract">
                    <Text mt="8px">☲ Social Media Contract</Text>
                  </Link>
                  <Link to="/briefTemplate">
                    <Text mt="8px">☲ Brief Templates</Text>
                  </Link>
                  <Link to="/scopeOfWorkTemplate">
                    <Text mt="8px">🕗 Scope of works Templates</Text>
                  </Link>
                  <Link to="/quotesTemplate">
                    <Text mt="8px">☲ Quotes Templates</Text>
                  </Link>
                </div>
              </div>
            </Box>
            <Box p="1.5">
              <div class={style.dropdown}>
                <button class={style.dropbtn}>
                  <Link to="/pricing">Pricing</Link>
                </button>
              </div>
            </Box>
            <Box p="1.5">
              <div class={style.dropdown}>
                <button class={style.dropbtn}>
                  <Link to="/reviews">Reviews</Link>
                </button>
              </div>
            </Box>
            <Spacer />
            <Box p="3">
              <Link to="/login">
                <Button
                  colorScheme="white"
                  color="#06B48B"
                  size="md"
                  border={"1px solid teal"}
                  onClick={token ? handleLogout : handleLogin}
                >
                  {token ? "Logout" : "Login"}
                </Button>
              </Link>
            </Box>

            <Box p="3" display={token ? "none":'block'}>
              <Link to="/sign-up">
                <Button bg="#06B48B" color={"white"} size="md">
                  START FREE
                </Button>
              </Link>
            </Box>
            <Toaster />
          </Flex>
        </Box>

        
      </Box>
    </>
  );
}

export default Navbar