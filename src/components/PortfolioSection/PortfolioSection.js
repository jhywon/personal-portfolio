import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { Header } from "components/Header";
import { ContentWrapper } from "components/ContentWrapper";
import { PortfolioGridItem } from "components/PortfolioGridItem";

const StyledWrapper = styled.div`
  ${props => props.theme.flex.center};
  padding-top: ${props => props.theme.padding.fourtyEight};
`;

const PortfolioGrid = styled.ul`
  ${props => props.theme.flex.spaceBetween};
  align-items: center;
  flex-wrap: wrap;
`;

class PortfolioSection extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Portfolio";
  }
  render() {
    return (
      <React.Fragment>
        <Header mainHeading="Portfolio" />
        <StyledWrapper>
          <ContentWrapper>
            <PortfolioGrid>
              {this.props.content.map(page => (
                <React.Fragment key={page.id}>
                  {!page.hide && (
                    <PortfolioGridItem
                      background={page.gridImage}
                      link={page.link}
                      mainHeading={page.title}
                      subHeading={page.subHeading}
                    />
                  )}
                </React.Fragment>
              ))}
            </PortfolioGrid>
          </ContentWrapper>
        </StyledWrapper>
      </React.Fragment>
    );
  }
}

PortfolioSection.propTypes = {
  content: PropTypes.arrayOf(PropShapes.portfolioData),
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string)
    })
  }).isRequired
};

export default withTheme(PortfolioSection);
