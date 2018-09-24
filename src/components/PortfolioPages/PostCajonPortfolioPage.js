import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  MainTextSubHeading
} from "components/PortfolioPageText";

import Cajon from "assets/portfolio/postCajon/cajon.png";
import AL from "assets/portfolio/postCajon/AL.pdf";

const FlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  display: flex;
  width: 100%;
`;

const PrimaryLink = styled.a`
  color: ${props => props.color};
  :hover,
  :focus,
  :active {
    color: ${props => props.hovercolor};
  }
`;

const IntroImage = styled.img`
  width: 300px;
  height: 100%;
`;

class PostCajonPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Post Cajón";
  }
  render() {
    return (
      <PortfolioPage
        description="The design of an electronic cajón."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background">
          <MainText>
            The main project in my third year design course was to redesign and
            digitize a non-Western instruemnt. Over the course of about 3
            months, in groups of 6, we started with the Google Design Sprint,
            then continued to rapid prototype and user test to reach the best
            design possible.
          </MainText>
        </TextGroup>
        <TextGroup heading="Choosing an Instrument">
          <MainText>
            The only requirement was that it had to be a non-Western / orchestra
            instrument. We did some research, and came up with a list of
            feasible instruments. We discussed and voted on our favourites, and
            narrowed it down to the following:
            <br />
            <br />
            <ol>
              <li>1. Bagpipes</li>
              <li>2. Cajon</li>
              <li>3. Rainstick</li>
              <li>4. Beatboxing</li>
              <li>5. Lute</li>
            </ol>
            <br />
            <FlexWrapper>
              <IntroImage src={Cajon} alt="cajon" />
              <span>
                The Cajon, a peruvian drum, was selected because of it's
                simplicity. It was realistic to build one in 3 months, and there
                was a lot of freedom in improving it. We then listed some
                problems we found the cajon:
                <br />
                <br />
                <ol>
                  <li>Posture Problems</li>
                  <li>Wrist Strain</li>
                  <li>Sound limitations - not a great solo instrument</li>
                  <li>Height limitations</li>
                </ol>
              </span>
            </FlexWrapper>
          </MainText>
        </TextGroup>
        <TextGroup heading="Problem Statement">
          <MainText>
            Develop an improved cajon that enhances the ergonomics of the
            playing experience with respect to posture and strain while
            increasing the portability and expressibility of the playing
            experience.
          </MainText>
        </TextGroup>
        <TextGroup heading="Low Fidelity Prototype (LFP)">
          <MainText>asdfadsfs</MainText>
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
            of a cajón, and build a significantly more ergonomic solution. Click{" "}
            <PrimaryLink
              onClick={() => {
                window.open(AL);
              }}
            >
              here
            </PrimaryLink>{" "}
            to view our Accountability Log of the project. Notes and progress
            from each work session were documented here, and it goes more
            in-depth about our design process.
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
