import style from "./Article.module.css";


import {
  Box,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

const Article = () => {
  return (
    <>
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
                  <a href="#">
                    
                    </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                  
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    
                  </a>
                </ListItem>
                <a href="#">
                 
                </a>
                <ListItem>
                  <a href="#">
                   
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#">
                    
                  </a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto" border="1px solid red" p="1em 1em">
            <Box id="">
              <Text className={style.Hfsize}>
                
              </Text>
              
            </Box>
            <Box id="">
              <Text className={style.Hfsize}>
                
              </Text>
             
            </Box>
            <Box id="">
              <Text className={style.Hfsize}>
                
              </Text>
            </Box>
            <Box id="">
              <Text className={style.Hfsize}>
                
              </Text>
            </Box>
            <Box id="">
            <Text className={style.Hfsize}>
                
                </Text>
            </Box>
            <Box id="">
              
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Article;
