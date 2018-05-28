import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  MainText,
  TextGroup,
  MainTextSubHeading
} from "components/PortfolioPageText";

import CollectionsOld from "assets/portfolio/slikPortfolio/collectionsOld.jpg";
import CollectionsNew from "assets/portfolio/slikPortfolio/collectionsNew.jpg";

const PrimaryLink = styled.a`
  color: ${props => props.color};
  :hover,
  :focus,
  :active {
    color: ${props => props.hovercolor};
  }
`;

const ImagesWrapper = styled.div`
  ${props => props.theme.flex.spaceBetween};
  align-items: center;
  flex-wrap: wrap;
`;

const ImageWrapper = styled.div`
  ${props => props.theme.flex.flexStart};
  flex-direction: column;
  width: 49%;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: ${props => props.theme.padding.sixteen} 0;
`;

class SlikPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Slik";
  }
  render() {
    return (
      <PortfolioPage
        description="A redesign of the Slik Portfolio catalog, a boutique line of baths, shower doors, and low-profile bases."
        page={this.props.page}
        previous={this.props.previous}
        next={this.props.next}
      >
        <TextGroup heading="Background">
          <MainText>
            During my second internship at The Tomlin Group, I was tasked to
            upgrade the SLIK Portfolio physical catalog into a web platform.
            Since the plumbing industry was not very computerized, this was one
            of the first in their specific market. That being said, there was
            not too much to work with. I was handed a physical printed catalog
            and the online pdf version for the Slik Portfolio line of baths.
            This project had been completed previously attempted by an external
            company, but the results were not as they had hoped, and did not
            align with the company vision. That being said, they did not exactly
            know what they wanted, and so I started from scratch in designing
            the online catalog.
          </MainText>
        </TextGroup>
        <TextGroup heading="Problem">
          <MainText>
            Every time a Slik Portfolio product was updated, anything from a
            small tag change to adding a new product, the catalog pdf would need
            to be reprinted. Each catalog cost approximately 45CAD to print, and
            thus, this was not an optimal process for a constantly changing
            product line.
          </MainText>
        </TextGroup>
        <TextGroup heading="Goal">
          <MainText>
            Design and implement an online catalog that would allow customers to
            browse through all products in the Slik Portfolio line, while
            aligning with the product vision and being easy to update.
          </MainText>
        </TextGroup>
        <TextGroup heading="Implementation">
          <MainText>
            As aforementioned, solving this problem had been attempted by an
            external company, but the result did not align with the company
            vision. The biggest concerns were that this website was
            non-responsive, and had an non-ideal user experience, even on
            desktop. There were about 30 items in each collection, but having
            each item displayed vertically after one another, and no fixed menu
            bar, it was very difficult to see more than 3 items in a collection
            at a time, as well as understand what collection the user was on. It
            was also difficult to navigate between items, and ultimately, the
            design did not resemble that of a high-end product line.
          </MainText>
          <MainTextSubHeading>PROCESS:</MainTextSubHeading>
          <MainText>
            In order to solve these problems, I first started off with simple
            sketches of a catalog template. I wanted something that was simple
            and clean, since this was the vibe of the product.
            <br />
            <br />
            Starting from scratch, I implemented a basic MySQL database, then
            designed and developed the digital catalog. From designing the
            icons, editing images to the front-end and back-end development, the
            company preferred this interface over their current site.
            <br />
            <br />
            The languages used in this project were:{" "}
            <strong>HTML, CSS, JQuery, PHP,</strong> and <strong>SQL</strong>.
          </MainText>
        </TextGroup>
        <TextGroup heading="Final Design">
          <MainText>Here is a preview of the upgrade!</MainText>
          <ImagesWrapper>
            <ImageWrapper>
              <h5>Old Collections Page:</h5>
              <Image src={CollectionsOld} alt="old-collections" />
            </ImageWrapper>
            <ImageWrapper>
              <h5>New Collections Page:</h5>
              <Image src={CollectionsNew} alt="new-collections" />
            </ImageWrapper>
          </ImagesWrapper>
          <MainText>
            Check out the live site{" "}
            <PrimaryLink
              color={this.props.page.linkColor}
              hovercolor={this.props.page.primaryLight}
              href="http://www.slikportfolio.com"
              target="_new"
            >
              here
            </PrimaryLink>!
          </MainText>
        </TextGroup>
        <TextGroup heading="Comments">
          <MainText>
            There have been many changes to the website since working at the
            Tomlin Group, but I was able to build a foundation for the team to
            work off of. This was a great learning experience, but since this
            was my first internship as a developer, with minimal experience and
            mentorship, the design and development is not perfect. There are
            many things I would change, but overall the project was a great
            success! It was a great improvement for the company and we were all
            very happy with the results :)
          </MainText>
        </TextGroup>
      </PortfolioPage>
    );
  }
}

SlikPortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  previous: PropShapes.portfolioData.isRequired,
  next: PropShapes.portfolioData.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string)
    })
  }).isRequired
};

export default withTheme(SlikPortfolioPage);
