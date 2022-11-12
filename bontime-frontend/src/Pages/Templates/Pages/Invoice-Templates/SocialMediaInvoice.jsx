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

function SocialMediaInvoice() {
  const heading = "Free Social Media Invoice Template";
  const desc = "with branding & integrated payment";
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
            h={{ md: "80vh", lg: "80vh", xl: "65vh", "2xl": "55vh" }}
            boxShadow="dark-lg"
            
            position={{ md: "sticky", lg: "sticky" }}
            top={10}
            textAlign="left"
            p="5"
            borderRadius={20}
          >
            <Heading fontSize={{ md:"1em",lg:"1em",'2xl':"1.5em"}}>
              Table of Contents{" "}
            </Heading>

            <Box pt="1.5rem">
              <List spacing={2} color="#00B98E" fontWeight={700}>
                <ListItem>
                  <a href="#createSMI">How to create a social media invoice?</a>
                </ListItem>
                <ListItem>
                  <a href="#includeSMIT">
                    What to Include in the Social Media Invoice Template?
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#SMIT">What is a social media invoice template?</a>
                </ListItem>
                <a href="#writeSMIT">
                  How to Write a Social Media Invoice Template
                </a>
                <ListItem>
                  <a href="#createSMITB">
                    Creating a Social media marketing invoice template is simple
                    with Bonsai
                  </a>
                </ListItem>
                <ListItem>
                  <a href="#SMITfaq">
                    Social Media Services Invoice Template FAQs
                  </a>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box h="auto"  p="1em 1em">
            <Box id="includeSMIT">
              <Text className="Hfsize">
                What to Include in the Social Media Invoice Template?
              </Text>
              <p id="para">
                Personalize a Bonsai invoice template. Add your branding and
                information for social media. the contact and information for
                your client. Fill out the form with the job you've done and the
                hourly rate per task.
              </p>
            </Box>
            <Box id="SMIT">
              <Text className="Hfsize">
                What is a social media invoice template?
              </Text>
              <p id="para">
                Edit one of Bonsai's social media invoice templates. Simply add
                your company name, address, client information, logo, invoice
                number, issuance date, due date, and payment information.
              </p>
            </Box>
            <Box id="writeSMIT">
              <Text className="Hfsize">
                How to Write a Social Media Invoice Template
              </Text>
              <p id="para">
                If this is your first time creating a social media marketing
                invoice, or you’re looking for some guidance on how to improve
                your invoices as a social media marketer, then here are some top
                tips on how to write one for your next client.
              </p>
              <Text className="subH">
                Find out the social media services client wants
              </Text>
              <p id="para">
                Before you start filling in the social template with your
                marketing package, you’re going to need all of the relevant
                information from your client regarding the project details. This
                includes what work might be required from you, the quantity of
                work, hours required, and the rate of pay.
              </p>
              <p id="para">
                Asking questions like ‘how do you make payments?’ is going to
                allow you to word your invoice correctly and to negotiate any
                wiggle room on the agreement where it might be necessary.
              </p>
              <p id="para">
                Not every client will do this but some avoid paying until 60
                days later. As a freelancer offering marketing services, you
                should be entitled to the same 30-day period as any other
                supplier, so push for the latter.
              </p>
              <Text className="subH">
                Be detailed in everything you include
              </Text>
              <p id="para">
                Attention to detail is key when it comes to creating your social
                media invoice. The template available from Bonsai should have
                the structure you require to input all the necessary
                information.
              </p>
              <p id="para">
                Refer back to the information that your client gave you at the
                start of the project, and that you both agreed to. Use the free
                invoice template and follow the structure of it so that you’re
                not confusing the client.
              </p>
              <p id="para">
                Detail all of the work you’ve done, even if it sounds like
                you’re being overly specific. For example, separate your work
                into categories. These could be social networking sites you’ve
                worked on. Then break these down into the various content types
                you’ve provided.
              </p>
              <Text className="subH">
                Double Triple check before submitting
              </Text>
              <p id="para">
                Before you go sending off the billing document to your client,
                you’ll want to make sure that you’ve included everything that
                the client needs and that you need to communicate. From your
                hourly rate to the late fees you’ll charge if payment isn’t made
                on time, scrutinize the document from top to bottom.
              </p>
              <p id="para">
                You don’t want to be missing essential contact information or
                the wrong payment details. That’s only going to slow down the
                process of you getting paid!
              </p>
              <p id="para">
                Typos and grammar are essential to correct because they could
                invalidate the invoice or you may end up getting paid less or
                more than you expected. It also looks unprofessional so make use
                of browser add-ons to correct your grammar.
              </p>
              <p id="para">
                Check that the sum of money you’re charging is correct too. The
                wrong decimal point used in your total can cause issues, so make
                sure you’re triple checking the document.
              </p>
              <p id="para">
                A freelance career often means that you’re doing everything
                yourself. Bonsai makes your digital marketing job easier by
                providing a social media marketing invoice that won’t cause
                issues in the payment department.
              </p>
            </Box>
            <Box id="createSMITB">
              <Text className="Hfsize">
                Creating a Social media marketing invoice template is simple
                with Bonsai
              </Text>
              <p id="para">
                Creating a social media invoice template with Bonsai is easy to
                do and makes freelance life that little less stress-inducing.
              </p>
              <p id="para">
                There are many benefits to using Bonsai for a free invoice
                template, as opposed to just using a random invoice template off
                the internet. Bonsai is an invaluable tool to have as a
                freelancer, that’s why over 500,000 freelancers and small
                businesses use the platform.
              </p>
              <Text className="subH">Bonsai saves you time</Text>
              <p id="para">
                When you’re providing an abundance of marketing services, the
                last thing you want to be dealing with is admin. Chasing late
                payments and having to spend long periods of time creating
                invoices is never a priority—or at least never seems to be.
              </p>
              <p id="para">
                With Bonsai, you’ve got invoice templates available at the click
                of a button, allowing you to save time to do what you love. That
                way, you can focus on giving the best marketing services to your
                clients while still prioritizing your business.
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/61eaa566f52fb17950e6a9fd_xML_DKlHA2N4BxSVDFYC9ppeV7Ra96nXIZMHPQQ1hBmhrIHKiiggNcLDYfjK2qGnNAduc0KbIbsqJtZzXoFq5EskHAtnuJOqAcAAK7GgZubtCfH0wz-xjgd-m9XQDZ_JTVc4Tmme.png" />
              <Text className="subH">
                Templates include all the relevant information
              </Text>
              <p id="para">Templates include all the relevant information</p>
              <p id="para">
                With the right marketing invoice template, like this one from
                Bonsai, you can rest a little easier!
              </p>
              <Text className="subH">
                Plenty of additional resources in Bonsai
              </Text>
              <p id="para">
                As a freelance social media manager, there are a lot of
                community blogs that share insight into creating a successful
                career.
              </p>
              <p id="para">
                Bonsai also has a variety of online resources for freelance
                social media marketers to take advantage of. That way you can
                provide ultimate client satisfaction and hopefully achieve
                repeat business with all of your clients.
              </p>
              <p id="para">
                The freelance life can be unpredictable, so having clients who
                come back again and again is important. Bonsai offers plenty of
                other products that can be useful to you as a freelancer.
              </p>
              <p id="para">
                For example, Bonsai WorkFlow has a range of services from
                contracts to proposals, time-tracking and task tracking.
              </p>
              <p id="para">
                With these services, you can organize your client work, manage
                your clients effectively and hopefully win plenty of new clients
                in the future.
              </p>
            </Box>
            <Box id="SMITfaq">
              <Text className="Hfsize">
                Social Media Services Invoice Template FAQs
              </Text>
              <p id="para">
                Internet marketing has a lot of opportunities for those who have
                a passion for the digital world. If you’re into social media,
                then it’s a great career to get into, and is constantly in flux.
              </p>
              <p id="para">
                In order to make sure you have all the information when it comes
                to making the best invoice templates possible, here are some
                frequently asked questions.
              </p>
              <Text className="subH">
                What are the typical payment terms for invoices?
              </Text>
              <p id="para">
                There are usually a number of payment terms that you or the
                client could specify. For most it’s 30 days. For others it can
                be sixty or even ninety days until you receive payment. It’s
                important to consider how long you’re comfortable with when
                waiting for payment.
              </p>
              <Text className="subH">
                Should you always send an invoice to a client?
              </Text>
              <p id="para">
                Yes, it’s recommended that you send a social media marketing
                invoice, otherwise how will the client know when to pay you?
                They likely wouldn’t have any of your payment details unless you
                gave them in advance.
              </p>

              <Text className="subH">Are all the Bonsai templates free?</Text>
              <p id="para">
                Yes, it’s a service that offers a free invoice template for all
                it’s users. There are some premium subscriptions available at a
                monthly fee, but that’s an optional add on when you know Bonsai
                is the tool for you!
              </p>
              <Image src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072902/62d83529a23eedf1fb65323b_social-media-invoice-p-800.jpeg" />
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
    </>
  );
}

export default SocialMediaInvoice;
