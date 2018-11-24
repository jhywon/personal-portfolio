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
import HFP from "assets/portfolio/postCajon/hfp.png";
import HFPDimensions from "assets/portfolio/postCajon/hfpDimensions.png";

import ProblemSpace from "assets/portfolio/postCajon/docs/mfpProblemSpace.pdf";
import SprintMap from "assets/portfolio/postCajon/docs/sprintMap.pdf";
import AL from "assets/portfolio/postCajon/docs/AL.pdf";
import PersonaInterviews from "assets/portfolio/postCajon/docs/personaInterviews.pdf";
import UserManual from "assets/portfolio/postCajon/docs/userManual.pdf";

const ImageFlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  display: flex;
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
  margin-top: ${props => props.theme.padding.sixteen};
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
        // description="The design of an electronic cajón, a Peruvian drum."
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
          <MainText>
            <ImageFlexWrapper>
              <span>
                The only requirement was to select a non-Western / orchestra
                instrument. We did some research, and came up with a list of
                feasible instruments. We discussed and voted on our favourites,
                and narrowed it down to the following:
                <RequirementList>
                  <li>Bagpipes</li>
                  <li>Cajon</li>
                  <li>Rainstick</li>
                  <li>Beatboxing</li>
                  <li>Lute</li>
                </RequirementList>
                The Cajon, a peruvian drum, was selected because of it's
                simplicity. It was realistic to build one in 3 months, and there
                was a lot of freedom in improving it.
              </span>
              <img src={Cajon} alt="cajon" width="30%" />
            </ImageFlexWrapper>
          </MainText>
        </TextGroup>
        <TextGroup heading="Ideation">
          <MainText>
            <ImageFlexWrapper>
              <span>
                We listed some problems we found the cajon:
                <RequirementList>
                  <li>Posture Problems</li>
                  <li>Wrist Strain</li>
                  <li>Sound limitations - not a great solo instrument</li>
                  <li>Height limitations</li>
                </RequirementList>
                It was evident that there were many problems associated with the
                ergonomics of the cajón. We created a sprint map to better
                understand where to focus our design efforts.
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
          </MainText>
        </TextGroup>
        <TextGroup heading="Low Fidelity Prototype (LFP)">
          <MainText>
            <ImageFlexWrapper>
              <span>
                With the problem defined, we brainstormed methods to improve the
                ergonomics by researching products with similar physical user
                interactions. This included, chairs, wrist-guards, and other
                drums. We drew possible solutions based on our research using{" "}
                <strong>Crazy 8's</strong>. After some discussion and a heat
                mapping exercise, the following components/enhancements were
                chosen for our LFP:
                <RequirementList>
                  <li>Back Support</li>
                  <li>Adjustable Height</li>
                  <li>Curved Top of Tapa (Wrist Support)</li>
                  <li>Seating Cushion</li>
                  <li>Adjustable Playing Surface</li>
                </RequirementList>
                Anthropometric data was used to define the dimensions of the
                cajon. Most of this was based on the ergonomics of sitting, with
                the size and shape of a standard cajon taken into consideration
                as well.
              </span>
              <img src={LFPGroup} alt="lfp" width="50%" />
            </ImageFlexWrapper>
          </MainText>
        </TextGroup>
        <TextGroup heading="User Testing pt. 1">
          <MainText>
            While building and planning our LFP, we conducted user interviews
            with cajon players and a music professor from Wilfred Laurier
            University who specialized in percussion and building electronic
            instruments. We also performed some user-testing with members in our
            class using our LFP. The key insights from these interviews are
            below:
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
          </MainText>
        </TextGroup>
        <TextGroup heading="Medium Fidelity Prototype (MFP)">
          <MainText>
            Based on the user testing feedback, we realized that our scope was
            not well defined, and we needed clarify our focus. Our critical
            requirements were updated to the following:
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
              <li>
                Improves posture of all players Reduces strain due to repetitive
                motion
              </li>
            </RequirementList>
            We then defined a new <strong>problem statement</strong>.
            <MainTextAccent>
              "Develop an improved cajon that enhances the ergonomics of the
              playing experience with respect to posture and strain while
              increasing the portability and expressibility of the playing
              experience."
            </MainTextAccent>
            With more context, and a better defined scope, we brainstormed ways
            to integrate our user feedback into the design. This included many
            sketching sessions, workshops, additional research.
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
          </MainText>
        </TextGroup>
        {/* <TextGroup heading="User Testing pt. 2">
          <MainText>We tested ...</MainText>
          <MainTextAccent>Then we had a revolation.</MainTextAccent>
        </TextGroup> */}
        <TextGroup heading="High Fidelity Prototype (HFP)">
          <MainText>Here's our HFP!</MainText>
          <img src={HFPDimensions} alt="HFP Dimensions" width="100%" />
          <img src={HFP} alt="HFP" width="100%" />
        </TextGroup>
        <TextGroup heading="Additional Information">
          <MainText>
            <ul>
              <li>
                <PrimaryLink
                  onClick={() => {
                    window.open(UserManual);
                  }}
                  color={this.props.page.linkColor}
                  hovercolor={this.props.page.primaryLight}
                >
                  User Manual
                </PrimaryLink>
              </li>
              <li>
                <PrimaryLink
                  onClick={() => {
                    window.open(PersonaInterviews);
                  }}
                  color={this.props.page.linkColor}
                  hovercolor={this.props.page.primaryLight}
                >
                  Persona Interview Summary
                </PrimaryLink>
              </li>
              <li>
                <PrimaryLink
                  onClick={() => {
                    window.open(AL);
                  }}
                  color={this.props.page.linkColor}
                  hovercolor={this.props.page.primaryLight}
                >
                  Accountability Log
                </PrimaryLink>{" "}
                - each work session was documented here, and it goes more
                in-depth about our design process
              </li>
            </ul>
          </MainText>
        </TextGroup>
        <TextGroup>
          <MainTextAccent>
            I'm currently updating this portfolio item. If you would like more
            information about this project, shoot me an{" "}
            <PrimaryLink
              href="mailto:jessiehywon@gmail.com?Subject=Hello"
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              email
            </PrimaryLink>
            !
          </MainTextAccent>
        </TextGroup>
        {/*
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
            of a cajón, and build a significantly more ergonomic solution.
          </MainText>
        </TextGroup> */}
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
