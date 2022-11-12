import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Spacer,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import data from "./data.json";
import { ComponentModel } from "./ComponentModel";
import style from './Navbar.module.css';
import logo from '../../assets/Logo/logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };
    const handleLogin = () => {
        navigate("/login");
    };
    const handlePricing = () => {
        navigate("/pricing");
    };
    const handleReview = () => {
        navigate("/reviews");
    };
    const handleBonTax = () => {
        navigate("/bonTax");
    };
    const handleBonCash = () => {
        navigate("/bonCash")
    };
    const handleFreeContract = () => {
        navigate("/freeContract")
    };
    // const handleDigitalMarketing = () => {
    //     navigate("/digitalMarketingContract")
    // };
    // const handleGraphicDesign = () => {
    //     navigate("/graphicDesignContract")
    // };
    // const handleSocial = () => {
    //     navigate("/socialMediaContract")
    // };
    const handleAgreement = () => {
        navigate("/agreementTemplate")
    };
    const handleBrief = () => {
        navigate("/briefTemplate")
    };
    const handleInvoice = () => {
        navigate("/invoiceTemplate")
    };
    const handleProposal = () => {
        navigate("/propasalTemplate")
    };
    const handleQuotes = () => {
        navigate("/quotesTemplate")
    };
    const handleScope = () => {
        navigate("/scopeOfWorkTemplate")
    };

    const [dat, setData] = useState([{}]);

    useEffect(() => {
        const toggleProductUp = (element) => {
        element.style.display = "block";
        element.addEventListener("mouseover", () => {
            element.style.display = "block";
        });
        element.addEventListener("mouseout", () => {
            element.style.display = "none";
        });
        };
        const togglethirdUp = (element) => {
        element.style.display = "flex";
        element.addEventListener("mouseover", () => {
            element.style.display = "flex";
        });
        element.addEventListener("mouseout", () => {
            element.style.display = "none";
        });
        };
        const toggleProductUpOff = (element) => {
        element.style.display = "none";
        };

        let text1 = document.getElementById("text1");
        if (text1) {
        text1.addEventListener("mouseover", () => {
            setData(data[0]);
        });
        }
        let text2 = document.getElementById("text2");
        if (text2) {
        text2.addEventListener("mouseover", () => {
            setData(data[1]);
        });
        }
        let text3 = document.getElementById("rd");
        if (text3) {
        text3.addEventListener("mouseover", () => {
            setData(data[2]);
        });
        }
        let text4 = document.getElementById("4th");
        if (text4) {
        text4.addEventListener("mouseover", () => {
            setData(data[3]);
        });
        }
        let text5 = document.getElementById("5th");
        if (text5) {
        text5.addEventListener("mouseover", () => {
            setData(data[4]);
        });
        }
        let text6 = document.getElementById("6th");
        if (text6) {
        text6.addEventListener("mouseover", () => {
            setData(data[5]);
        });
        }
        let text7 = document.getElementById("7th");
        if (text7) {
        text7.addEventListener("mouseover", () => {
            setData(data[6]);
        });
        }

        let first = document.getElementById("1st");
        let second = document.getElementById("1st_dropdown");

        if (first) {
        first.addEventListener("mouseover", () => {
            toggleProductUp(second);
        });
        first.addEventListener("mouseout", () => {
            toggleProductUpOff(second);
        });
        }

        let third = document.getElementById("2nd");
        let fourth = document.getElementById("2nd_dropdown");

        if (third) {
        fourth.style.display = "none";
        third.addEventListener("mouseover", () => {
            togglethirdUp(fourth);
        });
        third.addEventListener("mouseout", () => {
            toggleProductUpOff(fourth);
        });
        }
    }, []);

    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        setData(data[0]);
    }, []);


    return (
        <Box className={style.nav}>
        <Box className={style.main}>
            <Box
            pl="8%"
            pt="1%"
            pr="8%"
            w="100%"
            justifyContent="space-between"
            display="flex"
            gap="5%"
            h="70px"
            >
            <IconButton
                m="auto"
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ lg: "none" }}
                justify="start"
                onClick={isOpen ? onClose : onOpen}
            />
            {isOpen ? (
                <Box mt="70px" w="100%" boxShadow="md" display={{ lg: "none" }}>
                    <Stack
                        pt="10%"
                        pb="25%"
                        pl="100%"
                        justify="center"
                        opacity={".97"}
                        boxShadow="md"
                        ml="-100%"
                        fontSize={"1.5rem"}
                        w="200%"
                        bg="white"
                        spacing={4}
                    >
                        <Box
                        _hover={{
                                cursor: "pointer",
                            }}
                        >
                            Product <ChevronDownIcon w={5} h={5} />
                        </Box>
                        <Box
                        _hover={{
                            cursor: "pointer",
                        }}
                        >
                            Templates <ChevronDownIcon w={5} h={5} />
                        </Box>
                        <Box
                            _hover={{
                                cursor: "pointer",
                            }}
                            onClick={handlePricing}
                        >
                        Pricing
                        </Box>
                        <Box
                        _hover={{
                            cursor: "pointer",
                        }}
                        onClick={handleReview}
                        >
                        Reviews
                        </Box>
                    </Stack>
                </Box>
            ) : null}
            <Spacer display={{ lg: "none" }} />
            <Spacer display={{ lg: "none" }} />
            <Spacer display={{ lg: "none" }} />
            
            <Box className={style.logo_container}   display={{ base: "none", lg: "flex" }}>
                <Image
                className={style.logo}
                src={logo}
                alt="Logo"
                onClick={handleHome}
                />
            </Box>
            <Flex
               className={style.logo_container}
                display={{ base: "flex", lg: "none" }}
            >
                <Image
                className={style.logo}
                src={logo}
                alt="Logo"
                onClick={handleHome}
                />
            </Flex>
            <Flex
                color="black"
                opacity=".75"
                display={{ base: "none", lg: "flex" }}
                justifyContent="center"
                w="45%"
                gap="8%"
                mt="0.5%"
                ml="5%"
            >
                <Box
                display="flex"
                _hover={{
                    cursor: "pointer",
                }}
                flexDirection="column"
                fontSize="17px"
                id="1st"
                >
                    <Box>
                        Product <ChevronDownIcon w={5} h={5} />
                    </Box>
                </Box>

                <Box
                    display="flex"
                    _hover={{
                        cursor: "pointer",
                    }}
                    id="2nd"
                    flexDirection="column"
                    fontSize="17px"
                >
                    <Box>
                        Templates <ChevronDownIcon w={5} h={5} />
                    </Box>
                </Box>
                <Box
                    _hover={{
                        cursor: "pointer",
                    }}
                    onClick={handlePricing}
                    fontSize="17px"
                    >
                    Pricing
                </Box>
                <Box
                    _hover={{
                        cursor: "pointer",
                    }}
                    onClick={handleReview}
                    fontSize="17px"
                    >
                    Reviews
                </Box>
            </Flex>

            <Box
                position="relative"
                display={{ base: "none", lg: "flex" }}
                w="25%"
            >
                <Button
                    className={style.btn1}
                    colorScheme="white"
                    color="#00b289"
                    _hover={{
                        background: "#00b289",
                        color: "white",
                    }}
                    onClick={handleLogin}
                    >
                    Log In
                </Button>
                <Button
                    className={style.btn2}
                    background="#00b289"
                    color= "white"
                    _hover={{
                        background: "#00b289",
                        color: "white",
                    }}
                    onClick={handleLogin}
                    >
                    Start Free
                </Button>
            </Box>
            </Box>
        </Box>
        <Box
            id="1st_dropdown"
            color="grey"
            boxShadow="2xl"
            rounded="md"
            position="absolute"
            bg="white"
            w="21%"
            className={style.ok}
            ml="30%"
        >   
            <Box className={style.bonProduct_leftContent}>
                <Box className={style.bonProduct}>
                    <Box className={style.bonProduct_wrapper}>
                        <Box className={style.bonProduct_title}>
                            Bontime Workflow
                        </Box>
                        <p color="#4d4d4d">
                            Look professional, win more clients and manage your business from
                            one place
                        </p>
                    </Box>
                </Box>
                
                <Box className={style.bonProduct}>
                    <Box className={style.bonProduct_wrapper}>
                        <Box className={style.bonProduct_title} onClick={handleBonTax}>
                            Bontime Tax
                        </Box>
                        <p color="#4d4d4d">
                            Track expenses , maximize taxs writeoffs and estimate taxes without the
                            headache
                        </p>
                    </Box>
                </Box>
                
                <Box className={style.bonProduct}>
                    <Box className={style.bonProduct_wrapper}>
                        <Box className={style.bonProduct_title} onClick={handleBonCash}>
                            Bontime Cash
                        </Box>
                        <p color="#4d4d4d">
                            Bontime's is all-in-one financial hub: no fees lightning fast payouts
                        </p>
                    </Box>
                </Box>
            </Box>
        </Box>

        <Box
            display="flex"
            boxShadow="2xl"
            className={style.ok}
            rounded="md"
            ml="35%"
            w="52%"
            bg="white"
            color=" #4c525a"
            id="2nd_dropdown"
        >
            {" "}
            <Box w="45%">
            <Box  opacity=".97" className={style.left_content}>
                <Box className={style.left_item}>
                    <Flex
                        id="text1"
                        className={style.left_item_wrapper}
                        _hover={{
                            cursor: "pointer",
                            bg: "rgb(234, 235, 233)",
                        }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleFreeContract}>Contract Templates</Box>
                    </Flex>
                </Box>
                
                <Box className={style.left_item}>
                    <Flex
                    id="text2"
                    className={style.left_item_wrapper}
                    _hover={{
                        cursor: "pointer",
                        bg: "rgb(234, 235, 233)",
                    }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleProposal}>Proposal Templates</Box>
                    </Flex>
                </Box>
                
                <Box className={style.left_item}>
                    <Flex
                    id="rd"
                    className={style.left_item_wrapper}
                    _hover={{
                        cursor: "pointer",
                        bg: "rgb(234, 235, 233)",
                    }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618ce1898e7b44dfb4b5207e_Vector%20(11).svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleInvoice}>Invoice Templates</Box>
                        </Flex>
                </Box>
                
                <Box className={style.left_item}>
                    <Flex
                    id="4th"
                    className={style.left_item_wrapper}
                    _hover={{
                        cursor: "pointer",
                        bg: "rgb(234, 235, 233)",
                    }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e4a088d6d0a054fe41abb_contracts%20icon.svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleAgreement}>Agreement Templates</Box>
                    </Flex>
                </Box>
                
                <Box className={style.left_item}>
                    <Flex
                    id="5th"
                    className={style.left_item_wrapper}
                    _hover={{
                        cursor: "pointer",
                        bg: "rgb(234, 235, 233)",
                    }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleQuotes}>Quotes Templates</Box>
                    </Flex>
                </Box>
                
                <Box className={style.left_item}>
                    <Flex
                    id="6th"
                    className={style.left_item_wrapper}
                    _hover={{
                        cursor: "pointer",
                        bg: "rgb(234, 235, 233)",
                    }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49352788d2281046f7be_time%20tracking%20icon.svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleScope}>Scope of work Templates</Box>
                    </Flex>
                </Box>
                
                <Box className={style.left_item}>
                    <Flex
                    id="7th"
                    className={style.left_item_wrapper}
                    _hover={{
                        cursor: "pointer",
                        bg: "rgb(234, 235, 233)",
                    }}
                    >
                        <Image
                            style={{ opacity: 0.7 }}
                            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/618e49eff7f1e27dd1b5326d_Proposals%20icon.svg"
                            alt=""
                            width="20px"
                            height="20px"
                        />
                        <Box className={style.left_item_title} onClick={handleBrief}>Brief Template</Box>
                    </Flex>
                </Box>
            </Box>
            </Box>
            <Box>
                {data.length > 1 ? (
                <ComponentModel opacity=".72" item={dat} />
                ) : (
                <ComponentModel item={data[0]} />
                )}
                {/* {data[0] === {a1} ? (onClick={handleFreeContract}) : undefined}
                {data[0] === {a2} ? (onClick={handleSocial}) : undefined}
                {data[0] === {a3} ? (onClick={handleGraphicDesign}) : undefined}
                {data[0] === {a4} ? (onClick={handleDigitalMarketing}) : undefined} */}
            </Box>
        </Box>
        </Box>
    )
};

export default Navbar;