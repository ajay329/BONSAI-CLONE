import React from 'react';
import { Button, Stack } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import style from './Navbar.module.css';
import logo from '../../assets/Logo/logo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleReview = () => {
    navigate("/reviews");
  };
  const handlePricing = () => {
    navigate("/pricing");
  }
  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className={style.navbar}>
      <div onClick={handleHome} className={style.logoDiv}>
        <img
          src={logo}
          alt="logo"
          width="150"
        />
      </div>
      <div className={style.middleDiv}>
        <Stack direction="row" spacing={5}>
          <Button
            className={style.prod}
            font="blue"
            fontWeight="400"
            color="#4c4d5f"
            fontSize="17px"
            rightIcon={<ChevronDownIcon w={5} h={5} />}
            variant="none"
          >
            Product
          </Button>
          <Button
            fontWeight="400"
            fontSize="17px"
            color="#4c4d5f"
            rightIcon={<ChevronDownIcon w={5} h={5} />}
            variant="none"
          >
            Templates
          </Button>
          <Button
            onClick={handlePricing}
            fontWeight="400"
            color="#4c4d5f"
            fontSize="17px"
            variant="none"
          >
            Pricing
          </Button>
          <Button
            onClick={handleReview}
            fontWeight="400"
            color="#4c4d5f"
            fontSize="17px"
            variant="none"
          >
            Reviews
          </Button>
        </Stack>
      </div>
      <div className={style.endDiv}>
        <Stack direction="row" spacing={4}>
          <button onClick={handleLogin} className={style.logButton}>
            LOG IN
          </button>
          <button onClick={handleLogin} className={style.freeButton}>START FREE</button>
        </Stack>
      </div>
    </div>
  )
};

export default Navbar;