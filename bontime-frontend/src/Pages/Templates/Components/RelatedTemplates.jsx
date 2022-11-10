import { Box, Grid, GridItem, Text } from "@chakra-ui/react"

const  RelatedTemplates = ()=>{
    return (
        <Box w={{sm:"100%",md:"100%",lg:"60%"}} m="auto">
            <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(4,1fr)"}} gap={4} >
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p> 
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
                <GridItem p="0.2rem 0.5rem" boxShadow="md">
                    <Text color="#00B289">Contract Template</Text>
                    <p></p>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default RelatedTemplates