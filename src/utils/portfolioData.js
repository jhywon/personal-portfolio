import {
  CognitePortfolioPage,
  SlikPortfolioPage,
  JobminePortfolioPage,
  PathPortfolioPage,
  PlanGridPortfolioPage,
  PlanItPortfolioPage,
  PostCajonPortfolioPage
} from "components/PortfolioPages";

import CognitePreview from "assets/portfolio/cognite/cognitePreview3.png";
import SlikPreview from "assets/portfolio/slikPortfolio/slikPortfolioPreview3.png";
import PathPreview from "assets/portfolio/path/pathPreview3.png";
import JobminePreview from "assets/portfolio/jobmine/jobminePreview3.png";
import PlanItPreview from "assets/portfolio/planIt/planItPreview3.png";
import PlanGridPreview from "assets/portfolio/plangridDice/plangridPreview3.png";
import PostCajonPreview from "assets/portfolio/postCajon/postCajonPreview3.png";

import CogniteLogo from "assets/portfolio/cognite/logo.png";
import SlikLogo from "assets/portfolio/slikPortfolio/logo.png";
import JobmineLogo from "assets/portfolio/jobmine/logo.png";
import PathLogo from "assets/portfolio/path/logo.png";
import PlanItLogo from "assets/portfolio/planIt/logo.png";
import PlanGridLogo from "assets/portfolio/plangridDice/logo.png";
import PostCajonLogo from "assets/portfolio/postCajon/logo.png";

import CogniteBackground from "assets/portfolio/cognite/background.png";
import SlikBackground from "assets/portfolio/slikPortfolio/background.png";
import JobmineBackground from "assets/portfolio/jobmine/background.png";
import PathBackground from "assets/portfolio/path/background.png";
import PlanItBackground from "assets/portfolio/planIt/background.png";
import PlanGridBackground from "assets/portfolio/plangridDice/background.png";
import PostCajonBackground from "assets/portfolio/postCajon/background.png";

const portfolioData = [
  {
    id: 0,
    title: "Cognite",
    link: "/portfolio/cognite",
    component: CognitePortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: CognitePreview,
    logo: CogniteLogo,
    background: CogniteBackground,
    gradient: "linear-gradient(to bottom right, #74C0D2, #8b9fa7)",
    primary: "#74C0D2",
    primaryLight: "#b4dced",
    linkColor: "#cbe6f2"
  },
  {
    id: 1,
    title: "Jobmine",
    link: "/portfolio/jobmine",
    component: JobminePortfolioPage,
    subHeading: "UI/UX Design & Human Factors",
    gridImage: JobminePreview,
    logo: JobmineLogo,
    background: JobmineBackground,
    gradient: "linear-gradient(to bottom right, #6C9CE2, #54a2c7)",
    primary: "#6C9CE2",
    primaryLight: "#aecbef",
    linkColor: "#d4e4f7"
  },
  {
    id: 2,
    title: "Slik",
    link: "/portfolio/slik",
    component: SlikPortfolioPage,
    subHeading: "Web Design & Development",
    gridImage: SlikPreview,
    logo: SlikLogo,
    background: SlikBackground,
    gradient: "linear-gradient(to bottom right, #B69FD5, #516da4)",
    primary: "#B69FD5",
    primaryLight: "#d1b0e5",
    linkColor: "#eddcf7"
  },
  {
    id: 3,
    title: "Post Cajón",
    link: "/portfolio/postcajon",
    component: PostCajonPortfolioPage,
    subHeading: "Electronic Drum Design & Development",
    gridImage: PostCajonPreview,
    logo: PostCajonLogo,
    background: PostCajonBackground,
    gradient: "linear-gradient(to bottom right, #E0CB7F, #754A2B)",
    primary: "#E0CB7F",
    primaryLight: "#e5c5b0",
    linkColor: "#ead8cc"
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
    gradient: "linear-gradient(to bottom right, #8acc3f, #399121)",
    primary: "#8acc3f",
    primaryLight: "#a0efb5",
    linkColor: "#cbefd5"
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
    gradient: "linear-gradient(to bottom right, #68ABDB, #2BA097)",
    primary: "#68ABDB",
    primaryLight: "#9bcdff",
    linkColor: "#d2e4f7"
  },
  {
    id: 6,
    title: "PlanGrid International",
    link: "/portfolio/plangridInternational",
    component: PlanGridPortfolioPage,
    subHeading: "Design and Branding",
    gridImage: PlanGridPreview,
    logo: PlanGridLogo,
    background: PlanGridBackground,
    gradient: "linear-gradient(to bottom right, #99c944, #498AA9)",
    primary: "#a0ce4e",
    primaryLight: "#ccf28a",
    linkColor: "#e0f7b2"
  }
];

export default portfolioData;
