import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import styled, { withTheme } from "styled-components";
import { history } from "store";

import portfolioData from "utils/portfolioData";

import { HomeContainer, AboutContainer } from "containers";

import { NavBar } from "components/NavBar";
import { PortfolioSection } from "components/PortfolioSection";
import { VideoSection } from "components/VideoSection";
import { NotFound } from "components/NotFound";

const Container = styled.div`
  text-align: left;
`;

function mapPortfolioPages() {
  return portfolioData.map((Page, index) => {
    const next = index === portfolioData.length - 2 ? 0 : index + 1;
    const previous = index === 0 ? portfolioData.length - 2 : index - 1;
    return (
      <Route
        exact
        key={Page.id}
        path={Page.link}
        render={() => (
          <Page.component
            key={Page.id}
            id={Page.id}
            page={Page}
            next={portfolioData[next]}
            previous={portfolioData[previous]}
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
        <NavBar portfolioData={portfolioData} />
        <Container>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/about" component={AboutContainer} />
            <Route
              exact
              path="/portfolio"
              render={() => <PortfolioSection content={portfolioData} />}
            />
            <Route exact path="/travel" component={VideoSection} />
            {mapPortfolioPages()}
            <Route exact path="*" component={NotFound} />
          </Switch>
        </Container>
      </React.Fragment>
    </ConnectedRouter>
  );
}

export default withTheme(Routes);
