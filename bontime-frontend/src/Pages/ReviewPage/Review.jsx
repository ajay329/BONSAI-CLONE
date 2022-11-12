import { Box, Grid, GridItem, Heading,  Text } from "@chakra-ui/react";
import React from "react";
import PerReview from "./PerReview";
import { reviews } from "./reviewsConstants";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import styles from "./review.module.css"
const Reviews = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.midsection}>
    <Box mb="10%" p="2% 2%" mt="5%">
      {/* Top */}
      <Box w="80%" m="auto" fontWeight="400" textAlign="center">
        <Heading fontSize={{ md: "35px", sm: "20px" }}>Bonsai Reviews</Heading>
        <Text fontSize={{ sm: "15px", base: "25px" }} color="#4c525a">
          200,000+ Freelancers Love Bonsai. Here's why.
        </Text>
        <Text color="#808080" fontSize="14px">
          Last Updated April 21,2021
        </Text>
      </Box>
      <br />
      <br />
      {/* Review Part */}
      <Box>
        <Grid
          templateColumns={{ lg: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}
          gap={5}
        >
          {reviews.map((e) => (
            <GridItem>
              <PerReview para={e.perRev} name={e.name} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
    </div>
    <Footer/>
    </div>
  );
};

export default Reviews;