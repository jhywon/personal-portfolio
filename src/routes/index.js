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

// function password() {
//   var testV = 1;
//   var pass1 = prompt("Enter the password to view this page", "");
//   while (testV < 3) {
//     if (!pass1) history.go(-1);
//     if (pass1.toLowerCase() === "plangrid") {
//       break;
//     }
//     testV += 1;
//     pass1 = prompt("Access denied - password incorrect, please try again.", "");
//   }
//   if ((pass1.toLowerCase() !== "password") & (testV === 3)) {
//     return false;
//   }
//   return true;
// }

function mapPortfolioPages() {
  return portfolioData.map((Page, index) => {
    const next =
      index === 7 ? 0 : index === portfolioData.length - 1 ? 0 : index + 1;
    // const previous = index === 0 ? portfolioData.length - 1 : index - 1;
    const previous = index === 0 ? 7 : index - 1;
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
