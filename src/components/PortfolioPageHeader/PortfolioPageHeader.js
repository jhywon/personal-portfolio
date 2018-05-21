import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import * as PropShapes from 'utils/propShapes';
import { ContentWrapper } from 'components/ContentWrapper';
import { ChangePage } from 'components/ChangePage';

const Wrapper = styled.header`
  ${props => props.theme.flex.center};
  align-items: center;
  background-image: url(${props => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: ${props => props.theme.dimensions.portfolioHeader.height};
`;

const Content = styled(ContentWrapper)`
  ${props => props.theme.flex.spaceBetween};
  flex-direction: row;
`;

const ProjectTitle = styled.h2`
  padding-bottom: ${props => props.theme.padding.eight};
  color: ${props => props.theme.colors.text.white};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-bottom: 0;
  }
`;

const Keywords = styled.h4`
  padding-bottom: ${props => props.theme.padding.sixteen};
  color: ${props => props.theme.colors.text.white};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-bottom: ${props => props.theme.padding.eight};
  }
`;

const Description = styled.h5`
  color: ${props => props.theme.colors.text.white};
`;

const ChangePageBig = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    display: none;
  }
  top: 48%;
  position: fixed;
  z-index: 2;
`;

const ChangePageBigLeft = ChangePageBig.extend`
  left: 50px;
`;

const ChangePageBigRight = ChangePageBig.extend`
  right: 50px;
`;

const ChangePageSmall = styled.div`
  ${props => props.theme.flex.spaceBetween};
  margin-top: ${props => props.theme.padding.fourtyEight};
  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-top: ${props => props.theme.padding.thirtyTwo};
  }
`;

const PortfolioPageHeader = props => (
  <React.Fragment>
    <Wrapper background={props.background}>
      {props.previous && (
        <ChangePageBigLeft>
          <ChangePage page={props.previous} />
        </ChangePageBigLeft>
      )}
      <Content>
        <React.Fragment>
          <ProjectTitle>{props.mainHeading}</ProjectTitle>
          <Keywords>{props.keywords}</Keywords>
          <Description>{props.description}</Description>
        </React.Fragment>
        <ChangePageSmall>
          {props.previous && <ChangePage page={props.previous} />}
          {props.next && <ChangePage page={props.next} next />}
        </ChangePageSmall>
      </Content>
      {props.next && (
        <ChangePageBigRight>
          <ChangePage page={props.next} next />
        </ChangePageBigRight>
      )}
    </Wrapper>
  </React.Fragment>
);

PortfolioPageHeader.propTypes = {
  mainHeading: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
  previous: PropShapes.portfolioData,
  next: PropShapes.portfolioData,
};

PortfolioPageHeader.defaultProps = {
  background: () => {},
  previous: '',
  next: '',
};

export default PortfolioPageHeader;
