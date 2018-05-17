import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";

import { ContentWrapper } from "components/ContentWrapper";
import { PrimaryButton } from "components/Button";
// import { AboutSection } from "components/AboutSection";
// import { PortfolioSection } from "components/PortfolioSection";

import Burger from "assets/burger.png";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
`;

const MainHeading = styled.h1`
  margin-bottom: ${props => props.theme.padding.eight};
`;

const SubHeading = styled.h3``;

const MainText = styled.h4`
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

const Links = styled.p``;

const StyledParticles = styled(Particles)`
  position: absolute;
  width: 100%;
  height: 100%;
`;

class Home extends React.Component {
  componentDidMount() {
    document.title = "Jessie Won";
  }

  render() {
    return (
      <React.Fragment>
        <StyledParticles
          params={{
            particles: {
              number: {
                value: 30
              },
              shape: {
                type: "image",
                image: {
                  src: Burger,
                  width: 100,
                  height: 100
                }
              },
              color: {
                value: ["#3CC157", "#2AA7FF", "#171717", "#f4a142", "#ed421c"]
              },
              size: {
                value: 20,
                random: true
              },
              line_linked: {
                emable: false
              },
              move: {
                speed: 6
              }
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 50,
                  duration: 3
                },
                push: {
                  particles_nb: 2,
                  distance: 50
                }
              }
            },
            retina_detect: true
          }}
        />
        <Wrapper>
          <ContentWrapper>
            <MainHeading>Jessie Won</MainHeading>
            <SubHeading>Designer, Engineer, and Major Foodie</SubHeading>
            <MainText>
              Currently studying in Waterloo and searching for a{" "}
              <strong>Fall 2018</strong> internship opportunity
            </MainText>
            <Links>
              <Link to="/about">
                <PrimaryButton>About Me</PrimaryButton>
              </Link>{" "}
              <Link to="/portfolio">
                <PrimaryButton>Portfolio</PrimaryButton>
              </Link>
            </Links>
          </ContentWrapper>
        </Wrapper>
        {/* <AboutSection />
    <PortfolioSection /> */}
      </React.Fragment>
    );
  }
}

export default Home;
