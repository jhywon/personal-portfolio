import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MainSection } from "components/MainSection";
import { PrimaryButton } from "components/Button";

import NotFoundAvatar from "assets/NotFoundAvatar.png";

const Content = styled.div`
  ${props => props.theme.flex.flexStart};
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    margin-top: ${props => props.theme.padding.hundredTwenty};
  }
  margin-top: ${props => props.theme.padding.eighty};
`;

const Text = styled.div`
  ${props => props.theme.flex.flexStart};
  flex-direction: column;
`;

const Number = styled.h1`
  font-size: 150px;
  font-weight: 500;
  margin-bottom: 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 100px;
  }
`;

const Avatar = styled.img`
  width: 20%;
  margin: 0 ${props => props.theme.padding.eighty} 0 0;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 50%;
  }
`;

const Heading = styled.h5`
  margin-bottom: ${props => props.theme.padding.twentyFour};
`;

class NotFound extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | 404";
  }

  render() {
    return (
      <MainSection>
        <Content>
          <Avatar src={NotFoundAvatar} alt="not found" />
          <Text>
            <Number>404</Number>
            <Heading>
              Oops! Sorry, this is embarrassing. I must have eaten the page you
              were looking for.
            </Heading>
            <Link to="/">
              <PrimaryButton>Back to Home</PrimaryButton>
            </Link>
          </Text>
        </Content>
      </MainSection>
    );
  }
}

export default NotFound;
