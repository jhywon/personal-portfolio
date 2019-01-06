import React from "react";
import styled, { withTheme } from "styled-components";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";

import { ContentWrapper } from "components/ContentWrapper";

import Resume from "assets/resume.pdf";
import Burger from "assets/icon/hamburgerMenu.svg";
import Close from "assets/icon/close.svg";
import Github from "assets/icon/github.svg";
import Instagram from "assets/icon/instagram.svg";
import LinkedIn from "assets/icon/linkedin.svg";
import Email from "assets/icon/email.svg";

const Container = styled.div`
  ${props => props.theme.flex.spaceBetween};
`;

const Logo = styled(Link)`
  font-weight: 500;
  font-size: 40px;
  position: fixed;
  z-index: 2;
  left: ${props => props.theme.padding.fourtyEight};
  top: ${props => props.theme.padding.twentyFour};
  box-shadow: none;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
  color: ${props =>
    props.iswhite === "true"
      ? props.theme.colors.text.white
      : props.theme.colors.text.black};
  text-decoration: underline;
  :hover,
  :active,
  :focus {
    text-decoration: underline;
    color: ${props => props.hovercolor};
    box-shadow: none;
  }
`;

const CircleIconButton = styled.a`
  ${props => props.theme.flex.center};
  border-radius: 100%;
  width: 56px;
  height: 56px;
  z-index: 4;
  :hover,
  :focus,
  :active {
    -webkit-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  padding: ${props => props.theme.padding.twelve};
`;

const CircleButtonIcon = styled.img`
  width: 100%;
`;

const HamburgerButtonWrapper = CircleIconButton.extend`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    right: ${props => props.theme.padding.twentyFour};
    top: ${props => props.theme.padding.twentyFour};
  }
  position: fixed;
  right: ${props => props.theme.padding.fourtyEight};
  top: 37px;
  opacity: 0.85;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 15px 0 rgba(0, 0, 0, 0.19);
  background: ${props => props.background};
  :hover,
  :focus,
  :active {
    background: ${props => props.hovercolor};
  }
`;

const HamburgerMenu = styled.h6`
  ${props => props.theme.flex.center};
  background: ${props => props.theme.colors.background.grey};
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  transition: all 0.25s;
`;

const HamburgerLinks = styled.div`
  ${props => props.theme.flex.center};
  flex-direction: column;
`;

const HamburgerLink = styled(Link)`
  color: ${props => props.theme.colors.text.white};
  margin: ${props => props.theme.padding.sixteen} 0;
  font-weight: 500;
`;

const HamburgerLinkResume = styled.a`
  color: ${props => props.theme.colors.text.white};
  margin: ${props => props.theme.padding.sixteen} 0;
  font-weight: 500;
`;

const Buttons = styled.div`
  ${props => props.theme.flex.center};
  flex-wrap: wrap;
  margin-top: ${props => props.theme.padding.thirtyTwo};
`;

const SocialButtonWrapper = CircleIconButton.extend`
  border: none;
  &:hover,
  &:active,
  &:focus {
    outline: none;
    text-decoration: none;
    background: ${props => props.theme.colors.primary};
  }
  margin: ${props => props.theme.padding.eight};
  background: ${props => props.theme.colors.primaryGradient};
`;

const SocialButton = props => (
  <SocialButtonWrapper href={props.href} target="_new" {...props}>
    <CircleButtonIcon src={props.icon} alt={props.icon} />
  </SocialButtonWrapper>
);

SocialButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node.isRequired
};

SocialButton.defaultProps = {
  href: ""
};

class NavBar extends React.Component {
  state = {
    isMenuOpen: false
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        isMenuOpen: false
      });
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  mapLinks = component => {
    const Links = [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "About",
        link: "/about"
      },
      {
        title: "Portfolio",
        link: "/portfolio"
      },
      {
        title: "Travel",
        link: "/travel"
      }
    ];
    const Component = component;

    return Links.map(link => (
      <Component to={link.link} key={link.link}>
        {link.title}
      </Component>
    ));
  };

  render() {
    let hamburgerColor;
    let hamburgerColorHover;
    if (this.props.location.pathname.indexOf("/portfolio/") >= 0) {
      let portfolioPage;
      switch (this.props.location.pathname) {
        case "/portfolio/cognite": {
          portfolioPage = this.props.portfolioData[0];
          break;
        }
        case "/portfolio/slik": {
          portfolioPage = this.props.portfolioData[2];
          break;
        }
        case "/portfolio/jobmine": {
          portfolioPage = this.props.portfolioData[1];
          break;
        }
        case "/portfolio/path": {
          portfolioPage = this.props.portfolioData[4];
          break;
        }
        case "/portfolio/planit": {
          portfolioPage = this.props.portfolioData[5];
          break;
        }
        case "/portfolio/postcajon": {
          portfolioPage = this.props.portfolioData[3];
          break;
        }
        case "/portfolio/opsup": {
          portfolioPage = this.props.portfolioData[0];
          break;
        }
        case "/portfolio/plangridInternational": {
          portfolioPage = this.props.portfolioData[6];
          break;
        }
        default: {
          portfolioPage = {
            gradient: this.props.theme.colors.primaryGradient,
            primary: this.props.theme.colors.primary
          };
          break;
        }
      }
      hamburgerColor = portfolioPage.gradient;
      hamburgerColorHover = portfolioPage.primary;
    } else {
      hamburgerColor = this.props.theme.colors.primaryGradient;
      hamburgerColorHover = this.props.theme.colors.primary;
    }

    return (
      <Container>
        <Logo
          to="/"
          iswhite={(
            this.props.location.pathname.indexOf("/portfolio/") >= 0
          ).toString()}
          hovercolor={hamburgerColorHover}
        >
          jw.
        </Logo>
        <HamburgerButtonWrapper
          background={
            this.state.isMenuOpen
              ? this.props.theme.colors.primaryGradient
              : hamburgerColor
          }
          hovercolor={
            this.state.isMenuOpen
              ? this.props.theme.colors.primary
              : hamburgerColorHover
          }
          onClick={this.toggleMenu}
        >
          {this.state.isMenuOpen ? (
            <CircleButtonIcon src={Close} alt="close" />
          ) : (
            <CircleButtonIcon src={Burger} alt="burger" />
          )}
        </HamburgerButtonWrapper>
        {this.state.isMenuOpen && (
          <HamburgerMenu>
            <ContentWrapper>
              <HamburgerLinks>
                <React.Fragment>
                  {this.mapLinks(HamburgerLink)}
                  <HamburgerLinkResume
                    onClick={() => {
                      window.open(Resume);
                    }}
                  >
                    Resume
                  </HamburgerLinkResume>
                </React.Fragment>
              </HamburgerLinks>
              <Buttons>
                <SocialButton
                  href="https://www.instagram.com/jessie.won/"
                  target="_new"
                  icon={Instagram}
                />
                <SocialButton
                  href="https://ca.linkedin.com/in/jhywon"
                  target="_new"
                  icon={LinkedIn}
                />
                <SocialButton
                  href="https://github.com/jessiewon"
                  target="_new"
                  icon={Github}
                />
                <SocialButton
                  href="mailto:jessiehywon@gmail.com?Subject=Hello"
                  target="_new"
                  icon={Email}
                />
              </Buttons>
            </ContentWrapper>
          </HamburgerMenu>
        )}
      </Container>
    );
  }
}

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  background: PropTypes.func
};

NavBar.defaultProps = {
  background: null
};

export default withRouter(withTheme(NavBar));
