import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = styled.p``;

const Group = styled.div`
  margin-bottom: ${props => props.theme.padding.fourtyEight};
`;

const Heading = styled.h6`
  margin-bottom: ${props => props.theme.padding.sixteen};
  color: ${props => props.color};
`;

const SubHeading = styled.h4`
  margin-bottom: ${props => props.theme.padding.eight};
  margin-top: ${props => props.theme.padding.sixteen};
  color: ${props => props.color};
`;

const Accent = styled.h5`
  margin-bottom: ${props => props.theme.padding.twentyFour};
  margin-top: ${props => props.theme.padding.twentyFour};
  line-height: 48px;
  font-size: 32px;
  letter-spacing: 0px;
  color: ${props => props.color};
`;

const Link = styled.a`
  box-shadow: inset 0 -0.6em ${props => props.color};
  :hover,
  :focus,
  :active {
    box-shadow: inset 0 -0.6em ${props => props.hovercolor};
    color: ${props => props.theme.colors.text.black};
  }
`;

const MainText = props => <Text>{props.children}</Text>;

MainText.propTypes = {
  children: PropTypes.node.isRequired
};

const TextGroup = props => (
  <Group>
    <Heading color={props.color}>{props.heading}</Heading>
    {props.children}
  </Group>
);

TextGroup.propTypes = {
  heading: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node.isRequired
};

TextGroup.defaultProps = {
  heading: ""
};

const MainTextSubHeading = props => (
  <SubHeading color={props.color}>{props.children}</SubHeading>
);

MainTextSubHeading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

const MainTextAccent = props => (
  <Accent color={props.color}>
    <strong>{props.children}</strong>
  </Accent>
);

MainTextAccent.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

const PrimaryLink = props => (
  <Link color={props.color} hovercolor={props.hovercolor} {...props}>
    {props.children}
  </Link>
);

PrimaryLink.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  hovercolor: PropTypes.string
};

export { MainText, TextGroup, MainTextSubHeading, MainTextAccent, PrimaryLink };
