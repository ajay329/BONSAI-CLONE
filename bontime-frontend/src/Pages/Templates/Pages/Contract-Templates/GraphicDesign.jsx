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

function GraphicDesign() {
  const heading = "Free Design Contract Template";
  const desc = "with a bulletproof template & simple e-signing";
  return (
    <>
      <TopSection heading={heading} desc={desc} />
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
            h={{ md: "90vh", lg: "105vh", xl: "70vh", "2xl": "80vh" }}
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
                  <a href="#freelanceDesign">
                    How do freelance designers make money?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#negotiate">
                    How do you negotiate a design contract?{" "}
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#legalbinding">
                    Are freelance design contracts legally binding?{" "}
                  </a>
                </ListItem>
                <a href="#designContract">What Is a Design Contract?</a>
                <ListItem>
                  <a href="#includedContract">
                    What Should Be Included In a Graphic Design Contract?{" "}
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#contractSample">Graphic Design Contract Sample</a>
                </ListItem>
                <ListItem>
                  <a href="#ownTemplate">
                    What’s the Benefit of Using Bonsai, Instead of Editing Your
                    Own Template?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#contractBonsai">
                    How to Create a Graphic Design Contract With Bonsai
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#graphicfaq">Graphic Design Contract Sample</a>
                </ListItem>
                <ListItem>
                  <a href="#Examplegraphic">
                    Examples of graphic design contracts{" "}
                  </a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto"  p="1em 1em">
            <Box id="freelanceDesign">
              <Text className="Hfsize">
                How do freelance designers make money?
              </Text>
              <p id="para">
                Freelance designers generate income through creating and selling
                templates, conducting design workshops, selling branding
                packages and many more. Whatever service you're planning to
                provide as a freelance designer, make sure that you are
                protected by a contact.
              </p>
            </Box>
            <Box id="negotiate">
              <Text className="Hfsize">
                How do you negotiate a design contract?
              </Text>
              <p id="para">
                When negotiating a design contract with a client, you must first
                know their needs, budget and priority. Once you have figured
                those out, you can align them with your rate and non-negotiables
                and present them to the client. If you have reached an agreement
                with the client, put it down in writing using Bonsai's freelance
                design contract template.
              </p>
            </Box>
            <Box id="legalbinding">
              <Text className="Hfsize">
                Are freelance design contracts legally binding?
              </Text>
              <p id="para">
                By definition of the law, any agreement written in paper and
                signed by the two parties involved is a legally binding
                contracts. This also applies to freelance design contracts. So
                make sure to cross this off before starting any work. Bonsai's
                easy to use templates can help you out.
              </p>
            </Box>
            <Box id="designContract">
              <Text className="Hfsize">What Is a Design Contract?</Text>
              <p id="para">
                A graphic design contract is a legally binding document and
                agreement between you, the graphic designer, and your client.
              </p>
              <p id="para">
                Makes sense, right? A solid graphic design contract will detail
                all your requirements and list out your professional services.
                If you’re a specialist in typography, brand recognition, layout
                and print, or logo design, a contract is going to outline those
                particular responsibilities and make sure both parties
                understand exactly what it is you’re being hired to do.
              </p>
              <p id="para">
                As a graphic designer, you represent a business’s visual
                communication. So, a graphic design contract will represent your
                ability to visually communicate the business’s goals, as well as
                protect both parties' best interests.
              </p>
              <p id="para">
                Note: Create a well-designed and personal template in minutes
                without the help of Photoshop. Sign up to Bonsai now and get
                started.
              </p>
            </Box>
            <Box id="includedContract">
              <Text className="Hfsize">
                What Should Be Included In a Graphic Design Contract?
              </Text>
              <p id="para">
                Graphic design is subjective and open to interpretation. Even if
                you understand the brief perfectly, a client could turn around
                and decide that they don’t like your work. And if you don’t have
                a contract in place to clarify (and enforce) project scope,
                deadlines, revisions, termination, and payment terms from the
                outset, it could cost you precious time and money. This also
                happens in a web design business.
              </p>
              <p id="para">
                So, to avoid this and keep everyone on the same page, below you
                can find what to include when writing graphic design contracts.
              </p>
              <Text className="subH">Detailed descriptions of the work</Text>
              <p id="para">
                Every polished and legally binding contract will need to
                establish two things first:
              </p>
              <li className="liP">Who is this contract between?</li>
              <li className="liP">What is the nature of the contract?</li>
              <p id="para">
                After this, you can get into the finer details of your freelance
                contract.
              </p>
              <p id="para">
                The cornerstone of every good graphic design contract is being
                specific and detailed. With this information, you'll exactly
                know what is required to undertake the design project.
              </p>
              <p id="para">
                For example, you may want to see the existing brand guidelines,
                interview key stakeholders, or even test the product or service
                to ensure that your design style fits with it.
              </p>
              <Text className="subH">Timeline for deliverables</Text>
              <p id="para">
                Next, you'll need to outline the project description and go into
                detail about what it is you’ll be designing. If you’re working
                with a brief or design proposal, reflect this in the contract.
                List all the deliverables and the number of revisions you'll
                provide—that way there’s absolutely no ambiguity.
              </p>
              <p id="para">
                The last thing you want is to be vague with your language. If
                you are, the client can request additional mock-ups or extra
                services at the last minute without paying for them (a.k.a
                “scope creep”).
              </p>
              <p id="para">
                It also makes sense to note what’s out of scope in this section.
                If you’re tasked with designing a logo, you may want to
                explicitly state that this does not include a business card or
                letterhead design. That’s an extra service.
              </p>
              <p id="para">
                After determining the project scope, you should outline any key
                milestones. This should help you figure out the dates and
                deadlines associated with the graphic design project. Be clear
                around when something is due and what might affect this.
              </p>
              <Text className="subH">Payment details</Text>
              <p id="para">
                Every basic graphic design contract template will include a
                section for your payment details. Determining your rate and how
                you get paid is up to you. Some graphic designers will charge
                per hour or figure out a quote from the project scope. You may
                even want to structure a payment schedule so that the client
                pays you continuously and consistently.
              </p>
              <p id="para">
                For many graphic designers, their payment terms will include a
                non-refundable deposit. This can be from a few hundred dollars
                to a certain percentage of the total project cost.
              </p>
              <Text className="subH">
                Copyright (Intellectual Property) ownership and use
              </Text>
              <p id="para">
                There are several copyright questions to answer for your graphic
                design contract:
              </p>
              <li className="liP">Who retains ownership of the design?</li>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/620278bbbaec1cf1a4679028_k5AjNjma0hXmqmMaw98fyaAB4wfm43JWiDRlwAP1eZ9wVFbwKTRNxqRbZx2PmntXvmyJTjqVBFX-TuOJ1qdjA4SzCY8gnZB87Sepzl0ExP1V52HiKyFcqjTgQ2hVyO02KtgibqpR.png" />
              <li className="liP">When is ownership transferred?</li>
              <li className="liP">Can you still use the final design?</li>
              <li className="liP">
                Can I use the client's intellectual property?
              </li>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/6202791b5cfd3782453736f8_0lmlVuvDe_xDGuBCQmqervh_4VrZPfFWJFWXXHLIwOUV_eVRRc7UBKhWSe0CCRJU6iQy3FLMrn87Py6-xOk7HpdrMGXlDg5AYLv-ZFaIxac4szqlBqfk0kSWMcmKhNiX-ExJsXzy.png" />
              <p id="para">
                Typically, the designer warrants a transfer of ownership with
                the full and final payment. However, you may wish to retain some
                reasonable control of the final design. You'd certainly want
                approval to use it as promotional material in your portfolio.
              </p>
              <p id="para">
                It's also a good idea to have the client's prior written consent
                to use their intellectual property. This could be considered
                confidential information, so discuss if you need a
                non-disclosure agreement.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62027800730ccacdc7442856_6NjbscJbvr_PnYmZG07Xs31nFjReTWE9dX-NIdtUFOBVm2Aff7uIFuGc6w9tLwgqZh3Yd5mYfZGn4Lr0FlsaDt8YHArt26GfWHYfdj6RX8IzjTYgdH7qa86spb7dpcLMVvzKeDqT.png" />
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62027854faaac36455404ab9_ed5byw1nFYFPI1W5I8xneYDWCiIKqaKwLgIABiG3yi1C1sVPp10a6pX93U7tLHoyXJgclwlfsgmu5egi9hTm5KNpgTlmLWYK70GPM4JfDaDOk3e2D3QMISxq2oJ05YZyaY2kWmA8.png" />
              <Text className="subH">Termination clause</Text>
              <p id="para">
                Finally, you should clarify any reasons for the termination of
                the contract. This could be on a specific date, when the project
                ends, or due to other less favorable circumstances.
              </p>
              <p id="para">
                Mention that if either the designer or client wishes to end the
                contract early, then written notice must be provided in advance.
                If they decide to pull the plug on you when you're close to
                finishing the project, clarify that they're responsible for
                paying you in full. It's also a good idea to mention that you
                retain ownership (and copyright) of the work you've created in
                these circumstances.
              </p>
            </Box>
            <Box id="contractSample">
              <Text className="Hfsize">Graphic Design Contract Sample</Text>
              <p id="para">
                Sign up to Bonsai for free and choose the graphic design
                contract template. From there, you'll see every basic
                fundamental that goes into creating a solid contract for graphic
                designers.
              </p>
            </Box>
            <Box id="ownTemplate">
              <Text className="Hfsize">
                What’s the Benefit of Using Bonsai, Instead of Editing Your Own
                Template?
              </Text>
              <p id="para">There are a few key benefits:</p>
              <li className="liP">
                Your contract will be legally approved—all our contracts are
                vetted by lawyers
              </li>
              <li className="liP">
                It's faster. We guide you through the process, editing parts of
                the contract that are relevant to you
              </li>
              <li className="liP">
                Bonsai contracts can be electrically signed as soon as they're
                finished
              </li>
              <li className="liP">
                It saves you money. No need to hire a professional to audit your
                contracts. Bonsai has your back
              </li>
              <p id="para">
                It’s essential that you get the details in your contract right.
                In just a few minutes, you can easily create a contract with
                Bonsai.
              </p>
            </Box>
            <Box id="contractBonsai">
              <Text className="Hfsize">
                How to Create a Graphic Design Contract With Bonsai
              </Text>
              <p id="para">
                Creating a graphic design contract template from scratch takes
                time, effort, and know-how. Because each graphic design project
                will be unique, the ability to quickly customize your contract
                is vital.
              </p>
              <p id="para">
                Now, you could use a standard contract template, but they’re
                often tricky to edit and format—especially when time’s a factor.
                So, what’s the answer? One word: Bonsai.
              </p>
              <p id="para">
                Vetted by thousands of freelance designers and experienced
                contract lawyers alike, Bonsai includes everything we’ve
                mentioned above, and so much more. Simply select our graphic
                design contract template, add your personal and project details,
                and sign and send with just a few clicks.
              </p>
              <p id="para">Here’s how to make a Bonsai contract in 5 simple steps:</p>
              <p id="para">1. Select your template</p>
              <p id="para">2. Add your basic info</p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/6202763e919edd01b8d89da3_DTif3lqDPGpPIfofcbMD3dGGo5PNH9tnTsKUc3a3aI3lBNMqJPxRVTtviBQMD17qKU9Bdn1ROBA_jSfqlO0vcOTMvJCpuTZNNWs_9FXkc14nR2atd1MfXFnPVlMLdj3rdQKMfUiL.png" />
              <p id="para">3. Add your scope of work</p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62027971919edd8570d98ddd_QdTNv4UUjVTaj_Or2CA8prKxt8SKdtUyOJwCyv6pdizVvdypnBxDDyuuI6Lw1kWLsLTvCpTEZR6wLPvVNuNukAlIk9OG2ZYagQTole2PmnqmRFsUD1gsDnIfl8448BvJClCaa-Qc.png" />
              <p id="para">4. Add your payment info</p>
              <p id="para">5. Review and sign your final contract</p>
            </Box>
            <Box id="graphicfaq">
              <Text className="Hfsize">Graphic Design Contract FAQs</Text>
              <Text className="subH">
                How much should a graphic designer charge?
              </Text>
              <p id="para">
                What you charge can depend on a whole range of things, including
                experience, where you’re located, or the client hiring you.
                According to the U.S. Bureau of Labor Statistics (BLS), the
                average rate for a graphic design professional in 2020 was
                around $28 per hour. With the demand for graphic designers set
                to grow around 4% until 2026, you can be sure the average rate
                will follow suit.
              </p>
              <Text className="subH">
                Do I need a contract for a freelance graphic designer?
              </Text>
              <p id="para">
                Yes, of course! Freelance graphic design is a business and if
                you want to be taken seriously, then you’ll need a solid graphic
                design contract. If you plan on hiring more than one freelancer,
                you can make life much easier for yourself by using a graphic
                design contract template from Bonsai.
              </p>
              <Text className="subH">
                Where do I find a freelance graphic designer?
              </Text>
              <p id="para">
                There are plenty of resources you can use to find a freelance
                graphic designer. Posting a job description online, using a
                recruitment company, or even finding a freelancer on 99designs
                are just a few ways of finding the perfect designer to join your
                team.
              </p>
            </Box>
            <Box id="Examplegraphic">
              <Text className="Hfsize">
                Examples of graphic design contracts
              </Text>
              <p id="para">
                Of course, we believe Bonsai has the best graphic design
                contract template out there, but sometimes it helps to see some
                examples of existing graphic design contracts for inspiration.
                Let's take a look at some:
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/6202838701d967e68a5490ab_f5490317b5371e6ee534df24d5487260.jpeg"/>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/620283cf01d9675610549fcc_cf27a27c22f14018b7975f33d40fb3e2.jpeg"/>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/6202844c08d08c812ca157b2_c6a7d8340204d6b0faa606085942f116.jpeg"/>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62d94925a4a8bec870581e3c_freelance-design-contract-p-800.jpeg"/>
            </Box>
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

export default GraphicDesign;
