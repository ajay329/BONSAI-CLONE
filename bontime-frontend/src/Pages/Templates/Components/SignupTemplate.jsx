import { Box, Button, Flex,Spacer,Text } from '@chakra-ui/react'
import React from 'react'

function SignupTemplate() {
  return (
    <Box pt="5rem" >
        <Flex  w={{ base:"100%",md:"70%", lg:"70%" }} flexDir={{base:"column" ,md:"column" ,lg:"row","2xl":"row"}} m="auto"   p="5rem" bg="#F2FAFF">
            <Flex gap={{base:"1",md:"1",lg:"2","2xl":"3"}} m="auto">
            <Text   fontSize={{base:"1.2em", md:"2rem",lg:"2rem", "2xl":"3rem" }} textAlign="center">Sign up to </Text>
            <Text color='#00B48B' fontSize={{base:"1.2em", md:"2rem",lg:"2rem", "2xl":"3rem"}} textAlign="center">Bonsai </Text> 
            </Flex>
           <Spacer/>
            <Button bg='#00B48B'  p={{base:"1rem 1rem",sm:"1rem 1rem",md:"2rem 1rem"}} w={{base:"6rem",md:"10rem"}}  m="auto" color="#F7FDFF"   _hover={{bg:"#00B48B"}}>
            START FREE
  </Button>
        </Flex>
    </Box>
  )
}

export default SignupTemplate