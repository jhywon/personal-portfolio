import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { Link as DefaultLink } from "react-router-dom";

import { MainSection } from "components/MainSection";
import { Header } from "components/Header";
// import { PrimaryButton } from "components/Button";

import AvatarOne from "assets/about/jessie.png";
import AvatarOneHover from "assets/about/jessie-1.png";
import AvatarTwo from "assets/about/jessie2.png";
import AvatarTwoHover from "assets/about/jessie2-1.png";
import AvatarThree from "assets/about/jessie3.png";
import AvatarThreeHover from "assets/about/jessie3-1.png";
import Resume from "assets/resume.pdf";

const TextAvatarGroup = styled.div`
  ${props => props.theme.flex.flexStart};
  width: 100%;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
  margin-bottom: ${props => props.theme.padding.fourtyEight};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const AvatarText = styled.p`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const AvatarImage = styled.img`
  height: 180px;
  width: auto;
  margin: 0 ${props => props.theme.padding.thirtyTwo} 0 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 0 ${props => props.theme.padding.thirtyTwo} 0;
  }
`;

const Heading = styled.h6`
  margin-bottom: ${props => props.theme.padding.sixteen};
`;

const Link = styled(DefaultLink)`
  box-shadow: inset 0 -0.6em ${props => props.theme.colors.primaryHighlight};
  :hover,
  :focus,
  :active {
    box-shadow: inset 0 -0.6em ${props => props.theme.colors.primaryHighlightHover};
    color: ${props => props.theme.colors.text.black};
  }
`;

const ResumeLink = styled.a`
  box-shadow: inset 0 -0.6em ${props => props.theme.colors.primaryHighlight};
  :hover,
  :focus,
  :active {
    box-shadow: inset 0 -0.6em ${props => props.theme.colors.primaryHighlightHover};
    color: ${props => props.theme.colors.text.black};
  }
`;

class AboutSection extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | About";
  }

  render() {
    return (
      <React.Fragment>
        <Header mainHeading="About" />
        <MainSection>
          <TextAvatarGroup>
            <AvatarImage
              src={AvatarOne}
              onMouseOver={e => {
                e.currentTarget.src = AvatarOneHover;
              }}
              onMouseOut={e => {
                e.currentTarget.src = AvatarOne;
              }}
              alt="AvatarOne"
            />
            <TextWrapper>
              <Heading>Hi, I&#39;m Jessie!</Heading>
              <AvatarText>
                I love to eat, play board games, and try new things! I&#39;ll be
                graduating from the University of Waterloo in April and am
                currently looking for an exciting full-time Product Manager
                position! If you know a good fit, or just want to chat I would
                love talk about how I can help over coffee or some delicious
                food. Check out my{" "}
                <ResumeLink
                  onClick={() => {
                    window.open(Resume);
                  }}
                >
                  resume
                </ResumeLink>{" "}
                to learn more about my experiences.
              </AvatarText>
            </TextWrapper>
          </TextAvatarGroup>
          <TextAvatarGroup>
            <AvatarImage
              src={AvatarTwo}
              onMouseOver={e => {
                e.currentTarget.src = AvatarTwoHover;
              }}
              onMouseOut={e => {
                e.currentTarget.src = AvatarTwo;
              }}
              alt="AvatarTwo"
            />
            <TextWrapper>
              <Heading>What do I do?</Heading>
              <AvatarText>
                I spend most of my time working towards my degree, and am
                especially interested in learning and understanding the{" "}
                <Link to="/portfolio">design</Link> process. I enjoy working
                closely with users in creating a great experience, love a good
                challenge, and am eager to continue exploring the different
                aspects of engineering.
              </AvatarText>
              {/* <Link to="/portfolio">
                <PrimaryButton>View My Portfolio</PrimaryButton>
              </Link> */}
            </TextWrapper>
          </TextAvatarGroup>
          <TextAvatarGroup>
            <AvatarImage
              src={AvatarThree}
              onMouseOver={e => {
                e.currentTarget.src = AvatarThreeHover;
              }}
              onMouseOut={e => {
                e.currentTarget.src = AvatarThree;
              }}
              alt="AvatarThree"
            />
            <TextWrapper>
              <Heading>And in my spare time?</Heading>
              <AvatarText>
                <strong>I love to EAT</strong>! One day I want to open a food
                truck, and I hope to continue trying new foods and going to as
                many restaurants as I can. In the rare case that I'm not eating,
                you'll probably find me playing board games, laughing at my own
                jokes, or planning my next <Link to="/travel">trip</Link>.
              </AvatarText>
            </TextWrapper>
          </TextAvatarGroup>
        </MainSection>
      </React.Fragment>
    );
  }
}

AboutSection.propTypes = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string)
    })
  }).isRequired
};

export default withTheme(AboutSection);
