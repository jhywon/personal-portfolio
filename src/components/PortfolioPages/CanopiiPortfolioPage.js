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

import Personas from "assets/portfolio/canopii/personas.png";
import SOC from "assets/portfolio/canopii/soc.png";
import HomeSettingsFAQ from "assets/portfolio/canopii/HomeSettingsFAQ.png";
import TeamPhoto from "assets/portfolio/canopii/team1.jpg";

import ConferencePaper461 from "assets/portfolio/canopii/docs/461ConferencePaper.pdf";
import ConferencePaper462 from "assets/portfolio/canopii/docs/462ConferencePaper.pdf";
import NEPitch from "assets/portfolio/canopii/docs/NEPitch.pdf";

const ImageFlexWrapper = styled.div`
  ${props => props.theme.flex.flexStart};
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
  span {
    padding-left: ${props => props.theme.padding.twentyFour};
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      padding-left: 0;
    }
  }
  img {
    width: ${props => props.width};
    height: 100%;
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      width: 100%;
      padding: ${props => props.theme.padding.sixteen} 0;
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

const SmallImage = styled.img`
  width: ${props => props.width};
  height: 100%;
  padding-bottom: ${props => props.theme.padding.thirtyTwo};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    padding: ${props => props.theme.padding.sixteen} 0;
  }
`;

const Strong = styled.span`
  font-weight: 600;
`;

const Center = styled.div`
  ${props => props.theme.flex.center};
`;

class PostCajonPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Canopii";
  }
  render() {
    return (
      <PortfolioPage
        description="The design of a citizen science tree-tagging application to combat climate change."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Motivation">
          <MainText>
            For our fourth-year design project, my team and I were motivated by
            climate change. We wanted to build a product that would help our
            local <Strong>sustainability</Strong> efforts. To do so, we reached
            out to the City of Kitchener to see how we could help.
          </MainText>
        </TextGroup>
        <TextGroup heading="Background">
          <MainText>
            Kitchener has created a{" "}
            <PrimaryLink
              onClick={() => {
                window.open(
                  "https://www.kitchener.ca/en/resourcesGeneral/Documents/UrbanForestStrategyFinal.pdf"
                );
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              Sustainable Urban Forest Strategy
            </PrimaryLink>{" "}
            aimed towards “planning, engaging, maintaining, protecting and
            planting Kitchener’s urban forest” to combat climate change and
            improve city sustainability. A gap in the existing program is the
            lack of tree data on private lands, which composes 56% of their
            urban forest . The city has{" "}
            <PrimaryLink
              onClick={() => {
                window.open(
                  "https://www.kitchener.ca/en/resourcesGeneral/Documents/INS_PARKS_Sustainable_Urban_Forest_Report_Card_2017.pdf"
                );
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              “no information about privately owned trees”
            </PrimaryLink>
            , which prevents them from using environmental modelling software
            vital to effective long-term urban forest planning.
            <br />
            <br />
            Without a comprehensive and up-to-date inventory, cities cannot
            develop accurate plans. For example, cities need to track and
            maintain forest diversity in order to minimize the risk of invasive
            species. They also need to determine the rates of growth and decay
            to optimize where to plant future trees, what species to plant, and
            when to plant them.
          </MainText>
        </TextGroup>
        <TextGroup heading="Existing Solutions and Competitors">
          <MainText>
            The current process for updating a tree inventory is individual
            manual tree tagging, with limited software, survey wheels, tape
            measures, and tree identification keys. Existing tree inventory
            solutions include ArcGis tree inventory and TreesCount!, but they
            either lack government integration or do not automate identification
            or data collection. Existing technologies with automatic
            classification such as PlantSnap and LeafSnap lack location tagging
            and keep their data private. Aerial surveillance also exists as a
            method of data collection, such as correlating LiDAR and ground data
            to obtain descriptions of height and location but no public product
            for this exists, and the technology for tree species is not there
            yet. Satellite imaging does not have the resolution for species
            classification.
          </MainText>
        </TextGroup>
        <TextGroup heading="Situation of Concern">
          <Center>
            <SmallImage src={SOC} alt="soc" width="75%" />
          </Center>
          <MainText>
            The section on the right shows the current system, where Kitchener
            manually adds data from their urban forest into their tree
            inventory. They don't have enough data to use their desired
            modelling software, i-Tree Eco, and cannot perform extensive
            analyses. Canopii extracts tree data from the user’s entry . The
            main system components are the user interface (UI), where users can
            input data, and the back-end, which extracts additional information
            using image recognition and stores it into a database to be
            integrated to Kitchener.
          </MainText>
        </TextGroup>
        <TextGroup heading="Situation Impact Statement">
          <MainTextAccent>
            Design a product to be used by residents in Kitchener with access to
            privately owned trees in order to tag them and improve the city’s
            tree inventory with data on tree species and location.
          </MainTextAccent>
        </TextGroup>
        <TextGroup heading="Goals and Objectives">
          <RequirementList>
            <li>Posture Problems</li>
            <li>Wrist Strain</li>
            <li>Sound limitations - not a great solo instrument</li>
            <li>Height limitations</li>
          </RequirementList>
        </TextGroup>
        <TextGroup heading="Early Design Methods">
          <MainText>Some of the early design methods used were</MainText>
        </TextGroup>
        <TextGroup heading="Personas">
          <LinkImage
            src={Personas}
            alt="personas"
            width="100%"
            onClick={() => {
              window.open(Personas);
            }}
          />
        </TextGroup>
        <TextGroup heading="Designed Solution">
          <Center>
            <SmallImage
              src={HomeSettingsFAQ}
              alt="home settings faq"
              width="90%"
            />
          </Center>
        </TextGroup>
        <TextGroup heading="SYDE 542 Interface Design">
          <MainText>
            SYDE 542 was an interface design course, where my project of focus
            was also Canopii. In this course, I focused on improving social
            engagement.
          </MainText>
        </TextGroup>
        <TextGroup heading="Team">
          <MainText>
            Each member of our team had various responsibilities. Pictured from
            left to right:
          </MainText>
          <ImageFlexWrapper>
            <img src={TeamPhoto} alt="team" width="50%" />
            <span width="100%">
              <MainText>
                <strong>Kevin Luong</strong>
                <br />
                Front-end development
                <br />
                <br />
                <strong>Ethan Liang</strong>
                <br />
                Back-end development
                <br />
                <br />
                <strong>Jessie Won</strong>
                <br />
                Product management and UI/UX design
                <br />
                <br />
                <strong>Derin Denizkusu</strong>
                <br />
                Image processing and data science
              </MainText>
            </span>
          </ImageFlexWrapper>
        </TextGroup>
        <TextGroup heading="Additional Information">
          <MainText>
            <PrimaryLink
              onClick={() => {
                window.open(ConferencePaper461);
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              SYDE 461 Conference Paper
            </PrimaryLink>{" "}
            - Written at the end of the first semester
            <br />
            <PrimaryLink
              onClick={() => {
                window.open(ConferencePaper462);
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              SYDE 462 Conference Paper
            </PrimaryLink>{" "}
            - Written at the end of the project
            <br />
            <PrimaryLink
              onClick={() => {
                window.open(NEPitch);
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              Pitch Slide Deck
            </PrimaryLink>
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
