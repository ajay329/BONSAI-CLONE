import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

const RelatedTemplates = () => {
  return (
    <Box w={{ sm: "100%", md: "100%", lg: "60%" }} m="auto" pb={20}>
      <Heading textAlign="center" p="5rem" color="#4C525A">
        Related templates
      </Heading>
      <Grid
        templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(4,1fr)" }}
        gap={4}
        textAlign="center"
      >
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Influncer Agreement Template</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Contract Template</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Design Brief Template</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Digital Marketing Template</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Free Contract Maker Template</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Web Design Quote</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Website Development Scope</Text>
          <p></p>
        </GridItem>
        <GridItem p="0.2rem 0.5rem" boxShadow="md">
          <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/607d352c11b814470f62b73a_Consulting%20Agreement%20Template-1.jpg" />
          <Text color="#00B289">Business Proposal Template</Text>
          <p></p>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default RelatedTemplates;
