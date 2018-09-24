import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

const StyledButton = styled.button`
  border-radius: 5px;
  padding: ${props => props.theme.padding.eight}
    ${props => props.theme.padding.sixteen};
  transition: 0.3s all;
  cursor: pointer;
  font-family: "Lato", sans-serif;
`;

const StyledPrimaryButton = StyledButton.extend`
  color: ${props => props.theme.colors.text.white};
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  :hover,
  :focus,
  :active {
    background-color: ${props => props.theme.colors.primaryHover};
    border: 1px solid ${props => props.theme.colors.primaryHover};
  }
`;

const StyledSecondaryButton = StyledButton.extend``;

const StyledDefaultButton = StyledButton.extend`
  color: ${props => props.theme.colors.text.black};
  background-color: ${props => props.theme.colors.background.white};
  border: 1px solid ${props => props.theme.colors.background.lightGrey};
  :hover,
  :focus,
  :active {
    background-color: ${props => props.borderColor};
    color: ${props => props.theme.colors.background.white};
    border: 1px solid
      ${props =>
        props.borderColor ? props.borderColor : props.theme.colors.primary};
  }
`;

const PrimaryButton = props => (
  <StyledPrimaryButton type="primary" {...props}>
    {props.children}
  </StyledPrimaryButton>
);

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

const SecondaryButton = props => (
  <StyledSecondaryButton {...props}>{props.children}</StyledSecondaryButton>
);

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired
};

const DefaultButton = props => (
  <StyledDefaultButton {...props}>{props.children}</StyledDefaultButton>
);

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired
};

// class Button extends React.Component {
//   renderButton = props => {
//     <props.buttonType {...props}>{props.children}</props.buttonType>
//   }

//   renderLinkButton = props => {
//     <Link to={props.link}>{this.renderButton()}</Link>
//   }

//   render() {
//     return (
//       {this.props.link ? this.renderLinkButton() : this.renderButton()}
//     );
//   }
// }

// Button.propTypes = {

// };

export { PrimaryButton, SecondaryButton, DefaultButton };
