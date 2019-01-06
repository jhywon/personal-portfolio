import React from "react";
import styled, { withTheme } from "styled-components";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  // MainTextAccent,
  PrimaryLink,
  MainTextSubHeading
} from "components/PortfolioPageText";

import Design from "assets/portfolio/plangridDice/design.png";
import Logo from "assets/portfolio/plangridDice/logoFinal.png";
import LogoIterations from "assets/portfolio/plangridDice/logoIterations.png";
import Color1 from "assets/portfolio/plangridDice/color1.png";
import Color2 from "assets/portfolio/plangridDice/color2.png";
import Color3 from "assets/portfolio/plangridDice/color3.png";

const Image = styled.img`
  margin: ${props => props.theme.padding.sixteen} 0;
  width: ${props => (props.width ? props.width : "100%")};
  height: 100%;
  max-width: ${props => props.theme.dimensions.maxPortfolioImageWidth};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    padding: ${props => props.theme.padding.sixteen} 0;
  }
`;

const RequirementList = styled.ol`
  li {
    list-style-type: circle;
  }
`;

const FlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

class PlanGridPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | PlanGrid International";
  }
  render() {
    return (
      <PortfolioPage
        description="The branding and design of PlanGrid's international expansion for the infrastructure team."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background">
          <MainText>
            While completing an internship at{" "}
            <PrimaryLink
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
              href="https://www.plangrid.com/"
              target="_new"
            >
              PlanGrid
            </PrimaryLink>
            , the company was planning to build a second data center in
            Australia, and focus their efforts on further expanding
            internationally. This would be one of the biggest and most exciting
            projects for the Infrastructure team, so we decided to create a logo
            and an illustration to get the team excited!
          </MainText>
          <MainTextSubHeading>Key Information</MainTextSubHeading>
          <RequirementList>
            <li>
              PlanGrid was focusing their expansion into 3 countries: Australia,
              Canada, and the UK
            </li>
            <li>The data center was the highlight of the project</li>
            <li>The name of the project was DICE</li>
          </RequirementList>
        </TextGroup>
        {/* <TextGroup heading="Workshop">
          <MainText>
            I didn't fully understand the project, so I ran a workshop with 5
            members of the Infrastructure team to better understand their
            outlook on the project. This workshop included word brainstorming
            and crazy 8's. Here are some of the results!
          </MainText>
        </TextGroup> */}
        <TextGroup heading="Logo">
          <MainTextSubHeading>Iterations</MainTextSubHeading>
          <Image width="50%" src={LogoIterations} alt="logo iterations" />
          <MainTextSubHeading>Final Design</MainTextSubHeading>
          <Image width="30%" src={Logo} alt="final logo" />
        </TextGroup>
        <TextGroup heading="Illustration">
          <MainTextSubHeading>Color Explorations</MainTextSubHeading>
          <FlexWrapper>
            <Image width="32%" src={Color1} alt="color1" />
            <Image width="32%" src={Color2} alt="color2" />
            <Image width="32%" src={Color3} alt="color3" />
          </FlexWrapper>
          <MainTextSubHeading>Final Design</MainTextSubHeading>
          <MainText>
            I wanted to encompass all 4 countries, as well as the theme of
            construction and data. I focused on iconic buildings and symbols, r
            and allocated 2 tiles per country. I was also able to include the
            project name, logo, and a cloud as well. Try guessing what each tile
            represents! (PS. The bottom right cartoon is the infrastructure
            team's mascot)
          </MainText>
          <Image src={Design} alt="final design" />
        </TextGroup>
      </PortfolioPage>
    );
  }
}

PlanGridPortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData.isRequired,
  next: PropShapes.portfolioData.isRequired
};

export default withTheme(PlanGridPortfolioPage);
