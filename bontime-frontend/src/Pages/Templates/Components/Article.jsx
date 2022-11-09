import "./Article.css"

import {
  Box,
  Container,
  Grid,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";

const Article = () => {
  return (
    <>
      <Box fontFamily="Proximanova opt sans-serif">
        <Grid templateColumns="25% 70%" gap={5} m="auto" w="65%">
          <Box
            h="65vh"
            boxShadow="dark-lg"
            border="1px solid red"
            position="sticky"
            top={10}
            left="16rem"
            textAlign="left"
            p="5"
          >
            <Heading fontSize="1.5em">Table of Contents </Heading>

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
          <Box h="350vh" border="1px solid red" p="1em 1em" >
            <Box id="contractT">
              <Heading>Are there free contract templates?</Heading>
              <p>
              Bonsai has lawyer curated general contract templates that you can easily edit. Simply create a free account and download the template.
              </p>
            </Box>
            <Box id="validC">
              <Heading>What are the 5 requirements for a valid contract?</Heading>
              <p>
              The 5 requirements for a contract to be valid are: Offer, Acceptance, Consideration, Mutuality of obligation, and Competency and capacity. You may add more information to your contract, just make sure that the 5 requirements mentioned are present
              </p>
            </Box>
            <Box id="rule">
                <Heading></Heading>
                <p></p>
            </Box>
            <Box id="onlineC"></Box>
            <Box id="creatingC"></Box>
            <Box id="help"></Box>
            
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Article;
