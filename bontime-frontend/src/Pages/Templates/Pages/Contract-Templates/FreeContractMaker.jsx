import React from "react";
import TopSection from "../../Components/TopSection";
import "../../Components/Article.css";
import {
  Box,
  Grid,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import SignupTemplate from "../../Components/SignupTemplate";
import RelatedTemplates from "../../Components/RelatedTemplates";
import Footer from "../../../../components/Footer/Footer";

function FreeContractMaker() {
  const heading = "Free online Contract (with our Online Contract Maker)";
  const desc = "with a bulletproof template & simple e-signing";
  return (
    <>
      <TopSection heading={heading} desc={desc} />
      <Box
        fontFamily="Proximanova opt sans-serif"
        mb="5rem"
        m={{ sm: "auto", md: "auto" }}
      >
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
            h={{ md: "70vh", lg: "80vh", xl: "65vh", "2xl": "55vh" }}
            boxShadow="dark-lg"
            borderRadius={20}
            position={{ md: "sticky", lg: "sticky" }}
            top={10}
            textAlign="left"
            p="5"
          >
            <Heading fontSize={{ md:"1em",lg:"1em",'2xl':"1.5em"}}>
              Table of Contents{" "}
            </Heading>

            <Box pt="1.5rem">
              <List spacing={2} color="#00B98E" fontWeight={700}>
                <ListItem>
                  <a href="#contractT">Are there free contract templates?</a>
                </ListItem>
                <ListItem>
                  <a href="#validC">
                    What are the 5 requirements for a valid contract?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#rule">What is the most basic rule to a contract?</a>
                </ListItem>
                <a href="#onlineC">
                  How can I create an online contract with Bonsai’s online
                  contract maker?
                </a>
                <ListItem>
                  <a href="#creatingC">
                    What are the Advantages of Creating a Contract with Bonsai?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#help">How Else Can Bonsai Help You?</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto"  p="1em 1em">
            <Box id="contractT">
              <Text className="Hfsize">Are there free contract templates?</Text>
              <p id="para">
                Bonsai has lawyer curated general contract templates that you
                can easily edit. Simply create a free account and download the
                template.
              </p>
            </Box>
            <Box id="validC">
              <Text className="Hfsize">
                What are the 5 requirements for a valid contract?
              </Text>
              <p id="para">
                The 5 requirements for a contract to be valid are: Offer,
                Acceptance, Consideration, Mutuality of obligation, and
                Competency and capacity. You may add more information to your
                contract, just make sure that the 5 requirements mentioned are
                present
              </p>
            </Box>
            <Box id="rule">
              <Text className="Hfsize">
                What is the most basic rule to a contract?
              </Text>
              <p id="para">
                While there are 5 requirements of a valid contract, the most
                basic rule is simple. That there is an offer from one party and
                it is accepted by another party.
              </p>
              <p id="para">
                Freelance projects come in all shapes and sizes. From one-off
                design or writing tasks, to long-term web dev collaborations and
                ongoing consultancy under retainer agreement, no two jobs are
                ever the same.
              </p>
              <p id="para">
                But there’s one thing that unites them all: the need for a solid
                business agreement.{" "}
              </p>
              <p id="para">
                As a freelancer, you must ensure that you’re paid for your time
                and expertise, and the best way of doing that is to use a
                legally-binding online contract template, setting out your
                milestones, terms, and expectations.
              </p>
              <p id="para">
                Let’s take a quick look at what you need to include in your next
                freelance contract:
              </p>
              <Text className="subH">Personal & Professional Details</Text>
              <p id="para">
                First, you need to establish who the agreement is between and
                the nature of the relationship. This clarifies, from the word
                go, that you’re acting as an independent contractor or an LLC,
                and not as an employee of your client.
              </p>
              <p id="para">
                Depending where you are in the world, this can be an important
                distinction to make. Any uncertainty over this could result in
                tax issues for you and your client. And you don’t want that.
              </p>
              <p id="para">
                The good news is, most online contract makers use input fields
                for this info, making it clear who’s who from the outset.‍
              </p>
              <Text className="subH">Scope of Work</Text>
              <p id="para">
                Even if your job is, on paper, a quick one, it makes sense to
                include a scope of work in your online contract. By outlining
                the work you’re being asked to do in as much detail as possible,
                you protect yourself from taking on additional tasks which are
                deemed “out of scope”.
              </p>
              <p id="para">
                For example, if you’re a web designer being asked to build a
                landing page on an existing website, you should make it clear
                that you will not be supplying the content for that page (that’s
                the client’s responsibility — more on that below).‍
              </p>
              <Text className="subH">Project Responsibilities</Text>
              <p id="para">
                To successfully deliver a freelance project, you need to
                determine who is responsible for what. Whether that’s web copy
                for a web design project, or access to third party software for
                ongoing social media marketing tasks, be specific about who
                needs to deliver something, and by when.
              </p>
              <p id="para">
                The beauty of using an online contract is that you can agree on
                this via email, and simply copy & paste the list into the
                contract.‍
              </p>
              <Text className="subH">Milestones</Text>
              <p id="para">
                Your online contract should also include a section for project
                milestones. It’s here that you outline the dates and deadlines
                associated with your freelance job. Be crystal clear with
                regards to when something is due, and what might impact
                delivery.
              </p>
              <p id="para">
                For instance, if your client is unable to fulfil their
                responsibilities mentioned above, it could dramatically alter
                your proposed timeline. And if you fail to highlight this in the
                agreement, you could be held to the original deadline, causing
                stress and friction further down the line. ‍
              </p>
              <Text className="subH">Payment Details</Text>
              <p id="para">
                Finally, your online contract should state how much, how, and
                when you’ll be paid for your freelance work.
              </p>
              <p id="para">
                The amount you quote and the method of payment you accept is
                entirely up to you. However, you may wish to structure the
                payment schedule differently depending on the type and length of
                the project, perhaps taking a deposit up-front, or payment upon
                completion of certain milestones.
              </p>
              <p id="para">
                As we’ll discover in the next section, using an online contract
                maker can help you streamline the payment process, generating
                invoices for each milestone with a simple click. You can also
                use Bonsai's freelance invoice template for this.
              </p>
            </Box>
            <Box id="onlineC">
              <Text className="Hfsize">
                How can I create an online contract with Bonsai’s online
                contract maker?
              </Text>
              <p id="para">
                Writing a contract using a standard contract template can help
                you produce a largely generic agreement relatively quickly.
              </p>
              <p id="para">
                But if you want to get into specifics, you’ll quickly discover
                that doing so can be difficult. Many templates are rigid,
                difficult to edit and format, and use way too much jargon.
              </p>
              <p id="para">
                To avoid this, we recommend that you join an increasing number
                of top-tier freelancers and use an online contract maker to
                create your next freelance business agreement.
              </p>
              <p id="para">
                ‍Bonsai’s contract generator has been vetted by experienced
                contract lawyers and thousands of expert freelancers, covering
                all of the important aspects of a contract we mentioned earlier.
              </p>
              <p id="para">And the best bit? It’s super easy to use. ‍</p>
              <Text className="subH">
                Here’s how to make a contract with Bonsai in 5 simple steps:
              </Text>
              <Text className="subH">Step One - Select Your Template</Text>
              <li className="liP">
                Choose from a range of ready-made online contract templates, or
                start with a blank template. Add your client name, project name
                and preferred currency.
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/604f4445f1ea3005d41598df_Untitled-1-2.png" />
              </li>
              <Text className="subH">Step Two - Add Your Basic Info </Text>
              <li className="liP">
                Next, fill in your basic info. This includes your location
                (country and state/province), your legal entity (if you operate
                as an LLC), and your client’s legal name (company/individual).
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/604f45a63b89923ebc7b67e3_basic-2.png" />
              </li>
              <Text className="subH">Step Three - Add Your Scope of Work </Text>
              <li className="liP">
                Describe the scope of work in as much detail as possible. You
                can also attach a separate statement of work file here if you
                wish.
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/604f458c4fc50c15a1dcf27f_scope-2.png" />
              </li>
              <Text className="subH">Step Four - Add Your Payment Details</Text>
              <li className="liP">
                Determine how and how much your client will pay you for your
                freelance services here. You can choose from a flat fee,
                milestone payments, or hourly, daily, weekly, or monthly rates.
              </li>
              <p id="para">
                You can outline payment terms (net 15 days for invoices, for
                example), late payment fees, and contract start and end dates
                here.
              </p>
              <p id="para">
                And you can also automatically generate an invoice if you’re
                requesting a deposit prior to starting work. This can be sent
                along with the contract, or you can choose to send it manually.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/604f45f390597556dad1fb13_payment1-2.png" />
              
              <li className="liP">
                Now you’re ready to review your vetted and legal contract. And
                if you want to make any edits to the template, you can do so at
                this stage.
              </li>
              <p id="para">
                If you’re happy with the finished agreement, you can click “SIGN
                CONTRACT” to digitally sign it with a legally-binding online
                signature, before sending it to your client to do likewise. You
                can also follow our guide on how to insert signature in Word and
                how to digitally sign a PDF.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/604f46c984f8f81c9d35445a_final-2.png" />
              <p id="para">
                And that’s it! Super easy. Once sent, you can return to your
                dashboard to track when the contract has been delivered, opened,
                and signed.
              </p>
              <p id="para">
                Ready to freelance like a pro? Create an online contract with
                Bonsai.
              </p>
            </Box>
            <Box id="creatingC">
              <Text className="Hfsize">
                What are the Advantages of Creating a Contract with Bonsai?
              </Text>
              <p id="para">
                A ready-to-use contract template offers a number of benefits to
                freelancers and small businesses that they wouldn’t otherwise
                get with a homemade legal agreement. Free contract templates
                from Bonsai are:
              </p>
              <li className="liP">
                Quick and easy: a contract template does all the time-consuming
                work for you. It’s got all the sections required for a world
                class agreement–all you need to do is jump in, add
                project-related details, your branding, and any necessary info
                on the parties involved.
              </li>
              <li className="liP">
                Legally sound: a formal contract needs to be a legally binding
                document–otherwise, it’s unenforceable. Using a Bonsai template
                gives you a legally binding contract without the pain of having
                to seek legal advice or consider local laws.
              </li>
              <li className="liP">
                Comprehensive: the contract maker software ensures you include
                all the essential elements you need to create a binding
                agreement. Whether it’s a construction contract or an
                independent contractor agreement–the free legal forms on Bonsai
                have you covered.‍
              </li>
              <li className="liP">
                Online: create a digital contract in just a few clicks with
                Bonsai. Legal contracts have never been simpler–and neither has
                the signing process. Bonsai’s electronic signatures allow you to
                manage the entire process online. Send and receive signed
                documents without worrying about confidential information–such
                as contact details and personal information–ending up in the
                wrong hands.
              </li>
              <p id="para">
                All of these considerations make Bonsai a must-have resource for
                small businesses and freelancers alike. Whether it’s contract
                templates or invoice templates–you can save time with Bonsai.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61e1a5538f824cbd987f4d3c_S5Gig9F__R3d_wvdVaGJY3bnyHTVgvoeMeptnzTs11-9Lqgf2eKAygWgbL2P9AnswrGwTmc7sntEACOYoU_awXUDtRvcuxb6VVRChDt6wrrRgEcz507jHJaGkcZS91BgAlZHvL2r.png" />
            </Box>
                        
            <Box id="help">
              <Text className="Hfsize">How Else Can Bonsai Help You?</Text>
              <p id="para">We’re glad you asked.</p>
              <p id="para">
                Bonsai’s archive of over 400+ business templates can help you
                create proposals, contracts, agreements, scopes of work,
                quotations, and invoices–all from the same dashboard.
              </p>
              <p id="para">
                Maybe you’re bringing in a new employee for your fast growing
                small business? We’ve got an employment contract template for that
                here. Perhaps you’re looking to keep things private? Take a look
                at our non-disclosure agreement template here. There are plenty
                more templates where that came from–sign up today for free to
                access them all.
              </p>
              <p id="para">
                Bonsai’s templates enable you to manage your business documents
                easily and securely in one place. Create contracts in minutes and
                easily customize templates for clients new and old to ensure your
                business delivers comprehensive and specific contracts every
                single time.
              </p>
                
            </Box>
                <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62d949b8b7108c4b23e86dcf_online-contract-maker-p-800.jpeg"/>
          </Box>
        </Grid>
      </Box>
      <SignupTemplate/>
      <RelatedTemplates/>
      <Box m="auto" textAlign="center"  bg="blackAlpha.900" w="100%" pt={20} sm={{h:"100vh"}}>
        <Box>
          <Footer />

        </Box>
      </Box>
    </>
  );
}

export default FreeContractMaker;
