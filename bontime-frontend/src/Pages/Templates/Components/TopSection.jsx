import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const TopSection = ({heading,desc}) => {
  return (
    <>
    <Box
      textAlign="center"
      w="80%"
      m="auto"
      pt={20}
      fontFamily="Proximanova opt sans-serif"
    >
      <Text fontSize={{base:"1em",md:"1.5em"}} color="#4C525A">TEMPLATE</Text>

      <Heading
        pt="1.5rem"
        fontWeight={500}
        lineHeight={{base:"1.6rem",md:"3rem"}}
        fontSize={{base:"1.5em",md:"2.5em"}}
        textAlign="center"
        w={{base:"100%",md:"80%",lg:"70%"}}
        m="auto"
      >
        {heading}
      </Heading>

      <Text p="1.5rem 0" fontSize={{base:"1em",md:"1.3em"}} w={{base:"100%"}} color="#4C525A">
        {desc}
      </Text>
      <Box w={{base:"100%",md:"70%" ,lg:"40%"}} m="auto" boxShadow='2xl' borderRadius="30px">
        <InputGroup
          size="md"
          border="3px solid #00B98E"
          h="3.5rem"
          borderRadius="30px"
        >
          <Input
            // mt="1"
            h="3.2rem"
            borderRadius="30px"
            border="1px solid white"
            
            placeholder="Enter your email"
          />
          <InputRightElement width={{base:"7rem" ,md:"9rem",lg:"10rem",'2xl':"10rem"}} mt="1">
            <Button
              h="3rem"
              size="sm"
              borderRadius="30px"
              textAlign={"center"}
              w="100%"
              bg="#00B98E"
              color="white"
              p="0 2em"
              _hover={{bg:"#4ECAAD"}}
            >
              GENERATE
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
      <Box m="auto" mt="10%" boxShadow='md'mb="5rem" bgColor="#E5E4E2" w="100%" textAlign="center">
        <Text fontSize={{sm:"0.2em",md:"1.2em"}} p="4rem" color="#4C525A">Bonsai has helped create <b color="black">1,023,928</b>  documents and counting</Text>
      </Box>
    </>
  );
};

export default TopSection;
