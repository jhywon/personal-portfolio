import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { ContentWrapper } from "components/ContentWrapper";
import { ChangePage } from "components/ChangePage";

const Wrapper = styled.header`
  ${props => props.theme.flex.spaceAround};
  align-items: center;
  background: ${props => props.background};
  height: ${props => props.theme.dimensions.portfolioHeader.height};
  overflow: hidden;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    height: ${props => props.theme.dimensions.portfolioHeader.heightSmall};
  }
`;

const Content = styled(ContentWrapper)`
  ${props => props.theme.flex.spaceBetween};
  flex-direction: row;
  align-items: center;
`;

const HeaderText = styled.div`
  width: 100%;
`;

const ProjectTitle = styled.h2`
  padding-bottom: ${props => props.theme.padding.eight};
  color: ${props => props.theme.colors.text.white};
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-bottom: 0;
  }
`;

const Keywords = styled.h6`
  padding-bottom: ${props => props.theme.padding.sixteen};
  color: ${props => props.theme.colors.text.white};
  font-weight: 400;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding-bottom: ${props => props.theme.padding.eight};
  }
`;

const Description = styled.h5`
  color: ${props => props.theme.colors.text.white};
`;

const ImageWrapper = styled.div`
  align-self: flex-start;
  padding-top: ${props => props.theme.padding.hundred};
  margin-left: ${props => props.theme.padding.fourtyEight};
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.background};
  height: ${props => props.theme.dimensions.portfolioHeader.imageSectionHeight};
  overflow: hidden;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
`;

const ImageSectionWrapper = styled(ContentWrapper)`
  width: unset;
`;

const Screenshot = styled.img`
  width: 100%;
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

// const ChangePageSmall = styled.div`
//   ${props => props.theme.flex.spaceBetween};
//   margin-top: ${props => props.theme.padding.fourtyEight};
//   @media (min-width: ${props => props.theme.breakpoints.xl}) {
//     display: none;
//   }
//   @media (max-width: ${props => props.theme.breakpoints.sm}) {
//     margin-top: ${props => props.theme.padding.thirtyTwo};
//   }
// `;

const PortfolioPageHeader = props => (
  <React.Fragment>
    {!props.page.hide && (
      <ChangePageBigLeft>
        <ChangePage page={props.previous} />
      </ChangePageBigLeft>
    )}
    <Wrapper background={props.page.primary}>
      <Content>
        <HeaderText>
          <ProjectTitle>{props.page.title}</ProjectTitle>
          <Keywords>{props.page.subHeading}</Keywords>
          <Description>{props.description}</Description>
        </HeaderText>
        <ImageWrapper>
          <Screenshot src={props.page.screenShot} />
        </ImageWrapper>
        {/* <ChangePageSmall>
          {!props.page.hide && <ChangePage page={props.previous} />}
          {!props.page.hide && <ChangePage page={props.next} next />}
        </ChangePageSmall> */}
      </Content>
    </Wrapper>
    <ImageSection background={props.page.primary}>
      <ImageSectionWrapper>
        <Screenshot src={props.page.screenShot} />
      </ImageSectionWrapper>
    </ImageSection>
    {!props.page.hide && (
      <ChangePageBigRight>
        <ChangePage page={props.next} next />
      </ChangePageBigRight>
    )}
  </React.Fragment>
);

PortfolioPageHeader.propTypes = {
  description: PropTypes.string.isRequired,
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData,
  next: PropShapes.portfolioData
};

PortfolioPageHeader.defaultProps = {
  previous: {},
  next: {}
};

export default PortfolioPageHeader;
