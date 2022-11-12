import React from "react";
import { Box } from "@chakra-ui/react";
import style from "./Navbar.module.css";

export const ComponentModel = ({ item }) => {
  const {heading, a1, a2, a3, a4 } = item;
  
  return (
    <Box className={style.right_content}>
      <Box className={style.right_content_item}>
        <Box className={style.right_content_wrapper}>
          <Box as="h5"  pt="5%" size="md" className={style.wrapper_title}>
            {heading}
          </Box>
          <Box rounder='md' className={style.right_content_template} bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/61937380050a805000b2e855_Template%20Menu%20BG%202.svg)">
            {a1}
          </Box>
          <Box className={style.right_content_template} rounder='md'  bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/61937382e5d4af7188bd59be_Templates%20Menu%20BG%201.svg)">
            {a2}
          </Box>
          <Box className={style.right_content_template} rounder='md'  bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
            {a3}
          </Box>
          <Box className={style.right_content_template} rounder='md'  bg="url(https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6193738264b7edeae50ca308_Templates%20Menu%20BG%203.svg)">
            {a4}
          </Box>
        </Box>
        <Box className={style.right_content_more}>See All Templates</Box>
      </Box>
    </Box>
  );
};