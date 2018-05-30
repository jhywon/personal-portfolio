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

import IvarAasen from "assets/portfolio/opsup/ivarAasen.png";
import Mocks from "assets/portfolio/opsup/mocks.jpg";
import Tags from "assets/portfolio/opsup/tags.jpg";
import Pnids from "assets/portfolio/opsup/pnids.jpg";
import PersonaOne from "assets/portfolio/opsup/persona1.png";
import PersonaTwo from "assets/portfolio/opsup/persona2.png";
import PersonaOneFull from "assets/portfolio/opsup/persona1Full.png";
import PersonaTwoFull from "assets/portfolio/opsup/persona2Full.png";

// const PrimaryLink = styled.a`
//   color: ${props => props.color};
//   :hover,
//   :focus,
//   :active {
//     color: ${props => props.hovercolor};
//   }
// `;

const FlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  flex-wrap: wrap;
`;

const HalfImageWrapper = styled.div`
  ${props => props.theme.flex.flexStart};
  width: 49%;
  flex-direction: column;
  margin: ${props => props.theme.padding.sixteen} 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
  img {
    width: ${props => (props.mobile ? "60%" : "100%")};
  }
`;

const Image = styled.img`
  margin: ${props => props.theme.padding.sixteen} 0;
  width: 100%;
  max-width: ${props =>
    props.full ? "100%" : props.theme.dimensions.maxPortfolioImageWidth};
  cursor: ${props => props.onClick && "pointer"};
`;

class OpSupPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Operations Support";
  }
  render() {
    return (
      <PortfolioPage
        description="The development of an application to enhance the processes of offshore oil workers."
        page={this.props.page}
      >
        <TextGroup heading="Background">
          <MainText>
            AkerBP is an oil exploration and development company, with multiple
            offshore oil rigs. These oil rigs, including Ivar Aasen pictured
            below, cost approximately $1 million USD to operate daily.
            Furthermore, since they are remote, can only be accessed by
            helicopter, and it costs $10000 USD to transport one oil worker to
            the rig. Thus, there are 3 groups of workers who work 2 weeks shifts
            on the rig.
          </MainText>
          <Image src={IvarAasen} alt="IvarAasen" />
        </TextGroup>
        <TextGroup heading="Problem Statement">
          <MainText>
            The operation of oil rigs is extremely costly, and mistakes are even
            more expensive. Not only are there many human errors, but these
            mistakes put the lives of many oil workers at risk.
          </MainText>
        </TextGroup>
        <TextGroup heading="Mission">
          <MainText>
            Enabling the field worker to be as efficient as possible through
            making relevant information available everywhere.
          </MainText>
        </TextGroup>
        <TextGroup heading="Personas">
          <Image
            full
            onClick={() => {
              window.open(PersonaOneFull);
            }}
            src={PersonaOne}
            alt="persona1"
          />
          <Image
            full
            onClick={() => {
              window.open(PersonaTwoFull);
            }}
            src={PersonaTwo}
            alt="persona2"
          />
        </TextGroup>
        <TextGroup heading="Workshop">
          <FlexWrapper>
            <div>
              <MainTextSubHeading>Tags</MainTextSubHeading>
              <Image src={Tags} alt="Tags" />
            </div>
            <HalfImageWrapper>
              <MainTextSubHeading>PNIDS</MainTextSubHeading>
              <img src={Pnids} alt="Pnids" />
            </HalfImageWrapper>
            <HalfImageWrapper>
              <MainTextSubHeading>Mockups</MainTextSubHeading>
              <img src={Mocks} alt="Mocks" />
            </HalfImageWrapper>
          </FlexWrapper>
        </TextGroup>
      </PortfolioPage>
    );
  }
}

OpSupPortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string)
    })
  }).isRequired
};

export default withTheme(OpSupPortfolioPage);
