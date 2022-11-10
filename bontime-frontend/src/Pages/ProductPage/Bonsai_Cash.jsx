import {Box, Button, Heading, Image, SimpleGrid, Text} from "@chakra-ui/react"
export function BonsaiCash(){
    return(
        <Box  height="auto">
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
            {/* ----------------------------------------------------------------------------------- */}
            <Box h={['auto']} >
                <Box  w={['96%','96%','96%','86%']} ml={['2%','2%','2%','7%']} h={['100%']}>
                    <Box  mt={['70px']}>
                        <Heading fontSize={['','25px','25px','35px']}>
                        Pay for your business
                        <br />
                        expenses any way, anywhere
                        </Heading>
                    </Box>
                    <SimpleGrid  columns={[1,2,2,2]} w={['100%']} mt={['70px']} h={['auto','650px','650px','650px']}>
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
            {/* ------------------------------------------------------------------------------------------ */}
            <Box bg={'rgb(12,61,49)'} h={['auto']}>
                <Box  w={['96%','96%','96%','86%']} ml={['2%','2%','2%','7%']} h={['500px','400px','400px','600px']}  display={['flex']} justifyContent={['center']} alignItems={['center']}>
                        <Box w={['100%']} height={['auto','400px','400px','400px']} display={['block','flex','flex','flex']} justifyContent={['space-around']} alignItems={['center']}>
                            <Box w={['94%','50%','50%','50%']} ml={['3%','0','0','0']} h={['50%','100%','100%','100%']} >
                                <Box  h={['100%','50%','60%','80%']}  mt={['0','25%','20%','10%']}>
                                    <Image w={['100%']} h={['100%']} src="https://i.postimg.cc/tTWMcZXp/623899299f1d952603981dd0-cta-photo.png"/>
                                    
                                </Box>
                            </Box>
                            <Box  w={['94%','50%','50%','50%']}   ml={['3%','2%','2%','3%']} mt={['30px','0','0','0']} textAlign={['start']}>
                                <Text fontSize={['15px','16px','18px','18px']} fontWeight={['500']} color={'white'}>Raewyn Sangari, Virtual Assistant in Los Angeles, California</Text>
                                <Heading fontSize={['20px','20px','30px','40px']} color='white' fontWeight={500}>
                                “With Bonsai Cash, I put my business finances on one card, and in one location. My expenses are now much easier to track.”

                                </Heading>
                                <Button mt={['20px']}>Watch now</Button>

                            </Box>

                        </Box>
                </Box>
                {/* <Box left={['-27%']} top={['-47%']} right={['auto']} bottom={['auto']} z-zIndex={['0']} w={['34rem']} h={['18rem']} position={['absolute']} borderRadius={['64px']} bg={'rgb(58,99,90)'} opacity={['.2']} transform='rotate(15deg)'></Box> */}

            </Box>
            {/* --------------------------------------------------------------------------------------------- */}
            <Box h={['auto']} >
                <Box  w={['96%','96%','96%','86%']} ml={['2%','2%','2%','7%']} h={['auto']}>
                   
                    <SimpleGrid  columns={[1,2,2,2]}  w={['100%']}  h={['auto','600px','600px','600px']}>
                        <Box  h={['auto','100%','100%','100%']}  >
                            <Image   height={['80%','70%','90%','80%']}mt={['10%','15%','5%','10%']} w={['100%','100%','100%',"80%"]} src="https://i.postimg.cc/WbKpgGRY/6238c1a8fecf4d1b7856e7c7-Group-218-1-1.png" />
                        </Box>
                        <Box  display={['flex']} alignItems={['center']}>
                            <Box textAlign={['start']}    w={['100%','100%','100%','70%']}>
                                <Heading  fontSize={['25px','25px','30px','30px']} fontWeight={[600]}>Do less accounting work thanks to easy expense management</Heading>
                                <Text mt={'25px'} fontSize={['','16px','18px','18px']}  >Expenses from your Bonsai card are automatically tracked. All you need to do is upload receipts from the app. Plus, tax write-offs are already calculated.</Text>
                                <Box display={'flex'} justifyContent={['center','flex-start','flex-start','flex-start']}>
                                <Button   mt={['25px']} pt={['20px','20px','20px','20px']} pb={['20px','20px','20px','20px']} pl={['100px','20px','20px','20px']} pr={['100px','20px','20px','20px']}   color={'rgb(255,255,236)'} bg={'rgb(0,178,137)'} _hover={{bg:"rgb(26,59,65)"}}>Sign up</Button>

                                </Box>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
            {/* ------------------------------------------------------------------------------------------------------------ */}
            <Box  h={['auto']}  mt={['20px','0','0','0']}>
                <Box  w={['96%','96%','96%','86%']} ml={['2%','2%','2%','7%']} h={['auto']}>
                   
                    <SimpleGrid  columns={[1,2,2,2]}  w={['100%']}  h={['auto','600px','600px','600px']}>
                       
                        <Box  display={['flex']} alignItems={['center']}>
                            <Box textAlign={['start']}    w={['100%','100%','100%','70%']}>
                                <Heading  fontSize={['25px','25px','30px','30px']} fontWeight={[600]}>Receive your money faster</Heading>
                                <Text mt={'25px'} fontSize={['','16px','18px','18px']}  >Collect your invoice payouts in your Bonsai Cash account in just seconds.</Text>
                                <Box display={'flex'} justifyContent={['center','flex-start','flex-start','flex-start']}>
                                <Button   mt={['25px']} pt={['20px','20px','20px','20px']} pb={['20px','20px','20px','20px']} pl={['100px','20px','20px','20px']} pr={['100px','20px','20px','20px']}   color={'rgb(255,255,236)'} bg={'rgb(0,178,137)'} _hover={{bg:"rgb(26,59,65)"}}>Sign up</Button>

                                </Box>
                            </Box>
                        </Box>
                        <Box  h={['auto','100%','100%','100%']}  >
                            <Image    height={['100%','100%','100%','100%']} w={['100%','100%','100%',"80%"]} src="https://i.postimg.cc/R0v2ZxcB/6239b993126332415993148e-Group-219-p-800.png" />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>


        </Box>

    )
}