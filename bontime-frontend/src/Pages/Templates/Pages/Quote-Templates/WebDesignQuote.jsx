import React from "react";
import TopSection from "../../Components/TopSection";
import style from "../../Components/Article.module.css";

import NavLogo from "../../Components/NavLogo";

import {
  Box,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import SignupTemplate from "../../Components/SignupTemplate";
import RelatedTemplates from "../../Components/RelatedTemplates";
import Footer from "../../../../components/Footer/Footer";

function WebDesignQuote() {
  const heading = "Free Web Design Quotation Template";
  const desc = "with estimates, read receipt notifications & e-approval";
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
            h={{ md: "80vh", lg: "85vh", xl: "65vh", "2xl": "70vh" }}
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
                  <a href="#needDQ">Why do you need a web design quotation?</a>
                </ListItem>
                <ListItem>
                  <a href="#webQT">
                    Is there a web design quote template on word?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#getWQT">
                    Where can I get a web design quote template?
                  </a>
                </ListItem>
                <a href="#WDQ">What is a Web Design Quotation?</a>
                <ListItem>
                  <a href="#includeWDQ">
                    What to Include in the Web Design Quotation
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#writeWDQ">How to Write a Web Design Quotation</a>
                </ListItem>
                <ListItem>
                  <a href="#WDQB">
                    Creating a Web Design Quotation Is Simple With Bonsai
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#WDQfaq">Web Design Quotation Template FAQs</a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto"  p="1em 1em">
            <Box id="needDQ">
              <Text className={style.Hfsize}>
                Why do you need a web design quotation?
              </Text>
              <p id={style.para}>
                It is important for your prospective clients to know how much
                your service costs and what the services include. This is also
                to avoid any misunderstanding during the payment process.
              </p>
            </Box>
            <Box id="webQT">
              <Text className={style.Hfsize}>
                Is there a web design quote template on word?
              </Text>
              <p id={style.para}>
                A standard quote template is available on Word. However, to save
                yourself the hassle, use Bonsai's web design template. All you
                need to do is download and edit as needed.
              </p>
            </Box>
            <Box id="getWQT">
              <Text className={style.Hfsize}>
                Where can I get a web design quote template?
              </Text>
              <p id={style.para}>
                Sign up with Bonsai and download their free web design quote
                template. It has all the fields you need and it's easy to edit
                the relevant details and customize.
              </p>
            </Box>
            <Box id="WDQ">
              <Text className={style.Hfsize}> What is a Web Design Quotation?</Text>
              <p id={style.para}>
                A web design quotation is a document that a web developer sends
                to a potential client to explain service specifics and prices.
                Developers often send website quotations at the onset of a
                project and to inform and persuade customers to opt for their
                services over another developers’.
              </p>
            </Box>
            <Box id="includeWDQ">
              <Text className={style.Hfsize}>
                What to Include in the Web Design Quotation
              </Text>
              <p id={style.para}>
                Whether you are a web design agency or a freelancer, it’s best
                to use a web design quote template and customize it based on
                customer needs.
              </p>
              <p id={style.para}>
                Consider adding the following sections to create an effective
                web design quote to help you win that project.
              </p>
              <Text className={style.subH}>Cover page</Text>
              <p id={style.para}>
                An impressive cover page goes a long way in piquing client
                interest and ensuring engagement from the offset. You need to
                stand out amongst a sea of other talented web designers.
              </p>
              <p id={style.para}>
                Include key information such as the project name, customer name,
                and your business details on the cover page. A high-quality
                image doesn’t hurt, either.
              </p>

              <Text className={style.subH}>Executive summary</Text>
              <p id={style.para}>
                An executive summary offers key information at a glance and
                helps prospects get to the point. Think of it as a condensed
                version of what’s in the whole quotation–consider it a TL;DR.
              </p>
              <p id={style.para}>
                Keep this section short and to the point to keep the customers
                engaged. Provide key information on the project objectives,
                plan, and end goals.
              </p>
              <Text className={style.subH}>Project description</Text>
              <p id={style.para}>
                This is where you dive into the web design project at hand. Once
                you understand the customer requirements, use this section to
                explain the what and the why of the project.
              </p>
              <Text className={style.subH}>Here’s what to add:</Text>
              <li className={style.liP}>
                Project justification: that explains why the web design project
                is needed
              </li>
              <li className={style.liP}>
                Work phases: to break down a project into different parts
              </li>
              <li className={style.liP}>
                Evaluation metrics: that help you measure project success
              </li>
              <li className={style.liP}>
                Timeline: for keeping the project on track
              </li>
              <li className={style.liP}>
                Budget: for mentioning projected costs to help complete the
                project
              </li>
              <p id={style.para}>
                This is key as it outlines what exactly you're sending a quote
                for–what exact issue you’re looking to solve. Highlight your
                understanding of the web design project to reassure prospects
                that you’ve got a competitive advantage against the rest.
              </p>
              <Text className={style.subH}>Project deliverables</Text>
              <p id={style.para}>
                Project deliverables refer to tangible and intangible outputs of
                a project. This section clarifies the type of website you’ll be
                developing and what that entails.
              </p>
              <p id={style.para}>
                Project deliverables may vary, depending on the client's
                requirements–a one-to-one conversation with your customer helps
                ensure you have a solid understanding of the deliverables you’ll
                need to highlight here.
              </p>
              <Text className={style.subH}>Project milestones</Text>
              <p id={style.para}>
                Project milestones are like project checkpoints–they help you
                mark the completion of phases throughout the project. Setting
                these milestones at the beginning of your project helps set
                clear expectations for all parties.
              </p>
              <Text className={style.subH}>
                These are some of the phases that a web design process goes
                through:
              </Text>
              <li className={style.liP}>
                Discovery and planning: for studying competitors, creating site
                architecture, a sitemap, and wireframes
              </li>
              <li className={style.liP}>
                Design: for creating UX/UI-friendly design mockups, internal
                page designs, desktop, and mobile views
              </li>
              <li className={style.liP}>
                Development and programming: for bringing together all elements
                to create a high-quality website
              </li>
              <li className={style.liP}>
                Beta testing and review: for conducting tests and optimizing the
                website
              </li>
              <li className={style.liP}>Site launch: for publishing the website</li>
              <li className={style.liP}>
                Ongoing maintenance: for fixing ongoing design, website hosting,
                bug squashing, and managing security risks
              </li>
              <p id={style.para}>
                The exact milestones of your website quotation differ depending
                on the project, your services, and the client. Discuss
                milestones with clients to ensure your web design project is on
                the right track from day one.
              </p>
              <Text className={style.subH}>Project fees</Text>
              <p id={style.para}>
                Use this section of your website quotation to specify project
                fees and related details. If you want the customer to pay you
                after completing certain milestones, clearly mention that here.
                You can also break down the proposed project fees into costs for
                different web design services, which may be more appealing for
                some.
              </p>
              <p id={style.para}>
                Consider adding a payment schedule and preferred mode of
                payment–whether that’s hourly or fixed service fees–in this
                section.
              </p>
              <p id={style.para}>
                Most freelance web designers charge an hourly rate for custom
                web design services along with a fixed service fee for web
                development projects–it depends on your preferences and your
                experience.
              </p>
              <p id={style.para}>
                Bonsai top tip: Looking for a simple tool to keep track of your
                hours? Ditch Google Sheets, Bonsai’s time tracking tool might
                just be what you’re looking for—check it out.
              </p>
              <Text className={style.subH}>Company details</Text>
              <p id={style.para}>
                Whether you are a website design agency or a freelance web
                designer, this is your opportunity to showcase the value of
                money for your services.
              </p>
              <p id={style.para}>
                <b>Use this section to dive deep into:</b>
              </p>
              <li className={style.liP}>
                Previous work: that showcases some stellar websites you’ve
                designed
              </li>
              <li className={style.liP}>
                Awards: for designing award-winning, aesthetic and functional
                websites
              </li>
              <li className={style.liP}>
                Testimonials: that speak volumes about your services
              </li>
              <p id={style.para}>
                If you’re a freelance web designer, don’t be afraid to sing your
                praises. Now isn’t the time to be modest–woo those clients over.
              </p>
              <Text className={style.subH}>Terms and conditions</Text>
              <p id={style.para}>
                This is the last section of your web design quotation. Consider
                adding payment terms and other conditions in this section for if
                the project runs into issues.
              </p>
              <p id={style.para}>
                For example, you can add payment dispute resolution methods,
                project acceptance criteria, project dependency, and more here.
              </p>
            </Box>
            <Box id="writeWDQ">
              <Text className={style.Hfsize}>
                How to Write a Web Design Quotation
              </Text>
              <p id={style.para}>
                Learning to code was the easy part–well, perhaps. However,
                running your own business requires a lot of effort too. Creating
                website quotations isn’t easy, especially considering all the
                different sections and their requirements.
              </p>
              <p id={style.para}>
                You have to understand project complexity and the client’s
                expectations before coming up with a quotation document. You can
                use a web design quote template to make life a little easier.
              </p>
              <p id={style.para}>
                Keep the following in mind if you choose to create your own:
              </p>
              <Text className={style.subH}>
                Find out exactly what the client wants
              </Text>
              <p id={style.para}>
                Web design clients come with different requirements, including:
              </p>
              <li className={style.liP}>Web engineering</li>
              <li className={style.liP}>Network security</li>
              <li className={style.liP}>Website design</li>
              <li className={style.liP}>Domain name registration</li>
              <li className={style.liP}>Client-side or service scripting</li>
              <p id={style.para}>
                That’s why it’s crucial to understand all the services that the
                customer requires before sending your website quotation.
              </p>
              <p id={style.para}>
                Once you completely understand what they want, it’ll be easier
                to develop website quotations that suit them, and source the
                right resources to help you get the job done. Asking the right
                questions helps you bridge the gap between your understanding of
                the project and the client’s requirements.
              </p>
              <p id={style.para}>
                Don’t hesitate to ask questions that help you do your job
                better—there are no silly questions here.
              </p>
              <Text className={style.subH}>Highlight what sets you apart</Text>
              <p id={style.para}>
                A client receives more than one website quotation when hiring
                freelancers for a project–what makes you special? You have to
                show what sets you apart in order to land the project.
              </p>
              <p id={style.para}>
                You need to highlight how your web development skills align with
                the project needs. Are you a HTML whizz? Do you dodge 404 pages
                like a boss?
              </p>
              <p id={style.para}>
                Make sure to showcase how your specialization and experience
                make you perfect for this website development job.
              </p>
              <Text className={style.subH}>Add a CTA</Text>
              <p id={style.para}>
                Now that you’ve said what you need to say with your website
                quotation, it’s time to tell clients what’s next. Think of this
                section as highlighting the most logical next step to clients.
              </p>
              <p id={style.para}>
                Mention whether you want them to email their consent for moving
                ahead with the web design plans or sign on the dotted line.
                Whatever it is, be clear.
              </p>
            </Box>
            <Box id="WDQB">
              <Text className={style.Hfsize}>
                Creating a Web Design Quotation Is Simple With Bonsai
              </Text>
              <p id={style.para}>
                A strong website quotation template is a must for fast-paced
                website designers. It communicates your value, cost, and ensures
                the client is aware you’re a seasoned pro that knows their UX
                from their UI.
              </p>
              <p id={style.para}>
                It’s different to a contract or proposal–and you need to treat
                it that way.
              </p>
              <p id={style.para}>
                If juggling emails and google sheets to get your quotation out
                there seems like a hassle you’d rather avoid, Bonsai’s here to
                help.
              </p>
              <Text className={style.subH}>Here’s how to get started:</Text>
              <li className={style.liP}>Sign up for free to Bonsai</li>
              <li className={style.liP}>Find a website design quotation template</li>
              <li className={style.liP}>
                Edit and customize your website design quotation template to
                your liking
              </li>
              <p id={style.para}>
                The quick and easy quotation templates enable you to create a
                custom quote, send it to your client, and get it
                approved–without ever leaving the platform.
              </p>
            </Box>
            <Box id="WDQfaq">
              <Text className={style.Hfsize}>Web Design Quotation Template FAQs</Text>
              <Text className={style.subH}>What is a web design quotation?</Text>
              <p id={style.para}>
                A web design quotation is a document web designers send to
                prospective clients to explain services and project fees.
                Designers use a website quotation to convince the client about
                their skills in order to land a project.
              </p>
              <Text className={style.subH}>How do web designers create a quote?</Text>
              <p id={style.para}>Add these sections to create a web design quotation:</p>
              <li className={style.liP}>Cover page</li>
              <li className={style.liP}>Executive summary</li>
              <li className={style.liP}>Project description</li>
              <li className={style.liP}>Project deliverables</li>
              <li className={style.liP}>Project milestones</li>
              <li className={style.liP}>Project fees</li>
              <li className={style.liP}>Company details</li>
              <li className={style.liP}>Terms and conditions</li>
              <p id={style.para}>
                Web developers can easily create a quote using a web design
                quote template from Bonsai. Once you create a master quotation
                template, you can recycle for each client without having to
                build from scratch.
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

export default WebDesignQuote;
