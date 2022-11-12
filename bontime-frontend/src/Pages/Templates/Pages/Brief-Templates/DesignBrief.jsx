import React from "react";
import SignupTemplate from "../../Components/SignupTemplate";
import RelatedTemplates from "../../Components/RelatedTemplates";
import Footer from "../../../../components/Footer/Footer";
import TopSection from "../../Components/TopSection";
import "../../Components/Article.css";
import NavLogo from "../../Components/NavLogo";

import {
  Box,
  Heading,
  Image,
  List,
  ListItem,
  Text,
  Grid,
} from "@chakra-ui/react";

function DesignBrief() {
  const heading = "Free Design Brief (with Generator)";
  const desc = "with estimates, read receipt notifications, e-approval and deposits";
  return (
    <>
      <NavLogo/>

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
            h={{ md: "50vh", lg: "50vh", xl: "40vh", "2xl": "55vh" }}
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
                  <a href="#DesignBrief">What is a Design Brief?</a>
                </ListItem>
                <ListItem>
                  <a href="#includeDBrief">
                    What to Include in the Design Brief
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#creativePBrief">
                    How To Write a Design Brief for a Creative Project
                  </a>
                </ListItem>
                <a href="#sampleB">
                  Creating a Design Brief is Simple with Bonsai
                </a>
                <ListItem>
                  <a href="#DesignBfaq">Design Brief Generator FAQs</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto"  p="1em 1em">
            <Box id="DesignBrief">
              <Text className="Hfsize">What is a Design Brief?</Text>
              <p id="para">
                A design brief is a document that’s created for a design
                project. Whether one person or a team develops the brief, it’s
                the communication between the freelancer and the client.
              </p>
              <p id="para">The creative brief will usually outline:</p>
              <li className="liP">All project deliverables</li>
              <li className="liP">Project scope of work</li>
              <li className="liP">Budget required</li>
              <li className="liP">Project timeline</li>
              <li className="liP">Extra resources needed</li>
              <p id="para">
                Most design projects will often have a lot of moving parts and
                companies need clarity and structure—which a creative brief can
                offer.
              </p>
              <p id="para">
                Note: Bonsai’s design brief generator offers all the tips and
                tools required to draft up the perfect proposal. Sign up today
                to experience what this tool has to offer.
              </p>
            </Box>
            <Box id="includeDBrief">
              <Text className="Hfsize">
                What to Include in the Design Brief
              </Text>
              <p id="para">
                There are a number of key elements to include in a design brief
                to get over the finish line and secure your dream client.
                Without these important elements, you’re likely to miss the mark
                and leave the client with more questions than answers.
              </p>
              <Text className="subH">
                Here are just a few things to include in your design brief:
              </Text>
              <li className="liP">
                Tell the client why they should choose you over other designers
              </li>
              <li className="liP">
                Find out what problems the client experiences, how you can solve
                them, and accurately design for their target audience
              </li>
              <li className="liP">
                Cover the scope of the project—leaving no stone unturned
              </li>
              <li className="liP">
                Set specific goals and determine the outcome of the design
                project
              </li>
              <li className="liP">
                Finish with an executive summary that outlines all the essential
                points within the brief
              </li>
              <p id="para">
                You may be thinking that a brief should always come from the
                client. However, clients are time-poor. They know they need your
                help, but they may not even be in a position to recruit it
                because of their own workload. If this is the case, it’s down to
                you—the designer—to put a brief together and give everyone a
                clear overview of the project at hand.
              </p>
            </Box>
            <Box id="creativePBrief">
              <Text className="Hfsize">
                How To Write a Design Brief for a Creative Project
              </Text>
              <p id="para">
                A winning proposal and design brief consider the bigger
                picture—beyond just the design project itself. After all, you’re
                probably not the only one pitching to this client; there are 57
                million freelance workers in the US alone! It’s essential you’re
                hitting every selling point to convince your potential client of
                your abilities and vision for the business.
              </p>
              <Text className="subH">
                Find out exactly what the client wants
              </Text>
              <p id="para">
                Research on the client’s background and the business
                requirements is a great way to score marks with your creative
                brief.
              </p>
              <p id="para">
                To begin with, you may want to incorporate some of your own
                knowledge about their company, their brand identity, and their
                values.
              </p>
              <p id="para">
                Next, you can follow up with the scope of the project and what’s
                required in order to resolve those pinch points. This offers a
                custom experience for your client, so they know your creative
                project has been tailored directly to their business needs.
              </p>
              <p id="para">
                Bonsai Top Tip: Including contact information for the
                individuals you’re pitching to is also handy.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61d87e9eba7d8a02c34a45a3_4kwaSyVCSiYOPHraZOjSwLptl-5Fkoof307CJiIxQMlnYGnXAeES8BI1JIaqeuVGehmmubgStgG_yU3VVtoFPkh1bk9fjbtI6Xba0Vv5IczQ6h_nRaYcEAdSZyCIuF8jYJ4PF2ld.png" />
              <Text className="subH">Highlight what sets you apart</Text>
              <p id="para">
                As a freelancer, you’re selling yourself and your talents, so
                don’t hold back. Highlight what skills and personal traits set
                you apart from the rest of the freelance designers. How are your
                experience and knowledge the best for the project on the table?
              </p>
              <p id="para">
                When explaining these points, make sure they tie back in with
                the client’s wants and needs. That way, you’re showing them that
                you can deliver on every requirement.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61d87e9e4898a5c28dc1ea85_lY92Ww-2kVnVz1_eb2mMGuzIxwzy4dewZ_fhfmxZfCWV3XU7eS3odRXdC2Jxy62ZuLwgxEBh2BdSib7XkHDMHXy3_yAVgibH4OBYw4ZT1eLb4YrhXn0NoOIaC9yzpOq4PAfwqgW5.png" />
              <Text className="subH">
                Detail your deliverables and requirements in your creative brief
              </Text>
              <p id="para">
                Talking of requirements, a creative brief benefits from detail.
                Be detailed with your deliverables and what you require for the
                design project itself.
              </p>
              <p id="para">
                Make sure the budget is accurate and that you’ve considered all
                the aspects of the design process. You can’t always be 100%
                accurate, but try to be as close to the mark as possible.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61d87e9e2106726986151808_lbRN2iFFlO8_TwFV-26AYUy9zXOnWCfl6x1GgJMf8tAsPkhrgh1iKdL_3D_ARFWTkb9L8dXhoiZ-W88zHNNXBM8HSGY0EFLdPUgKTjD2xP2o052oSmhR6kiICElsaRx9oJt8DOVe.png" />
            </Box>
            <Box id="sampleB">
              <Text className="Hfsize">
                Creating a Design Brief is Simple with Bonsai
              </Text>
              <p id="para">
                When it comes to creative projects, a creative brief can be hard
                to draft up if you’ve never done so before. You may just be
                starting out your freelance career and have yet to reach out to
                a brand or company about a collaboration. Or, you’re simply
                swamped and haven’t had a minute to focus on this area of your
                business yet.
              </p>
              <p id="para">
                Using Bonsai stops you from having to go at it alone. What are
                the benefits of using Bonsai? Let’s take a look.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61d87e9ea1df3ed14db758be_g7eAn_WDnFvwgYxhejifBZYXaEcEVMVuAnq3Vg01iZ4KdtFB8W1EP1YGyzDu48dcIr5d1hmruRPxaHSG_rS9ZPtCpjAElvPImu_5Yvj-5Fo90YTfGYLLwpfdWtoOr_5G4elP9mPu.png" />
              <Text className="subH">
                Covers all types of creative projects
              </Text>
              <p id="para">
                Whether you’re working in the fashion design industry or you’re
                in design marketing, Bonsai is your guiding light to ensuring
                you deliver a stellar brief every time. The design brief
                generator covers all types of projects to tailor to the
                specifics of the industry you’re in and who you’re pitching to.
              </p>

              <Text className="subH">Easy to understand and navigate</Text>
              <p id="para">
                Not everyone is as clued up on how to use online tools and
                platforms, and that’s okay!. Bonsai is simple to navigate and
                has a handy search bar if you can’t immediately see what you’re
                looking for.
              </p>
              <Text className="subH">Makes you look more professional</Text>
              <p id="para">
                Creating the best project brief possible is going to help you
                secure that next client. Bonsai can help add professionalism to
                your pitches you didn’t know you had.
              </p>
              <p id="para">
                Sign up to Bonsai today and start using the free creative design
                brief generator to kick your next project off on the right foot.
              </p>
            </Box>
            <Box id="DesignBfaq">
              <Text className="Hfsize">Design Brief Generator FAQs</Text>
              <Text className="subH">
                Who is the design brief generator for?
              </Text>{" "}
              <p id="para">
                Busy design freelancers who are in need of templates for
                proposals, contracts, and invoices. The design brief generator
                is great for those in all areas of design, from graphic design
                to architecture, and even for smaller design agencies who may be
                limited in their resources.
              </p>
              <Text className="subH">
                What features are available in the free plan?
              </Text>{" "}
              <p id="para">
                With the free version of Bonsai, you can create multiple
                projects, whether it’s contracts you need, to design briefs, or
                invoicing. There are hundreds of templates available to choose
                from that can inspire and influence your own ideas and help
                secure business for your freelance career.
              </p>
              <Text className="subH">
                Is it worth adding branding to your design brief?
              </Text>{" "}
              <p id="para">
                Yes! As a freelancer, you’re the business, and so it’s useful to
                create brand assets that will become recognizable by clients
                both old and new. Make sure you showcase your brand in your
                design brief and stay at the top of your client’s minds.
              </p>
            </Box>
          </Box>
        </Grid>
      </Box>
      <SignupTemplate/>
      <RelatedTemplates/>
      <Box m="auto"   bg="blackAlpha.900" w="100%" pt={10} sm={{h:"100vh"}}>
        <Box ml={20}>
          <Footer />

        </Box>
      </Box>
    </>
  );
}

export default DesignBrief;
