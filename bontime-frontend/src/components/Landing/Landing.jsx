import React, { useState } from 'react';
import styles from "./Landing.module.css";
import Carousal from "./LandingCarousal";
import {
  Box,
  Flex,
  Image,
  Wrap,
  WrapItem,
  Heading,
} from "@chakra-ui/react";


const LandingPage = () => {
  const [proposal, setProposal] = useState(true);
  const [contract, setContract] = useState(false);
  const [clients, setClients] = useState(false);
  const [time, setTime] = useState(false);
  const [invoices, setInvoices] = useState(false);
  const [task, setTask] = useState(false);
  const [accounting, setAccounting] = useState(false);
  const [forms, setForms] = useState(false);

  const handleProposal = () => {
    setProposal(true);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleContractsl = () => {
    setProposal(false);
    setContract(true);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleClients = () => {
    setProposal(false);
    setContract(false);
    setClients(true);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleTime = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(true);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleInvoices = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(true);
    setTask(false);
    setAccounting(false);
    setForms(false);
  };
  const handleTask = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(true);
    setAccounting(false);
    setForms(false);
  };
  const handleAccounting = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(true);
    setForms(false);
  };
  const handleForms = () => {
    setProposal(false);
    setContract(false);
    setClients(false);
    setTime(false);
    setInvoices(false);
    setTask(false);
    setAccounting(false);
    setForms(true);
  };

  return (
    <>
      <div className={styles.pagewrap}>
        <div className={styles.section_main}>
          <div className={styles.blue_shape_11}></div>
          <div className={styles.page_padding}>
            <div className={styles.container_large}>
              <div className={styles.flex_left}>
                <div className={styles.margin_bottom}>
                  <h1 className={styles.heading_xlarge}>
                    Everything you need to run your business.
                  </h1>
                </div>
                <div className={styles.margin_bottom_margin_huge}>
                  <div className={styles.text_size_medium_20}>
                    Bontime's all-in-one product suite with smart automation lets
                    you focus on your passion, not your paperwork.
                  </div>
                </div>
                <div className={styles.w_form}>
                  <form
                    name="wf-form-Longtail-form"
                    data-name="Longtail form"
                    method="get"
                    className={styles.email_form}
                    aria-label="Longtail form"
                  >
                    <input
                      type="email"
                      className={styles.field_style_w_input}
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Enter your email"
                      id="email"
                      required=""
                    />
                    <input
                      type="submit"
                      value="Start Free"
                      data-wait="Please wait..."
                      id="longtail-form-button"
                      className={styles.cta_submit_w_button}
                    />
                  </form>
                  <div
                    className={styles.form_success_message_w_form_done}
                    tabIndex="-1"
                    role="region"
                    aria-label="Longtail form success"
                  >
                    <div>Securing your account...</div>
                  </div>
                  <div
                    className={styles.w_form_fail}
                    tabIndex="-1"
                    role="region"
                    aria-label="Longtail form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.flex_right_width_70_is_mobile_100}>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png"
                  alt= "Hero"
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 47vw, (max-width: 991px) 53vw, 56vw"
                  srcSet="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2-p-500.png 500w, https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60dc499268d597166db997aa_bonsai_hero-opt-2.png 1578w"
                  width="789"
                  className={styles.image_hero}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section_main_spacing}>
        <img
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c68e1feb659_shape-2.svg"
          alt="Left blue shape"
          className={styles.shape_two}
        />
        <div className={styles.page_padding}>
          <div className={styles.container_medium}>
            <div className={styles.max_width_640}>
              <div className={styles.margin_bottom_margin_small}>
                <h2 className={styles.heading_large_32}>
                  Make more, manage less
                </h2>
              </div>
              <div className={styles.heading_small_22}>
                Bontime integrates and automates every step of your business so
                it runs seamlessly - from proposal to tax season.
              </div>
            </div>
            <div className={styles.grid}>
              <div>
                <div className={styles.margin_bottom_margin_huge}>
                  <div className={styles.heading_small}>Without Bontime</div>
                </div>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6c51feb665_ill_before_2n%20block.svg"
                  alt="Without Bonsai"
                  loading="lazy"
                />
              </div>
              <div>
                <div className={styles.margin_bottom_margin_huge}>
                  <div className={styles.heading_small}>With Bontime</div>
                </div>
                <img
                  src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c9ed8feb675_ill_after_2nd%20block.svg"
                  alt="With Bonsai"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <Box w="100%" h="auto"  justify="center">
        <Wrap justify="center"h="auto" pb="5%" pt="5%" spacing="5%" >
          <WrapItem  className={styles.leftDivDropdown} fontSize={"1.5rem"} >
         <Box w="400px" fontWeight="600">
         <Flex
              p="5%"
              className={proposal ? "animate-charcter" : ""}
              style={{
                boxShadow: proposal
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              opacity=".7"
              onClick={handleProposal}
            >
              <Image
                w="30px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a6e751beef00c6c1cf08_proposals.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" style={{ paddingLeft: "15px" }}>
                Proposals
              </Box>
            </Flex>
            <hr />
            <Flex
              className={contract ? "animate-charcter" : ""}
              style={{
                boxShadow: contract
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleContractsl}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ce5e2feb667_icon%202.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" textAlign="left" style={{ paddingLeft: "15px" }}>
                Contracts
              </Box>
            </Flex>
            <hr />
            <Flex
              className={clients ? "animate-charcter" : ""}
              style={{
                boxShadow: clients
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleClients}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e63a76751beefc0cac1d2ee_projects.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" textAlign="left" style={{ paddingLeft: "15px" }}>
                Client CRM
              </Box>
            </Flex>
            <hr />
            <Flex
              className={time ? "animate-charcter" : ""}
              style={{
                boxShadow: time
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleTime}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c6fccfeb664_icon%204.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" textAlign="left" style={{ paddingLeft: "15px" }}>
                Time Tracking
              </Box>
            </Flex>
            <hr />
            <Flex
              className={invoices ? "animate-charcter" : ""}
              style={{
                boxShadow: invoices
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleInvoices}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cc211feb68d_icon%205.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" textAlign="left" style={{ paddingLeft: "15px" }}>
                Invoices
              </Box>
            </Flex>
            <hr />
            <Flex
              className={task ? "animate-charcter" : ""}
              style={{
                boxShadow: task
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleTask}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c852bfeb68c_icon%206.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" textAlign="left" style={{ paddingLeft: "15px" }}>
                Task Tracking
              </Box>
            </Flex>
            <hr />
            <Flex
              className={accounting ? "animate-charcter" : ""}
              style={{
                boxShadow: accounting
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleAccounting}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cee21feb676_icon%207.svg"
                alt=""
                height="30px"
              />
              <Box w="auto" textAlign="left" style={{ paddingLeft: "15px" }}>
                Accounting and taxes
              </Box>
            </Flex>
            <hr />
            <Flex
              className={forms ? "animate-charcter" : ""}
              style={{
                boxShadow: forms
                  ? "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
                  : "",
              }}
              _hover={{
                cursor: "pointer",
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              }}
              p="5%"
              spacing="-24px"
              opacity=".7"
              onClick={handleForms}
            >
              <Image
                w="30px"
                h="10px"
                src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e72bbe6e8264bb7bbfe4820_dark-forms.svg"
                alt=""
                height="30px"
              />
              <Box style={{ paddingLeft: "15px" }}>Forms</Box>
            </Flex>
            <hr />
         </Box>
          </WrapItem>
          <WrapItem  className={styles.rightDivDropdown}>
            {proposal ? (
              <Proposals />
            ) : contract ? (
              <Contracts />
            ) : clients ? (
              <Clients />
            ) : time ? (
              <Time />
            ) : invoices ? (
              <Invoices />
            ) : task ? (
              <Task />
            ) : accounting ? (
              <Accounting />
            ) : (
              <Forms />
            )}
          </WrapItem>
        </Wrap>
      </Box>


      <div className={styles.section_main_spacing}>
        <div className={styles.page_padding}>
          <div className={styles.container_medium_text}>
            <div className={styles.max_width_640}>
              <div className={styles.margin_bottom_margin_small}>
                <h2 className={styles.heading_large_32_amerigo}>
                  Trusted by 500K+ self-employed workers
                  <br />
                  and small businesses
                </h2>
              </div>
              <div className={styles.textsizelarge_textweightlight}>
                Whether you’re just getting started or your business is booming,
                Bontime has you covered.
              </div>
            </div>
            <div className={styles.margintop_marginxxhuge}>
              <div className={styles.gridbox}>
                <div className={styles.max_width280}>
                  <div class={styles.marginbottom_marginxxlarge}>
                    <img
                      src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7ca8ebfeb662_ill_Built%20for_4%20block.svg"
                      alt="Built for all trades icon"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.margin_bottom_margin_small}>
                    <div className={styles.headingsmall22}>
                      Built for All Work Types
                    </div>
                  </div>
                  <div className={styles.textsizeregular_textweight}>
                    We proudly back people with wide-ranging businesses—from
                    design and marketing to development, writing, and
                    photography.
                  </div>
                </div>
                <div className={styles.max_width280}>
                  <div className={styles.marginbottom_marginxxlarge}>
                    <img
                      src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c967efeb661_ill_Global%20Support_4%20block.svg"
                      alt="Global support icon"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.margin_bottom_margin_small}>
                    <div className={styles.headingsmall22}>
                      Built for Global Businesses
                    </div>
                  </div>
                  <div className={styles.textsizeregular_textweight}>
                    Bontime has international coverage across the United States,
                    Canada, UK, Australia and more, with 180 currencies
                    supported.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Carousal />
    </>
  );
};

export default LandingPage;


const Accounting = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Automate Your Finances
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Don't worry about freelance finances
          <br /> when you have automatic expense
          <br /> tracking, income reporting and <br />
          estimated tax planning.
        </p>
        <Box className={styles.e}>
          EXPLORE ACCOUNTING AND TAXES <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image 
          className={styles.lowerDivSub}
          w="600px"
          ml="25%"
          h="500px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af07c36c35952ad19fbe_Graphic_Accounting-opt.png"
         
        />
      </Box>
    </Box>
  );
};

const Clients = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Stay Organized
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Manage your clients and ongoing
          <br /> projects all in one place. Organize
          <br /> all the documents, files and
          <br /> payments together for you and your
          <br /> client.
        </p>
        <Box className={styles.e}>
          EXPLORE PROJECTS <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c5ad3feb65b_Graphic_Projects-min.png"
          height="500px"
          width="600px"
          ml="20%"
        />
      </Box>
    </Box>
  );
};

const Contracts = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Protect Your Business
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Simply answer a few questions to
          <br /> generate an already vetted contract
          <br /> template. Once you hit send, the
          <br /> contract can be e-signed in minutes.
        </p>
        <Box className={styles.e}>
          EXPLORE CONTRACTS <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050ad775d1c278c443c76d6_Graphic_Contact-opt.png"
          height="500px"
          width="600px"
          ml="20%"
        />
      </Box>
    </Box>
  );
};

