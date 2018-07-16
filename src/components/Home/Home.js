import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ContentWrapper } from "components/ContentWrapper";
import { PrimaryButton } from "components/Button";
import { AnimatedBackground } from "components/AnimatedBackground";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  height: 100vh;
`;

const MainHeading = styled.h1`
  margin-bottom: ${props => props.theme.padding.eight};
`;

const SubHeading = styled.h4``;

const MainText = styled.h5`
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

const Links = styled.p``;

class Home extends React.Component {
  componentDidMount() {
    document.title = "Jessie Won";
  }

  render() {
    return (
      <React.Fragment>
        <AnimatedBackground />
        <Wrapper>
          <ContentWrapper>
            <MainHeading>Jessie Won</MainHeading>
            <SubHeading>Designer, Engineer, and Major Foodie</SubHeading>
            <MainText>
              Currently studying in Waterloo and searching for a{" "}
              <strong>Summer 2019</strong> internship opportunity
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
      </React.Fragment>
    );
  }
}

export default Home;
