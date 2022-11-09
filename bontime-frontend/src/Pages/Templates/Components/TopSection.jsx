import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

const TopSection = () => {
  return (
    <>
    <Box
      textAlign="center"
      w="80%"
      m="auto"
      fontFamily="Proximanova opt sans-serif"
    >
      <Text fontSize="1.5em" color="#4C525A">TEMPLATE</Text>

      <Heading
        pt="1.5rem"
        fontWeight={500}
        lineHeight="3rem"
        fontSize="2.5em"
        w="60%"
        m="auto"
      >
        Free Online Contract (with our Online Contract Maker)
      </Heading>

      <Text p="1.5rem 0" fontSize="1.5em" color="#4C525A">
        with a bulletproof template & simple e-signing
      </Text>
      <Box w="40%" m="auto" boxShadow='2xl' borderRadius="30px">
        <InputGroup
          size="md"
          border="3px solid #00B98E"
          h="3.5rem"
          borderRadius="30px"
        >
          <Input
            mt="1"
            // pr="2rem"
            borderRadius="30px"
            border="none"
            placeholder="Enter your email"
          />
          <InputRightElement width="10rem" mt="1">
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
      <Box m="auto" mt="10%" boxShadow='md' bgColor="#E5E4E2" w="100%" textAlign="center">
        <Text fontSize="1.5em" p="4rem" color="#4C525A">Bonsai has helped create <b color="black">1,023,928</b>  documents and counting</Text>
      </Box>
    </>
  );
};

export default TopSection;
