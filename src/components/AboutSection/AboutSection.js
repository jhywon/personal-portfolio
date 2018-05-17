import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { MainSection } from "components/MainSection";
import { Header } from "components/Header";
import { PrimaryButton } from "components/Button";

import AvatarOne from "assets/jessie.png";
import AvatarTwo from "assets/jessie2.png";
import AvatarThree from "assets/jessie3.png";
import Resume from "assets/resume.pdf";

const TextAvatarGroup = styled.div`
  ${props => props.theme.flex.flexStart};
  align-items: center;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: left;
  }
  margin-bottom: ${props => props.theme.padding.fourtyEight};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.p``;

const AvatarText = MainText.extend`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
  }
`;

const AvatarImage = styled.img`
  height: 150px;
  width: auto;
  margin: 0 ${props => props.theme.padding.thirtyTwo} 0 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    margin: 0 0 ${props => props.theme.padding.thirtyTwo} 0;
  }
`;

const Heading = styled.h3`
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

class AboutSection extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | About";
  }
  render() {
    return (
      <React.Fragment>
        <Header mainHeading="About" />
        <MainSection
          background={this.props.theme.colors.background.white}
          color={this.props.theme.colors.text.black}
        >
          <TextAvatarGroup>
            <AvatarImage src={AvatarOne} alt="AvatarOne" />
            <TextWrapper>
              <Heading>Hi, I&#39;m Jessie!</Heading>
              <AvatarText>
                I&#39;m a third year student studying Systems Design Engineering
                at the University of Waterloo, and an aspiring engineer and
                designer. I&#39;ve had the privilege of completing 4 outstanding
                tech internships in 3 different countries, and am currently in
                search of a new internship opportunity for September to December
                2018. Check out my résumé{" "}
                <a
                  onClick={() => {
                    window.open(Resume);
                  }}
                >
                  here
                </a>{" "}
                to learn more about what I&#39;ve done!
              </AvatarText>
            </TextWrapper>
          </TextAvatarGroup>
          <TextAvatarGroup>
            <AvatarImage src={AvatarTwo} alt="AvatarTwo" />
            <TextWrapper>
              <Heading>What do I do?</Heading>
              <AvatarText>
                I spend most of my days working towards my degree, and am
                especially interested in learning and understanding the design
                process. I love a good challenge, and am eager to continue
                exploring the different aspects of engineering.
                <br />
                <br />
                <Link to="/portfolio">
                  <PrimaryButton>View My Portfolio</PrimaryButton>
                </Link>
              </AvatarText>
            </TextWrapper>
          </TextAvatarGroup>
          <TextAvatarGroup>
            <AvatarImage src={AvatarThree} alt="AvatarThree" />
            <TextWrapper>
              <Heading>And in my spare time?</Heading>
              <AvatarText>
                EAT. I hope to continue travelling, trying new cuisines, and
                going to as many restaurants as I can on the world top 50 list.
                I guess I play some sports too to compensate.
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
