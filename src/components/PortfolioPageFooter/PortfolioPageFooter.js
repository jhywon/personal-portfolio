import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import * as PropShapes from "utils/propShapes";
import { ContentWrapper } from "components/ContentWrapper";
import { DefaultButton } from "components/Button";
import { ChangePage } from "components/ChangePage";

const Wrapper = styled.div`
  ${props => props.theme.flex.center};
  color: ${props => props.theme.colors.text.black};
  background: ${props =>
    props.background || props.theme.colors.background.white};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: ${props => props.theme.padding.eighty};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-bottom: ${props => props.theme.padding.fourtyEight};
  }
`;

const Content = styled.div`
  align-items: center;
  ${props => props.theme.flex.spaceBetween};
`;

const StyledChangePage = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    display: none;
  }
`;

const PortfolioPageFooter = props => (
  <Wrapper background={props.page.background}>
    <ContentWrapper>
      <Content>
        {!props.page.hide && (
          <StyledChangePage>
            <ChangePage page={props.previous} />
          </StyledChangePage>
        )}
        <Link to="/portfolio">
          <DefaultButton borderColor={props.page.primary}>
            Back to Portfolio
          </DefaultButton>
        </Link>
        {!props.page.hide && (
          <StyledChangePage>
            <ChangePage page={props.next} next />
          </StyledChangePage>
        )}
      </Content>
    </ContentWrapper>
  </Wrapper>
);

PortfolioPageFooter.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData,
  next: PropShapes.portfolioData
};

PortfolioPageFooter.defaultProps = {
  previous: {},
  next: {}
};

export default PortfolioPageFooter;
