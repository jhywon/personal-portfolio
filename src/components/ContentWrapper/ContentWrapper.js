import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Content = styled.div`
  margin: 0 ${props => props.theme.padding.fourtyEight};
  max-width: ${props => props.theme.dimensions.maxWidth};
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 0 ${props => props.theme.padding.thirtyTwo};
  }
  z-index: 1;
`;

const ContentWrapper = props => <Content>{props.children}</Content>;

ContentWrapper.propTypes = {
  children: PropTypes.node
};

ContentWrapper.defaultProps = {
  children: null
};

export default ContentWrapper;
