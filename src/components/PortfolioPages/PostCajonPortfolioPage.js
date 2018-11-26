import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  // MainTextSubHeading,
  MainTextAccent,
  PrimaryLink
} from "components/PortfolioPageText";

import Cajon from "assets/portfolio/postCajon/cajon.png";
import LFPGroup from "assets/portfolio/postCajon/lfpGroup.png";
import SprintMapPreview from "assets/portfolio/postCajon/sprintMap.png";
import MFPIteration from "assets/portfolio/postCajon/mfpIteration1.png";
import MFPProblemSpace from "assets/portfolio/postCajon/mfpProblemSpace.png";
import MFPSketch from "assets/portfolio/postCajon/mfpSketch.png";
import MFP from "assets/portfolio/postCajon/mfp.png";
import HFP from "assets/portfolio/postCajon/hfp.png";
import HFPBent from "assets/portfolio/postCajon/hfpBent.png";
import HFPDimensions from "assets/portfolio/postCajon/hfpDimensions.png";
import HFPLabelled from "assets/portfolio/postCajon/hfpLabelled.png";

import ProblemSpace from "assets/portfolio/postCajon/docs/mfpProblemSpace.pdf";
import SprintMap from "assets/portfolio/postCajon/docs/sprintMap.pdf";
import AL from "assets/portfolio/postCajon/docs/AL.pdf";
import PersonaInterviews from "assets/portfolio/postCajon/docs/personaInterviews.pdf";
import UserManual from "assets/portfolio/postCajon/docs/userManual.pdf";

const ImageFlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  span {
    padding-right: ${props => props.theme.padding.twentyFour};
  }
  img {
    width: ${props => props.width};
    height: 100%;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      width: 100%;
      padding: ${props => props.theme.padding.twentyFour} 0;
    }
  }
`;

const RequirementList = styled.ol`
  li {
    list-style-type: circle;
  }
`;

const LinkImage = styled.img`
  cursor: pointer;
