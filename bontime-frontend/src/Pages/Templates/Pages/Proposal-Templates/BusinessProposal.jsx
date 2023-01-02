import React from "react";
import TopSection from "../../Components/TopSection";
import style from "../../Components/Article.module.css";

import NavLogo from "../../Components/NavLogo";

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

function BusinessProposal() {
  const heading = "Free Business Proposal Template";
  const desc =
    "with estimates, read receipt notifications, e-approval and deposits";

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
            h={{ md: "100vh", lg: "100vh", xl: "65vh", "2xl": "75vh" }}
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
                  <a href="#formatProposal">
                    What is the format of a proposal?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#pagesProposal">
                    How many pages is a business proposal?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#typeBProposal">
                    What are the 4 types of business plans?
                  </a>
                </ListItem>
                <a href="#aboutBProposal">
                  Everything you Need to Know About your Business Proposal
                  Template
                </a>
                <ListItem>
                  <a href="#BProposalT">
                    What is a Business Proposal Template?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#includeBProposal">
                    What to Include in the Business Proposal Template
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#writeBProposal">
                    How to Write a Business Proposal Template
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#createBProposalT">
                    Creating Business Proposal Templates is Simple with Bonsai
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#BProposalfaq">Business Proposal template FAQs</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto" p="1em 1em">
            <Box id="formatProposal">
              <Text className={style.Hfsize}>What is the format of a proposal?</Text>
              <p id={style.para}>
                The general structure of a proposal consists of: concise
                description of the issue, the solution, the fee, and the
                benefits the client would receive. Use Bonsai's pre-made
                templates as a reference for a business proposal.
              </p>
            </Box>
            <Box id="pagesProposal">
              <Text className={style.Hfsize}>
                How many pages is a business proposal?
              </Text>
              <p id={style.para}>
                Generally, it shouldn't be no longer than 15 to 20 pages. Keep
                it brief and direct. Your business plan should be concise and
                easy to understand regardless of who you are writing it for.
              </p>
            </Box>
            <Box id="typeBProposal">
              <Text className={style.Hfsize}>
                What are the 4 types of business plans?
              </Text>
              <p id={style.para}>
                The 4 types of business plans are: very short plans or
                'mini-plans', presentation plans or decks, working plans, and
                what-if plans.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/60798aa6946488f4e41a394d_Business%20Proposal%20Template-1.jpg" />
            </Box>
            <Box id="aboutBProposal">
              <Text className={style.Hfsize}>
                Everything you Need to Know About your Business Proposal
                Template
              </Text>
              <p id={style.para}>
                In the freelance world, business proposals are greetings cards
                and business cards wrapped into one. They’re a firm hello for a
                potential client that showcases what you can do and why your
                client should go for your proposal over everyone else’s.
              </p>
              <p id={style.para}>
                In this article, we’ll guide you through everything you need to
                know when putting together your next business proposal. We’ll
                cover everything from what to include in your proposal template
                and some best practices for writing a winning business proposal.
              </p>
              <p id={style.para}>
                We’ll close out with a free template you can use for future
                proposals and some frequently asked questions on the topic.
              </p>
              <p id={style.para}>
                Let’s get into the details of your business proposal and get you
                winning that client!
              </p>
            </Box>
            <Box id="BProposalT">
              <Text className={style.Hfsize}>
                What is a Business Proposal Template?
              </Text>
              <p id={style.para}>
                A business proposal is a formal document that introduces and
                outlines who you are, what you do, and what that can do for your
                potential client.
              </p>
              <p id={style.para}>
                A business proposal template is your go-to skeleton structure
                for all future business proposals. It includes all of your
                business essentials you can rinse and repeat and leaves you
                space to adapt the template as per each client and their needs.
              </p>
              <p id={style.para}>
                But, what do you need to keep in your business proposal
                template? We’re pleased you asked. Read on.
              </p>
              <p id={style.para}>
                Note: If you’re looking to up your business game and start
                delivering on the fundamentals quicker than ever before, sign up
                for Bonsai for free and get instant access to everything you
                need.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cdb16cbd132d5e524b2856_working%20woman.jpg" />
            </Box>
            <Box id="includeBProposal">
              <Text className={style.Hfsize}>
                What to Include in the Business Proposal Template
              </Text>
              <p id={style.para}>
                Every business proposal is different. However, there’s a lot of
                information about your business and skillsets that can be
                reused. The good thing about a business proposal is that it’s
                not a publicly available document, it doesn’t affect your
                business’s SEO, and the only people who see it are those you
                send it to.
              </p>
              <p id={style.para}>
                This means you can keep a relatively large amount of information
                the same and leave yourself space to make any tweaks. Just don’t
                forget to do them! There’s nothing worse than receiving a
                proposal and seeing another company’s name halfway through the
                document.
              </p>
              <p id={style.para}>Here’s what you need to include:</p>
              <Text className={style.subH}>Cover page</Text>
              <p id={style.para}>
                Say hello with a bang using a cover page your client will
                remember you with. This cover page is truly your first
                impression. It helps build trust, build brand awareness, and get
                things started on the right foot.
              </p>
              <p id={style.para}>
                Keep your cover page short, include a relevant visual if you
                can, and make sure you include everyone’s contact details. It’s
                also not a bad idea to include your company’s tagline to start
                showcasing your mission and getting your brand remembered.
              </p>
              <p id={style.para}>
                Win readers’ attention with your cover page, and give them just
                enough info and excitement to keep reading.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cdb220d668444769a755dc_business%20proposal%20cover%20page.jpg" />
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cda7f2cfc3ac6d2b0384fb_a1-jUDxhzMde7kVfIkkJw0TGUGsfoo1m49XQ1XDhkQS49-rCtbgV_d0CRnwuKDM7hsSV8kUTWAuYXdbzhERIT-8VDS2lirCp-lVeAgm7JTCPdv6sz6CTdvj7kCfUfKGXSiVGgJTv.png" />
              <Text className={style.subH}>Executive summary</Text>
              <p id={style.para}>
                Your executive summary is your TL;DR = too long; didn’t read. It
                briefly wraps up the contents of your business proposal. It
                should include a table of contents, letting clients know where
                they need to go for what information.
              </p>
              <p id={style.para}>
                There’s a high chance your business proposal will change hands
                in the decision-making process, so make it easy for readers to
                bring themselves up to speed with what’s on the table and jump
                to the section relevant to them.
              </p>
              <Text className={style.subH}>About us & company overview</Text>
              <p id={style.para}>
                Now we’ve got that covered, a short paragraph or two giving the
                reader a better overview of who you are and what you do is a
                great trust and relationship builder.
              </p>
              <p id={style.para}>
                Don’t go into too much detail here; this proposal still needs to
                revolve around your client. However, let them know there are
                humans behind the branding, let them know the mission and vision
                of your business, and inspire them with any CSR initiatives you
                may be running.
              </p>
              <Text className={style.subH}>Team members</Text>
              <p id={style.para}>
                Continuing on the human-to-human theme—it’s a good one, trust
                us. It’s time to introduce your team if you work with one.
                Headshots are a good idea at this point.
              </p>
              <p id={style.para}>
                People can relate to faces over fonts, so match those headshots
                up with names, roles & responsibilities, and perhaps a line or
                two from the team member. At the same time, if you’ve got quite
                a large agency going, you don’t need to introduce everyone on
                your team. Introduce those team members that are relevant to the
                project at hand, and those that are most likely to have
                face-time with your client.
              </p>
              <Text className={style.subH}>Portfolio of work</Text>
              <p id={style.para}>
                This chapter of your business proposal template needs to be in
                flux. We recommend that you switch out your portfolio of work to
                reflect the business you’re proposing to, what that business
                does, and what services they’re interested in.
              </p>
              <p id={style.para}>
                Showcase work relevant to the project at hand, but avoid
                showcasing any work that may be a conflict of interest.
              </p>
              <p id={style.para}>
                If you’re sending your business proposal digitally then it’s
                always a good idea to include links out to your portfolio, with
                a short summary of your work within the proposal itself. Give
                potential clients just enough information to understand and
                appreciate your portfolio, but don’t overwhelm them with
                information. If they want to read more, make sure the CTA to do
                so is clear.
              </p>
              <Text className={style.subH}>Project scope</Text>
              <p id={style.para}>
                Next up, all of your business proposal templates need to include
                project scope. What’s included in your scope of work for the
                prospective client, and what isn’t. Known as ‘scope creep,’ if
                you skip on what’s not included within your agreed service
                package, then you run the risk of your client pushing you for
                more work you weren’t accounting for, and feeling obliged to
                deliver.
              </p>
              <p id={style.para}>
                If you provide a niche service, then there’s a high chance that
                your project scope will remain roughly the same. So, streamline
                your proposal process by leaving in the essential information
                you can transfer from one potential client to the next.
              </p>
              <Text className={style.subH}>Project schedule</Text>
              <p id={style.para}>
                Every business proposal needs to include a project schedule. In
                what timeframe can you deliver your proposed solution, and what
                are the project milestones along the way? Although a business
                proposal is your chance at winning a client, you need to keep
                this chapter as realistic as possible.
              </p>
              <p id={style.para}>
                It’s all well and good raising eyebrows with an impressive
                project timeline for your business project. However, if you
                can’t deliver on those timelines, then you’ll lose clients down
                the road and damage your brand’s reputation.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cda7f2d4652c0d617bcc09_T5gtUVhHxxkT61VEeW6d8xfcsN2XxmhNJNfMolBmde9BkI70avyIS0KZl-2Dkh62RTe7iPhewN7UBs_ZJgWMuCUipjp8hXjq82Twg9isfs1yHfLOtJv5dfHkXmZHEH_Bt_4NKvY5.png" />
              <p id={style.para}>
                The visual example we’ve provided above makes your project
                schedule scannable, and avoids any confusion. The whitespace
                helps the reader concentrate, and it perfectly manages
                expectations on each project milestone.
              </p>
              <Text className={style.subH}>Deliverables</Text>
              <p id={style.para}>
                This brings us to deliverables. What are you delivering with
                your business proposal? All of your business proposals need to
                cover the end deliverable, as well as any KPIs or
                micro-deliverables that will showcase you’re well on your way to
                a result.
              </p>
              <p id={style.para}>
                Try to assign a way to track the success of your deliverables
                and quantify your efforts into data.
              </p>
              <p id={style.para}>
                For example, if your prospective client wants to “build trust”
                with their target audience, then your business proposal ideas
                for building trust need to be accompanied by quantifiable ways
                to show you’re hitting that goal. In this case, this could look
                like fewer negative reviews, more sales flow completions, or a
                larger social media following.
              </p>
              <Text className={style.subH}>
                Business proposals pricing and payment
              </Text>
              <p id={style.para}>
                All business proposal templates need a chapter on pricing and
                payment. Whether you’re sending unsolicited business proposals
                or a requested business proposal outline by your potential
                client, you need to include your pricing and payment methods.
              </p>
              <p id={style.para}>
                An effective business proposal is a part of your business’s
                sales process, and it needs to be treated as so. You wouldn’t
                have a sales process without actually discussing cost with any
                other product or service, so don’t do yourself the disservice
                here.
              </p>
              <p id={style.para}>
                Be upfront about what you charge, be firm in your payment terms,
                and stick to your word. Your client will respect you for it and
                have more faith in your services because of it.
              </p>
              <p id={style.para}>
                We’re big fans of the below example for its productization of
                services. Here, you’re giving your clients options, broken down
                clearly, so that they can find something within budget, and
                worth your time. It’s important to get your costs in your
                proposal so you know that you’re at least pitching in the same
                ballpark as your clients and can avoid any awkward conversations
                further down the line.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cdb2bfa07a447e0b3a61d6_business%20proposal%20pricing.jpg" />
              <Text className={style.subH}>Next steps</Text>
              <p id={style.para}>
                The “next steps” chapter is not something unique to a business
                proposal template. It should be a must-have chapter in every
                proposal template you write: from a sales proposal template to
                marketing proposals, solicited proposals or not—they all need
                this CTA.
              </p>
              <p id={style.para}>
                What do you want your potential clients to do next? What does
                your onboarding process look like for new clients? Give a clear
                overview of what’s next, so the client knows that the ball’s in
                their court.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cda7f2477f426869a8ab68_y2gMDNn7fGdDlTJukYC_ExkvNjLCaChT6Yb-1Uzc9nGDzHgNEk8b7MYyD6d3tg07TLkLf_Ai_76kH4tcGG_9wruncysMWrhRDjSfFMyaLgp7Jk2KZ3quT66gtMEc06ddzfLBapgd.png" />
              <p id={style.para}>
                That’s everything you need to know to include in your proposal
                template to help sway potential clients. However, it doesn’t
                stop there, whether you’re putting together unsolicited
                proposals, or writing one for a particular project, there are
                best practices worth noting. Read on.
              </p>
            </Box>
            <Box id="writeBProposal">
              <Text className={style.Hfsize}>
                How to Write a Business Proposal Template
              </Text>
              <p id={style.para}>
                A few best practices emerge with every well-written business
                proposal sent on Bonsai. To understand these best practices, we
                looked at some of the following templates:
              </p>
              <li className={style.liP}>SaaS sales proposal template</li>
              <li className={style.liP}>Video production proposal template</li>
              <li className={style.liP}>Sponsorship proposal template</li>
              <li className={style.liP}>Web design proposal template</li>
              <li className={style.liP}>Writing proposals</li>
              <li className={style.liP}>SEO proposal template</li>
              <p id={style.para}>
                Business proposals need a mix of quality writing, alongside
                succinct story-telling, statistics, and visuals. New clients
                look for a sturdy business plan, a trustworthy company, and
                someone that can go beyond ‘talking the talk.’
              </p>
              <p id={style.para}>
                Here’s what we found as a common success factor for business
                proposals:
              </p>
              <Text className={style.subH}>
                Find out exactly what the client wants
              </Text>
              <p id={style.para}>
                A solid business proposal understood the potential client’s
                problem and addressed it head-on with a unique value
                proposition. People don’t hire nice-to-haves; they hire
                need-to-haves, so frame your proposal template as a must-have
                solution to a business problem the client perhaps didn’t even
                know existed.
              </p>
              <Text className={style.subH}>Highlight what sets you apart</Text>
              <p id={style.para}>
                If you want your business proposal to be picked over the rest,
                then you’ll need to stand out, time and time again. Look at your
                proposal template as a good branding campaign. Drive home your
                company name, your name, and your USPs.
              </p>
              <p id={style.para}>
                You can do this with your copy, visuals, and an innovative
                structure to your proposal template. Remember, once is not
                enough. Drive your brand home and leave your business at the top
                of your clients’ minds when they walk away from their desks.
              </p>
              <Text className={style.subH}>
                Keep an ‘executive summary’ frame of mind
              </Text>
              <p id={style.para}>
                Remember the executive summary we mentioned at the beginning of
                this article. It’s an important part of every proposal template,
                but it’s more than that. It should be a frame of mind for your
                entire proposal.
              </p>
              <p id={style.para}>
                Remember, you’re only pitching your business at this point;
                you’re not laying down the full plan of action.
              </p>
              <p id={style.para}>
                It’s a fine line, we know, between under and over-delivering.
                But, if you can keep this mindset throughout the piece, you’ll
                give the client just enough to have faith in your services and
                won’t lose too much time putting together your proposal.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61cda7f2477f420a64a8ab69_aL_TVTtrysyoQvUK7JTxKrcD3SuK-QKRlqF8WY8nLc9A-o7N4xmP1GZdhqSjFMNhij381UF4cLCpaWLbDVRgPJh_lChJ0UpnQfKJnE7YBgYhgb9y5V4fcjrUfkQqo0r7UBD0NY0a.jpeg" />
              <Text className={style.subH}>Use visual aids</Text>
              <p id={style.para}>
                No matter how great you are with words, visual aids will always
                be able to lift them further. Seriously consider where you can
                use visual aids within your proposal to express your point,
                highlight an example, break up your copy, or leave a strong
                brand presence.
              </p>
              <p id={style.para}>
                You can also transform what would usually be blocks of copy into
                visual blocks. Things like pricing, testimonials, or ‘meet the
                team’ sections will all benefit from a graphic element to help
                your proposal ping, while remaining on brand.
              </p>
              <Text className={style.subH}>Pitch with personality</Text>
              <p id={style.para}>
                Successful proposals are personal. That means they’re personal
                to you, and they’re personal to the client. Remember to keep it
                this way throughout your proposal workflow. It’s best to use the
                company’s name wherever possible, alongside the person you’re
                addressing it to.
              </p>
              <p id={style.para}>
                Take things a step further by showcasing you’ve done your
                research on the company, mention noteworthy things they’ve
                worked on in the past that are relevant to the project at hand,
                showcase you’ve done your homework on their competition, and win
                more business by staying true to your client’s problem.
              </p>
              <p id={style.para}>
                Right! That’s all you need to know on winning potential clients
                over with quality proposals. Take these best practices into
                account when writing your next proposal and you’re onto a
                winning recipe for a healthy, profit-bound business. Next up,
                let’s take a look at how to create a proposal with Bonsai.
              </p>
            </Box>
            <Box id="createBProposalT">
              <Text className={style.Hfsize}>
                Creating Business Proposal Templates is Simple with Bonsai
              </Text>
              <p id={style.para}>
                Whether you’re looking for a sales proposal template, a business
                proposal template, or something else, Bonsai has got it all. In
                a few clicks, you’ll get access to over 400 free proposal
                templates, and there’s no limit to the amount you can use.
              </p>
              <p id={style.para}>
                Sign up to Bonsai today to download your free project proposal
                template and more, save yourself time, look professional, and
                keep winning those clients you deserve.
              </p>
              <p id={style.para}>
                Plus, Bonsai is so much more than proposal software. When you
                sign up to Bonsai, you’ll also get access to invoice templates,
                contract templates, agreement templates, time-tracking tools,
                everything you need to take your business up a gear.
              </p>
            </Box>
            <Box id="BProposalfaq">
              <Text className={style.Hfsize}>Business Proposal template FAQs</Text>
              <p id={style.para}>
                Whether you’re writing a solicited proposal, project proposal,
                sales proposals, or something else, here are the top questions
                we see on proposal templates.
              </p>
              <Text className={style.subH}>How do you write business proposals?</Text>
              <p id={style.para}>
                A business proposal must be short, sweet, and give just enough
                information to leave your potential client wanting more. New
                business can be hard to win; however, once you nail writing a
                project proposal, you’ll find that new business comes easier
                every time.
              </p>
              <Text className={style.subH}>What’s the format of a proposal?</Text>
              <p id={style.para}>
                A simple proposal template can be as little as a one-page
                proposal. However, one page rarely provides enough space to add
                any real depth to your proposal. Keep your proposal around 5-10
                pages, and ensure there’s plenty of white space within those
                pages, so you don’t overwhelm your reader with text.
              </p>
              <Text className={style.subH}>
                How do you create a proposal template?
              </Text>
              <p id={style.para}>
                Business proposal templates are simple to create if you’re using
                Bonsai. In fact, they’re already created for you. All you need
                to do is select the type of template you need, fill in the
                blanks, and send it to your client—all without ever leaving the
                Bonsai platform.
              </p>
            </Box>
          </Box>
        </Grid>
      </Box>
      <SignupTemplate />
      <RelatedTemplates />
      <Box m="auto"   bg="blackAlpha.900" w="100%" pt={10} sm={{h:"100vh"}}>
        <Box ml={20}>
          <Footer />

        </Box>
      </Box>
    </>
  );
}

export default BusinessProposal;
