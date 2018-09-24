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
    primaryLight: "#397a96",
    linkColor: "#64afcf"
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
    primaryLight: "#163d6c",
    linkColor: "#4387de"
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
    primaryLight: "#713595",
    linkColor: "#bc73e8"
  },
  {
    id: 4,
    title: "Path",
    link: "/portfolio/path",
    component: PathPortfolioPage,
    subHeading: "App Design & Development",
    gridImage: PathPreview,
    logo: PathLogo,
    background: PathBackground,
    gradient: "linear-gradient(to bottom right, #319d4d, #84da6e)",
    primary: "#319d4d",
    primaryLight: "#26813e",
    linkColor: "#60d27d"
  },
  {
    id: 5,
    title: "Plan It",
    link: "/portfolio/planit",
    component: PlanItPortfolioPage,
    subHeading: "Game Design & Development",
    gridImage: PlanItPreview,
    logo: PlanItLogo,
    background: PlanItBackground,
    gradient: "linear-gradient(to bottom right, #2a649f, #2BA097)",
    primary: "#2a649f",
    primaryLight: "#225282",
    linkColor: "#409af5"
  },
  {
    id: 6,
    title: "Post Cajón",
    link: "/portfolio/postcajon",
    component: PostCajonPortfolioPage,
    subHeading: "Electronic Drum Design & Development",
    gridImage: PostCajonPreview,
    logo: PlanItLogo,
    background: PlanItBackground,
    gradient: "linear-gradient(to bottom right, brown, orange)",
    primary: "brown",
    primaryLight: "brown",
    linkColor: "brown"
  }
];

export default portfolioData;
