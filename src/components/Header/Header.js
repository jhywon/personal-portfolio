import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ContentWrapper } from "components/ContentWrapper";

const Wrapper = styled.header`
  ${props => props.theme.flex.center};
  align-items: center;
  color: ${props => props.theme.colors.text.black};
  background: ${props => props.theme.colors.background.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: ${props => props.theme.padding.hundred} 0 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.padding.thirtyTwo} 0 0;
  }
`;

const Title = styled.h2`
  padding-bottom: ${props => props.theme.padding.eight};
`;

const Header = props => (
  <Wrapper>
    <ContentWrapper>
      <Title>{props.mainHeading}</Title>
      {props.children}
    </ContentWrapper>
  </Wrapper>
);

Header.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  children: PropTypes.node
};

Header.defaultProps = {
  children: null
};

export default Header;
