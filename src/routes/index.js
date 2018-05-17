import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled, { withTheme } from "styled-components";
import { history } from "store";

import portfolioData from "utils/portfolioData";

import { HomeContainer, AboutContainer } from "containers";

// import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
import { PortfolioSection } from "components/PortfolioSection";

const Container = styled.div`
  text-align: left;
`;

function mapPortfolioPages() {
  return portfolioData.map((Page, index) => {
    const next = index === portfolioData.length - 1 ? 0 : index + 1;
    const previous = index === 0 ? portfolioData.length - 1 : index - 1;
    return (
      <Route
        exact
        key={Page.id}
        path={Page.link}
        render={() => (
          <Page.component
            key={Page.id}
            id={Page.id}
            title={Page.title}
            subHeading={Page.subHeading}
            next={portfolioData[next]}
            previous={portfolioData[previous]}
            gradient={Page.gradient}
            primary={Page.primary}
            primaryLight={Page.primaryLight}
            logo={Page.logo}
          />
        )}
      />
    );
  });
}

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <React.Fragment>
        <NavBar />
        <Container>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/about" component={AboutContainer} />
          <Route
            exact
            path="/portfolio"
            render={() => <PortfolioSection content={portfolioData} />}
          />
          {mapPortfolioPages()}
        </Container>
        {/* <Footer /> */}
      </React.Fragment>
    </ConnectedRouter>
  );
}

export default withTheme(Routes);
