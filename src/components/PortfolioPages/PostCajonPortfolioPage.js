import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  MainTextSubHeading,
  MainTextAccent
} from "components/PortfolioPageText";

import Cajon from "assets/portfolio/postCajon/cajon.png";
import LFP from "assets/portfolio/postCajon/lfp.png";
import LFPSketch from "assets/portfolio/postCajon/lfpSketch.jpg";
import ProblemSpace from "assets/portfolio/postCajon/docs/mfpProblemSpace.pdf";
import AL from "assets/portfolio/postCajon/docs/AL.pdf";
import PersonaInterviews from "assets/portfolio/postCajon/docs/personaInterviews.pdf";
import UserManual from "assets/portfolio/postCajon/docs/userManual.pdf";

const PrimaryLink = styled.a`
  color: ${props => props.color};
  :hover,
  :focus,
  :active {
    color: ${props => props.hovercolor};
  }
`;

const ImageFlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  display: flex;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  img {
    width: ${props => props.width};
    height: 100%;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      width: 100%;
    }
  }
`;

const RequirementList = styled.ol`
  margin-top: ${props => props.theme.padding.sixteen};
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
                  <li>1. Bagpipes</li>
                  <li>2. Cajon</li>
                  <li>3. Rainstick</li>
                  <li>4. Beatboxing</li>
                  <li>5. Lute</li>
                </RequirementList>
                The Cajon, a peruvian drum, was selected because of it's
                simplicity. It was realistic to build one in 3 months, and there
                was a lot of freedom in improving it.
              </span>
              <img src={Cajon} alt="cajon" width="30%" />
            </ImageFlexWrapper>
          </MainText>
        </TextGroup>
        {/* <TextGroup heading="Sprint Map">
          <MainText>
            There were many problems associated with the ergonomics of the
            cajón. We created a sprint map to better understand where to focus
            our design efforts.
          </MainText>
        </TextGroup>
        <TextGroup heading="Problem Statement">
          <MainText>
            We then listed some problems we found the cajon:
            <RequirementList>
              <li>Posture Problems</li>
              <li>Wrist Strain</li>
              <li>Sound limitations - not a great solo instrument</li>
              <li>Height limitations</li>
            </RequirementList>
            <MainTextAccent>
              Develop an improved cajon that enhances the ergonomics of the
              playing experience with respect to posture and strain while
              increasing the portability and expressibility of the playing
              experience.
            </MainTextAccent>
          </MainText>
        </TextGroup>
        <TextGroup heading="Low Fidelity Prototype (LFP)">
          <MainText>
            <ImageFlexWrapper>
              <span>
                On the second day of the Google Sprint, each member of the group
                brought research to share with other members of possible things
                to include in our solution. We learned that a lot of products
                that involve physical user interactions haves similar ergonomic
                issues. Thus, we could draw parallels by referencing the
                ergonomic improvements of chairs, wrist-guards, etc... to get an
                idea of how the ergonomics of the cajon could be improved. Then
                we drew possible solutions based on our research. The following
                components/enhancements were chosen (through a heat mapping
                exercise) for our low fidelity prototype (LFP):
                <RequirementList>
                  <li>Back Support</li>
                  <li>Adjustable Height</li>
                  <li>Curved Top of Tapa (Wrist Support)</li>
                  <li>Seating Cushion</li>
                  <li>Adjustable Playing Surface</li>
                </RequirementList>
              </span>
              <img src={LFP} alt="lfp" width="50%" />
            </ImageFlexWrapper>
            <img src={LFPSketch} alt="lfp sketch" width="50%" />
          </MainText>
        </TextGroup>
        <TextGroup heading="User Testing pt. 1">
          <MainText>
            Concurrently, we also performed user interviews with casual cajon
            players as well as a professor from Wilfred Laurier University who
            specializes in creating instruments.
            <MainTextSubHeading>Key Insights</MainTextSubHeading>
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
              <li>Handles for portability would be nice</li>
              <li>Pedal/latch to change tuning/sound mid-song would be nice</li>
              <li>
                Cajon could have a looper - box-shape is limiting because with
                other drums, people add things like shakers to their feet to add
                to the music
              </li>
            </RequirementList>
            In addition, we also performed some user-testing with members in our
            class using our LFP.
          </MainText>
        </TextGroup>
        <TextGroup heading="Medium Fidelity Prototype (MFP)">
          <MainText>
            As a group, we discussed about the next steps for our MFP and
            realized that we had to clarify our design scope and focus. We
            updated our requirements as follows:
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
            <PrimaryLink
              onClick={() => {
                window.open(ProblemSpace);
              }}
            >
              Problem Space
            </PrimaryLink>{" "}
          </MainText>
        </TextGroup> */}
        {/* <TextGroup heading="User Testing pt. 2">
          <MainText>We tested ...</MainText>
          <MainTextAccent>Then we had a revolation.</MainTextAccent>
        </TextGroup> */}
        <TextGroup heading="Additional Information">
          <MainText>
            <ul>
              <li>
                <PrimaryLink
                  onClick={() => {
                    window.open(UserManual);
                  }}
                >
                  User Manual
                </PrimaryLink>
              </li>
              <li>
                <PrimaryLink
                  onClick={() => {
                    window.open(PersonaInterviews);
                  }}
                >
                  Persona Interview Summary
                </PrimaryLink>
              </li>
              <li>
                <PrimaryLink
                  onClick={() => {
                    window.open(AL);
                  }}
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
            <PrimaryLink href="mailto:jessiehywon@gmail.com?Subject=Hello">
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
