import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Icon } from "antd";

import * as PropShapes from "utils/propShapes";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
`;

const StyledLink = styled(Link)`
  ${props => props.theme.flex.center};
  background: ${props => props.gradient};
  border-radius: 100%;
  width: 80px;
  height: 80px;
  color: ${props => props.theme.colors.text.white};
  :hover,
  :focus,
  :active {
    color: ${props => props.theme.colors.text.white};
    background: ${props => props.primary};
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  padding: ${props => props.theme.padding.sixteen};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 15px 0 rgba(0, 0, 0, 0.19);
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 70px;
    height: 70px;
    box-shadow: none;
  }
`;

const Logo = styled.img`
  width: ${props => (props.small ? "35px" : "100%")};
`;

const ChangePage = props => (
  <Wrapper>
    {!props.next && <Icon type="caret-left" />}
    <StyledLink
      to={props.page.link}
      gradient={props.page.gradient}
      primary={props.page.primary}
    >
      <Logo
        small={props.page.title === "Jobmine" || props.page.title === "Path"}
        src={props.page.logo}
        alt={props.page.title}
      />
    </StyledLink>
    {props.next && <Icon type="caret-right" />}
  </Wrapper>
);

ChangePage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  next: PropTypes.bool
};

ChangePage.defaultProps = {
  next: false
};

export default ChangePage;
