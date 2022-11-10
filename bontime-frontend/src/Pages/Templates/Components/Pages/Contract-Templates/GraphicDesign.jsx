import React from 'react'
import TopSection from '../../Contract/TopSection'
import "../../Contract/Article.css";

import {
  Box,
  Container,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";


function GraphicDesign() {
    const heading = "Free Design Contract Template";
    const desc = "with a bulletproof template & simple e-signing"
  return (
    <>
        <TopSection heading={heading} desc={desc}/>
        <Box fontFamily="Proximanova opt sans-serif" mb="5rem">
        <Grid
          templateColumns={{
            sm: "100%",
            md: "35% 62% ",
            lg: "35% 75%",
            xl: "30% 75%",
          }}
          gap={5}
        
          w={{
            sm: "100%",
            md: "100%",
            lg: "65%",
            xl: "65%",
          }}
          m="auto"
        >
          <Box
            h={{md:"80vh",lg:"80vh",xl:"65vh",'2xl':"55vh"}}
            boxShadow="dark-lg"
            border="1px solid red"
            position={{md:"sticky",lg:"sticky"}}
            top={10}
           
            textAlign="left"
            p="5"
          >
            <Heading fontSize={{ md:"1.5em",'2xl':"2em"}}>Table of Contents </Heading>

            <Box pt="1.5rem">
              <List spacing={2} color="#00B98E" fontWeight={700}>
                <ListItem>
                  <a href="#contractT">Are there free contract templates?</a>
                </ListItem>
                <ListItem>
                  <a href="#validC">
                    What are the 5 requirements for a valid contract?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#rule">What is the most basic rule to a contract?</a>
                </ListItem>
                <a href="#onlineC">
                  How can I create an online contract with Bonsai’s online
                  contract maker?
                </a>
                <ListItem>
                  <a href="#creatingC">
                    What are the Advantages of Creating a Contract with Bonsai?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#help">How Else Can Bonsai Help You?</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto" border="1px solid red" p="1em 1em">
            <Box id="contractT">
              <Text className='Hfsize'>Are there free contract templates?</Text>
              <p>
                Bonsai has lawyer curated general contract templates that you
                can easily edit. Simply create a free account and download the
                template.
              </p>
            </Box>
            <Box id="validC">
              <Text className='Hfsize'>
                What are the 5 requirements for a valid contract?
              </Text>
              <p>
                The 5 requirements for a contract to be valid are: Offer,
                Acceptance, Consideration, Mutuality of obligation, and
                Competency and capacity. You may add more information to your
                contract, just make sure that the 5 requirements mentioned are
                present
              </p>
            </Box>
            <Box id="rule">
              <Text></Text>
              <p></p>
            </Box>
            <Box id="onlineC"></Box>
            <Box id="creatingC"></Box>
            <Box id="help"></Box>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default GraphicDesign