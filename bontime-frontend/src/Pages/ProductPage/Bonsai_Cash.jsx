import {Box, Button, Heading, Image, SimpleGrid, Text} from "@chakra-ui/react"
export function BonsaiCash(){
    return(
        <Box border={'1px solid blue'} height="auto">
            <Box position={['relative']}  backgroundImage={'url(https://i.postimg.cc/jjkjjYc1/plain-image.png)'} backgroundRepeat="no-repeat" h={['auto']} backgroundSize="100%">
                <Box w={['90%','86%','86%','86%']} ml={['5%','7%','7%','7%']}>
                    <Heading fontSize={['24px','24px','2rem','2rem']} textAlign={['center']}>
                        One account
                        <br />
                        for everything business
                    </Heading>
                    <Text fontSize={['16px','16px','20px','20px']} textAlign={['center']} mt={['18px']}>
                    Manage your finances, save on taxes, and get paid faster.
                    <br />
                    All with no hidden fees and no minimums.
                    </Text>
                    <Button pt={['20px','20px','20px','20px']} pb={['20px','20px','20px','20px']} pl={['100px','20px','20px','20px']} pr={['100px','20px','20px','20px']}  mt={['25px']} color={'rgb(255,255,236)'} bg={'rgb(0,178,137)'} _hover={{bg:"rgb(26,59,65)"}}>Sign up</Button>
                   

                </Box>
                <Box h={['','250px','300px','450px']} mt={['','0px','100px','0px']}>
                        <Image  src="https://i.postimg.cc/ZRfpp251/card-holding-hand.png" w={['100%']} h={['','100%','100%','100%']} />
                </Box>

            </Box>
            <Box border={['1px solid black']} h={['auto']} >
                <Box  w={['','','96%','86%']} ml={['','','2%','7%']} h={['100%']}>
                    <Box  mt={['70px']}>
                        <Heading fontSize={['','','25px','35px']}>
                        Pay for your business
                        <br />
                        expenses any way, anywhere
                        </Heading>
                    </Box>
                    <SimpleGrid  columns={[1,2,2,2]} w={['100%']} mt={['70px']} h={['750px','650px','650px','650px']}>
                        <Box >
                            <Box textAlign={['start']}>
                                <Text fontSize={['','25px','30px','35px']} fontWeight={['500']}>Physical Card</Text>
                                <Text display={['none','none','flex','flex']} fontSize={["",'15px','18px','18px']} color="gray" mt={['15px']}>
                                Get your new Bonsai card in your pocket in
                                <br />
                                just a few days.
                                </Text>
                                <Text display={['flex','flex','none','none']} fontSize={["",'15px','18px','18px']} color="gray" mt={['15px']}>
                                Get your new Bonsai card in your pocket in  just a few days.
                                </Text>
                            </Box>
                            <Box textAlign={['start']} mt={['70px']}>
                                <Text fontSize={['','25px','30px','35px']} fontWeight={['500']}>Virtual Card</Text>
                                <Text display={['none','none','flex','flex']} fontSize={["",'15px','18px','18px']}color="gray" mt={['15px']}>
                                Generate your virtual card for your online
                                <br />
                                subscriptions and expenses.
                                </Text>
                                <Text display={['flex','flex','none','none']} fontSize={["",'15px','18px','18px']} color="gray" mt={['15px']}>
                                Generate your virtual card for your online subscriptions and expenses.
                                </Text>
                            </Box>
                            <Box textAlign={['start']} mt={['70px']}>
                                <Text fontSize={['','25px','30px','35px']} fontWeight={['500']}>Apple Pay</Text>
                                <Text display={['none','none','flex','flex']} fontSize={["",'15px','18px','18px']} color="gray" mt={['15px']}>
                                Add your new card to your Apple Wallet for
                                <br />
                                easy in-store and online payments.
                                </Text>
                                <Text display={['flex','flex','none','none']} fontSize={["",'15px','18px','18px']} color="gray" mt={['15px']}>
                                Add your new card to your Apple Wallet for easy in-store and online payments.
                                </Text>
                                
                            </Box>
                            <Box  display={['flex','none','none','none']}  alignItems="center" mt={['60px']}>
                            <Image   src="https://i.postimg.cc/9F6NJF2c/623c7f4e91dd295d3d660b0d-Illustration-hand.png" />
                        </Box>
                        </Box>
                        <Box  display={['none','flex','flex','flex']} alignItems="center">
                            <Image  w={["100%"]} src="https://i.postimg.cc/9F6NJF2c/623c7f4e91dd295d3d660b0d-Illustration-hand.png" height={['100%']}/>
                        </Box>
                    </SimpleGrid>

                </Box>
                {/* <Box position="absolute" left={['-15%']} right={['auto']} bottom={['auto']} transform={'rotate=(-110deg)'} backgroundColor='rgb(214,242,235) '></Box>
                <Box></Box>
                <Box></Box> */}

            </Box>
        </Box>
    )
}