import React from "react";
import TopSection from "../../Components/TopSection";
import "../../Components/Article.css";
// import Navbar from "../../Navbar/Navbar";
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

function InfluncerAgreement() {
  const heading = "Free Influencer Contract Template";
  const desc = "with a bulletproof template & simple e-signing";
  return (
    <Box>
      {/* <Navbar/> */}

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
            h={{ md: "105vh", lg: "120vh", xl: "75vh", "2xl": "90vh" }}
            boxShadow="dark-lg"
            borderRadius={20}
            position={{ md: "sticky", lg: "sticky" }}
            top={10}
            textAlign="left"
            p="5"
          >
            <Heading fontSize={{ md: "1em", lg: "1em", "2xl": "1.5em" }}>
              Table of Contents{" "}
            </Heading>

            <Box pt="1.5rem">
              <List spacing={2} color="#00B98E" fontWeight={700}>
                <ListItem>
                  <a href="#IAwork">How do influencer agreements work?</a>
                </ListItem>
                <ListItem>
                  <a href="#includeSocialMedia">
                    What should a social media contract include?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#influencerMake">
                    How much does an influencer make?
                  </a>
                </ListItem>
                <a href="#IAgreement">What is an influencer agreement?</a>
                <ListItem>
                  <a href="#needICA">
                    Why do you need an influencer contract agreement?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#includeIMC">
                    What should be included in an influencer marketing contract?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#sampleICT">Sample influencer contract template</a>
                </ListItem>
                <ListItem>
                  <a href="#benefitIAB">
                    What is the benefit of using Bonsai, instead of editing a
                    template yourself?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#createIAB">
                    How to create a simple influencer agreement with Bonsai
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#ICfaq">Influencer contract FAQs‍‍</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto" p="1em 1em">
            <Box id="IAwork">
              <Text className="Hfsize">How do influencer agreements work?</Text>
              <p id="para">
                An influencer contract or agreement covers all the relevant
                details between an influencer and a brand. The contract outlines
                the relationship and provides details of the campaign.
              </p>
            </Box>
            <Box id="includeSocialMedia">
              <Text className="Hfsize">
                What should a social media contract include?
              </Text>
              <p id="para">
                A contract for social media services includes: statement of
                work, client responsibilities, creative control, deadlines,
                scope of work, copyright/intellectual property ownership.
              </p>
            </Box>
            <Box id="influencerMake">
              <Text className="Hfsize">How much does an influencer make?</Text>
              <p id="para">
                Depending on the size of the followers, an influence can make
                around $40,000 to $100,000. The most popular ones also does
                brand endorsements on a higer level and earn more.
              </p>
            </Box>
            <Box id="IAgreement">
              <Text className="Hfsize">What is an influencer agreement?</Text>
              <p id="para">
                An influencer contract template is a legally binding document
                between a contracted influencer and a business or person. An
                influencer contract covers all of the details for a specific
                campaign or an ongoing service of work.
              </p>
              <p id="para">
                This contract covers both parties, their rights, obligations,
                terms of service, and more. Typically, an influencer contract
                template will be tweaked for each influencer and business
                agreement that comes.
              </p>
              <p id="para">
                Note: Sign-up now for free to start creating your free
                influencer marketing contract. It has all the basic elements
                you’ll need to create a watertight, legally binding agreement.
              </p>
            </Box>
            <Box id="needICA">
              <Text className="Hfsize">
                Why do you need an influencer contract agreement?
              </Text>
              <p id="para">
                An influencer contract agreement is vital for both the
                influencer and the business to manage expectations, obligations,
                and to work together harmoniously. The legal documentation of
                the agreement puts everyone at ease.
              </p>
              <p id="para">
                Influencer marketing is predicted to grow to $13.8 billion in
                2021, and 90% of businesses believe influencer marketing is
                effective. With Instagram, YouTube, and recently TikTok taking
                the lead as the most popular channels for influencer marketing.
              </p>
              <p id="para">
                With this drastic growth in influencer marketing, it’s critical
                you start all working relationships with a contract. Your
                influencer collaboration is no longer a nice-to-have for a
                business, it’s a must-have. This means businesses have a budget,
                workflow, and KPIs for their partnership. Seal the deal from the
                get-go with a contract, and create the professional working
                relationship you deserve.
              </p>
              <p id="para">
                No matter your niche, businesses are looking to include
                influencer marketing as a branch of their content marketing
                strategy if they're serious about growth. It’s predicted that
                brands will spend $15 billion on Influencer marketing by 2022—be
                it social media influencers or other types.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/6131366ae91ba23fa45b5106_instagram%20influencer.jpg" />
              <p id="para">
                Working with influencers today—like with any other marketing
                contract agreement—needs to be supported with a customized legal
                document.
              </p>
            </Box>
            <Box id="includeIMC">
              <Text className="Hfsize">
                What should be included in an influencer marketing contract?
              </Text>
              <p id="para">
                There are a few things that every influencer contract template
                needs to include. Of course, your template will need to adapt
                for each unique business and influencer relationship. Your
                contract may also change for the same brand, depending on the
                influencer marketing campaign you take on.
              </p>
              <p id="para">
                Let's cover the basics that both parties involved need to
                document.
              </p>
              <Text className="subH">
                Detailed descriptions of the work and content requirements
              </Text>
              <p id="para">
                Your social media influencer contract should kick things off
                with the scope of work and content requirements expected from
                both parties. A roadmap of the workflow is good here, so both
                parties can agree on the content to be created and the approval
                process for the influencer's content.
              </p>
              <p id="para">
                This clear work description avoids scope creep for the
                influencer and ensures all parties are on the same page.
              </p>
              <Text className="subH">
                Social media platforms and posting frequency
              </Text>
              <p id="para">
                Your influencer marketing agreement should outline the
                influencer's social media channels the campaign wants to
                utilize. It should also highlight any of the brand's channels
                that will support the campaign.
              </p>
              <p id="para">
                This part of the legally binding contract should also outline
                how often both parties will post, on which channels, and in what
                format. For example, posting an Instagram story three times a
                day is very different from three Instagram feed posts for your
                audience.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/613137791464b319698fd742_ariellesays%20instagram%20stories.jpg" />
              <Text className="subH">
                Social media influencer agreement and exclusivity
              </Text>
              <p id="para">
                Exclusivity is really important if you're working with many
                brands. Often influencers charge more if the brand wants an
                exclusivity clause in the influencer contract.
              </p>
              <p id="para">
                The advertiser and influencer need to agree on exclusivity, as
                well as how long this exclusivity lasts.
              </p>
              <p id="para">
                For example, there's a high chance you won't want to promise
                exclusivity for life. However, for the campaign’s duration and a
                small amount of time afterward is usually common in influencer
                marketing agreements.
              </p>
              <p id="para">Exclusivity is important for these reasons:</p>
              <li className="liP">You have no conflict of interest</li>
              <li className="liP">
                Potential customers don’t see competing brands
              </li>
              <li className="liP">
                You maintain a healthy business relationship with the brand
                throughout the campaign and beyond
              </li>
              <Text className="subH">Payment details</Text>
              <p id="para">
                Your influencer contract needs to cover all areas of the payment
                details. It's critical for managing expectations and maintaining
                a positive working relationship with businesses. The payment
                details to include are:
              </p>
              <li className="liP">
                Terms of pay: per hour, per project, or post
              </li>
              <li className="liP">
                Payment schedule: how and when you can expect payment
              </li>
              <li className="liP">
                Total pay: how much, in total, the brand will pay the influencer
              </li>
              <li className="liP">
                Payment details: any information you need for your social media
                invoice
              </li>
              <Text className="subH">Timeline of the campaign</Text>
              <p id="para">
                Your social media influencer contract or influencer contract
                should cover all details around the timeline of the influencer
                campaign. This section should include the timeline of campaign
                events and the behind-the-scenes run-up period to the campaign.
                For example, the content creation and approval process period.
              </p>
              <p id="para">
                Lastly, your timeline should also include the reporting period
                after the live dates of the campaign. Ensure you give yourself
                enough time to get full traction on content posts.
              </p>
              <Text className="subH">Requirements and delays</Text>
              <p id="para">
                Every social media influencer contract should include what the
                client expects. This will typically be the number of posts, the
                channels you're posting on, and any key dates for posting.
              </p>
              <p id="para">
                This section of the contract should also include the
                repercussions of delays or if requirements are not met.
              </p>
              <p id="para">
                Your contract does not need to be a representation of your work
                or content. It’s a business document, so don’t worry about
                attaching bells and whistles. Take a look at our contract
                template below for an idea of the layout and presentation.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/613134854b45775e5e634c5e_qH-CcsIIkthu28BePy6LcSdJ2UXKVXw5im5xSceJGwtW3Dp38ctoIfk56TaR2IZkUaeM3Y04WgVdvDOTfA6BUWqa13Lk3PablnthQmzSYOyhiJMI4gbeGPDT8hwm8xN58KeKV2Xi%3Ds0.jpeg" />
              <Text className="subH">Liabilities and social media rights</Text>
              <p id="para">
                Influencer marketing has changed a lot over recent years. The US
                Federal Trade Commission (FTC) now requires influencers to
                openly disclose if they are receiving payment to promote a brand
                or not.
              </p>
              <p id="para">
                The US governing law now states that if an influencer fails to
                disclose this information, both parties can face penalties,
                fines, and legal action.
              </p>
              <p id="para">
                This section of your influencer contract is also a good moment
                to highlight a non-disclosure agreement (NDA) if your agreement
                needs one.
              </p>
              <Text className="subH">
                Cancellation clause and termination of the contract
              </Text>
              <p id="para">
                Every influencer contract needs a cancellation clause, as is the
                case with any legal contract. An influencer agreement can be
                canceled for many reasons, which should all be outlined in this
                section.
              </p>
              <p id="para">A few reasons for canceling an influencer agreement are:</p>
              <li className="liP">
                The brand or influencer fails to meet the requirements
              </li>
              <li className="liP">
                The influencer agreement is potentially damaging to the brand or
                vice versa
              </li>
              <li className="liP">
                Either party maliciously breaks the contract
              </li>
              <li className="liP">
                Exceptional (personal) circumstances which stop you from
                completing the terms of the contract
              </li>
              <p id="para">
                Remember, influencer contracts are there to support both
                parties.
              </p>
              <Text className="subH">Other factors</Text>
              <p id="para">
                Influencer marketing may require your agreement to cover a few
                more areas to ensure its success.
              </p>
              <p id="para">
                Your influencer contract should include any access to tools like
                Google Analytics or the brand’s social media reporting tools,
                liability for responsiveness, and any free or reduced products
                or services the brand is providing as part of the agreement.
              </p>
              <p id="para">
                That's everything you need to know to create an influencer
                marketing contract that covers both parties’ best interests.
              </p>
            </Box>
            <Box id="sampleICT">
              <Text className="Hfsize">
                Sample influencer contract template
              </Text>
              <p id="para">
                We've put together an influencer contract template that you can
                download for free and adapt to your needs.
              </p>
              <p id="para">
                This influencer contract covers the legal language you need to
                ensure it holds up in court—should you need it to. Plus, it will
                help you establish a healthy business relationship with every
                brand you work with.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61313847ded3510dfedb474f_neffyfrofro%20Instagram%20influencer.jpg" />
            </Box>
            <Box id="benefitIAB">
              <Text className="Hfsize">
                What is the benefit of using Bonsai, instead of editing a
                template yourself?
              </Text>
              <p id="para">
                The Bonsai influencer contract is legally vetted, meaning if
                either party needs to pursue legal action, they'll be able to do
                so with an abiding agreement.
              </p>
              <p id="para">
                Plus, the influencer marketing agreement here has done the heavy
                lifting for you, all you need to do is fill in the gaps with
                your specific account and campaign details. Whether you're a
                social media influencer or another type —this will work for you.
              </p>
            </Box>
            <Box id="createIAB">
              <Text className="Hfsize">
                How to create a simple influencer agreement with Bonsai
              </Text>
              <p id="para">
                Simple, either download this template and use our auto-fill
                feature to fill in the blanks for you. Or, create your template
                from scratch and use Bonsai to ensure it’s legally binding for
                your agreement.
              </p>
            </Box>
            <Box id="ICfaq">
              <Text className="Hfsize">Influencer contract FAQs‍‍</Text>
              <Text className="subH">
                ‍How much do influencers charge per post?
              </Text>
              <p id="para">
                Influencer costs per post depend massively on their following,
                the time it takes to create the content, the type of post, and
                the brand they are working with. Influencers can charge anything
                from $100 per post to $1,015,000 per post (Dwayne Johnson—the
                most expensive influencer on Instagram).
              </p>
              <Text className="subH">
                How many followers do you need to be an influencer?
              </Text>
              <p id="para">
                There are different tiers of social media influencers, depending
                on their amount of followers. Essentially, anyone can be an
                influencer on social media if they're creating content and
                influencing people around a particular niche. Followers range
                from 0-10k: Nano influencers, all the way through to 1M+: Mega
                Macro influencers.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62d949b2aa469d3d25709b69_social-media-influencer-agreement-p-800.jpeg" />
            </Box>
          </Box>
        </Grid>
      </Box>
      <SignupTemplate />
      <RelatedTemplates />
      <Box m="auto" textAlign="center"  bg="blackAlpha.900" w="100%" pt={20} sm={{h:"100vh"}}>
        <Box>
          <Footer />

        </Box>
      </Box>
    </Box>
  );
}

export default InfluncerAgreement;
