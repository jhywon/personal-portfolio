import {
  CognitePortfolioPage,
  SlikPortfolioPage,
  JobminePortfolioPage,
  PathPortfolioPage,
  PlanItPortfolioPage
} from "components/PortfolioPages";

import CognitePreview from "assets/portfolio/cognite/cognitePreview.png";
import SlikPreview from "assets/portfolio/slikPortfolio/slikPortfolioPreview.png";
import JobminePreview from "assets/portfolio/jobmine/jobminePreview.png";
import PathPreview from "assets/portfolio/path/pathPreview.png";
import PlanItPreview from "assets/portfolio/planIt/planItPreview.png";

import CogniteLogo from "assets/portfolio/cognite/logo.png";
import SlikLogo from "assets/portfolio/slikPortfolio/logo.png";
import JobmineLogo from "assets/portfolio/slikPortfolio/logo.png";
import PathLogo from "assets/portfolio/path/logo.png";
import PlanItLogo from "assets/portfolio/planIt/logo.png";

const portfolioData = [
  {
    id: 1,
    title: "Cognite",
    link: "/portfolio/cognite",
    component: CognitePortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: CognitePreview,
    logo: CogniteLogo,
    gradient: "linear-gradient(to bottom right, #749bad, #778084)",
    primary: "#4592B2",
    primaryLight: "#397a96"
  },
  {
    id: 2,
    title: "Slik",
    link: "/portfolio/slik",
    component: SlikPortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: SlikPreview,
    logo: SlikLogo,
    gradient: "linear-gradient(to bottom right, #896b8c, #6d788e)",
    primary: "#903e99",
    primaryLight: "#896b8c"
  },
  {
    id: 3,
    title: "Jobmine",
    link: "/portfolio/jobmine",
    component: JobminePortfolioPage,
    subHeading: "UI/UX Design & Human Factors",
    gridImage: JobminePreview,
    logo: JobmineLogo,
    gradient: "linear-gradient(to bottom right, #153154, #778084)",
    primary: "#0e3e7a",
    primaryLight: "#153154"
  },
  {
    id: 4,
    title: "Path",
    link: "/portfolio/path",
    component: PathPortfolioPage,
    subHeading: "App Design & Development",
    gridImage: PathPreview,
    logo: PathLogo,
    gradient: "linear-gradient(to bottom right, #3a7048, #778084)",
    primary: "#208c3c",
    primaryLight: "#3a7048"
  },
  {
    id: 5,
    title: "Plan It",
    link: "/portfolio/planit",
    component: PlanItPortfolioPage,
    subHeading: "Game Design & Development",
    gridImage: PlanItPreview,
    logo: PlanItLogo,
    gradient: "linear-gradient(to bottom right, #396770, #39705a)",
    primary: "#2b8da0",
    primaryLight: "#396770"
  }
];

export default portfolioData;
