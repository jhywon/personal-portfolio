import {
  CognitePortfolioPage,
  SlikPortfolioPage,
  JobminePortfolioPage,
  PathPortfolioPage,
  PlanItPortfolioPage,
  PostCajonPortfolioPage
} from "components/PortfolioPages";

import CognitePreview from "assets/portfolio/cognite/cognitePreview.png";
import SlikPreview from "assets/portfolio/slikPortfolio/slikPortfolioPreview.png";
import JobminePreview from "assets/portfolio/jobmine/jobminePreview.png";
import PathPreview from "assets/portfolio/path/pathPreview.png";
import PlanItPreview from "assets/portfolio/planIt/planItPreview.png";
import PostCajonPreview from "assets/portfolio/postCajon/postCajonPreview.png";

import CogniteLogo from "assets/portfolio/cognite/logo.png";
import SlikLogo from "assets/portfolio/slikPortfolio/logo.png";
import JobmineLogo from "assets/portfolio/jobmine/logo.png";
import PathLogo from "assets/portfolio/path/logo.png";
import PlanItLogo from "assets/portfolio/planIt/logo.png";
import PostCajonLogo from "assets/portfolio/postCajon/logo.png";

import CogniteBackground from "assets/portfolio/cognite/background.png";
import SlikBackground from "assets/portfolio/slikPortfolio/background.png";
import JobmineBackground from "assets/portfolio/jobmine/background.png";
import PathBackground from "assets/portfolio/path/background.png";
import PlanItBackground from "assets/portfolio/planIt/background.png";

const portfolioData = [
  {
    id: 1,
    title: "Cognite",
    link: "/portfolio/cognite",
    component: CognitePortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: CognitePreview,
    logo: CogniteLogo,
    background: CogniteBackground,
    gradient: "linear-gradient(to bottom right, #4592B2, #8b9fa7)",
    primary: "#4592B2",
    primaryLight: "#b4dced",
    linkColor: "#cbe6f2"
  },
  {
    id: 2,
    title: "Jobmine",
    link: "/portfolio/jobmine",
    component: JobminePortfolioPage,
    subHeading: "UI/UX Design & Human Factors",
    gridImage: JobminePreview,
    logo: JobmineLogo,
    background: JobmineBackground,
    gradient: "linear-gradient(to bottom right, #1d4a83, #54a2c7)",
    primary: "#1d4a83",
    primaryLight: "#aecbef",
    linkColor: "#d4e4f7"
  },
  {
    id: 3,
    title: "Slik",
    link: "/portfolio/slik",
    component: SlikPortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: SlikPreview,
    logo: SlikLogo,
    background: SlikBackground,
    gradient: "linear-gradient(to bottom right, #a466c9, #516da4)",
    primary: "#a466c9",
    primaryLight: "#d1b0e5",
    linkColor: "#eddcf7"
  },
  {
    id: 4,
    title: "Post Cajón",
    link: "/portfolio/postcajon",
    component: PostCajonPortfolioPage,
    subHeading: "Electronic Drum Design & Development",
    gridImage: PostCajonPreview,
    logo: PostCajonLogo,
    // background: "",
    gradient: "linear-gradient(to bottom right, #F1C672, #754A2B)",
    primary: "#754A2B",
    primaryLight: "#e5c5b0",
    linkColor: "#ead8cc"
  },
  {
    id: 5,
    title: "Path",
    link: "/portfolio/path",
    component: PathPortfolioPage,
    subHeading: "App Design & Development",
    gridImage: PathPreview,
    logo: PathLogo,
    background: PathBackground,
    gradient: "linear-gradient(to bottom right, #319d4d, #84da6e)",
    primary: "#319d4d",
    primaryLight: "#a0efb5",
    linkColor: "#cbefd5"
  },
  {
    id: 6,
    title: "Plan It",
    link: "/portfolio/planit",
    component: PlanItPortfolioPage,
    subHeading: "Game Design & Development",
    gridImage: PlanItPreview,
    logo: PlanItLogo,
    background: PlanItBackground,
    gradient: "linear-gradient(to bottom right, #2a649f, #2BA097)",
    primary: "#2a649f",
    primaryLight: "#9bcdff",
    linkColor: "#d2e4f7"
  }
];

export default portfolioData;
