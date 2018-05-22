import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import * as PropShapes from 'utils/propShapes';
import { PortfolioPage } from 'components/PortfolioPage';
import {
  MainText,
  TextGroup,
  // MainTextSubHeading,
} from 'components/PortfolioPageText';

import OldHomeDesktop from 'assets/portfolio/cognite/old/oldHomeDesktop.png';
import OldHomeMobile from 'assets/portfolio/cognite/old/oldHomeMobile.png';
import NewHomeDesktop from 'assets/portfolio/cognite/new/home.png';
// import NewAboutDesktop from 'assets/portfolio/cognite/new/about.png';
import NewTeamDesktop from 'assets/portfolio/cognite/new/team.png';

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

const IntroImageWrapper = styled.div`
  ${props => props.theme.flex.flexStart};
  flex-direction: column;
  width: 49%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const IntroImage = styled.img`
  width: 100%;
`;

const MobileIntroImage = styled.img`
  width: 50%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 75%;
  }
`;

const Image = styled.img`
  margin: ${props => props.theme.padding.sixteen} 0;
  width: 100%;
  height: 100%;
  max-width: 800px;
`;

class CognitePortfolioPage extends React.Component {
  componentDidMount() {
    document.title = 'Jessie W | Cognite';
  }
  render() {
    return (
      <PortfolioPage
        description="A redesign of Cognite's company website."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background:">
          <MainText>
            Cognite is a successul industrial IoT startup based in Norway. They
            had grown to over 50 employees during their first year as a company,
            and large recruiting efforts were being made in order to fulfill
            client requests.
          </MainText>
        </TextGroup>
        <TextGroup heading="Problem:">
          <MainText>
            A large blocker to Cognite's recruiting efforts was the quality of
            their site. This was a quick website thrown together on Wordpress,
            since it was not Cognite's priority at the time. However, with the
            increasing recruiting demand, it was difficult to attract people to
            the Front End / Design team since the website did not reflect strong
            Front End Development and Design skills at the company.
          </MainText>
          <FlexWrapper>
            <IntroImageWrapper>
              <h5>Old Home - Desktop</h5>
              <IntroImage src={OldHomeDesktop} alt="old home desktop" />
            </IntroImageWrapper>
            <IntroImageWrapper>
              <h5>Old Home - Mobile</h5>
              <MobileIntroImage src={OldHomeMobile} alt="old home desktop" />
            </IntroImageWrapper>
          </FlexWrapper>
        </TextGroup>
        <TextGroup heading="Goal:">
          <MainText>
            Redesign Cognite's website to have a better user experience and
            upgraded content, to give a better representation of working at
            Cognite and ultimately support Cognite's recruiting efforts.
            <br />
            <br />
            <strong>NOTE:</strong> This was not my main project while working at
            Cognite. My primary project is under NDA, but I would love to chat
            about it if you're interested in learning more :)
          </MainText>
        </TextGroup>
        <TextGroup heading="Process:">
          <MainText>
            The first thing I did, was address the main problems with the
            current website, and set goals for how to improve them.
            <br />
            1. The content was dry, and did not effectively showcase the values
            of Cognite.
            <br />
            2. The website was not responsive, thus had a very poor user
            experience on mobile.
            <br />
            3. The website was not very visually appealing.
            <br />
            4. The "vibe" from the website seemed very corporate, rather than a
            fun, tech start-up. This made it very difficult to attract young
            talent.
          </MainText>
        </TextGroup>
        <TextGroup heading="Team Page:">
          <MainText>
            The main goal of this redesign initiative was to better support
            recruiting efforts. The biggest concern with the existing website
            was the corporate impression it gave, This was due to both the
            text-heavy design, and the lack of diversity and culture information
            on the site. This was especially prevalent in the About page, where
            the "team" was only executives and were all dressed the same.
            <br />
            <br />
            My team and I proposed a more fun Team page, with "mug shots" on
            everybody on the team (haha very funny). This would include everyone
            at the company, and would also include a short biography with fun
            facts about everyone.
            <br />
            <br />
            The redesigned page is shown below:
          </MainText>
          <Image src={NewTeamDesktop} alt="about" />
        </TextGroup>
        <TextGroup heading="Final Design:">
          <MainText>
            After multiple iterations, a final design was approved and launched.
            There are many other components to the website in the roadmap, but
            regardless, this was a significant improvmeent to the previous site.
          </MainText>
          <Image src={NewHomeDesktop} alt="home" />
          <MainText>
            Check out the live site{' '}
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
  next: PropShapes.portfolioData.isRequired,
  id: PropTypes.number.isRequired,
};

export default withTheme(CognitePortfolioPage);
