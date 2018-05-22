import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import * as PropShapes from 'utils/propShapes';
import { PortfolioPage } from 'components/PortfolioPage';
import {
  MainText,
  TextGroup,
  MainTextSubHeading,
} from 'components/PortfolioPageText';

import PathFinal from 'assets/portfolio/path/finalScreen.png';
import Logo from 'assets/portfolio/path/circleLogo.png';

const Image = styled.img`
  margin-top: ${props => props.theme.padding.sixteen};
  width: 100%;
`;

class PathPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = 'Jessie W | Path';
  }

  render() {
    return (
      <PortfolioPage
        description="A redesign of Jobmine, a job board for the University of Waterloo."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background:">
          <MainText>
            At Finhacks, my team and I developed an Android application, Path.
            Path is a navigation tool that outputted the best public transit
            route based on the different tasks and the estimated time needed at
            each location, as inputed by the user. Using the Google Maps API, we
            cross referenced public transit schedules, and outputted the most
            efficient route and order of task completion. I worked predominantly
            on the UI, designing the different mockups.
          </MainText>
        </TextGroup>
        <TextGroup heading="Task:">
          <MainText>
            Design / develop a product related to FinTech in 72 hours.
          </MainText>
        </TextGroup>
        <TextGroup heading="Problem:">
          <MainText>
            Once the task was defined, my team and I began to evaluate everyday
            problems with regards to FinTech. As students, none of us owned a
            vehicle at the time, and in the winter, the only way we could get
            around was through public transit. We all primarily used Maps,
            Google Maps, and the GRT (Grand River Transit) applications to get
            around, but none of them allowed for the mapping of multiple
            destinations when using public transit.
          </MainText>
          <MainTextSubHeading>Scenario:</MainTextSubHeading>
          <MainText>
            John is a student with a very busy schedule and relies on public
            transportation to get around. This Sunday, he needs to get
            groceries, get a haircut, and go to the pharmacy. He knows that
            groceries will take him about 1 hour, the pharmacy is a quick drop
            in and should take no longer than 15 minutes, and his haircut will
            take about 1 hour as well.
          </MainText>
          <MainText>
            He knows that he needs to get everything done today, but there is no
            way for him to map the best order and way to do this, since bussess
            genereally only come every 15-30 minutes. As a result, he searches
            the bus route and time to go to the grocery store, then figures
            everything else out once he gets to the grocery store. This results
            in him having to waste time waiting for busses and planning.
          </MainText>
        </TextGroup>
        <TextGroup heading="Goal:">
          <MainText>
            Design and develop a mobile application that allows for the user to
            map multiple public transit routes at a time. This includes the
            prioritization of destinations, and inputting the estimated amount
            of time to be spent at each location. The output should be the best
            route and order for the user to take so that as little time as
            possible is spent waiting for busses.
          </MainText>
        </TextGroup>
        <TextGroup heading="Logo Design:">
          <MainText>
            Once the name of Path was decided, I was tasked to design a logo.
            After countless iterations, the logo below was finalized. This
            design was inspired by the typical "pin" on all mapping
            applications.
          </MainText>
          <img src={Logo} alt="logo" />
        </TextGroup>
        <TextGroup heading="Final Design:">
          <MainText>
            The final design of the application is shown below. This was built
            using <strong>Adobe Illustrator</strong> and{' '}
            <strong>Adobe Photoshop</strong>.
          </MainText>
          <Image src={PathFinal} alt="final design" />
        </TextGroup>
      </PortfolioPage>
    );
  }
}

PathPortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData.isRequired,
  next: PropShapes.portfolioData.isRequired,
  id: PropTypes.number.isRequired,
};

export default withTheme(PathPortfolioPage);
