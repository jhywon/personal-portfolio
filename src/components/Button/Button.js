import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  border-radius: 5px;
  padding: ${props => props.theme.padding.eight}
    ${props => props.theme.padding.sixteen};
  transition: 0.3s all;
  cursor: pointer;
`;

const StyledPrimaryButton = StyledButton.extend`
  color: ${props => props.theme.colors.text.white};
  background-color: ${props => props.theme.colors.primary};
  border: 2px solid ${props => props.theme.colors.primary};
  :hover,
  :focus,
  :active {
    background-color: ${props => props.theme.colors.primaryHover};
    border: 2px solid ${props => props.theme.colors.primaryHover};
  }
`;

const StyledSecondaryButton = StyledButton.extend``;

const StyledDefaultButton = StyledButton.extend`
  color: ${props => props.theme.colors.text.black};
  background-color: ${props => props.theme.colors.background.white};
  border: 2px solid ${props => props.theme.colors.background.lightGrey};
  :hover,
  :focus,
  :active {
    background-color: ${props => props.borderColor};
    color: ${props => props.theme.colors.background.white};
    border: 2px solid
      ${props =>
        props.borderColor ? props.borderColor : props.theme.colors.primary};
  }
`;

const PrimaryButton = props => (
  <StyledPrimaryButton type="primary" size="large" {...props}>
    {props.children}
  </StyledPrimaryButton>
);

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

const SecondaryButton = props => (
  <StyledSecondaryButton size="large" {...props}>
    {props.children}
  </StyledSecondaryButton>
);

SecondaryButton.propTypes = {
  children: PropTypes.node.isRequired,
};

const DefaultButton = props => (
  <StyledDefaultButton size="large" {...props}>
    {props.children}
  </StyledDefaultButton>
);

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PrimaryButton, SecondaryButton, DefaultButton };