const Forms = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Ask Your Clients
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Create your own customized forms
          <br /> and questionnaires for clients and
          <br /> kicking off new projects
        </p>
        <Box className={styles.e}>
          EXPLORE FORM <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050af50cd2ff1fc7708d532_home-forms-opt.png"
          height="500px"
          width="600px"
          ml="20%"
        />
      </Box>
    </Box>
  );
};

const Invoices = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Get Paid Faster
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Create and customize invoices,
          <br /> receive updates about payment
          <br /> timelines, and have automatic
          <br /> payment reminders sent on your
          <br /> behalf.
        </p>
        <Box className={styles.e}>
          EXPLORE INVIOCES <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/60241fc5e974b72f0865513b_Graphic_Invoice-min.png"
          height="500px"
          width="600px"
          ml="20%"
        />
      </Box>
    </Box>
  );
};
const Proposals = () => {
  return (
    <>
      <Box>
        <Box className={styles.upperDivSub}>
          <Heading opacity=".9" size="xl">
            Win More Work
          </Heading>
          <br />
          <p style={{ fontSize: "20px" }}>
            With just a few clicks, you can craft
            <br /> structured proposals with clear <br />
            estimates to close your deals faster.
          </p>
          <Box className={styles.e}>
            EXPLORE PROPOSALS <hr />
          </Box>
        </Box>
        <Box className={styles.lowerDivSub}>
          <Image
            w="30px"
            h="10px"
            src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050acdd031b9f58db100f72_Graphic_Proposal-opt.png"
            height="500px"
            width="600px"
            ml="20%"
          />
        </Box>
      </Box>
    </>
  );
};
const Task = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Be More Effective
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Give your day more structure with
          <br /> simple task management on your
          <br /> projects. Track time for each task
          <br /> and stay up-to-date.
        </p>
        <Box className={styles.e}>
          EXPLORE TASKS <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/6050aec11e1747965bfc16a5_task-management-graphic-opt.png"
          height="500px"
          width="600px"
          ml="20%"
        />
      </Box>
    </Box>
  );
};

const Time = () => {
  return (
    <Box>
      <Box className={styles.upperDivSub}>
        <Heading opacity=".9" size="xl">
          Keep It Simple
        </Heading>
        <br />
        <p style={{ fontSize: "20px" }}>
          Easily track the time you're working,
          <br /> automatically populate timesheets
          <br /> and seamlessly switch between your
          <br /> projects for the day.
        </p>
        <Box className={styles.e}>
          EXPLORE TIME TRACKING <hr />
        </Box>
      </Box>
      <Box className={styles.lowerDivSub}>
        <Image
          w="30px"
          h="10px"
          src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7c4dc9feb654_Graphic_Track%20time-min.png"
          height="500px"
          width="600px"
          ml="20%"
        />
      </Box>
    </Box>
  );
};