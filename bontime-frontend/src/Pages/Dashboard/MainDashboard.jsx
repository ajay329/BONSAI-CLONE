import { Box, Flex, Image , Stack,Text, Grid} from '@chakra-ui/react';
import React,{useState} from 'react'
import { IoIosAdd } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import "./MainDashboard.css"
import {
  HiOutlineFolderOpen,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
  HiOutlineClock,
} from "react-icons/hi";
import { TbFileDollar } from "react-icons/tb";
import { BsFileText} from "react-icons/bs";
import {  BiTask } from "react-icons/bi";
import { FaWpforms } from "react-icons/fa";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { GoCreditCard } from "react-icons/go";
import { TbReceipt2, TbReceiptTax } from "react-icons/tb";
import navlogo from "../../assets/Logo/logo.png"
import { Link } from 'react-router-dom';
import Main from '../../components/Dashboard/Main';
import Tasks from './Tasks';
const MainDashboard = () => {
  const [title,setTitle] = useState("Main");
  return (
    <Box>  
        <Box p="1em" position="sticky" top="0" left="0" w="100%">
        <Link to="/"> 
            <Image src={navlogo} h={{lg:"10%",md:"10%", base:"2%"}}/>
        </Link>
        </Box>
        <Flex >
          <Box  height="80vh" w="16%" position="fixed" boxShadow="2xl">
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
          
            <Flex align="center" gap={3} fontSize="14px" onClick={()=>setTitle("Main")} className="sections" >
              <AiOutlineHome fontSize="18px" fontWeight="300" />
              <Text>Dashboard</Text>
            </Flex>
          
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <Box>
                <HiOutlineUserGroup fontSize="15px" fontWeight="300" />
              </Box>
              <Text>Clients</Text>
            </Flex>
         
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <HiOutlineFolderOpen fontSize="18px" fontWeight="300" />
              <Text>Projects</Text>
            </Flex>
          
          
            <Flex align="center" gap={3} fontSize="14px"className="sections" onClick={()=>setTitle("tasks")}>
              <BiTask fontSize="18px" fontWeight="300" />
              <Text>Tasks</Text>
            </Flex>
         
        </Grid>
        <Grid gap={2}>
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <HiOutlineNewspaper fontSize="18px" fontWeight="300" />
              <Text>Proposals</Text>
            </Flex>
         
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <BsFileText fontSize="18px" fontWeight="300" />
              <Text>Contracts</Text>
            </Flex>
          
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <TbFileDollar fontSize="18px" fontWeight="300" />
              <Text>Invoices</Text>
            </Flex>
         
        </Grid>
        <Grid gap={2}>
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <HiOutlineClock fontSize="18px" fontWeight="300" />
              <Text>Time Tracking</Text>
            </Flex>
        

          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <FaWpforms fontSize="18px" fontWeight="300" />
              <Text>Forms</Text>
            </Flex>
        

          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <MdOutlineHomeRepairService fontSize="18px" fontWeight="300" />
              <Text>Services</Text>
            </Flex>
    
        </Grid>
        <Grid gap={2}>
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <GoCreditCard fontSize="18px" fontWeight="300" />
              <Text>Cash</Text>
            </Flex>
   
         
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <TbReceipt2 fontSize="18px" fontWeight="300" />
              <Text>Accounting</Text>
            </Flex>
        
          
            <Flex align="center" gap={3} fontSize="14px" className="sections">
              <TbReceiptTax fontSize="18px" fontWeight="300" />
              <Text>Taxes</Text>
            </Flex>
         
        </Grid>
      </Stack>
    </Grid>
          </Box>
          <Box  w="80%" position="absolute" left="250px" h="auto">
            <Box display={`${title=="Main"?"block":"none"}`}>
              {console.log(title)}
                <Main/>
            </Box>
            <Box display={`${title=="tasks"?"block":"none"}`}>
              <Tasks/>
            </Box>
          </Box>
        </Flex>
    </Box>
  )
}

export default MainDashboard