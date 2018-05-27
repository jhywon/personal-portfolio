import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

import * as PropShapes from "utils/propShapes";
import { PortfolioPage } from "components/PortfolioPage";
import {
  // MainText,
  TextGroup
  // MainTextSubHeading
} from "components/PortfolioPageText";

// import CollectionsOld from "assets/portfolio/slikPortfolio/collectionsOld.jpg";
// import CollectionsNew from "assets/portfolio/slikPortfolio/collectionsNew.jpg";

// const PrimaryLink = styled.a`
//   color: ${props => props.color};
//   :hover,
//   :focus,
//   :active {
//     color: ${props => props.hovercolor};
//   }
// `;

class OpSupPortfolioPage extends React.Component {
  componentDidMount() {
    document.title = "Jessie W | Operations Support";
  }
  render() {
    return (
      <PortfolioPage
        description="The development of an application to enhance the processes of offshore oil workers."
        page={this.props.page}
      >
        <TextGroup heading="UNDER CONSTRUCTION" />
      </PortfolioPage>
    );
  }
}

OpSupPortfolioPage.propTypes = {
  page: PropShapes.portfolioData.isRequired,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      text: PropTypes.objectOf(PropTypes.string),
      background: PropTypes.objectOf(PropTypes.string)
    })
  }).isRequired
};

export default withTheme(OpSupPortfolioPage);
