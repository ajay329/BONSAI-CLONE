import {Box, Button, Center, Heading, Image, Input, InputGroup, InputRightElement, SimpleGrid, Text} from "@chakra-ui/react"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
export function BonsaiTax(){
    return(
       <>
       <Navbar />
             <Box  height="auto" >
            <Box h={['auto']}  pt={['80px']}>
                <Box   w={['96%','96%','96%','86%']} ml={['2%','2%','2%','7%']} h={['100%']}>
                    <SimpleGrid   columns={[1,1,2,2]}  mt={['70px']} h={['auto','400px','550px','550px']} pb={['40px','0px','0px','0px']}>
                        <Box>
                            <Box textAlign={['start']}>
                               <Box display={['flex']} >
                                <Image src="https://i.postimg.cc/B6DF0PQv/5e5fd7c602ca7c5f6afeb68f-accounting-taxes-colour.png"/>
                                <Text ml={['5px']} color="rgb(0,178,137)" fontWeight={500}>Bonsai Tax</Text>
                               </Box>
                               <Box  w={['100%','500px','100%','450px']} mt={['20px']}>
                                <Heading >Software for freelancers to track 1099 expenses & keep a peace of mind at tax time</Heading>
                                <Text fontSize={['18px']} color='rgb(116,82,90)' mt={['20px']}>Bonsai Tax is built exclusively for self-employed workers to track expenses, maximize tax write-offs, and estimate quarterly taxes</Text>
                               <Box mt={['30px']}>
                               <InputGroup>
                                    <Input
                                    
                                    border={'2px solid gray'}
                                    onInput={{border:'none'}}
                                    bg={"white"}
                                    borderRadius="5px"
                                    h="65px"
                                    placeholder="Enter your email"
                                    />

                                    <InputRightElement
                                    h="100%"
                                    w={"30%"}
                                    display={["flex", "flex", "flex", "flex"]}
                                    justifyContent={["flex-end", "flex-end", "flex-end", "flex-end"]}
                                    >
                                    <Button
                                        h="100%"
                                        bg="rgb(0,163,126)"
                                        color="white"
                                        
                                        borderRadius="5px"
                                    >
                                        START FREE
                                    </Button>
                                    </InputRightElement>
                                </InputGroup>

                               </Box>
                               </Box>
                              
                            </Box>
                           
                           
                        </Box>
                        <Box h={['100%']}  display={['none','none','flex','flex']} alignItems="center">
                            <Image h={['70%']} w={["100%"]} src="https://i.postimg.cc/kXvk5VRB/5e6bc34a557bf5c29c83120f-graphic-accounting-taxes-min.png" height={['100%']}/>
                        </Box>
                    </SimpleGrid>

                </Box>
               

            </Box>
            {/* ------------------------------------------------------------------------------------------ */}
            <Box  h={['auto']} mt='30px'>
                <Box  w={['94%','94%','96%','86%']} ml={['3%','3%','2%','7%']} h={['auto','450px','500px','450px']}  >
                    <Box textAlign={['center']} w={['auto','500px','500px','600px']} margin={['auto']}>
                        <Heading fontSize={['25px','30px','35px','35px']} color='rgb(76,82,90)' fontWeight={400}>Save an average of $5,600 per year and avoid surprise bills at tax time</Heading>
                    </Box>
                    <SimpleGrid columns={[1,3,3,3]} mt={['30px']}  spacingY={8}>
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','250px']}>
                            <Image src="https://i.postimg.cc/VkpMN8SV/5e5fdcff2a586525c26505f2-ill-expense-tracking.png"/>
                            <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Track expenses</Text>
                            <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>Auto-imports expense from bank and credit cards, then classify and track them on web and mobile apps</Text>                                
                        </Box>
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','250px']}>
                            <Image src="https://i.postimg.cc/05h0QDLf/5e5fdcff2a5865fb306505f4-loss.png"/>
                            <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Identify write-offs</Text>
                             <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>Bonsai Tax automatically identifies expenses that are deductible to save you extra money at tax time</Text>                       
                        </Box>
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','250px']}>
                            <Image src="https://i.postimg.cc/jjyWdJYD/5e5fdcff2a58653a836505f3-ill-tax-estimates.png"/>
                          <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Estimate quarterly taxes</Text>
                             <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>Never get caught by a surprise tax bill again. Bonsai Tax analyzes your spending to estimate taxes due </Text>                       
                        </Box>

                    </SimpleGrid>
                        
                </Box>

            </Box>
            {/* --------------------------------------------------------------------------------------------- */}
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box  h={['auto']}  mt={['20px','0','0','0']}>
                <Box  w={['94%','94%','96%','86%']} ml={['3%','3%','2%','7%']} h={['auto']}>
                   
                    <SimpleGrid  columns={[1,2,2,2]}  w={['100%']}  h={['auto','500px','500px','500px']}>
                       
                        <Box  display={['flex']} alignItems={['center']}>
                            <Box textAlign={['start']}    w={['100%','100%','100%','70%']}>
                                <Heading  fontSize={['25px','25px','30px','30px']} fontWeight={[600]}>Automate Expenses</Heading>
                                <Text mt={'25px'} fontSize={['','16px','18px','18px']}  >Connect your bank and credit / debit card accounts to automatically import and organize tax receipts</Text>
                                
                            </Box>
                        </Box>
                        <Box  h={['auto','100%','100%','100%']}  >
                            <Image    height={['100%','100%','100%','100%']} w={['100%','100%','100%',"80%"]} src="https://i.postimg.cc/QdW5HJBb/5f6a80826ae4c5892577860f-Import-and-track-expenses-png-p-800.png" />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
{/* --------------------------------------------------------------------------------------------- */}
            <Box h={['auto']} >
                <Box  w={['94%','94%','96%','86%']} ml={['3%','3%','2%','7%']} h={['auto']}>
                   
                    <SimpleGrid  columns={[1,2,2,2]}  w={['100%']}  h={['auto','500px','500px','500px']}>
                        <Box  h={['auto','100%','100%','100%']}  >
                            <Image   height={['80%','70%','90%','80%']}mt={['10%','15%','5%','10%']} w={['100%','100%','100%',"80%"]} src="https://i.postimg.cc/kgF1hS97/5f6a80c061bad84919fa28e0-Automatically-identify-tax-write-offs-png-p-800.png" />
                        </Box>
                        <Box  display={['flex']} alignItems={['center']}>
                            <Box textAlign={['start']}    w={['100%','100%','100%','70%']}>
                                <Heading  fontSize={['25px','25px','30px','30px']} fontWeight={[600]}>Maximize Write-Offs</Heading>
                                <Text mt={'25px'} fontSize={['','16px','18px','18px']}  >nsai Tax is designed to identify and categorize receipts for taxes. So, our app can help you maximize your tax savings at the end of the year</Text>
                               
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box  h={['auto']}  mt={['20px','0','0','0']}>
                <Box  w={['94%','94%','96%','86%']} ml={['3%','3%','2%','7%']} h={['auto']}>
                   
                    <SimpleGrid  columns={[1,2,2,2]}  w={['100%']}  h={['auto','450px','450px','450px']}>
                       
                        <Box  display={['flex']} alignItems={['center']}>
                            <Box textAlign={['start']}    w={['100%','100%','100%','70%']}>
                                <Heading  fontSize={['25px','25px','30px','30px']} fontWeight={[600]}>Estimate Quarterly Tax</Heading>
                                <Text mt={'25px'} fontSize={['','16px','18px','18px']}  >Our tax software for freelancers uses your tracked income, expenses, and deductions to give you live estimates of the taxes you will owe</Text>
                                
                            </Box>
                        </Box>
                        <Box  h={['auto','100%','100%','100%']}  >
                            <Image    height={['100%','100%','100%','100%']} w={['100%','100%','100%',"80%"]} src="https://i.postimg.cc/MTDfCWHM/5f6a80ffd177fe0b36e5b092-Estimate-quarterly-taxes-png-p-800.png" />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            {/* ---------------------------------------------------------------------------- */}
            <Box   h={['auto']}  mt={['20px','0','0','0']}>
                <Box   w={['94%','94%','96%','86%']} ml={['3%','3%','2%','7%']} h={['auto']}>
                    <Center   w={['100%']}>
                        <Heading fontSize={['25px','25px','35px','35px']} w={['600px']} color="rgb(76,82,133)" fontWeight="400" textAlign={'center'}>Trusted by 500K+ self-employed workers and small businesses</Heading>
                    </Center>
                    <Center mt={['20px']}>
                    <Text w={['600px']} textAlign={'center'} fontSize={['20px','20px','25px','25px']} color="rgb(76,82,133)">Whether you’re just getting started or your business is booming, Bonsai has you covered.</Text>

                    </Center>
                    <SimpleGrid  columns={[1,2,2,2]} mt={['50px']}  spacingY={8} w={['92%','70%','70%','70%']} ml={['4%','15%','15%','15%']} >
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','250px']}>
                            <Image src="https://i.postimg.cc/yxyv50F0/5e5fd7c602ca7ca8ebfeb662-ill-Built-for-4-block.png"/>
                            <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Built for All Work Types</Text>
                            <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>We proudly back people with wide-ranging businesses—from design and marketing to development, writing, and photography.</Text>                                
                        </Box>
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','250px']}>
                            <Image src="https://i.postimg.cc/VkrX0jd4/5e5fd7c602ca7c967efeb661-ill-Global-Support-4-block.png"/>
                            <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Built for Global Businesses</Text>
                             <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>Bonsai has international coverage across the United States, Canada, UK, Australia and more, with 180 currencies supported.</Text>                       
                        </Box>
                        

                    </SimpleGrid>
                   
                    
                </Box>
            </Box>
            <Box   h={['auto']}  mt={['20px','20px','20px','20px']} mb='20px'>
                <Box   w={['94%','94%','96%','86%']} ml={['3%','3%','2%','7%']} h={['auto']}>
                    <Center   w={['100%']}>
                        <Heading fontSize={['25px','25px','35px','35px']} w={['600px']} color="rgb(76,82,133)" fontWeight="400" textAlign={'center'}>Keep Exploring Bonsai’s Features</Heading>
                    </Center>
                    
                    <SimpleGrid h='auto' columns={[1,2,2,2]} mt={['50px']}  spacingY={8} w={['92%','70%','70%','70%']} ml={['4%','15%','15%','15%']} >
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','fit-content']}>
                            <Image src="https://i.postimg.cc/DZqCkVxM/5e5fdcff2a5865afca6505f5-Explore-invoices.png"/>
                            <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Invoices</Text>
                            <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>Get paid on time using smart invoicing with automatic remainders read receipts and a variety of payment options.</Text>                                
                        </Box>
                        <Box pl={'5px'} pr={'5px'}  w={['fit-content','fit-content','fit-content','300px']} h={['fit-content','fit-content','fit-content','fit-content']}>
                            <Image src="https://i.postimg.cc/Y9pF9JpV/5e5fde8fb41ccd3277837201-ill-explore-contracts.png"/>
                            <Text fontSize={['20px']} color="rgb(76,82,133)" textAlign={['start']} fontWeight="500" mt={['20px']}>Contracts</Text>
                             <Text textAlign={['start']} color='rgb(76,82,133)' mt={['20px']}>Protect your business with your templated work contracts vetted by contract attorneys and thousands of freelancers.</Text>                       
                        </Box>
                        

                    </SimpleGrid>
                   
                    
                </Box>
            </Box>
            
            


        </Box>
        <Footer/>
       </>

    )
}