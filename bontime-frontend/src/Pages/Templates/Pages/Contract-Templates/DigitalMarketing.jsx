import React from "react";
import TopSection from "../../Components/TopSection";
import "../../Components/Article.css";
import {
  Box,
  Container,
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

function DigitalMarketing() {
  const heading = "Free Digital Marketing Contract Template";
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
            h={{ md: "110vh", lg: "120vh", xl: "75vh", "2xl": "90vh" }}
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
                  <a href="#digitalMarketing">
                    How do you write a contract for digital marketing?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#digiAgreement">
                    What is a digital marketing agreement?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#marketCharge">
                    How much do freelance marketers charge?
                  </a>
                </ListItem>
                <a href="#marketingContract">
                  What Is a Digital Marketing Contract?‍
                </a>
                <ListItem>
                  <a href="#needDigitalM">
                    Why You Need a Contract for Digital Marketing‍
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#marketingContract">
                    What Should Be Included in a Digital Marketing Contract?‍
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#digiContractSample">
                    Digital Marketing Contract Sample‍
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#BenefitBonsaiT">
                    What’s the Benefit of Using Bonsai, Instead of Editing a
                    Template Yourself?‍
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#digiContractB">
                    How to Create a Digital Marketing Contract With Bonsai?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#digifaq">Digital Marketing Contract FAQs</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto"  p="1em 1em">
            <Box id="digitalMarketing">
              <Text className="Hfsize">
                How do you write a contract for digital marketing?
              </Text>
              <p id="para">
                Start by including a statement of work, project overview, terms
                of service, cost, specific clauses about the agreement, late
                fees and milestone payments. You could also try Bonsai's
                contract templates and easily customize each field.
              </p>
            </Box>
            <Box id="digiAgreement">
              <Text className="Hfsize">
                What is a digital marketing agreement?
              </Text>
              <p id="para">
                A marketing contract specifies an agreement on a specific
                transaction or service must be reached. It lays forth in detail
                the duties that must be performed, the cost, and other
                conditions that must be met by the parties.
              </p>
            </Box>
            <Box id="marketCharge">
              <Text className="Hfsize">
                How much do freelance marketers charge?
              </Text>
              <p id="para">
                Many freelancers charge an hourly rate between $50-$200
                depending on their experiences and skills. A freelancers
                reputation often influences their rate.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/605340e468cbeccccbb9491f_Digital%20Marketing%20Contract%20Template-1-2-2.jpg" />
            </Box>
            <Box id="marketingContract">
              <Text className="Hfsize">
                What Is a Digital Marketing Contract?‍
              </Text>
              <p id="para">
                A digital marketing contract is a legally binding agreement
                between you, the marketer, and your client. It outlines the
                responsibilities of both parties while protecting the rights of
                each person. It is a finalized legal agreement between the
                client and a freelancer.
              </p>
              <p id="para">
                We all know digital marketing is a broad profession, you can
                specialize in anything from websites, branding, advertising,
                social media, or any other marketing service. Whatever the title
                is that you hold, every digital marketer needs a contract.
              </p>
              <p id="para">
                If you offer a broad range of digital marketing services, or
                maybe you're starting a digital marketing agency, it’s a good
                idea to get yourself a contract template. This way you’ll be
                able to easily edit what services you’re providing to the client
                while keeping your fundamentals protected.
              </p>
              <p id="para">
                All in all, a digital marketing agreement is your safeguard
                towards doing a job well and within your expected boundaries. ‍
              </p>
              <p id="para">
                Note: Sign-up now for free to start editing your digital
                marketing contract template. It’s super easy to create, download
                and send, plus it’s been written and reviewed by top lawyers.
              </p>
            </Box>
            <Box id="needDigitalM">
              <Text className="Hfsize">
                Why You Need a Contract for Digital Marketing‍
              </Text>
              <p id="para">
                Along with it protecting your rights and interests, you’ll be
                able to set out all your key responsibilities within the
                contract. This will make sure that you’re not expected to pick
                up tasks that lie outside your specialty, causing you to
                underperform or undercharge. This is especially important when
                you work as a freelancer or independent contractor, rather than
                a full-time employee.
              </p>
              <p id="para">
                There are plenty of specifics that go into a digital marketing
                agreement that you may not be aware of at first. It will outline
                the responsibilities of you and the client, what the scope of
                work is, liability and dispute resolutions, intellectual
                property rights, access to confidential information, termination
                criteria, and much more.
              </p>
              <p id="para">
                Imagine just having a handshake agreement for all these terms
                and conditions! A contract will cover everything you need to do
                the job right, and protect you if there are any mishaps.
              </p>
            </Box>
            <Box id="marketingContract">
              <Text className="Hfsize">
                What Should Be Included in a Digital Marketing Contract?‍
              </Text>
              <p id="para">
                If you offer digital marketing services to your clients, you
                need a solid agreement in place. But what should it include?
                Well, campaign-specific goals, objectives, milestones and
                metrics need to be clarified, and client expectations need to be
                managed. Without a contract to enforce this, things could get
                messy and fast.
              </p>
              <p id="para">
                So, here’s what you should include in your next digital
                marketing contract template to keep everyone happy and your
                project on track:
              </p>
              <Text className="subH">Detailed descriptions of the work</Text>

              <p id="para">
                As with any marketing agreement, you need to be crystal clear
                about who the contract is between and the nature of the
                relationship. This helps to clarify the roles, responsibilities,
                and obligations of both parties involved. This means outlining
                what the job will entail, and basically what it is that you’re
                going to achieve. For example, in the digital marketing proposal
                template, you include that you'll handle the analysis of the
                competitive environment, you'll include that in the description
                or contract.
              </p>
              <p id="para">
                The cornerstone of every good digital marketing agreement is
                being specific about the subject matter. You should also name
                who’s responsible for delivering you the info to complete each
                task and project, and when you need it.
              </p>
              <Text className="subH">Timeline for deliverables</Text>
              <p id="para">
                ‍After you detail all your digital marketing services, you need
                to outline the project scope.
              </p>
              <p id="para">
                Use numbers and dates when talking about volume, timeframes,
                drafts, or iterations—otherwise, the scope could be open to
                interpretation and lead to friction or impact your ability to
                achieve your stated goals. It’s good to be as detailed as
                possible here—you don’t want a “scope creep” situation where
                your client keeps changing the project or adding on more work
                which means you won’t hit your targets or meet deadlines.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f802ad5f71465c9801d55c_Schedule-02-01.png" />
              <Text className="subH">‍Payment details</Text>
              <p id="para">
                This section will make or break a contract for many freelancers.
                You and your client need to agree on your payment terms, more
                specifically, how much and when you’ll be paid.
              </p>
              <p id="para">
                Most digital marketers will charge per hour or use a quotation
                template to charge a total amount based on the services
                provided. If you’re working on a long-term marketing campaign,
                you may wish to set up milestone or performance-related
                payments. These would be contingent on the delivery of certain
                milestones and have a monetary increase over time due to good
                performance.
              </p>
              <p id="para">
                However you want to structure your payment schedule, remember to
                use an invoice to get an upfront deposit before the work begins,
                discuss expenses and compensation, and agree to a timeframe for
                paying the invoices and any late fees that may occur.
              </p>
              <Text className="subH">
                Copyright and IP (intellectual property)
              </Text>
              <p id="para">
                Some digital marketers will be creating the content themselves,
                so it’s a good idea to put in a clause around copyright and
                intellectual property rights. This will cover what the client
                owns, how intellectual property will be handled, as well as any
                permissions that are given to use the final product in your
                portfolio.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f8054f75791896e198242d_8VqTqKTI3OgqHmcs9m6dyNUEkDLMNf6-3etrNCh1ZySqWF2UEyRICVYxAbhMTMlMIaB92V4boQnk3d4VJvKRnyBGDZ0niJqtCuMpWuD_yiEh4Wz4cigUe4MgajF1wUSaG-XgBL_r.png" />
              <Text className="subH">Confidentiality</Text>
              <p id="para">
                Both parties will have to agree on the handling of confidential
                information. Confidentiality is important to protect your
                personal information (as well as the client’s customers) and
                company trade secrets. Setting up a non-disclosure agreement and
                non-compete clause will cover both party's rights and interests
                in this area.
              </p>
              <Text className="subH">Termination of contract</Text>
              <p id="para">
                Every digital marketing agreement will include a section for
                terminating the contract. This is usually on a specific date or
                once a project is completed, but it’s also good to outline any
                other reasons why a contract can be terminated earlier.
              </p>
              <Text className="subH">Other factors</Text>
              <p id="para">
                If you’re taking over your client’s social media accounts, using
                tools, or analyzing data, you’ll need them to grant you access.
                This can include their Google Analytics account or any other
                third-party software they may use.
              </p>
            </Box>
            <Box id="digiContractSample">
              <Text className="Hfsize">Digital Marketing Contract Sample‍</Text>
              <p id="para">
                We know many digital marketers need to visualize, so sign up now
                to Bonsai for free and see a sample of our digital marketing
                contract template. This is how the pros do it.
              </p>
            </Box>
            <Box id="BenefitBonsaiT">
              <Text className="Hfsize">
                What’s the Benefit of Using Bonsai, Instead of Editing a
                Template Yourself?‍
              </Text>
              <p id="para">
                When you create and edit your own template, you run the risk of
                missing out on important clauses that can affect your rights and
                the validity of the contract. Bonsai’s contract template is
                vetted by legal experts and hundreds of other freelancers, so
                you can be sure all the necessary information is covered.
              </p>
            </Box>
            <Box id="digiContractB">
              <Text className="Hfsize">
                How to Create a Digital Marketing Contract With Bonsai?
              </Text>
              <p id="para">
                Here are a few simple steps to follow for creating your own
                legally sound contract:
              </p>
              <li className="liP">Select your template</li>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f80598049913f24661ccda_ZsmP8u6vKuNEW5lSGCJswLcV8ovu1A8AecrbxoNSLN8HzsKCKKuOgbRBGqBK8P2HVACv-SeHIaBV6ikdB0O7xzahaonLI9KU3nif1t8tv6QWM_P5Gm41C2vqzfFXu1gY7ptoRkaG.png" />
              <li className="liP">Add your basic info</li>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f805b8b7ca722431e0222c_bVKoRsCDZcTZto53G_PhL4W037DUFhIGcb670azKLYJqf2d4gtc5wPN9BFR20V0WyKxi3q52NGmXvuSFb4d7HVYJupicb2SOYgR2yoTRR0IAgihIE1U5NzvYQjxMD2EyzwGQ9w6u.png" />
              <li className="liP">Add your scope of work</li>
              <li className="liP">Add your payment terms and info</li>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f805fe24169ada36145318_3NKp8jrD6soKwaugMRHHRS_OSUMbK9VRM2mwj0vWc9cXzlCMo_3WQjGOJiKKR1SPEPcSc2KXOpMqmWU3R06SnKrt4DZ1nDFwdwPxJX--FfSyVh6T2Mxvw1SbxKFBM9qpYCVQ84qQ.png" />
              <li className="liP">Review and sign your final contract</li>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f8064a81b1d6f4d1ecfefb_hiC5p1zd_VlyXL5PwEOQjk0H_I6wHH082s63051xK8VWAhiZJQsxUOEqAf2q6d8JBUOiK1eR4akSlqLjh3k0C7Ogz-3eWcP8a8qvOTM9-4vHePyZceOfmXjjThKykVDhlCr11UmD.png" />
              <p id="para">
                After that, you've got yourself a fully fleshed-out and vetted
                digital marketing agreement. If you want to make any edits to
                the template, you can do so before sending it to your client.
              </p>
              <p id="para">
                It’s really that simple! You can also keep track of all your
                contracts and templates from your Freelance Dashboard.
              </p>
            </Box>
            <Box id="digifaq">
              <Text className="Hfsize">Digital Marketing Contract FAQs</Text>
              <Text className="subH">
                How much should a digital marketing freelancer charge?
              </Text>
              <p id="para">
                As of 2021, digital marketers in the U.S usually charge between
                $50-$200 per hour. That’s a huge difference!
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61f806f0fbce1f01decb9cf8_nDbzK2xU28QNJ4x7oZ45FKrnz99lufUUHu29zM__zpAUNtAamwWbNOh9R-1hWMSmAKgCuxPOTPMxFi4lmJvYd48ai01xeIm17v3EZ_DNZ8VlOAsrUCb0rfKFV9D4IE2zMpEacIFB.png" />
              <p id="para">
                But it makes sense too. Besides experience, there are so many
                different marketing services you can offer a client. All of
                these can be dependent on the level of specialty needed, as well
                as what state or country you’re in, and even the company or
                client involved.
              </p>
              <Text className="subH">
                Do I need a contract for a freelance marketer?
              </Text>
              <p id="para">
                The overall marketing industry is predicted to grow 10% by 2026,
                which means freelance jobs are likely to increase too. So, if
                you want security, legal protection, and clarity on the
                responsibilities of the different jobs you'll be getting—you
                need a contract. An agreement of this type is almost always
                beneficial, and by using a marketing contract template, you
                don’t have to spend a lot of time on it either.
              </p>
              <Text className="subH">
                What if I want to renew the marketing contract?
              </Text>

              <p id="para">
                Renewing a contract will depend on performance satisfaction,
                project scope, or whether you're using clever techniques to get
                an extension. This is something both parties will need to
                discuss in advance of the contract’s termination date.
              </p>
              <p id="para">
                Fortunately, when you use Bonsai you can make this service
                totally automated. Once you have an account, you can set up
                automatic reminders for your client to renew the contract. Once
                they’ve agreed and signed, you’ll both receive an updated
                version of the marketing agreement. It’s that simple.
              </p>
            </Box>
            <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62d949412d3424d4fbc21821_digital-marketing-contract-template-p-800.jpeg"/>
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

export default DigitalMarketing;
