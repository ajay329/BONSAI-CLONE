import React from "react";
import { Box, Flex, Stack, Link, Text, Grid } from "@chakra-ui/react";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";

import {
  HiOutlineFolderOpen,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi";
import { TbFileDollar } from "react-icons/tb";
import { BsFileText} from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { TbReceipt2, TbReceiptTax } from "react-icons/tb";
const Sidebar = () => {
  return (
    <Grid w="100%" h="100%" justify="space-between" pl={4} pr={4} pt={1} pb={1}>
      <Flex justify="space-between" align="center">
        <Stack
          fontSize="26px"
          border="1px solid"
          color="#00ba8f"
          borderRadius={3}
        >
          <IoIosAdd />
        </Stack>
      </Flex>
      <Stack color="#7c7777" justify="space-between">
        <Grid gap={2}>
          <Link
            to=""
            _hover={{ textdecoration: "none" }}
            _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
          >
            <Flex align="center" gap={3} fontSize="14px">
              <AiOutlineHome fontSize="18px" fontWeight="300" />
              <Text>Dashboard</Text>
            </Flex>
          </Link>
          <Link
            to=""
            _hover={{ textdecoration: "none" }}
            _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
          >
            <Flex align="center" gap={3} fontSize="14px">
              <Box>
                <HiOutlineUserGroup fontSize="15px" fontWeight="300" />
              </Box>
              <Text>Clients</Text>
            </Flex>
          </Link>
          <Link
            to=""
            _hover={{ textdecoration: "none" }}
            _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
          >
            <Flex align="center" gap={3} fontSize="14px">
              <HiOutlineFolderOpen fontSize="18px" fontWeight="300" />
              <Text>Projects</Text>
            </Flex>
          </Link>
          <Link
            to=""
            _hover={{ textdecoration: "none" }}
            _activeLink={{ fontWeight: "bold", color: "#292a2d" }}
          >
            <Flex align="center" gap={3} fontSize="14px">
              <BiTask fontSize="18px" fontWeight="300" />
              <Text>Tasks</Text>
            </Flex>
          </Link>
        </Grid>
        <Grid gap={2}>
          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <HiOutlineNewspaper fontSize="18px" fontWeight="300" />
              <Text>Proposals</Text>
            </Flex>
          </Link>
          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <BsFileText fontSize="18px" fontWeight="300" />
              <Text>Contracts</Text>
            </Flex>
          </Link>
          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <TbFileDollar fontSize="18px" fontWeight="300" />
              <Text>Invoices</Text>
            </Flex>
          </Link>
        </Grid>
        <Grid gap={2}>
          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <HiOutlineClock fontSize="18px" fontWeight="300" />
              <Text>Time Tracking</Text>
            </Flex>
          </Link>

          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <FaWpforms fontSize="18px" fontWeight="300" />
              <Text>Forms</Text>
            </Flex>
          </Link>

          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <MdOutlineHomeRepairService fontSize="18px" fontWeight="300" />
              <Text>Services</Text>
            </Flex>
          </Link>
        </Grid>
        <Grid gap={2}>
          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <GoCreditCard fontSize="18px" fontWeight="300" />
              <Text>Cash</Text>
            </Flex>
          </Link>
          <Link to="" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <TbReceipt2 fontSize="18px" fontWeight="300" />
              <Text>Accounting</Text>
            </Flex>
          </Link>
          <Link to="/vendor" _hover={{ textdecoration: "none" }}>
            <Flex align="center" gap={3} fontSize="14px">
              <TbReceiptTax fontSize="18px" fontWeight="300" />
              <Text>Taxes</Text>
            </Flex>
          </Link>
        </Grid>
      </Stack>
    </Grid>
  );
};

export default Sidebar;