`;

class PostCajonPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Post Cajón";
  }
  render() {
    return (
      <PortfolioPage
        description="The design of an electronic cajón (a Peruvian drum), with a focus on enhancing ergonomics and player expressability."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background">
          <MainText>
            The main project in my third year design course was to redesign and
            digitize a non-Western instrument. Over the course of about 3
            months, in groups of 6, we started with the Google Design Sprint,
            then continued to rapid prototype and user test to reach the best
            design possible.
          </MainText>
        </TextGroup>
        <TextGroup heading="Selecting an Instrument">
          <ImageFlexWrapper>
            <span>
              <MainText>
                The only requirement was to select a non-Western / orchestra
                instrument. We did some research, and came up with a list of
                feasible instruments. We discussed and voted on our favourites,
                and narrowed it down to the following:
              </MainText>
              <RequirementList>
                <li>Bagpipes</li>
                <li>Cajon</li>
                <li>Rainstick</li>
                <li>Beatboxing</li>
                <li>Lute</li>
              </RequirementList>
              <MainText>
                The Cajon, a peruvian drum, was selected because of it's
                simplicity. It was realistic to build one in 3 months, and there
                was a lot of freedom in improving it.
              </MainText>
            </span>
            <img src={Cajon} alt="cajon" width="30%" />
          </ImageFlexWrapper>
        </TextGroup>
        <TextGroup heading="Ideation">
          <ImageFlexWrapper>
            <span>
              <MainText>We listed some problems we found the cajon:</MainText>
              <RequirementList>
                <li>Posture Problems</li>
                <li>Wrist Strain</li>
                <li>Sound limitations - not a great solo instrument</li>
                <li>Height limitations</li>
              </RequirementList>
              <MainText>
                It was evident that there were many problems associated with the
                ergonomics of the cajón. We created a sprint map to better
                understand where to focus our design efforts.
              </MainText>
            </span>
            <LinkImage
              src={SprintMapPreview}
              alt="sprint map"
              onClick={() => {
                window.open(SprintMap);
              }}
              width="50%"
            />
          </ImageFlexWrapper>
        </TextGroup>
        <TextGroup heading="Low Fidelity Prototype (LFP)">
          <ImageFlexWrapper>
            <span>
              <MainText>
                With the problem defined, we brainstormed methods to improve the
                ergonomics by researching products with similar physical user
                interactions. This included, chairs, wrist-guards, and other
                drums. We drew possible solutions based on our research using{" "}
                <strong>Crazy 8's</strong>. After some discussion and a heat
                mapping exercise, the following components/enhancements were
                chosen for our LFP:
              </MainText>
              <RequirementList>
                <li>Back Support</li>
                <li>Adjustable Height</li>
                <li>Curved Top of Tapa (Wrist Support)</li>
                <li>Seating Cushion</li>
                <li>Adjustable Playing Surface</li>
              </RequirementList>
              <MainText>
                Anthropometric data was used to define the dimensions of the
                cajon. Most of this was based on the ergonomics of sitting, with
                the size and shape of a standard cajon taken into consideration
                as well.
              </MainText>
            </span>
            <img src={LFPGroup} alt="lfp" width="50%" />
          </ImageFlexWrapper>
        </TextGroup>
        <TextGroup heading="User Testing pt. 1">
          <MainText>
            While building and planning our LFP, we conducted user interviews
            with cajon players and a music professor from Wilfred Laurier
            University who specialized in percussion and building electronic
            instruments. We also performed some user-testing with members in our
            class using our LFP. The key insights from these interviews are
            below:
          </MainText>
          <RequirementList>
            <li>
              Lower back strain when bending down to reach lower areas of the
              cajon
            </li>
            <li>Some cajons have cushions built in and it was comfortable</li>
            <li>
              Some wrist support would be beneficial for long period of time
            </li>
            <li>Does not see value in footrest</li>
            <li>It is not very portable, handles could be nice</li>
            <li>
              Box-shape is limiting in sound - people sometimes add shakers to
              their feet to add to the music
            </li>
            <li>Pedal/latch to change tuning/sound mid-song would be nice</li>
          </RequirementList>
        </TextGroup>
        <TextGroup heading="Medium Fidelity Prototype (MFP)">
          <MainText>
            Based on the user testing feedback, we realized that our scope was
            not well defined, and we needed clarify our focus. Our critical
            requirements were updated to the following:
          </MainText>
          <RequirementList>
            <li>A design that suits 5th to 95th percentile heights</li>
            <li>
              Enhance player’s ability to play the cajon as a solo instrument
            </li>
            <li>
              Increase ease of changing the sound of the cajon, as well as
              extending the range of sounds
            </li>
            <li>More lightweight and portable than the original cajon</li>
            <li>Improves posture of all players</li>
            <li>Reduces strain due to repetitive motion</li>
          </RequirementList>
          <MainText>We then defined a new problem statement.</MainText>
          <MainTextAccent>
            "Develop an improved cajon that enhances the ergonomics of the
            playing experience with respect to posture and strain while
            increasing the portability and expressibility of the playing
            experience."
          </MainTextAccent>
          <MainText>
            With more context, and a better defined scope, we brainstormed ways
            to integrate our user feedback into the design. This included many
            sketching sessions, workshops, additional research.
          </MainText>
          <br />
          <br />
          <ImageFlexWrapper>
            <img src={MFPIteration} alt="MFP iterations" width="38%" />
            <LinkImage
              onClick={() => {
                window.open(ProblemSpace);
              }}
              src={MFPProblemSpace}
              alt="MFP Problem Space"
              width="60%"
            />
          </ImageFlexWrapper>
          <MainText>
            We were about to build the "music stand prototype", and began to
            brainstorm how we would build something with varying degrees of
            motion. It ended up being way more complicated than we thought - it
            would take lots of time to build a functional prototype and much
            more design work. While doing research on the best (and cheapest)
            way to build an MVP, we came across the{" "}
            <PrimaryLink
              href="https://www.schlagwerk.com/en/products/cajon/cajon-compact/cajonito/"
              target="_new"
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              Cajonito
            </PrimaryLink>
            . This was a tiny cajon, where each side had a different snare and
            it rested on the lap. It solved all our concerns in terms of
            ergonomics, portability, and expressability, so we decided to spend
            some more time brainstorming to see if we could think of a simpler
            alternative to the music stand.
          </MainText>
          <MainText>This is what we came up with:</MainText>
          <ImageFlexWrapper>
            <span>
              <RequirementList>
                <li>Cajon that rests on top of users thighs</li>
                <li>Cushion for comfort</li>
                <li>
                  Angled and shortened playing surface for better ergonomics
                </li>
                <li>Playing surface down between the legs</li>
                <li>Support column between the user's legs for stability</li>
              </RequirementList>
            </span>
            <img src={MFPSketch} alt="lfp" width="45%" />
          </ImageFlexWrapper>
          <MainText>
            We built with varying sizes, cushions, weights, and support columns.
          </MainText>
          <ImageFlexWrapper>
            <img src={MFP} alt="lfp" width="100%" />
          </ImageFlexWrapper>
        </TextGroup>
        <TextGroup heading="User Testing pt. 2">
          <MainText>
            We did some standard user testing and asked users to compare the two
            prototypes. We very consistent results, which are summarized in the
            following list:
          </MainText>
          <RequirementList>
            <li>
              The instrument is very unstable. Users feel uncomfortable hitting
              the surface with a lot of force
            </li>
            <li>Support column is helpful, but uncomfortable and awkward.</li>
            <li>Cushion is good! The squishier one is more comfortable.</li>
            <li>
              Wrist support gets in the way of playing surface, would rather it
              not be there
            </li>
            <li>
              Significantly more lightweight and portable than the original
              cajon
            </li>
          </RequirementList>
          <MainTextAccent>
            Then, our final user SAT on our prototype?!?!
          </MainTextAccent>
          <MainText>
            This was by far the coolest, most eye-opening part of our project.
            The concern of stability was gone, and while it was not as ergonomic
            since the user had to bend over to play, it was a significant
            improvement from the original cajon. We thoguht WOW, this is what we
            build, and so we further analyzed the results, and began to iterate
            on our design.
          </MainText>
        </TextGroup>
        <TextGroup heading="High Fidelity Prototype (HFP)">
          <ImageFlexWrapper>
            <span>
              <MainText>
                Our HFP was broken down into 3 components: physical structure,
                software, and hardware. We used MIDI, an Arduino
                microcontroller, and piezoelectric sensors to synthesize the
                sound. We implemented looping functionality, multiple snare
                kits, and sound effects through a few buttons and controls to
                enhance the playing experience and allow for users to be more
                expressive.
                <br />
                <br />
                In terms of the physical design, we chose the size of the
                playing surface based on our user testing results,
                anthropometric data, and maintained the aspect ratio of the
                cajon surface. Although the cushion was a success in our MFP
                testing, we decided to eliminate it because of it's additional
                weight, and felt that it was unnecessary as it would not add
                much comfort, and would make the instrument less stable. We
                changed the top surface from a "T-shaped" design into just
                rectangular, since the wider top surface did not add too much
                support, and was extremely uncomfortable under the thighs. After
                countless iterations, we ended up with the design shown on the
                right.
              </MainText>
            </span>
            <img src={HFPDimensions} alt="HFP Dimensions" width="40%" />
          </ImageFlexWrapper>
          <br />
          <br />
          <MainText>
            Once the design was done, we chose our materials! After lots of
            debate, we chose acrylic and wood - acrylic to create a strong bent
            surface, and wood to replicate the feel of a cajon. Cost was the
            biggest factor in this decision.
          </MainText>
          <ImageFlexWrapper>
            <span>
              <MainText>
                We used a heat gun and clamped the acrylic to the table to
                achieve our desired angle. Although this wasn't the most
                accurate method, it worked wonders! We did this twice, once with
                the full length, then a shortened piece of acrylic for
                additional support. I think we probably inhaled a lot of fumes
                in the process though haha.
                <br />
                <br />
                Next, we added bolts, and measured and sanded two thin sheets of
                wood to put on top of the acrylic, with our hardware sensors in
                between. The controls were placed onto the back of the cajon.
              </MainText>
            </span>
            <img src={HFPBent} alt="hfp bent" width="50%" />
          </ImageFlexWrapper>
          <br />
          <br />
          <img src={HFP} alt="HFP" width="100%" />
          <MainTextAccent>I know, pretty cool right?</MainTextAccent>
          <MainText>
            Our final prototype weighed only ~10 pounds, and was less than half
            the size of a standard cajon!
          </MainText>
          <img src={HFPLabelled} alt="hfp labelled" width="100%" />
        </TextGroup>
        <TextGroup heading="Additional Information">
          <MainText>
            <PrimaryLink
              onClick={() => {
                window.open(UserManual);
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              User Manual
            </PrimaryLink>
            <br />
            <PrimaryLink
              onClick={() => {
                window.open(PersonaInterviews);
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              Persona Interview Summary
            </PrimaryLink>
            <br />
            <PrimaryLink
              onClick={() => {
                window.open(AL);
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              Accountability Log
            </PrimaryLink>{" "}
            - each work session was documented here, and it goes more in-depth
            about our design process
          </MainText>
        </TextGroup>
        <TextGroup heading="Comments">
          <MainText>
            This was probably my favourite design project I've done. User
            testing proved to be extremely useful, and going to the machine shop
            and building physical prototypes was definitely a change of pace for
            me. It was nice to get out of the software space and try something
            new.
            <br />
            <br />
            From a technical standpoint, the hardware design was not perfect as
            we had a very limited budget. We spent about $80 on materials
            throughout this entire process, thus we were unable to get perfect
            mappings on the cajon. Similarly, the controls were hard to reach,
            and were relatively low-fidelity (breadboard taped to the back of
            the cajón).
            <br />
            <br />
            All in all, this was a success. We were able to synthesize the sound
            of a cajón, and build a significantly more ergonomic solution. I
            didn't include all our steps in this webpage, including information
            about our target user, and all our research and testing results.
            Feel free to{" "}
            <PrimaryLink
              href="mailto:jessiehywon@gmail.com?Subject=Hello"
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              reach out
            </PrimaryLink>{" "}
            if you have any questions!
          </MainText>
        </TextGroup>
      </PortfolioPage>
    );
  }
}

PostCajonPortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData.isRequired,
  next: PropShapes.portfolioData.isRequired,
  id: PropTypes.number.isRequired
};

PostCajonPortfolioPage.defaultProps = {};

export default withTheme(PostCajonPortfolioPage);
