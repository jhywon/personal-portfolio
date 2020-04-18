import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  MainTextSubHeading,
  MainTextAccent,
  PrimaryLink
} from "components/PortfolioPageText";

import Personas from "assets/portfolio/canopii/personas.png";
import SOC from "assets/portfolio/canopii/soc.png";
import UserFlow from "assets/portfolio/canopii/userflow.png";
import Wireframes from "assets/portfolio/canopii/wireframes.png";
import Iterations from "assets/portfolio/canopii/iterationstakephoto.png";
import HomeSettingsFAQ from "assets/portfolio/canopii/HomeSettingsFAQ.png";
import MockupsOld from "assets/portfolio/canopii/mockupsold.png";
import Mockups from "assets/portfolio/canopii/mockups.png";
import TeamPhoto from "assets/portfolio/canopii/team1.jpg";

import IDFinal from "assets/portfolio/canopii/542designs.png";

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
          <MainText>
            This project was a combination of core engineering design courses
            and interface design course. In the engineering design courses (SYDE
            461/462), the primary objectives were:
          </MainText>
          <RequirementList>
            <li>
              Automate the extraction of tree features such as species and
              location
            </li>
            <li>Make the solution available for residents to use</li>
            <li>
              Make the data collected accessible to Kitchener and compatible
              with their existing street tree inventory
            </li>
          </RequirementList>
          <MainText>
            The Interface Design (SYDE 542) course was an extension of this
            project, focused on improving social engagement. Since this would be
            a citizen science project reliant on volunteers and residents,
            community engagement would be very important. It also has proven
            benefits such as higher awareness surrounding sustainability issues
            and an increased community capacity to fight climate change. The
            primary objectives were:
          </MainText>
          <RequirementList>
            <li>Educate users about urban forestry and the environment</li>
            <li>Encourage users to tag trees</li>
            <li>Increase awareness about urban forest development</li>
            <li>
              Increase the number of trees tagged and added to Kitchener’s tree
              inventory
            </li>
          </RequirementList>
        </TextGroup>
        <TextGroup heading="User Research">
          <MainText>
            After the problem scope was defined and background research was
            conducted, interviews were done to better understand the needs and
            motivations of our users. Results are summarized below.
          </MainText>
          <MainTextAccent>
            "I'd do it if it was a one-time thing that took less than 20
            minutes."
          </MainTextAccent>
          <RequirementList>
            <li>At most 2 private trees per property</li>
            <li>
              Users only had detailed knowledge of trees they planted themselves
            </li>
            <li>Reasons for planting trees were primarily aesthetic</li>
            <li>
              All users were willing to share information about trees to city
              but only if convenient
            </li>
          </RequirementList>
        </TextGroup>
        <TextGroup heading="Personas">
          <MainText>
            Two personas were built to represent our target users, with the
            primary user being homeowners.
          </MainText>
          <LinkImage
            src={Personas}
            alt="personas"
            width="100%"
            onClick={() => {
              window.open(Personas);
            }}
          />
        </TextGroup>
        <TextGroup heading="User Flow and Navigation">
          <MainText>
            The primary function of Canopii would be to tag a tree. This would
            involve taking an image of a tree for both image recognition and for
            additional species verification if necessary. Then, users would go
            through some manual steps for species verification, inputting
            location, and extra tree data but reviewing and submitting. The
            initial proposed flow is shown below.
          </MainText>
          <Center>
            <SmallImage src={UserFlow} alt="userflow" width="100%" />
          </Center>
          <MainText>
            <br /> Additional screens to enhance the UX would be a Home screen
            and a Settings screen for adjusting between manual and automatic
            identification flows. Since there were three main features, this was
            the proposed navigation.
          </MainText>
        </TextGroup>
        <TextGroup heading="Wireframes">
          <MainText>
            First, wireframes were created to lay out content and functionality.
            This helped establish the basic structure of a page before adding
            visual design and content.
          </MainText>
          <Center>
            <SmallImage src={Wireframes} alt="wireframes" width="85%" />
          </Center>
        </TextGroup>
        <TextGroup heading="Iterations and Design Refinement">
          <MainText>
            Then, iterations of higher fidelity mockups were done. This included
            adding colour and visual design.
          </MainText>
          <Center>
            <SmallImage src={MockupsOld} alt="old mocks" width="75%" />
          </Center>
          <MainText>
            <br />
            As the design progressed, numerous iterations and tweaks were done
            on each screen to refine the design. This included using various
            fonts, colours, and controls. An example of some iterations of the
            Take Photo screen are shown.
          </MainText>
          <Center>
            <SmallImage
              src={Iterations}
              alt="iterations take photo"
              width="75%"
            />
          </Center>
        </TextGroup>
        <TextGroup heading="Designed Solution">
          <MainText>
            At the end of the 8 months, we built Canopii. The main tree tagging
            flow can be shown below. Our image processing had a 90.5% Top 5
            species accuracy for trees native to Kitchener and we were able to
            collect data on species, location, and tree type.
          </MainText>
          <Center>
            <SmallImage src={Mockups} alt="mockups" width="100%" />
          </Center>
          <MainText>
            <br />
            The loading, home, settings, and FAQ screens are shown below.
          </MainText>
          <Center>
            <SmallImage
              src={HomeSettingsFAQ}
              alt="home settings faq"
              width="65%"
            />
          </Center>
        </TextGroup>
        <TextGroup heading="Home Screen">
          <MainText>
            As previously mentioned, SYDE 542 was focused on improving social
            engagement. This final home screen design was not implemented due to
            time restrictions.
          </MainText>
          <Center>
            <SmallImage src={IDFinal} alt="542 mocks" width="55%" />
          </Center>
        </TextGroup>
        <TextGroup heading="Team">
          <MainText>
            We worked with{" "}
            <PrimaryLink
              nClick={() => {
                window.open(
                  "https://www.linkedin.com/in/iivkovic/?originalSubdomain=ca"
                );
              }}
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
            >
              Professor Igor Ivkovic
            </PrimaryLink>{" "}
            on this project, with each team member owning various components.
            Pictured from left to right:
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
        <TextGroup heading="Conclusions">
          <MainText>
            The design goals were fulfilled and an application that enabled
            untrained residents to tag a tree was built. The data collected
            would be able to help Kitchener plan their urban forests. Regarding
            the home screen design, adding a slight level of gamification would
            encourage behaviour, and dedicating FAQs to urban forestry would
            educate users on the importance of this project. Overall, Canopii
            was a success!
          </MainText>
        </TextGroup>
        <TextGroup heading="Recommendations and Next Steps">
          <MainTextSubHeading>
            Implement and Test Home Screen
          </MainTextSubHeading>
          <MainText>
            The home screens designed should be implemented into the product.
            Additional testing should be done to measure whether or not it
            encourages tree tagging and increases the number of trees tagged.
            Since there are many feature options for encouraging users, such as
            the recently tagged trees and leaderboard, more thorough testing
            should be done on which is more effective. Then, the order of the
            information displayed can be adjusted if necessary.
          </MainText>
          <MainTextSubHeading>Explore City Integrations</MainTextSubHeading>
          <MainText>
            While the data collected can be accessed and used by the City of
            Kitchener, there are no direct integrations with the government.
            This is a great opportunity for improvement and encouraging
            residents to contribute to the tree inventory. For example, Canopii
            can be a platform where users can directly request tree maintenance
            and plantings. Another option could be notifications on endangered
            species or invasive species. Once a tree is identified, if the City
            has important information about certain trees, such as ash trees
            being at risk of the Emerald Ash Borer, this could be communicated
            to residents. This is a very different perspective of creating
            incentive and should definitely be explored moving forward.
          </MainText>
          <MainTextSubHeading>
            Conduct More In-Person Testing
          </MainTextSubHeading>
          <MainText>
            Unfortunately, this project was done during Winter, which limited
            in-person testing for live trees. More importantly, the project was
            done during the COVID-19 pandemic. Due to social distancing
            measures, in-person testing was limited. Instead, cognitive
            walkthroughs and usability tests were conducted via Google Hangouts.
            If this project were to continue, increased testing with a physical
            prototype would give better insights for improvements.
          </MainText>
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
