import PropTypes from "prop-types";

export const portfolioData = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  link: PropTypes.string,
  component: PropTypes.func,
  subHeading: PropTypes.string,
  gridImage: PropTypes.string,
  logo: PropTypes.string,
  background: PropTypes.string,
  gradient: PropTypes.string,
  primary: PropTypes.string,
  primaryLight: PropTypes.string,
  linkColor: PropTypes.string
});
