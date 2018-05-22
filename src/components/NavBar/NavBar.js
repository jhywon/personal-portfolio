import React from 'react';
import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Icon } from 'antd';

import { ContentWrapper } from 'components/ContentWrapper';

import Resume from 'assets/resume.pdf';
import Burger from 'assets/hamburgerMenu.png';

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
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    display: none;
  }
  color: ${props =>
    props.iswhite === 'true'
      ? props.theme.colors.text.white
      : props.theme.colors.text.black};
  text-decoration: underline;
  :hover,
  :active,
  :focus {
    text-decoration: underline;
    color: ${props => props.hovercolor};
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
`;

const Image = styled.img`
  width: 30px;
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

const HamburgerMenuIcon = styled(Icon)`
  align-self: center;
  height: initial;
  color: ${props => props.theme.colors.text.white};
`;

const HamburgerMenu = styled.h4`
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

const SocialButtonIcon = styled(Icon)`
  align-self: center;
  height: initial;
  color: ${props => props.theme.colors.text.white};
`;

const SocialButton = props => (
  <SocialButtonWrapper color={props.color} href={props.href} target="_new">
    <SocialButtonIcon type={props.icon} />
  </SocialButtonWrapper>
);

SocialButton.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string,
};

SocialButton.defaultProps = {
  href: '',
  color: null,
};

class NavBar extends React.Component {
  state = {
    isMenuOpen: false,
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        isMenuOpen: false,
      });
    }
  }

  toggleMenu = () => {
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  };

  mapLinks = component => {
    const Links = [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'About',
        link: '/about',
      },
      {
        title: 'Portfolio',
        link: '/portfolio',
      },
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
    if (this.props.location.pathname.indexOf('/portfolio/') >= 0) {
      let portfolioPage;
      switch (this.props.location.pathname) {
        case '/portfolio/cognite': {
          portfolioPage = this.props.portfolioData[0];
          break;
        }
        case '/portfolio/slik': {
          portfolioPage = this.props.portfolioData[1];
          break;
        }
        case '/portfolio/jobmine': {
          portfolioPage = this.props.portfolioData[2];
          break;
        }
        case '/portfolio/path': {
          portfolioPage = this.props.portfolioData[3];
          break;
        }
        case '/portfolio/planit': {
          portfolioPage = this.props.portfolioData[4];
          break;
        }
        default: {
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
            this.props.location.pathname.indexOf('/portfolio/') >= 0
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
            <HamburgerMenuIcon type="close" />
          ) : (
            <Image src={Burger} alt="burger " />
          )}
        </HamburgerButtonWrapper>
        {this.state.isMenuOpen && (
          <HamburgerMenu>
            <ContentWrapper>
              <HamburgerLinks>{this.mapLinks(HamburgerLink)}</HamburgerLinks>
              <Buttons>
                <SocialButton
                  href="https://www.facebook.com/jessie.won"
                  target="_new"
                  color={this.props.theme.colors.background.blueGradient}
                  icon="facebook"
                />
                <SocialButton
                  href="https://www.instagram.com/jessie.won/"
                  target="_new"
                  color={this.props.theme.colors.background.blueGradient}
                  icon="instagram"
                />
                <SocialButton
                  href="https://ca.linkedin.com/in/jhywon"
                  target="_new"
                  color={this.props.theme.colors.background.blueGradient}
                  icon="linkedin"
                />
                <SocialButton
                  href="https://github.com/jessiewon"
                  target="_new"
                  color={this.props.theme.colors.background.blueGradient}
                  icon="github"
                />
                <SocialButton
                  href="mailto:jessiehywon@gmail.com?Subject=Hello"
                  target="_new"
                  color={this.props.theme.colors.background.blueGradient}
                  icon="mail"
                />
                <SocialButton
                  onClick={() => {
                    window.open(Resume);
                  }}
                  target="_new"
                  color={this.props.theme.colors.background.blueGradient}
                  icon="file-text"
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
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  background: PropTypes.func,
};

NavBar.defaultProps = {
  background: null,
};

export default withRouter(withTheme(NavBar));
