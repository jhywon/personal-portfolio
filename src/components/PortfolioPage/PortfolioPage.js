import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as PropShapes from 'utils/propShapes';
import { PortfolioPageHeader } from 'components/PortfolioPageHeader';
import { PortfolioPageFooter } from 'components/PortfolioPageFooter';
import { ContentWrapper } from 'components/ContentWrapper';

const PortfolioSection = styled.div`
  ${props => props.theme.flex.center};
  padding: ${props => props.theme.padding.eighty} 0;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: ${props => props.theme.padding.fourtyEight} 0;
  }
`;

const PortfolioPage = props => (
  <React.Fragment>
    <PortfolioPageHeader
      page={props.page}
      previous={props.previous}
      next={props.next}
      description={props.description}
    />
    <PortfolioSection>
      <ContentWrapper>{props.children}</ContentWrapper>
    </PortfolioSection>
    <PortfolioPageFooter
      page={props.page}
      previous={props.previous}
      next={props.next}
    />
  </React.Fragment>
);

PortfolioPage.propTypes = {
  description: PropTypes.string.isRequired,
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData.isRequired,
  next: PropShapes.portfolioData.isRequired,
  children: PropTypes.node,
};

PortfolioPage.defaultProps = {
  children: null,
};

export default PortfolioPage;
