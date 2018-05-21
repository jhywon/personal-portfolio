import {
  CognitePortfolioPage,
  SlikPortfolioPage,
  JobminePortfolioPage,
  PathPortfolioPage,
  PlanItPortfolioPage,
} from 'components/PortfolioPages';

import CognitePreview from 'assets/portfolio/cognite/cognitePreview.png';
import SlikPreview from 'assets/portfolio/slikPortfolio/slikPortfolioPreview.png';
import JobminePreview from 'assets/portfolio/jobmine/jobminePreview.png';
import PathPreview from 'assets/portfolio/path/pathPreview.png';
import PlanItPreview from 'assets/portfolio/planIt/planItPreview.png';

import CogniteLogo from 'assets/portfolio/cognite/logo.png';
import SlikLogo from 'assets/portfolio/slikPortfolio/logo.png';
import JobmineLogo from 'assets/portfolio/jobmine/logo.png';
import PathLogo from 'assets/portfolio/path/logo.png';
import PlanItLogo from 'assets/portfolio/planIt/logo.png';

import CogniteBackground from 'assets/portfolio/cognite/background.png';
import SlikBackground from 'assets/portfolio/slikPortfolio/background.png';
import JobmineBackground from 'assets/portfolio/jobmine/background.png';
import PathBackground from 'assets/portfolio/path/background.png';
import PlanItBackground from 'assets/portfolio/planIt/background.png';

const portfolioData = [
  {
    id: 1,
    title: 'Cognite',
    link: '/portfolio/cognite',
    component: CognitePortfolioPage,
    subHeading: 'Web Design & Development',
    gridImage: CognitePreview,
    logo: CogniteLogo,
    background: CogniteBackground,
    gradient: 'linear-gradient(to bottom right, #749bad, #778084)',
    primary: '#4592B2',
    primaryLight: '#397a96',
  },
  {
    id: 2,
    title: 'Slik',
    link: '/portfolio/slik',
    component: SlikPortfolioPage,
    subHeading: 'Web Design & Development',
    gridImage: SlikPreview,
    logo: SlikLogo,
    background: SlikBackground,
    gradient: 'linear-gradient(to bottom right, #896b8c, #6d788e)',
    primary: '#81299E',
    primaryLight: '#5D1E72',
  },
  {
    id: 3,
    title: 'Jobmine',
    link: '/portfolio/jobmine',
    component: JobminePortfolioPage,
    subHeading: 'UI/UX Design & Human Factors',
    gridImage: JobminePreview,
    logo: JobmineLogo,
    background: JobmineBackground,
    gradient: 'linear-gradient(to bottom right, #153154, #778084)',
    primary: '#0e3e7a',
    primaryLight: '#153154',
  },
  {
    id: 4,
    title: 'Path',
    link: '/portfolio/path',
    component: PathPortfolioPage,
    subHeading: 'App Design & Development',
    gridImage: PathPreview,
    logo: PathLogo,
    background: PathBackground,
    gradient: 'linear-gradient(to bottom right, #3a7048, #778084)',
    primary: '#208c3c',
    primaryLight: '#3a7048',
  },
  {
    id: 5,
    title: 'Plan It',
    link: '/portfolio/planit',
    component: PlanItPortfolioPage,
    subHeading: 'Game Design & Development',
    gridImage: PlanItPreview,
    logo: PlanItLogo,
    background: PlanItBackground,
    gradient: 'linear-gradient(to bottom right, #396770, #39705a)',
    primary: '#2BA097',
    primaryLight: '#237972',
  },
];

export default portfolioData;
