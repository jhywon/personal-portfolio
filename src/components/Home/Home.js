import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ContentWrapper } from "components/ContentWrapper";
import { PrimaryButton } from "components/Button";
import { AnimatedBackground } from "components/AnimatedBackground";

import Resume from "assets/resume.pdf";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  height: 100vh;
`;

const MainHeading = styled.h1`
  margin-bottom: ${props => props.theme.padding.eight};
`;

const SubHeading = styled.h5`
  font-weight: 400;
`;

const MainText = styled.p`
  margin-top: ${props => props.theme.padding.sixteen};
  margin-bottom: ${props => props.theme.padding.twentyFour};
  font-size: 20px;
  letter-spacing: 1px;
`;

const Links = styled.p``;

const StyledLink = styled.a`
  box-shadow: inset 0 -0.6em ${props => props.theme.colors.primaryHighlight};
  :hover,
  :focus,
  :active {
    box-shadow: inset 0 -0.6em ${props => props.theme.colors.primaryHighlightHover};
    color: ${props => props.theme.colors.text.black};
  }
`;

// const ResumeButton = styled(PrimaryButton)`
//   @media (max-width: ${props => props.theme.breakpoints.sm}) {
//     margin-top: 6px;
//   }
// `;

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
            <SubHeading>Product manager who loves to eat</SubHeading>
            <MainText>
              Systems Design Engineering @ University of Waterloo, graduating
              April 2020
              <br />
              On the lookout for exciting full-time product management{" "}
              <StyledLink
                onClick={() => {
                  window.open(Resume);
                }}
              >
                opportunities
              </StyledLink>{" "}
              !
            </MainText>
            <Links>
              <Link to="/about">
                <PrimaryButton>About Me</PrimaryButton>
              </Link>{" "}
              <Link to="/portfolio">
                <PrimaryButton>Portfolio</PrimaryButton>
              </Link>{" "}
              {/* <ResumeButton
                onClick={() => {
                  window.open(Resume);
                }}
              >
                Resume
              </ResumeButton> */}
            </Links>
          </ContentWrapper>
        </Wrapper>
      </React.Fragment>
    );
  }
}

export default Home;
