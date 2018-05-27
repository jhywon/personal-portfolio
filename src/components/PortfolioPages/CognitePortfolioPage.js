import React from "react";
import styled, { withTheme } from "styled-components";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  MainTextSubHeading
} from "components/PortfolioPageText";

import OldHomeDesktop from "assets/portfolio/cognite/old/oldHomeDesktop.png";
import OldHomeMobile from "assets/portfolio/cognite/old/oldHomeMobile.png";
import OldTeam from "assets/portfolio/cognite/old/oldTeam.png";
import OldCareers from "assets/portfolio/cognite/old/oldCareers.png";
import NewHomeDesktop from "assets/portfolio/cognite/new/home.png";
// import NewAboutDesktop from "assets/portfolio/cognite/new/about.png";
import NewAboutTeam from "assets/portfolio/cognite/new/aboutTeam.png";
import NewTeamDesktop from "assets/portfolio/cognite/new/team.png";
import NewCareers from "assets/portfolio/cognite/new/newCareers.png";
import TeamMock from "assets/portfolio/cognite/new/teamMock.png";
import ColorPalette from "assets/portfolio/cognite/new/colorPalette.png";
import StyleGuide from "assets/portfolio/cognite/new/styleGuide.pdf";

const PrimaryLink = styled.a`
  color: ${props => props.color};
  :hover,
  :focus,
  :active {
    color: ${props => props.hovercolor};
  }
`;

const FlexWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  flex-wrap: wrap;
`;

// const HalfSection = styled.span`
//   width: 49%;
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     width: 100%;
//   }
// `;

const HalfImageWrapper = styled.div`
  ${props => props.theme.flex.flexStart};
  width: 49%;
  flex-direction: column;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
  margin: ${props => props.theme.padding.sixteen} 0;
  img {
    width: ${props => (props.mobile ? "60%" : "100%")};
  }
`;

// const HalfImage = styled.img`
//   width: 49%;
//   height: 100%;
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     width: 100%;
//   }
// `;

const Image = styled.img`
  margin: ${props => props.theme.padding.sixteen} 0;
  width: 100%;
  height: 100%;
  max-width: ${props => props.theme.dimensions.maxPortfolioImageWidth};
`;

const List = styled.ol`
  margin: ${props => props.theme.padding.sixteen} 0;
`;

class CognitePortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Cognite";
  }
  render() {
    return (
      <PortfolioPage
        description="A redesign of Cognite's company website."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background">
          <MainText>
            Cognite is a successul industrial IoT startup based in Norway. They
            had grown to over 50 employees during their first year as a company,
            and large recruiting efforts were being made in order to fulfill
            client requests.
          </MainText>
        </TextGroup>
        <TextGroup heading="Problem">
          <MainText>
            A large blocker to Cognite's recruiting efforts was the quality of
            their site. This was a quick website thrown together on Wordpress,
            since it was not Cognite's priority at the time. However, with the
            increasing recruiting demand, it was difficult to attract people to
            the Front End / Design team since the website did not reflect strong
            Front End Development and Design skills at the company.
          </MainText>
        </TextGroup>
        <TextGroup heading="Goal">
          <MainText>
            An intiative started to redesign Cognite's website to have a better
            user experience and upgraded content, to give a better
            representation of working at Cognite and ultimately support
            Cognite's recruiting efforts. I was the design lead of this project.
            <br />
            <br />
            <strong>NOTE:</strong> This was not my main project while working at
            Cognite. My primary project is under NDA, but I would love to chat
            about it if you're interested in learning more :)
          </MainText>
        </TextGroup>
        <TextGroup heading="Process">
          <MainText>
            The first thing I did, was address the main problems with the
            current website, and set goals for how to improve them.
          </MainText>
          <List>
            <li>
              1. The content was dry, and did not effectively showcase the
              values of Cognite.
            </li>
            <li>
              2. The website was not responsive, thus had a very poor user
              experience on mobile.
            </li>
            <li>3. The website was not very visually appealing.</li>
            <li>
              4. The "vibe" from the website seemed very corporate, rather than
              a fun, tech start-up. This made it very difficult to attract young
              talent.
            </li>
          </List>
          <MainText>
            These concerns are shown in the screenshots below:
          </MainText>
          <FlexWrapper>
            <HalfImageWrapper>
              <h5>Old Home - Desktop</h5>
              <img src={OldHomeDesktop} alt="old home desktop" />
            </HalfImageWrapper>
            <HalfImageWrapper mobile>
              <h5>Old Home - Mobile</h5>
              <img src={OldHomeMobile} alt="old home desktop" />
            </HalfImageWrapper>
          </FlexWrapper>
          <MainTextSubHeading>Content Improvement</MainTextSubHeading>
          <MainText>
            Before starting the design, a lot of updated and modernized content
            was required from the marketing teams. Generating this content would
            take a significant amount of time, so this was brought up to the
            Head of Marketing so they could get started on the content.
            <br />
            <br />
            Based on the websites of competitors, the following categories were
            defined and given to marketing. Although most sites had many more
            sections, this would be a good starting point.
          </MainText>
          <List>
            <li>1. Home / Landing page / Introduction</li>
            <li>2. Product information</li>
            <li>3. About the company</li>
            <li>4. Team</li>
            <li>5. Careers</li>
          </List>
        </TextGroup>
        <TextGroup heading="Main Design">
          <MainText>
            After conducting research on competitors and modern websites, the
            Home, About, and Careers pages were designed and iterated upon. The
            color palette below were chosen based off of Cognite's branding, and
            the initial iteration of the style guide I created can be found{" "}
            <PrimaryLink
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
              onClick={() => {
                window.open(StyleGuide);
              }}
              target="_new"
            >
              here
            </PrimaryLink>
            . However, the design was generally very simple. The main focus was
            on the Team and Careers pages, as these were the most lacking in the
            existing design, and would have the biggest impact in enhancing
            recruiting efforts.
          </MainText>
          <Image src={ColorPalette} alt="color palette" />
        </TextGroup>
        <TextGroup heading="Team Page">
          <MainText>
            The main goal of this redesign initiative was to better support
            recruiting efforts. The biggest concern with the existing website
            was the corporate impression it gave, This was due to both the
            text-heavy design, and the lack of diversity and culture information
            on the site. This was especially prevalent in the About page, where
            the "team" was only executives and were all dressed the same.
          </MainText>
          <MainText>
            My team and I proposed a more fun Team page, inspired by Venmo's{" "}
            <PrimaryLink
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
              href="https://venmo.com/team/"
              target="_new"
            >
              team page
            </PrimaryLink>. After further research, we found that many modern
            companies were doing the same, so we proposed a page with photos and
            a short biography of everyone, as shown in the preliminary mockup
            below.
          </MainText>
          <FlexWrapper>
            <HalfImageWrapper>
              <h5>Old Team Section</h5>
              <img src={OldTeam} alt="old team" />
            </HalfImageWrapper>
            <HalfImageWrapper>
              <h5>New Team Mockup </h5>
              <img src={TeamMock} alt="team mock" />
            </HalfImageWrapper>
          </FlexWrapper>
          <MainText>
            However, the images of the team in blue shirts still gave a very
            corporate vibe. The idea of "mug shots" of everybody at the company
            (haha very funny) was proposed to enhance the start-up vibe of the
            website. The page was iterated, and is shown below! It can also be
            viewed{" "}
            <PrimaryLink
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
              href="https://cognite.com/team/"
              target="_new"
            >
              here
            </PrimaryLink>.
          </MainText>
          <Image src={NewTeamDesktop} alt="about" />
          <MainText>
            After further evaluation with marketing, this did not align with
            Cognite's image from a business perspective. It was great for
            recruiting, but for investors and clients spending multi-million
            dollars on our product, it was impractical. Accordingly, this
            redesigned team page was nested and "hidden" under the careers tab,
            and the Executive team was added again into the About page. The
            content for the executive team did not change, but the design was
            updated.
          </MainText>
          <Image src={NewAboutTeam} alt="new about team" />
        </TextGroup>
        <TextGroup heading="Careers Page">
          <MainText>
            Similarly to the Team page, it was important to highlight the unique
            working culture at Cognite.
          </MainText>
          <FlexWrapper>
            <HalfImageWrapper>
              <h5>Old Careers Section</h5>
              <img src={OldCareers} alt="old careers" />
            </HalfImageWrapper>
            <HalfImageWrapper>
              <h5>New Careers Section </h5>
              <img src={NewCareers} alt="new careers" />
            </HalfImageWrapper>
          </FlexWrapper>
        </TextGroup>
        <TextGroup heading="Development">
          <MainText>
            This website was built using <strong>ReactJS</strong> on the
            front-end, and <strong>Wordpress</strong> and <strong>PHP</strong>{" "}
            on the backend. A custom theme was created though Wordpress' REST
            API, so everything could be fully customized, while allowing non
            technical teams to edit the content through Wordpress.
          </MainText>
        </TextGroup>
        <TextGroup heading="Final Design">
          <MainText>
            After multiple iterations, a final design was approved and launched.
            There are many other components to the website in the roadmap, but
            regardless, this was a significant improvement to the previous site.
          </MainText>
          <Image src={NewHomeDesktop} alt="home" />
          <MainText>
            Check out the live site{" "}
            <PrimaryLink
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
              href="http://www.cognite.com"
              target="_new"
            >
              here
            </PrimaryLink>!
          </MainText>
        </TextGroup>
      </PortfolioPage>
    );
  }
}

CognitePortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData.isRequired,
  next: PropShapes.portfolioData.isRequired
};

export default withTheme(CognitePortfolioPage);
