import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import { Switch } from 'antd';

import { ContentWrapper } from 'components/ContentWrapper';
import { PrimaryButton } from 'components/Button';

import Burger from 'assets/burger.svg';
import Fries from 'assets/fries.png';

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  height: 100vh;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 99%;
`;

const MainHeading = styled.h1`
  margin-bottom: ${props => props.theme.padding.eight};
`;

const SubHeading = styled.h4``;

const MainText = styled.h5`
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

const Links = styled.p``;

const CheatDay = styled.div`
  position: fixed;
  right: ${props => props.theme.padding.twentyFour};
  bottom: ${props => props.theme.padding.twentyFour};
`;

const CheatDaySwitch = styled(Switch)`
  margin-left: ${props => props.theme.padding.eight};
`;

class Home extends React.Component {
  state = {
    isCheatDay: false,
  };

  componentDidMount() {
    document.title = 'Jessie Won';
  }

  toggleCheatDay = () => {
    this.setState({ isCheatDay: !this.state.isCheatDay });
  };

  render() {
    const FloatingFood = this.state.isCheatDay ? Fries : Burger;
    const StartingValueMultiplier = window.innerWidth > 500 ? 2 : 0.5;
    const StartingValue = this.state.isCheatDay
      ? 30 * StartingValueMultiplier
      : 15 * StartingValueMultiplier;
    return (
      <React.Fragment>
        <StyledParticles
          params={{
            particles: {
              number: {
                value: StartingValue,
              },
              shape: {
                type: 'image',
                image: {
                  src: FloatingFood,
                  width: 100,
                  height: 100,
                },
              },
              color: {
                value: ['#3CC157', '#2AA7FF', '#171717', '#f4a142', '#ed421c'],
              },
              size: {
                value: 20,
                random: true,
              },
              line_linked: {
                emable: false,
              },
              move: {
                speed: 6,
              },
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onhover: {
                  enable: true,
                  mode: ['grab', 'repulse'],
                },
                onclick: {
                  enable: true,
                  mode: 'push',
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 3,
                },
                push: {
                  particles_nb: 2,
                  distance: 50,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <Wrapper>
          <ContentWrapper>
            <MainHeading>Jessie Won</MainHeading>
            <SubHeading>Designer, Engineer, and Major Foodie</SubHeading>
            <MainText>
              Currently studying in Waterloo and searching for a{' '}
              <strong>Fall 2018</strong> internship opportunity
            </MainText>
            <Links>
              <Link to="/about">
                <PrimaryButton>About Me</PrimaryButton>
              </Link>{' '}
              <Link to="/portfolio">
                <PrimaryButton>Portfolio</PrimaryButton>
              </Link>
            </Links>
          </ContentWrapper>
          <CheatDay>
            Cheat Day
            <CheatDaySwitch
              defaultChecked={false}
              onChange={this.toggleCheatDay}
            />
          </CheatDay>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Home;
